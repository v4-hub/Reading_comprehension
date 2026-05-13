import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for generating passages
  app.post("/api/generate-passage", async (req, res) => {
    try {
      const { index } = req.body;
      const day = Math.floor(index / 2) + 1;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured." });
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        You are an expert English teacher for middle school students in China (Guangzhou Zhongkao level).
        Generate an English reading comprehension passage for Day ${day} of a 50-day training program.
        
        Requirements:
        1. Passage length: 250 - 350 words.
        2. Difficulty: Moderate to slightly difficult (suitable for Grade 9 students aiming for high scores).
        3. Topic: Educational, inspiring, cultural, scientific, or narrative. Ensure it's engaging and age-appropriate.
        4. Questions: Provide exactly 4 multiple-choice questions based on the passage.
           - Cover: Main idea, detail comprehension, inference, and vocabulary in context.
           - Each question must have 4 options.
        5. Provide the correct answer index (0, 1, 2, or 3) and a detailed explanation in Chinese for each question.
        
        Output format: JSON exactly matching this structure:
        {
          "topic": "Title of the Passage",
          "type": "Passage Type (e.g., 记叙文, 说明文)",
          "difficulty": "Difficulty level (e.g., 中等, 较难)",
          "content": "Full passage text...",
          "questions": [
            {
              "id": "q_auto_1",
              "text": "Question text...",
              "options": ["Option A", "Option B", "Option C", "Option D"],
              "correctAnswerIndex": 0,
              "explanation": "中文解析..."
            }
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      let textResponse = response.text || "{}";
      if (textResponse.startsWith("\`\`\`json")) {
        textResponse = textResponse.replace(/^\`\`\`json\n?/, "").replace(/\n?\`\`\`$/, "");
      } else if (textResponse.startsWith("\`\`\`")) {
        textResponse = textResponse.replace(/^\`\`\`\n?/, "").replace(/\n?\`\`\`$/, "");
      }
      const data = JSON.parse(textResponse);
      data.id = `p${index + 1}`;
      // Fix question ids
      data.questions = data.questions.map((q: any, i: number) => ({
        ...q,
        id: `q_p${index + 1}_${i + 1}`
      }));

      res.json(data);
    } catch (error) {
      console.error("Error generating passage:", error);
      res.status(500).json({ error: "Failed to generate passage." });
    }
  });

  // API route for extracting keywords from a passage
  app.post("/api/extract-keywords", async (req, res) => {
    try {
      const { content } = req.body;
      if (!content) {
        return res.status(400).json({ error: "Content is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured." });
      }
      
      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        You are an expert English teacher.
        Given the following English reading comprehension passage, extract 5 to 7 important middle-school/high-school level vocabulary words or key phrases that students should learn.
        
        For each word, provide:
        1. "word": the exact word or phrase as it appears in the text (so we can highlight it).
        2. "translation": Chinese translation.
        3. "explanation": A brief explanation or English/Chinese definition & context.

        Passage:
        "${content}"

        Output format: JSON exactly matching this structure:
        {
          "keywords": [
            {
              "word": "exact word from text",
              "translation": "中文翻译",
              "explanation": "简短词义解释..."
            }
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      let textResponse = response.text || "{}";
      if (textResponse.startsWith("\`\`\`json")) {
        textResponse = textResponse.replace(/^\`\`\`json\n?/, "").replace(/\n?\`\`\`$/, "");
      } else if (textResponse.startsWith("\`\`\`")) {
        textResponse = textResponse.replace(/^\`\`\`\n?/, "").replace(/\n?\`\`\`$/, "");
      }
      const data = JSON.parse(textResponse);
      
      res.json(data.keywords || []);
    } catch (error) {
      console.error("Error extracting keywords:", error);
      res.status(500).json({ error: "Failed to extract keywords." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

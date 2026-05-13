export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Exercise {
  id: string;
  topic: string;
  type: string;
  difficulty: string;
  content: string;
  questions: Question[];
}

export const exercises: Exercise[] = [
  {
    id: "p1",
    topic: "The Pearl River: A Witness to Guangzhou's Transformation",
    type: "说明文 (Expository)",
    difficulty: "较难",
    content: "The Pearl River, known as the mother river of Guangzhou, has witnessed the city's remarkable transformation over centuries. Stretching across southern China, it is not just a body of water but the lifeblood of Lingnan culture. In ancient times, the river was a bustling hub for the Maritime Silk Road, where merchant ships from across the globe gathered to trade porcelain, tea, and silk. The prosperity of Guangzhou was inextricably linked to the ebb and flow of these waters.\n\nHowever, the path to modernization in the late 20th century came at a significant environmental cost. As factories sprang up along its banks and the urban population exploded, the Pearl River faced severe pollution. The once-clear waters turned murky, and the vibrant aquatic life began to dwindle. Recognizing that the city's future depended on the health of its river, the local government launched an ambitious restoration project in recent decades. This initiative focused on relocating heavily polluting industries, upgrading sewage treatment systems, and creating green corridors along the riverbanks.\n\nToday, the transformation is nothing short of miraculous. The riverfront has been reborn as a scenic space where modern skyscrapers, like the Canton Tower, stand in harmony with rejuvenated wetlands. The annual Pearl River swimming event, which had been suspended for years due to water quality concerns, has returned, signaling a triumph for environmental conservation. Moreover, the river has transformed from a purely industrial artery into a center for leisure and tourism. Night cruises on the Pearl River offer visitors a spectacular view of the city's neon-lit skyline, blending the ancient charm of the Yuexiu District with the futuristic brilliance of Zhujiang New Town.\n\nAs Guangzhou continues to evolve into a global metropolis, the Pearl River remains a symbol of resilience. It reminds us that economic growth must be balanced with ecological preservation. The story of the Pearl River is a powerful testament to how a city can reclaim its natural heritage through vision and persistent effort.",
    questions: [
      {
        id: "q_p1_1",
        text: "What role did the Pearl River play in ancient Guangzhou?",
        options: [
          "It was primarily used for Pearl River swimming events.",
          "It served as a vital hub for global trade on the Maritime Silk Road.",
          "It was the main source of power for the city's early factories.",
          "It was used to separate the Yuexiu District from Zhujiang New Town."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。根据第一段'In ancient times, the river was a bustling hub for the Maritime Silk Road... where merchant ships from across the globe gathered to trade'可知，珠江在古代是海上丝绸之路的贸易中心，故选B。"
      },
      {
        id: "q_p1_2",
        text: "What caused the Pearl River to face severe pollution in the late 20th century?",
        options: [
          "The increase in merchant ships from the Maritime Silk Road.",
          "Natural disasters that caused the water to turn murky.",
          "Rapid industrialization and a sudden increase in urban population.",
          "The construction of the Canton Tower and other skyscrapers."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。根据第二段'As factories sprang up... and the urban population exploded, the Pearl River faced severe pollution.'可知，工厂激增和人口增长是主因，故选C。"
      },
      {
        id: "q_p1_3",
        text: "The return of the annual Pearl River swimming event indicates that ________.",
        options: [
          "the government has decided to prioritize tourism over industry",
          "the water quality has improved significantly due to restoration efforts",
          "the river is no longer used for industrial transportation",
          "more skyscrapers are being built along the riverfront"
        ],
        correctAnswerIndex: 1,
        explanation: "推理判断题。第三段提到横渡珠江活动的回归'signaling a triumph for environmental conservation'，结合上下文可知是因为水质治理取得了成功，水质大幅改善，故选B。"
      },
      {
        id: "q_p1_4",
        text: "What is the writer's main purpose in writing this article?",
        options: [
          "To complain about the negative effects of modernization.",
          "To encourage more people to move to Zhujiang New Town.",
          "To describe the history, pollution, and successful restoration of the Pearl River.",
          "To compare the ancient Maritime Silk Road with modern night cruises."
        ],
        correctAnswerIndex: 2,
        explanation: "写作意图题。文章从珠江的历史重要性讲到现代工业化带来的污染，再到近年来的治理成效和现状，旨在全面描述珠江的变迁与重生，故选C。"
      }
    ]
  },
  {
    id: "p2",
    topic: "The Ethical Dilemma of Artificial Intelligence",
    type: "议论文 (Argumentative)",
    difficulty: "难",
    content: "The rapid advancement of Artificial Intelligence (AI) has brought us to the threshold of a new era. From autonomous vehicles that promise to reduce traffic accidents to advanced algorithms that can diagnose diseases with superhuman accuracy, the potential benefits are undeniable. However, as AI systems become more deeply integrated into our daily lives, they also raise a series of complex ethical questions that society must address before it's too late.\n\nOne of the primary concerns is the issue of algorithmic bias. AI systems learn from vast amounts of data, and if that data contains historical prejudices or inequalities, the AI could inadvertently amplify them. For instance, if a recruitment AI is trained on data from a company that has historically favored men for executive roles, the system might learn to penalize applications from women, even if they are more qualified. Ensuring fairness and transparency in AI decision-making processes is a monumental challenge for developers and regulators alike.\n\nAnother critical issue is the erosion of privacy. In an age where data is often referred to as the 'new oil,' AI systems are hungry for personal information to improve their performance. Smart devices, social media platforms, and surveillance systems collect detailed records of our habits, preferences, and movements. While this data is used to provide personalized experiences, it also creates a vulnerability. The potential for misuse, whether by corporations for manipulative advertising or by malicious actors for identity theft, is a constant threat to individual autonomy.\n\nFurthermore, the automation of labor raises fears about large-scale unemployment and economic inequality. As AI becomes capable of performing tasks previously reserved for human experts, such as legal research or creative writing, many professions may become obsolete. While some argue that AI will create new types of jobs that we cannot yet imagine, the transition period could be painful for millions of workers who lack the necessary skills to adapt.\n\nUltimately, the development of AI should not be guided solely by technical capability or profit. We must establish robust legal frameworks and moral guidelines to ensure that these powerful tools serve the common good. AI is a mirror that reflects our values, and if we want a future where technology empowers everyone, we must carefully consider the ethical implications of every line of code we write.",
    questions: [
      {
        id: "q_p2_1",
        text: "What could be a hidden danger of AI systems learning from historical data?",
        options: [
          "AI might become smarter than humans too quickly.",
          "AI could repeat and even strengthen existing human prejudices.",
          "AI may consume too much electricity and cause global warming.",
          "AI might lose all the data it has collected over time."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段提到'if that data contains historical prejudices... the AI could inadvertently amplify them'，即AI可能会延续并放大已有的历史偏见，故选B。"
      },
      {
        id: "q_p2_2",
        text: "The writer mentions the 'recruitment AI' example to show ________.",
        options: [
          "how AI can help companies find the best female executives",
          "why recruitment is the most efficient area for AI application",
          "the difficulty of ensuring fairness in AI decision-making",
          "that men are generally more suitable for executive roles"
        ],
        correctAnswerIndex: 2,
        explanation: "例证目的题。在该例中，如果训练数据有偏见，AI会不公正地对待女性申请者。这正是为了说明在AI决策中确保公平性（fairness）是一个重大挑战，故选C。"
      },
      {
        id: "q_p2_3",
        text: "How does AI impact our privacy according to the passage?",
        options: [
          "It uses oil to run its servers and protect our habitat.",
          "It deletes our social media posts to keep our secrets safe.",
          "It requires a large amount of personal data to function effectively.",
          "It prevents corporations from using data for advertising."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第三段提到'AI systems are hungry for personal information to improve their performance'，即AI需要大量个人数据来运行，进而引发了隐私受侵蚀的问题，故选C。"
      },
      {
        id: "q_p2_4",
        text: "What is the writer's attitude towards the future development of AI?",
        options: ["Strictly opposed", "Blindly optimistic", "Cautious and responsible", "Completely uninterested"],
        correctAnswerIndex: 2,
        explanation: "作者态度题。文章认可AI的好处，但深入讨论了偏见、隐私和失业等挑战，并强调需建立法理和道德框架（robust legal frameworks and moral guidelines），可见作者持谨慎（cautious）且负责任的态度，故选C。"
      }
    ]
  },
  {
    id: "p3",
    topic: "The Resilience of the Great Barrier Reef",
    type: "科普说明文 (Scientific Expository)",
    difficulty: "较难",
    content: "Stretching over 2,300 kilometers along the northeast coast of Australia, the Great Barrier Reef is the world's largest coral reef system. Visible from outer space, it is a biodiversity hotspot, home to thousands of species of fish, colorful corals, and ancient sea turtles. However, this magnificent underwater wonder is currently facing its greatest existential threat: climate change. The warming of the Earth's oceans has triggered frequent mass coral bleaching events, a phenomenon that could spell disaster for the entire ecosystem.\n\nCoral bleaching occurs when corals become stressed by changes in their environment, such as rising water temperatures. Under these conditions, the corals expel the symbiotic algae living in their tissues, which provide them with food and their vibrant colors. Without these algae, the corals turn white and begin to starve. While corals can recover if temperatures return to normal quickly, prolonged heat can lead to large-scale coral death. Over the last decade, the reef has suffered through multiple bleaching events, leaving massive stretches of the reef looking like an underwater cemetery.\n\nDespite the grim outlook, marine biologists have discovered some pockets of resilience. In certain areas, some coral species appear to be adapting to warmer temperatures better than others. Scientists are also exploring innovative solutions to assist the reef's recovery. One such project involves 'coral gardening,' where healthy coral fragments are grown in nurseries and then transplanted back onto damaged sections of the reef. Another cutting-edge approach is 'cloud brightening,' which uses sea salt particles to make clouds more reflective, thereby cooling the waters below.\n\nMoreover, the health of the reef is not just an Australian concern; it is a global one. The Great Barrier Reef generates billions of dollars in tourism revenue and supports tens of thousands of jobs. More importantly, it acts as a natural barrier, protecting coastlines from erosion and storms. The fight to save the reef is a race against time. It requires a collective global effort to reduce greenhouse gas emissions and slow down global warming. Only by addressing the root cause of the problem can we ensure that future generations can still witness the breathtaking beauty of the Great Barrier Reef.",
    questions: [
      {
        id: "q_p3_1",
        text: "Why do corals turn white during a bleaching event?",
        options: [
          "Because they are covered by deep layers of sea salt.",
          "Because they lose the symbiotic algae that provide them with food and color.",
          "Because they are old and have reached the end of their lives.",
          "Because the water becomes too dark for them to see."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段提到'corals expel the symbiotic algae... Without these algae, the corals turn white'，说明变白是因为失去了提供能量和颜色的共生藻类，故选B。"
      },
      {
        id: "q_p3_2",
        text: "What is 'coral gardening' according to the passage?",
        options: [
          "Planting trees along the coast to provide shade for the reef.",
          "Growing healthy coral fragments in nurseries and then moving them to damaged areas.",
          "Removing all the fish from the reef to let the corals grow faster.",
          "Using special lights to help the corals grow in the deep ocean."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段写到'coral gardening, where healthy coral fragments are grown in nurseries and then transplanted back onto damaged sections'，这与B选项描述一致，故选B。"
      },
      {
        id: "q_p3_3",
        text: "How does the Great Barrier Reef benefit human communities?",
        options: [
          "It provides a place to store sea salt for industrial use.",
          "It creates massive clouds that help in farming across Australia.",
          "It protects coastlines from erosion and supports the tourism economy.",
          "It allows scientists to travel to outer space more easily."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第四段提到'generates billions of dollars in tourism revenue'并且'acts as a natural barrier, protecting coastlines from erosion and storms'，这对应C选项，故选C。"
      },
      {
        id: "q_p3_4",
        text: "What is the writer's main message in the concluding paragraph?",
        options: [
          "The Great Barrier Reef is already dead and cannot be saved.",
          "Australia should be the only country responsible for the reef.",
          "Cloud brightening is the only way to solve the bleaching problem.",
          "Global cooperation to reduce emissions is essential to save the reef."
        ],
        correctAnswerIndex: 3,
        explanation: "主旨大意题。最后一段呼吁'requires a collective global effort to reduce greenhouse gas emissions'，强调全球合作减排是拯救珊瑚礁的关键，故选D。"
      }
    ]
  },
  {
    id: "p4",
    topic: "The Psychology of Minimalism",
    type: "议论文 (Argumentative)",
    difficulty: "难",
    content: "In a world dominated by constant consumption and digital noise, a growing movement called 'minimalism' is encouraging people to reconsider their relationship with material possessions. Minimalism is often misunderstood as simply living in an empty white room with a single chair. In reality, it is a philosophy of intentionality—choosing to keep only what adds value to one's life and letting go of the rest. While the aesthetic appeal of a clutter-free home is undeniable, the true heart of minimalism lies in its psychological benefits.\n\nPsychologists have long noted the link between physical clutter and mental stress. A disorganized environment can overwhelm the brain, making it difficult to focus and increasing levels of cortisol, the body's primary stress hormone. By simplifying their physical surroundings, minimalists often report a profound sense of mental clarity. When we are not constantly distracted by the 'stuff' around us, we can devote more energy to our passions, relationships, and personal growth. In essence, by owning less, we create more space for what truly matters.\n\nFurthermore, minimalism challenges the societal narrative that happiness is directly linked to material wealth. In modern society, we are bombarded with advertisements that promise satisfaction if we just buy the latest gadget or the trendiest clothes. However, research into 'hedonic adaptation' shows that the joy we get from new purchases is often fleeting. Very quickly, we become accustomed to our new possessions and find ourselves craving the next 'big thing.' Minimalism breaks this cycle of endless desire by shifting the focus from accumulation to appreciation. It teaches us to find contentment in experiences rather than objects.\n\nAdopting a minimalist lifestyle also has significant environmental and financial benefits. By consuming less, we reduce our ecological footprint and decrease the amount of waste sent to landfills. Financially, buying only what is necessary allows individuals to save more money and avoid the trap of consumer debt. This financial freedom can lead to a less stressful life, as people are no longer forced to work exhausting hours just to maintain an expensive lifestyle they don't even enjoy.\n\nOf course, minimalism is a deeply personal journey, and there is no one-size-fits-all approach. For some, it might mean clearing out a garage; for others, it could involve a digital detox by reducing screen time and social media usage. Regardless of the method, the goal is the same: to strip away the distractions of modern life so that we can live with more purpose and joy.",
    questions: [
      {
        id: "q_p4_1",
        text: "What is a common misunderstanding of minimalism?",
        options: [
          "That it only focuses on psychological benefits.",
          "That it means living in an extremely empty and plain space.",
          "That it is a way to increase one's material possessions.",
          "That it was started by environmental scientists."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段提到'Minimalism is often misunderstood as simply living in an empty white room with a single chair.'即人们常误以为极简主义就是住在极度空旷简陋的地方，选B。"
      },
      {
        id: "q_p4_2",
        text: "How does a clutter-free environment affect the brain, according to the text?",
        options: [
          "It increases the production of stress hormones.",
          "It makes the brain crave more advertisements.",
          "It reduces stress and leads to better mental clarity.",
          "It makes it harder for people to remember their past."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段指出凌乱的环境会增加压力荷尔蒙，而通过简化环境（simplifying surroundings），人们会获得更好的心理清晰度（mental clarity）和更少的压力，选C。"
      },
      {
        id: "q_p4_3",
        text: "What does the term 'hedonic adaptation' imply?",
        options: [
          "Humans naturally lose interest in new purchases quite quickly.",
          "Buying clothes makes people feel permanently satisfied.",
          "Technology is the main cause of human unhappiness.",
          "People should always buy the latest gadgets to be happy."
        ],
        correctAnswerIndex: 0,
        explanation: "词义猜测/细节理解题。第三段解释'joy we get from new purchases is often fleeting... we become accustomed to our new possessions'，即人们很快会对新买的东西失去新鲜感，这正是“享乐适应”的含义，选A。"
      },
      {
        id: "q_p4_4",
        text: "The writer believes that minimalism is ________.",
        options: [
          "a process that everyone must follow in the exact same way",
          "only suitable for people who have very little money",
          "a personal choice aimed at living a more purposeful life",
          "primarily a digital movement focused on social media"
        ],
        correctAnswerIndex: 2,
        explanation: "作者观点题。最后一段指出'minimalism is a deeply personal journey'且目标是'live with more purpose and joy'，说明它是一种追求有意义生活的个人选择，选C。"
      }
    ]
  },
  {
    id: "p5",
    topic: "The Ghost of the Mountains: Saving the Snow Leopard",
    type: "记叙文/说明文 (Narrative/Expository)",
    difficulty: "中等",
    content: "High in the rugged peaks of the Himalayas and the Altai Mountains lives one of the world's most mysterious and beautiful creatures: the snow leopard. Often referred to as the 'ghost of the mountains' because of its incredible ability to blend into the snowy and rocky landscape, the snow leopard is rarely seen by humans. It is a master of camouflage, with thick, smoky-grey fur covered in dark spots that make it nearly invisible against the granite cliffs it calls home. However, behind its elusive nature lies a tragic reality: this magnificent cat is on the brink of extinction.\n\nThe challenges facing snow leopards are complex. One of the primary threats is the loss of their natural habitat. as human populations expand in Central Asia, the wild spaces where snow leopards roam are being converted into pastures for livestock. This leads to frequent conflicts between leopards and local farmers. When leopards, whose natural prey has become scarce, attack sheep or goats, farmers often kill them in retaliation. Furthermore, the illegal wildlife trade continues to haunt these mountains, with poachers hunting leopards for their beautiful fur and bones, which are used in traditional medicines.\n\nYet, there is hope. In recent years, a new model of conservation has emerged that involves the local communities. Organizations like the Snow Leopard Trust are working with farmers to build 'predator-proof' corrals (畜栏) to keep their animals safe at night. In exchange, the farmers agree to protect the leopards and their habitat. Insurance programs have also been set up to compensate farmers for the loss of livestock, reducing the need for retaliatory killings. By making the survival of the snow leopard beneficial to the people who share its home, these programs have been incredibly successful.\n\nWildlife photographers and scientists are also using modern technology to track these elusive cats. Remote camera traps, which are triggered by movement, have captured rare footage of snow leopards in the wild, providing valuable data on their numbers and behavior. These images not only help scientists develop better protection strategies but also raise global awareness about the beauty and vulnerability of the species.\n\nProtecting the snow leopard is about more than just saving a single cat. as an 'apex predator,' its health is an indicator of the health of the entire high-altitude ecosystem. If the 'ghost' disappears, it could have a devastating ripple effect on the water sources and biodiversity that millions of people downstream depend on. The mission to save the snow leopard is, in many ways, a mission to save the roof of the world.",
    questions: [
      {
        id: "q_p5_1",
        text: "Why is the snow leopard called the 'ghost of the mountains'?",
        options: [
          "Because it only comes out at night and looks like a ghost.",
          "Because it is a master of camouflage and is rarely seen.",
          "Because it is believed to bring bad luck to local farmers.",
          "Because its fur is completely white like a spirit."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段解释到'because of its incredible ability to blend into the snowy and rocky landscape... rarely seen by humans'，即它极善伪装且难得一见，像幽灵一样，选B。"
      },
      {
        id: "q_p5_2",
        text: "What is a main reason for conflicts between leopards and farmers?",
        options: [
          "Farmers want to use the leopard's fur to make clothes.",
          "Leopards attack farmers' livestock after their natural prey becomes scarce.",
          "Leopards are naturally aggressive towards any humans near them.",
          "Farmers are trying to catch the leopards for zoos."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段写到'When leopards, whose natural prey has become scarce, attack sheep or goats, farmers often kill them'，说明冲突源于猎物减少导致豹子袭击牲畜，选B。"
      },
      {
        id: "q_p5_3",
        text: "How do 'predator-proof' corrals help save snow leopards?",
        options: [
          "They trap the leopards so they can be moved to a safe place.",
          "They keep leopards safe from hunters at night.",
          "They protect farmers' livestock, reducing the reason for farmers to kill leopards.",
          "They provide a warm place for leopards to sleep during winter."
        ],
        correctAnswerIndex: 2,
        explanation: "推理判断题。第三段说明这种畜栏是用来'keep their animals safe'，并伴随协议让农民保护豹子，通过防止损失来减少农民对豹子的报复性杀害，选C。"
      },
      {
        id: "q_p5_4",
        text: "What does the writer mean by 'apex predator' in the last paragraph?",
        options: [
          "A cat that has reached the top of the mountain peak.",
          "An animal that is the smartest among its group.",
          "A predator at the top of the food chain that affects the whole ecosystem.",
          "A creature that is nearly extinct and hard to find."
        ],
        correctAnswerIndex: 2,
        explanation: "词义/细节理解题。最后一段说作为'apex predator'，它的健康是整个生态系统的指标，说明它处于食物链顶端并对整个系统有影响（即顶级掠食者），选C。"
      }
    ]
  },
  {
    id: "p6",
    topic: "Biomimicry: Nature as the Ultimate Inventor",
    type: "科普说明文 (Scientific Expository)",
    difficulty: "较难",
    content: "For billions of years, nature has been perfecting its designs through the process of evolution. From the wings of birds to the waterproof surfaces of lotus leaves, every natural structure is a result of rigorous 'market testing' in the most challenging environments. Today, a new field of science called 'biomimicry' is looking to these biological masterpieces to solve some of our most complex engineering problems. Biomimicry is the practice of learning from and then emulating nature's forms, processes, and ecosystems to create more sustainable and efficient human technologies.\n\nOne of the most famous examples of biomimicry is the development of the Shinkansen, Japan's high-speed bullet train. When the train was first designed, it faced a serious problem: as it emerged from narrow tunnels at high speeds, it created a loud 'sonic boom' that disturbed nearby residents. An engineer on the team, who happened to be an avid birdwatcher, noticed that kingfishers could dive into the water with barely a splash. He realized that the kingfisher's long, wedge-shaped beak allowed it to transition smoothly between the air and the water. By redesigning the nose of the bullet train to mimic the kingfisher's beak, the engineers eliminated the sonic boom, made the train faster, and reduced its energy consumption by 15%.\n\nAnother remarkable application of biomimicry is found in the architectural design of the Eastgate Centre in Zimbabwe. Traditional office buildings require massive air-conditioning systems to stay cool in the hot African climate, consuming huge amounts of energy. However, architect Mick Pearce looked to termite mounds for inspiration. Termites build tall, thin towers that maintain a constant internal temperature despite extreme external fluctuations. They achieve this through a system of vents that allows hot air to rise and escape while drawing cool air in from the bottom. Pearce used these same principles to design the Eastgate Centre, creating a building that stays cool using passive ventilation and consumes 90% less energy than a conventional building of the same size.\n\nFurthermore, researchers are currently studying the skin of sharks to create antibacterial surfaces for hospitals. Sharkskin is covered in tiny, tooth-like structures called denticles that prevent bacteria and barnacles from attaching to it. By mimicking this texture on medical equipment and door handles, scientists hope to reduce the spread of infections without the need for harmful chemicals. As we face the challenges of the 21st century, from energy shortages to antibiotic resistance, nature remains our most valuable laboratory. By shifting our perspective from learning *about* nature to learning *from* nature, we can unlock a future of unprecedented innovation.",
    questions: [
      {
        id: "q_p6_1",
        text: "What led to the redesign of the Japanese Shinkansen bullet train's nose?",
        options: [
          "The engineers wanted the train to look more like a bird.",
          "The train was too slow to compete with airplanes.",
          "The loud noise it produced when exiting tunnels was a major problem.",
          "The train consumed more water than it did electricity."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段说明由于火车出隧道时产生巨大的“音爆”（sonic boom）干扰居民，工程师才考虑重新设计，故选C。"
      },
      {
        id: "q_p6_2",
        text: "How does the 'kingfisher beak' design benefit the bullet train?",
        options: [
          "It makes the train more visible to birds at night.",
          "It helps the train dive into water without a splash.",
          "It increases energy efficiency and removes the sonic boom.",
          "It allows the train to carry 15% more passengers."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段最后提到这种设计消除了音爆，让火车更快且减少了15%的能耗，选C。"
      },
      {
        id: "q_p6_3",
        text: "What makes the Eastgate Centre in Zimbabwe unique?",
        options: [
          "It is the tallest office building in the whole of Africa.",
          "It was built entirely by a colony of termites.",
          "It uses a passive ventilation system inspired by termite mounds to stay cool.",
          "It requires 90% more energy than conventional buildings due to its size."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第三段提到设计师借鉴白蚁丘（termite mounds）的通风原理设计了该中心，使其能够被动散热并大幅降耗，选C。"
      },
      {
        id: "q_p6_4",
        text: "What is the primary goal of studying sharkskin in medical research?",
        options: [
          "To create swimsuits that help doctors move faster during emergencies.",
          "To develop surfaces that naturally prevent the attachment of bacteria.",
          "To find a way to use shark scales as a replacement for human teeth.",
          "To produce new types of chemicals that can clean hospitals efficiently."
        ],
        correctAnswerIndex: 1,
        explanation: "推理判断题。最后一段提到鲨鱼皮的微型结构能阻止细菌附着，科学家希望模仿这种结构应用于医疗器械，以减少感染传播，选B。"
      }
    ]
  },
  {
    id: "p7",
    topic: "The Evolution of Work: Beyond the Traditional Office",
    type: "社会议论文 (Sociological Argumentative)",
    difficulty: "难",
    content: "For over a century, the concept of 'work' was almost synonymous with the physical office. The industrial age established a rigid structure where employees gathered at a central location during specified hours. However, the dawn of the digital era, accelerated by recent global events, has shattered this traditional model. Remote work, once a privilege for a few tech specialists, has become a mainstream reality, sparking a profound debate about the future of urban life, productivity, and social connection.\n\nProponents of remote work argue that it offers unparalleled flexibility and work-life balance. By eliminating the daily commute, workers save hours each week, reducing stress and leaving more time for family, exercise, and hobbies. Furthermore, the ability to work from anywhere allows companies to tap into a global talent pool. No longer restricted by geography, a technician in Guangzhou could collaborate seamlessly with a designer in London. For employees, this means the freedom to live in areas with a higher quality of life or lower cost of living without sacrificing career opportunities.\n\nHowever, critics point out the hidden costs of the 'home office.' Many workers report a blurring of boundaries between their personal and professional lives. Without the physical separation of a workplace, it becomes difficult to 'switch off,' potentially leading to burnout and isolation. Moreover, the lack of face-to-face interaction can hinder spontaneous collaboration and the development of a company culture. The casual 'water cooler' conversations that often lead to innovative ideas are hard to replicate in a virtual environment. There are also concerns about social equity, as many manual laborers and service workers cannot work remotely, potentially widening the gap between different social classes.\n\nFrom an urban perspective, the shift away from the central office could transform our cities. If large sections of downtown office buildings remain vacant, they may be converted into residential spaces, potentially solving housing shortages. On the other hand, the local businesses that depend on office workers for their survival—such as cafes, dry cleaners, and small shops—face an uncertain future. The '15-minute city' concept, where all essential services are within a short walk or bike ride from home, is gaining traction as people prioritize their local communities over long-distance travel.\n\nUltimately, the future of work is likely to be 'hybrid.' A model that combines the flexibility of remote work with the collaborative benefits of the physical office seems to be the most viable path forward. The challenge for societies will be to design work environments that prioritize human well-being and social cohesion in an increasingly digital world.",
    questions: [
      {
        id: "q_p7_1",
        text: "According to the proponents, what is a major advantage of remote work?",
        options: [
          "It forces people to work longer hours from home.",
          "It encourages people to move to expensive downtown areas.",
          "It provides more flexibility and eliminates the daily commute.",
          "It prevents companies from hiring workers from other countries."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段提到支持者认为远程办公提供了“空前的灵活性和工作生活平衡”，特别是消除了每日通勤带来的压力，选C。"
      },
      {
        id: "q_p7_2",
        text: "What does the writer mean by the 'hidden costs' of the home office?",
        options: [
          "The expensive electricity bills for heating and cooling the house.",
          "The loss of social connection and the blurring of work-life boundaries.",
          "The difficulty of buying a high-quality coffee machine for the home.",
          "The risk of losing personal computers to hackers."
        ],
        correctAnswerIndex: 1,
        explanation: "推理判断题。第三段提到了负面影响：难以“断开连接”导致疲惫、孤立感，以及缺乏面对面交流导致的协作困难，即身心和社会层面的隐形成本，选B。"
      },
      {
        id: "q_p7_3",
        text: "The '15-minute city' concept is mentioned to show ________.",
        options: [
          "that people now prefer to travel across the city to find better cafes",
          "how remote work might encourage people to value their local communities",
          "that most office workers now live within 15 minutes of their headquarters",
          "the government's plan to build faster subways between different districts"
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第四段提到“15分钟城市”概念之所以流行，是因为人们开始优先考虑社区服务而非远距离差旅，这与远程办公减少由于跨区通勤相呼应，选B。"
      },
      {
        id: "q_p7_4",
        text: "Which of the following would the writer most likely agree with?",
        options: [
          "The tradition of working in a physical office should be completely banned.",
          "Remote work is only suitable for workers in the technology industry.",
          "A balance between remote and office work is the best solution for the future.",
          "Manual laborers and service workers should be required to work from home."
        ],
        correctAnswerIndex: 2,
        explanation: "作者观点题。最后一段指出未来可能是“混合的”（hybrid），结合柔性办公和面对面协作的优点。这对应C选项：两者的平衡，选C。"
      }
    ]
  },
  {
    id: "p8",
    topic: "The Enigma of the Voynich Manuscript",
    type: "历史之谜 (Historical Mystery)",
    difficulty: "偏难",
    content: "Deep in the Rare Book and Manuscript Library at Yale University sits an object that has baffled the world's greatest cryptographers, linguists, and historians for over a century: the Voynich Manuscript. Wrapped in worn vellum and containing roughly 240 translucent pages, the book is written in an entirely unknown script and contains bizarre illustrations that seem to belong to another world. Despite countless attempts to crack its code, the manuscript remains one of the greatest unsolved mysteries in the history of linguistics.\n\nCarbon dating suggests that the vellum was produced in the early 15th century, during the Italian Renaissance. However, the identity of its author remains a subject of intense speculation. Some legends once linked it to the medieval scientist Roger Bacon, while others believed it was a clever forgery designed to trick Emperor Rudolf II of Germany. The illustrations inside only deepen the mystery. They include strange plants that do not resemble any known species on Earth, complex astronomical diagrams involving unknown constellations, and numerous miniature figures of women bathing in elaborate systems of tubes and pools.\n\nThe script itself, often called 'Voynichese,' is perhaps the most frustrating aspect of the book. It consists of roughly 25 to 30 distinct characters, written from left to right with no obvious punctuation. While it looks like a real language—with repeating patterns and a structure similar to natural languages—every attempt to translate it has failed. During World War II, the legendary codebreakers of Bletchley Park, who successfully deciphered the German Enigma machine, took a crack at the Voynich Manuscript. They came up empty-handed. In recent years, artificial intelligence has been deployed to analyze the word distributions and syntactic patterns, yet a definitive translation remains elusive.\n\nSome researchers suggest that the manuscript is a medical or botanical book written in a sophisticated code to hide sensitive knowledge. Others believe it is a sophisticated 'hoax' (骗局) created by a medieval entrepreneur to sell for a high price. However, the sheer complexity of the illustrations and the consistency of the internal grammar make the hoax theory difficult for many to accept. Recently, some linguists have proposed that it might be a forgotten dialect or an extinct language encoded in a phonetic script. As technology advances, perhaps one day our machines will reveal the secrets hidden within these ancient pages. Until then, the Voynich Manuscript remains a silent witness to a long-lost chapter of human history.",
    questions: [
      {
        id: "q_p8_1",
        text: "When was the material used for the Voynich Manuscript pages produced?",
        options: [
          "During the early 15th century.",
          "In the mid-20th century.",
          "Over a thousand years ago.",
          "During the time of the German Enigma machine."
        ],
        correctAnswerIndex: 0,
        explanation: "细节理解题。第二段开头明确提到，碳定年显示羊皮纸产生于'early 15th century'（15世纪早期），选A。"
      },
      {
        id: "q_p8_2",
        text: "What makes the illustrations in the manuscript particularly mysterious?",
        options: [
          "They are mostly photographs of modern cities.",
          "They depict plants and constellations that are not known to science.",
          "They show very clearly that Roger Bacon was the only author.",
          "They are written in a very beautiful and simple English script."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段提到插图包含了'strange plants that do not resemble any known species'（不属于地球已知物种的怪异植物）和未知的星座，选B。"
      },
      {
        id: "q_p8_3",
        text: "What happened when the Bletchley Park codebreakers tried to translate the script?",
        options: [
          "They discovered it was a message from ancient aliens.",
          "They proved it was a forgery created in 1912.",
          "They were unable to find a translation and failed.",
          "They used artificial intelligence to finish the job in one day."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第三段提到二战时期布莱切利园的解密专家试图破解此书，但'came up empty-handed'（空手而归），选C。"
      },
      {
        id: "q_p8_4",
        text: "What is the status of the 'hoax theory' mentioned in the text?",
        options: [
          "It has been fully proven by historical records.",
          "It is the only theory that all scientists now agree with.",
          "It is difficult to accept because the book is so complex and consistent.",
          "It suggests that the book was written by a 21st-century computer."
        ],
        correctAnswerIndex: 2,
        explanation: "推理判断题。第四段指出由于插图的复杂性和语法的一致性，使得“骗局说”很难被大众接受（hoax theory difficult for many to accept），选C。"
      }
    ]
  },
  {
    id: "p9",
    topic: "The Future of Transportation: Hyperloop and Magnetism",
    type: "科技说明文 (Tech Expository)",
    difficulty: "较难",
    content: "Imagine traveling from Guangzhou to Beijing in less than two hours, not in a plane, but in a pressurized capsule traveling through a vacuum tube. This is the vision of the Hyperloop, a radical new form of transportation that could revolutionize the way we move. First proposed by entrepreneur Elon Musk in 2013, the Hyperloop aims to combine the speed of an airplane with the convenience and frequency of a train, while being significantly more energy-efficient and environmentally friendly.\n\nThe core technology of the Hyperloop revolves around two main concepts: low pressure and magnetic levitation (maglev). In traditional transportation, the two biggest obstacles to high speed are friction and air resistance. The Hyperloop solves these by placing the pods inside an enclosed tube from which most of the air has been removed. By operating in a near-vacuum environment, the air resistance is almost eliminated, allowing the pods to reach speeds of up to 1,200 kilometers per hour. To eliminate friction with the ground, the pods use magnetic levitation to 'float' above the tracks, using the same principles that power high-speed maglev trains in Shanghai.\n\nOne of the most significant advantages of the Hyperloop is its potential for sustainability. Most planned Hyperloop systems are designed to be powered entirely by renewable energy. Solar panels installed on the roof of the tubes can generate more than enough electricity to run the system, making it a zero-emission alternative to air travel. Furthermore, because the tubes can be built underground or elevated on pillars, they have a much smaller land footprint compared to traditional highways or high-speed rail lines, minimizing the impact on local ecosystems.\n\nHowever, building a commercial Hyperloop system is a massive engineering and financial challenge. The cost of constructing hundreds of kilometers of vacuum-sealed tubes is enormous. There are also serious safety concerns: what happens if a tube loses pressure or if there is an emergency stop at supersonic speeds? Engineers are working on complex safety systems and emergency valves to address these risks. Despite these hurdles, multiple companies around the world, from the United States to India, are currently building test tracks. While we may still be a decade away from our first commercial ride, the Hyperloop represents a bold step towards a faster, greener future.",
    questions: [
      {
        id: "q_p9_1",
        text: "What is the Hyperloop's main goal as a form of transportation?",
        options: [
          "To replace all subway systems in the city of Beijing.",
          "To combine the speed of air travel with the efficiency of a train.",
          "To transport people through water at the speed of sound.",
          "To encourage more people to buy private electric cars."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段最后明确提到：超级高铁的目标是'combine the speed of an airplane with the convenience... of a train'，选B。"
      },
      {
        id: "q_p9_2",
        text: "How does the Hyperloop eliminate air resistance?",
        options: [
          "By using very powerful fans to push the air away from the tracks.",
          "By flying at a very high altitude where the air is thin.",
          "By removing most of the air from the tube to create a vacuum.",
          "By making the pod very heavy so it can cut through the wind."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段解释：Hyperloop将胶囊舱置于抽走了大部分空气（near-vacuum）的封闭管道内，从而几乎消除了空气阻力，选C。"
      },
      {
        id: "q_p9_3",
        text: "Why is the Hyperloop considered an environmentally friendly choice?",
        options: [
          "Because it is made entirely of recycled wood and stone.",
          "Because it can be powered by renewable energy like the sun.",
          "Because it requires people to walk more to reach the station.",
          "Because it doesn't need any land since it travels in the air."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段提到：大多数Hyperloop系统设计为由可再生能源驱动，管道顶部的太阳能电池板能产生足够电力，实现零排放，选B。"
      },
      {
        id: "q_p9_4",
        text: "What is a major challenge mentioned in the text for the Hyperloop's development?",
        options: [
          "People are not interested in traveling at high speeds anymore.",
          "The technology for magnetism has not been discovered yet.",
          "The high cost of building vacuum tubes and the potential safety risks.",
          "Solar energy is too weak to power the pods."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题/归纳总结。最后一段列举了主要挑战：建设真空密封管道的成本巨大（cost... is enormous）以及严重的安全担忧（safety concerns），选C。"
      }
    ]
  },
  {
    id: "p10",
    topic: "Sustainable Agriculture: Feeding the Future",
    type: "环境说明文 (Environmental Expository)",
    difficulty: "偏难",
    content: "By the year 2050, the global population is expected to reach nearly 10 billion. This raises a fundamental challenge: how can we produce enough food for everyone without destroying the planet's fragile ecosystems? Traditional industrial agriculture, which relies heavily on chemical fertilizers, massive amounts of water, and large-scale clearing of forests, is no longer sustainable. To feed the future, we must look towards innovative and sustainable farming methods that work in harmony with nature.\n\nOne promising solution is 'regenerative agriculture.' This approach focuses on improving soil health rather than just maximizing crop yields. Healthy soil acts as a massive carbon sink, absorbing carbon dioxide from the atmosphere and helping to slow down global warming. Techniques like planting cover crops, rotating different types of plants, and reducing the use of chemicals help restore the natural nutrients in the soil. These methods not only make the crops more resilient to climate change but also improve the quality and nutrition of the food we eat.\n\nAnother groundbreaking development is 'vertical farming.' In many urban areas, large warehouses are being converted into indoor farms where crops are grown in stacked layers under LED lights. Vertical farming uses up to 95% less water than traditional farming because the water is recycled through complex systems. Furthermore, since these farms are located in cities, food can be grown and sold locally, drastically reducing 'food miles' and the carbon footprint related to transportation.\n\nFinally, technological advancements like precision agriculture—using drones and sensors to monitor crops—allow farmers to apply water and nutrients only where they are needed. While these transformations require significant investment and a change in mindset, they offer a path towards a more secure and sustainable food future. By rethinking how we grow our food, we can protect our planet while ensuring that no one goes hungry in the century to come.",
    questions: [
      {
        id: "q_p10_1",
        text: "What is mentioned as a problem with traditional industrial agriculture?",
        options: [
          "It uses too much natural sunlight and air.",
          "It creates too much organic food for people to eat.",
          "It relies on chemical fertilizers and large-scale forest clearing.",
          "It is the only way to protect the world's ecosystems."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第一段提到传统工业化农业依赖化肥、大量水资源和大规模森林砍伐，是不可持续的，选C。"
      },
      {
        id: "q_p10_2",
        text: "How does regenerative agriculture help slow down global warming?",
        options: [
          "By using giant mirrors to reflect sunlight back into space.",
          "By making the soil act as a carbon sink to absorb CO2.",
          "By encouraging farmers to move to colder countries.",
          "By stopping the growth of all colored plants."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段指出再生农业关注土壤健康，健康的土壤像一个巨大的碳汇（carbon sink），能吸收大气中的二氧化碳，选B。"
      },
      {
        id: "q_p10_3",
        text: "What is a primary benefit of vertical farming in urban areas?",
        options: [
          "It makes the warehouses look more colorful at night.",
          "It requires 95% more water than traditional farming.",
          "It reduces 'food miles' by growing and selling food locally.",
          "It allows crops to grow without any water at all."
        ],
        correctAnswerIndex: 2,
        explanation: "细节推理题。第三段提到垂直农业位于城市内部，可以本地化生产和销售，从而大幅减少“食物里程”（food miles）和运输产生的碳足迹，选C。"
      },
      {
        id: "q_p10_4",
        text: "What does 'precision agriculture' involve?",
        options: [
          "Using drones and sensors to monitor and targetedly treat crops.",
          "Planting exactly 100 seeds in every single field.",
          "Forcing farmers to use only their hands and no machines.",
          "Predicting the weather for the next fifty years perfectly."
        ],
        correctAnswerIndex: 0,
        explanation: "细节理解题。最后一段提到精准农业（precision agriculture）利用无人机和传感器监控作物，以便在需要的地方施肥灌溉，选A。"
      }
    ]
  },
  {
    id: "p11",
    topic: "The Psychology of 'FOMO': Life in the Connected Age",
    type: "心理议论文 (Psychological Argumentative)",
    difficulty: "较难",
    content: "If you have ever felt a pang of anxiety while scrolling through social media, seeing your friends at a concert or enjoying a fancy meal while you are home studying, you have likely experienced 'FOMO'—the Fear Of Missing Out. FOMO is defined as a pervasive apprehension that others might be having rewarding experiences from which one is absent. While the feeling of being left out is a basic human emotion, the rise of smartphones and social media platforms has amplified FOMO into a widespread psychological phenomenon that affects millions of people, particularly teenagers.\n\nThe mechanics of social media are perfectly designed to trigger FOMO. Platforms like Instagram and TikTok are essentially 'highlight reels' of people's lives. We rarely see the boring, stressful, or mundane moments. Instead, we are bombarded with curated images of perfectly staged vacations, social gatherings, and personal achievements. This creates a distorted perception of reality, where it seems that everyone else is living a more exciting and fulfilling life than we are. Constant comparison can lead to lower self-esteem, sleep deprivation, and even depression, as individuals feel pressured to always be 'connected' and 'active' to avoid falling behind.\n\nFurthermore, FOMO is fueled by the 'infinite scroll' and the notification systems that command our attention. Every time we hear a 'ping' from our phone, our brain releases a small amount of dopamine, a chemical associated with pleasure and reward. We check our phones not just to see what is happening, but because we are afraid of what we might miss if we don't. This creates a cycle of dependency, where the digital world begins to feel more 'real' and urgent than the physical one. We may find ourselves at a real-life dinner with friends, yet unable to put down our phones because we are preoccupied with a virtual event happening elsewhere.\n\nPsychologists suggest that the antidote to FOMO is its opposite: 'JOMO,' or the Joy Of Missing Out. JOMO is the practice of being content with where you are and what you are doing, without needing to compare yourself to others. It involves setting boundaries with technology, such as turning off notifications or practicing 'digital fasts' on weekends. By shifting our focus from what we are missing to what we are experiencing in the present moment, we can reclaim our time and mental energy. Ultimately, true happiness comes not from trying to be everywhere at once, but from being fully present wherever we happen to be.",
    questions: [
      {
        id: "q_p11_1",
        text: "How is FOMO defined in the passage?",
        options: [
          "A feeling of joy when you see your friends success.",
          "A fear that others are having good experiences without you.",
          "A physical sickness caused by using too many smartphones.",
          "The ability to remember everything you see on social media."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段给出了FOMO的定义：'a pervasive apprehension that others might be having rewarding experiences from which one is absent'，即担心别人在享受你不在场的快乐，选B。"
      },
      {
        id: "q_p11_2",
        text: "Why does social media distort our perception of reality?",
        options: [
          "It only shows the negative and boring parts of people's lives.",
          "It uses high-quality cameras that make everyone look like a ghost.",
          "It presents curated 'highlight reels' rather than daily struggles.",
          "It forces people to post only during the night."
        ],
        correctAnswerIndex: 2,
        explanation: "推理判断题。第二段指出社交平台展示的是人们生活的“精彩集锦”（highlight reels），很少展示无聊或负面的时刻，从而扭曲了现实，选C。"
      },
      {
        id: "q_p11_3",
        text: "What part does 'dopamine' play in our phone usage?",
        options: [
          "It is a virus that infects smartphones and steals data.",
          "It is a brain chemical that rewards us for checking notifications.",
          "It is a high-tech material used to make phone screens brighter.",
          "It is a type of social media app that helps reduce anxiety."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段提到听到手机响铃时，大脑会释放多巴胺（dopamine），这是一种与快乐和奖励相关的化学物质，促使我们不断检查手机，选B。"
      },
      {
        id: "q_p11_4",
        text: "What is the core message of 'JOMO' according to the writer?",
        options: [
          "To buy as many smartphones as possible to stay connected.",
          "To find happiness by experiencing the present moment without comparison.",
          "To join every social event so that you never miss out on anything.",
          "To avoid all human contact and live in a deep forest."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第四段指出JOMO的核心是'being content with where you are... without needing to compare yourself'，即不与人攀比，享受当下，选B。"
      }
    ]
  },
  {
    id: "p12",
    topic: "The Evolution of Language in the Digital Age",
    type: "语言学说明文 (Linguistic Expository)",
    difficulty: "难",
    content: "Language is a living, breathing entity that evolves along with the humans who speak it. Throughout history, major technological shifts—from the invention of the printing press to the rise of the internet—have profoundly influenced the way we communicate. In the 21st century, the digital revolution is transforming language at an unprecedented speed, creating new words, altering grammar, and introducing entirely new forms of expression like emojis and internet slang.\n\nOne of the most visible changes is the expansion of the English vocabulary. Tech-related words like 'blog,' 'tweet,' and 'cloud' have moved from specialized jargon to everyday speech. Furthermore, we frequently turn nouns into verbs, such as 'googling' a question or 'friending' someone on social media. This flexibility allows language to adapt quickly to new realities, but it also creates a generational gap. Older generations may find it difficult to keep up with the constant stream of new terminology, while younger 'digital natives' use it as a way to establish their own social identity and group belonging.\n\nHowever, the digital age has also changed the *structure* of our communication. The informal nature of text messaging and social media posts has led to the rise of 'netspeak'—a style of writing characterized by abbreviations (like LOL or BTW), lack of capitalization, and relaxed punctuation. Some educators worry that this trend is eroding traditional literacy skills, leading to a decline in formal writing ability among students. They argue that the habit of using short, fragmented sentences in digital chats makes it harder for young people to construct complex, well-reasoned arguments in academic essays.\n\nOn the other hand, some linguists view these changes as a creative expansion of language. They argue that internet slang and emojis provide a much-needed 'digital body language.' In face-to-face conversation, we use tone of voice, facial expressions, and gestures to convey meaning and emotion. In a text-only environment, these cues are missing, which often leads to misunderstandings. Emojis and creative punctuation (like multiple exclamation marks!!!) act as emotional indicators, helping to recreate the nuances of human interaction in a virtual space. For example, ending a sentence with a period in a casual text might seem cold or angry, whereas no punctuation might feel friendlier.\n\nUltimately, the digital age hasn't destroyed language; it has simply added a new layer to it. The key to successful communication in the modern world is 'code-switching'—knowing when it is appropriate to use informal internet slang and when to adhere to the strict rules of formal grammar. As we navigate this digital landscape, our language will continue to reflect our inventiveness and our deep-seated need to connect with one another.",
    questions: [
      {
        id: "q_p12_1",
        text: "How has the digital age expanded the English vocabulary?",
        options: [
          "By strictly banning any new words from being used in schools.",
          "By introducing tech-related terms and turning nouns into verbs.",
          "By forcing people to speak only using the names of computer parts.",
          "By translating all English words into a digital code called binary."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段指出数字时代通过引入科技相关的词汇（如blog, tweet）以及将名词转为动词（如googling）扩展了英语词汇量，选B。"
      },
      {
        id: "q_p12_2",
        text: "What is a major concern of educators regarding 'netspeak'?",
        options: [
          "Students will forget how to use their smartphones properly.",
          "The internet will become too slow if people use many abbreviations.",
          "Traditional literacy and formal writing skills might be weakened.",
          "Young people will stop talking to their parents in person."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第三段提到教育者担心这种趋势正在侵蚀传统的读写能力（eroding traditional literacy skills），导致学生正式写作能力下降，选C。"
      },
      {
        id: "q_p12_3",
        text: "Why do some linguists believe emojis are necessary in digital communication?",
        options: [
          "They are much more beautiful than traditional letters and words.",
          "They help to provide 'digital body language' and convey emotion.",
          "They make text messages much shorter so they save battery power.",
          "They are easier for computers to read and understand."
        ],
        correctAnswerIndex: 1,
        explanation: "推理判断题。第四段指出，由于文本缺乏语气和表情，emoji充当了“数字肢体语言”和情感指示符，帮助重建交流中的细微差别，选B。"
      },
      {
        id: "q_p12_4",
        text: "What does the writer mean by 'code-switching' in the last paragraph?",
        options: [
          "Changing the battery of a computer while it is still running.",
          "Learning a completely new foreign language every few years.",
          "Knowing how to choose between informal and formal language in different situations.",
          "Using a secret code to prevent hackers from reading your messages."
        ],
        correctAnswerIndex: 2,
        explanation: "词义猜测题。最后一段提到成功沟通的关键是'code-switching'，即根据场合选择使用非正式俚语还是正式语法，符合C选项描述，选C。"
      }
    ]
  },
  {
    id: "p13",
    topic: "Building Sponge Cities: Solving Urban Flooding",
    type: "城市科学说明文 (Urban Science/Expository)",
    difficulty: "中等",
    content: "In recent decades, many cities around the world have faced more frequent and severe flooding due to climate change and rapid urbanization. Traditional urban design, often called 'grey infrastructure,' relies on concrete pipes and tunnels to drain rainwater as quickly as possible. However, during heavy storms, these systems are often overwhelmed, leading to disastrous floods. To solve this problem, a revolutionary concept called 'Sponge Cities' has emerged, aiming to manage water in a more natural and sustainable way.\n\nA Sponge City is designed to absorb, capture, and reuse rainwater rather than just letting it run off into the sea. This is achieved by creating 'green infrastructure' that mimics the natural water cycle. Instead of covering every square meter of a city with waterproof concrete and asphalt, urban planners are incorporating permeable (可渗透的) materials that allow water to soak into the ground. Green roofs covered in plants, 'rain gardens' along streets, and artificial wetlands all help to slow down the flow of water and naturally filter out pollutants.\n\nOne of the most successful examples of this approach can be found in several major Chinese cities, including Lingang in Shanghai and parts of Guangzhou. In these areas, large parks act as giant 'sponges.' During heavy rains, these parks collect water in underground storage systems or specialized ponds. This water can then be purified and reused for irrigating plants, cleaning streets, or even as an emergency supply for fire fighting. By storing water instead of draining it, Sponge Cities also help to recharge local groundwater sources, which are often depleted by urban growth.\n\nBeyond flood prevention, Sponge Cities offer numerous other benefits. The increase in green spaces helps to combat the 'urban heat island effect,' making cities cooler and more comfortable in the summer. These areas also provide essential habitats for birds and insects, boosting urban biodiversity. Furthermore, the presence of water and greenery improves the mental well-being of residents, providing beautiful spaces for recreation and relaxation.\n\nWhile the cost of transforming an existing city into a 'Sponge City' is high, the long-term benefits in terms of flood protection and environmental health are undeniable. As we face a future of more extreme weather, our cities must learn to live with water rather than trying to hide from it. The Sponge City model offers a path towards urban environments that are more resilient, beautiful, and in harmony with the natural world.",
    questions: [
      {
        id: "q_p13_1",
        text: "What is a major problem with traditional 'grey infrastructure'?",
        options: [
          "It is made of sponges that absorb too much water.",
          "It cannot handle large amounts of water during heavy storms.",
          "It is much more expensive than green infrastructure.",
          "It encourages the growth of too many trees in the city."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段指出，传统基础设施在强降雨时往往会由于负荷过重（overwhelmed）而导致洪水，选B。"
      },
      {
        id: "q_p13_2",
        text: "How does a Sponge City manage rainwater differently from a traditional city?",
        options: [
          "It uses giant umbrellas to stop the rain from hitting the ground.",
          "It absorbs and reuses rainwater using permeable materials and green spaces.",
          "It drains water into the ocean much faster than concrete pipes.",
          "It moves all the people to high mountains during the rainy season."
        ],
        correctAnswerIndex: 1,
        explanation: "对比分析题。第二段提到海绵城市的核心是吸收（absorb）、存储和重复利用雨水，通过可渗透材料和绿地模拟自然水循环，选B。"
      },
      {
        id: "q_p13_3",
        text: "What can the stored water in a Sponge City be used for?",
        options: [
          "To provide power for the city's subway trains.",
          "To irrigate plants and clean the city streets.",
          "To build more concrete buildings in Lingang.",
          "To stop global warming by spraying it into the air."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段提到存储的雨水可以用于灌溉（irrigating plants）、清洗街道等，选B。"
      },
      {
        id: "q_p13_4",
        text: "Which of the following is NOT mentioned as a benefit of Sponge Cities?",
        options: [
          "Making cities cooler in the summer.",
          "Increasing the amount of gold found in the ground.",
          "Improving the mental health of urban residents.",
          "Boosting the number of birds and insects in the city."
        ],
        correctAnswerIndex: 1,
        explanation: "排除题。文中提到了降温（战斗热岛效应）、改善心理健康、增加生物多样性，但未提及发现黄金，选B。"
      }
    ]
  },
  {
    id: "p14",
    topic: "The Silk Road: A History of Connection",
    type: "历史文化说明文 (Historical/Cultural)",
    difficulty: "中等",
    content: "More than two thousand years ago, a network of trade routes began to connect the ancient civilizations of China, India, Persia, and the Roman Empire. This network, famously known as the Silk Road, was not a single path but a series of interconnected routes that stretched over 6,000 kilometers across the vast deserts and rugged mountains of Central Asia. While its name suggests only the trade of silk, the Silk Road was much more than a commercial highway; it was the world’s first great information superhighway.\n\nThe trade on the Silk Road was incredibly diverse. From China, merchants carried silk, paper, porcelain, and tea to the west. In exchange, goods like glassware, precious metals, spices, and horses flowed towards the east. However, the most important 'cargo' carried by the caravans was not material goods, but ideas, religions, and technologies. For example, the Chinese invention of paper-making traveled along these routes to the Middle East and later to Europe, fundamentally changing the history of human knowledge. Similarly, Buddhism traveled from India to China, where it deeply influenced Chinese culture and art.\n\nLife on the Silk Road was extremely hazardous. Merchants traveled in large groups called caravans to protect themselves from bandits and wild animals. They had to cross some of the world's most inhospitable environments, such as the Taklamakan Desert—often called the 'Sea of Death'—and the frozen passes of the Pamir Mountains. To support these travelers, many oasis towns grew into bustling centers of culture and trade, such as Dunhuang in northwestern China. These towns became melting pots where people of different ethnicities and beliefs shared stories and learned from one another.\n\nBy the 15th century, the land-based Silk Road began to decline as maritime trade routes became more efficient and safer. However, the legacy of the Silk Road remains a powerful symbol of global cooperation. Today, the 'Belt and Road Initiative' aims to revive this spirit of connection through modern infrastructure, including high-speed rail lines and ports. Like its ancient ancestor, this new project is not just about moving goods; it is about building bridges between cultures and fostering a sense of shared destiny in an increasingly interconnected world.",
    questions: [
      {
        id: "q_p14_1",
        text: "What does the name 'Silk Road' imply about the trade?",
        options: [
          "Silk was the only product ever traded on the road.",
          "Silk was a major trade good, but many other things were also traded.",
          "The road was physically made of silk to make it comfortable.",
          "Only people who wore silk clothes were allowed to travel on it."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段提到名称暗示了丝绸贸易，但后面紧接着说它'much more than a commercial highway'，暗示了多元贸易和思想交流，选B。"
      },
      {
        id: "q_p14_2",
        text: "According to the passage, what was the most important 'cargo' of the Silk Road?",
        options: [
          "Precious metals and glassware.",
          "Porcelain and tea from China.",
          "Ideas, religions, and technologies.",
          "Horses from Central Asia."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段明确提到最重要的“货物”是思想、宗教和技术（ideas, religions, and technologies），选C。"
      },
      {
        id: "q_p14_3",
        text: "Why did merchants travel in 'caravans'?",
        options: [
          "To move faster by sharing the same horse.",
          "To protect themselves from bandits and dangerous animals.",
          "Because the law required them to travel in groups of 100.",
          "To avoid paying taxes in the oasis towns."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段写到商人结成商队（caravans）是为了'protect themselves from bandits and wild animals'，选B。"
      },
      {
        id: "q_p14_4",
        text: "What is the purpose of the 'Belt and Road Initiative' today?",
        options: [
          "To completely replace the ancient Silk Road with a museum.",
          "To build more deserts so that the Taklamakan is not lonely.",
          "To revive the spirit of connection through modern infrastructure.",
          "To stop maritime trade across the Pacific Ocean."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。最后一段指出该倡议旨在通过现代基础设施复兴那种“连接的精神”，选C。"
      }
    ]
  },
  {
    id: "p15",
    topic: "Space Debris: The Hidden Danger in the Orbit",
    type: "科普说明文 (Scientific Expository)",
    difficulty: "偏难",
    content: "Since the launch of Sputnik 1 in 1957, humans have sent thousands of satellites, rockets, and probes into space. While these tools have brought us global GPS, television, and internet, they have also left behind a dangerous legacy: space debris. Space debris, often called 'space junk,' consists of defunct (失效的) satellites, empty rocket stages, and tiny fragments of metal and paint that are currently orbiting the Earth at incredible speeds. This growing cloud of junk now poses a significant threat to our future activities in space.\n\nWhile we might imagine space as vast and empty, the 'neighborhood' of Earth is becoming increasingly crowded. There are currently over 30,000 objects larger than 10 centimeters being tracked by ground stations, and millions of smaller pieces that are too small to see. Even a tiny fragment, however, can be deadly in space. Because these objects orbit the Earth at speeds of up to 28,000 kilometers per hour—ten times faster than a bullet—even a small piece of paint can hit a satellite with the force of a grenade. Such a collision can destroy a billion-dollar satellite and create even more debris, potentially leading to a chain reaction known as the 'Kessler Syndrome,' where the orbit becomes so crowded that space travel becomes impossible.\n\nOne of the biggest challenges is that space debris can stay in orbit for a very long time. For example, a piece of junk at an altitude of 1,000 kilometers may take a thousand years to naturally fall back into the Earth's atmosphere and burn up. This means the problem is cumulative; even if we stopped launching rockets today, the amount of debris would continue to grow as existing objects collide and shatter into smaller pieces.\n\nTo solve this problem, scientists and engineers are developing innovative solutions for 'active debris removal.' Projects include using giant nets, robotic harpoons, or even powerful lasers to slow down pieces of junk so they fall and burn up in the atmosphere. Several companies are also proposing 'space vacuum cleaners' that can collect small particles. Furthermore, new international regulations are being discussed to ensure that every new satellite launched has a clear plan for its decommission (退役) at the end of its life. Space is a shared resource, and if we want to continue exploring the stars, we must first learn to clean up our own cosmic backyard.",
    questions: [
      {
        id: "q_p15_1",
        text: "What is 'space debris' according to the passage?",
        options: [
          "A new type of fuel used to power modern rockets.",
          "The stars and planets that are far away from the Earth.",
          "Defunct satellites and fragments of rockets orbiting the Earth.",
          "A kind of special space food for astronauts."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第一段给出了定义：'defunct satellites, empty rocket stages, and tiny fragments...'，即绕地球运行的失效卫星和火箭碎片，选C。"
      },
      {
        id: "q_p15_2",
        text: "Why can even a tiny piece of paint be dangerous in space?",
        options: [
          "Because it is very poisonous to humans.",
          "Because it travels at an extremely high speed.",
          "Because it can block the sun and cause winter.",
          "Because it attracts dangerous space aliens."
        ],
        correctAnswerIndex: 1,
        explanation: "推理判断题。第二段解释：由于物体以高达每小时2.8万公里的速度运行，即使是一小块油漆也会产生巨大的冲击力，选B。"
      },
      {
        id: "q_p15_3",
        text: "What is the 'Kessler Syndrome'?",
        options: [
          "A type of sickness that makes astronauts feel very tired.",
          "A financial crisis caused by the high cost of rockets.",
          "A chain reaction of collisions that makes space travel impossible.",
          "A scientific theory that says the Earth is the center of the universe."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段最后提到，碎片的碰撞可能导致连锁反应，使轨道变得极度拥挤，最终导致无法进行太空旅行，这就是“凯斯勒综合征”，选C。"
      },
      {
        id: "q_p15_4",
        text: "What is a proposed solution for 'active debris removal'?",
        options: [
          "Moving all satellites to another planet like Mars.",
          "Stopping all space exploration for the next hundred years.",
          "Using robotic harpoons or lasers to slow down and remove junk.",
          "Buying more expensive paint that doesn't fall off rockets."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。最后一段列举了方案，包括使用网（nets）、机器人鱼叉（harpoons）或激光（lasers）等，选C。"
      }
    ]
  },
  {
    id: "p16",
    topic: "The Psychology of Color in Marketing",
    type: "心理学说明文 (Psychological/Business)",
    difficulty: "较难",
    content: "Have you ever wondered why most fast-food restaurants use red and yellow in their logos, while banks and insurance companies often choose blue? This is not a coincidence; it is a calculated strategy based on 'color psychology.' Marketers understand that colors have the power to evoke specific emotions, influence our moods, and even dictate our purchasing decisions. In a competitive global market, choosing the right color can be the difference between a successful brand and an ignored one.\n\nRed is perhaps the most powerful color in the marketing toolkit. It is associated with energy, excitement, and urgency. Research shows that red can actually increase a person's heart rate and stimulate appetite, which is why it is so common in the food industry. When combined with yellow—a color linked to happiness and optimism—it creates a sense of speed and friendliness, making it perfect for businesses like McDonald's or KFC. On the other hand, blue conveys feelings of trust, security, and professionalism. It has a calming effect on the human brain, which is why financial institutions and technology companies like IBM and Intel rely on it to build a sense of reliability and authority.\n\nGreen has seen a massive surge in popularity as companies strive to appear more 'eco-friendly' and sustainable. It is naturally associated with health, growth, and nature. Today, seeing a green logo often makes consumers believe—sometimes incorrectly—that a product is organic or better for the environment. Black, meanwhile, is the color of luxury, sophistication, and mystery. High-end fashion brands like Chanel and Prada use black to create an air of exclusivity and timeless elegance. By keeping their designs simple and monochromatic, they signal to the consumer that their products are of the highest quality.\n\nHowever, the meaning of color can vary significantly across different cultures. In many Western cultures, white is the color of purity and is traditionally worn at weddings. In contrast, in some Eastern cultures, white is associated with mourning and is worn at funerals. Therefore, global companies must be extremely careful when designing their international marketing campaigns. A color that signifies luck and prosperity in one country might evoke sadness or bad luck in another. As our world becomes more interconnected, understanding these cultural nuances is essential for any brand that wants to connect with a diverse global audience.",
    questions: [
      {
        id: "q_p16_1",
        text: "Why do fast-food restaurants often use red and yellow in their logos?",
        options: [
          "Because these colors are cheaper to print on plastic signs.",
          "Because they evoke energy, speed, and stimulate the appetite.",
          "Because the inventors of fast food were fond of bright flowers.",
          "Because these colors help customers see the buildings in the dark."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段解释：红色激发能量和食欲，黄色联系着快乐和高效，两者结合营造出速度感和亲和力，符合快餐行业需求，选B。"
      },
      {
        id: "q_p16_2",
        text: "What emotion is primarily associated with the color blue in branding?",
        options: [
          "Anger and frustration during difficult tasks.",
          "Trust, security, and professional reliability.",
          "Extreme hunger and a desire for sweet foods.",
          "A feeling of being lost in a deep forest."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段指出：蓝色传达信任感、安全感和专业性，能让大脑感到冷静，常被金融和科技公司采用，选B。"
      },
      {
        id: "q_p16_3",
        text: "What is a potential danger for global companies regarding color choice?",
        options: [
          "Colors might fade faster in different climates.",
          "Some countries might not have enough ink of a certain color.",
          "The same color can represent completely different things in different cultures.",
          "People in other countries may not be able to see the color red."
        ],
        correctAnswerIndex: 2,
        explanation: "推理判断题。第四段指出颜色的意义在不同文化中差异巨大（如白色在东西方的不同含义），如果选错颜色可能引发误解，选C。"
      },
      {
        id: "q_p16_4",
        text: "The main purpose of this passage is to ________.",
        options: [
          "explain how to paint a room to make it look bigger",
          "discuss the historical development of the color industry",
          "argue that colors should be banned in modern advertising",
          "describe how colors are used to influence human emotions and behavior"
        ],
        correctAnswerIndex: 3,
        explanation: "主旨大意题。全文围绕色彩心理学（color psychology）展开，讨论不同颜色如何被用于营销以影响人的情绪和购买行为，选D。"
      }
    ]
  },
  {
    id: "p17",
    topic: "The Great Barrier Reef: A Wonder Under Threat",
    type: "环境说明文 (Environmental Expository)",
    difficulty: "较难",
    content: "Stretching for over 2,300 kilometers along the northeastern coast of Australia, the Great Barrier Reef is the largest coral reef system on Earth. It is so vast that it can be seen from outer space. Home to thousands of species of fish, colorful corals, and rare marine mammals, it is often described as the 'rainforest of the sea.' However, this breathtaking natural wonder is currently facing its greatest challenge: coral bleaching caused by rising ocean temperatures.\n\nCoral reefs are composed of tiny animals called polyps that live in a symbiotic (共生的) relationship with algae (藻类). The algae live inside the polyps' tissues and provide them with food through photosynthesis, as well as their vibrant colors. However, coral is extremely sensitive to temperature. When the water gets too warm, the coral becomes stressed and expels the algae. Without the algae, the coral turns a ghostly white—a process known as bleaching. While bleached coral is not dead, it is severely weakened and will eventually die if the water temperature does not return to normal.\n\nIn recent years, the Great Barrier Reef has experienced several massive bleaching events. Scientists attribute this directly to global warming caused by human activities. As levels of carbon dioxide in the atmosphere increase, the oceans absorb more heat and become more acidic. This double threat of warming and acidification makes it difficult for corals to build their calcium carbonate skeletons. Furthermore, the reef faces other threats, including water pollution from agricultural runoff and the presence of the crown-of-thorns starfish, a predator that eats coral polyps.\n\nProtecting the reef is a global responsibility. While local governments are implementing measures to improve water quality and control starfish outbreaks, the ultimate solution lies in reducing global carbon emissions. If global temperatures continue to rise at their current rate, some experts predict that the majority of the world's coral reefs could disappear by the end of the century. The loss of the reef would not only be a tragedy for biodiversity but would also destroy the livelihoods of millions of people who depend on the reef for tourism and fishing. As we move forward, we must act decisively to ensure that the wonders of the Great Barrier Reef are preserved for future generations.",
    questions: [
      {
        id: "q_p17_1",
        text: "What is the primary cause of coral bleaching mentioned in the text?",
        options: [
          "A lack of enough small fish to clean the coral.",
          "Rising ocean temperatures due to global warming.",
          "Too many underwater tourists taking photographs.",
          "The natural aging process of the coral polyps."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段结尾和第二段明确指出：水温升高（rising ocean temperatures）导致珊瑚排出共生藻类，从而引发白化现象，选B。"
      },
      {
        id: "q_p17_2",
        text: "What is the relationship between coral polyps and algae?",
        options: [
          "They are enemies that fight for the same food.",
          "They have a symbiotic relationship where algae provide food for polyps.",
          "The algae eat the polyps when they are weak.",
          "They have never met each other in the ocean."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段解释：珊瑚虫（polyps）与藻类是共生关系（symbiotic relationship），藻类提供食物和颜色，选B。"
      },
      {
        id: "q_p17_3",
        text: "What does 'ghostly white' describe in the passage?",
        options: [
          "The beautiful sand on the beaches of Australia.",
          "The appearance of the reef after a bleaching event.",
          "The color of the rare marine mammals living in the reef.",
          "A type of rare fish that only lives in the deep sea."
        ],
        correctAnswerIndex: 1,
        explanation: "词义/细节题。第二段指出，当藻类离开大面积珊瑚后，珊瑚会变成“鬼魅般的白色”（ghostly white），这被称为白化，选B。"
      },
      {
        id: "q_p17_4",
        text: "What is the 'ultimate solution' for protecting the Great Barrier Reef?",
        options: [
          "Moving the reef to a colder part of the world.",
          "Banning all fishing and tourism in Australia.",
          "Reducing global carbon emissions to stop global warming.",
          "Feeding the coral polyps with artificial food every day."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题/归纳。第四段指出：根本解决之道（ultimate solution）在于减少全球碳排放，以遏制气候变暖，选C。"
      }
    ]
  },
  {
    id: "p18",
    topic: "The Renaissance: A Rebirth of Knowledge",
    type: "历史文化说明文 (Historical/Cultural)",
    difficulty: "难",
    content: "Between the 14th and 17th centuries, Europe experienced a period of unprecedented cultural, artistic, and scientific growth known as the Renaissance. Meaning 'rebirth' in French, the Renaissance marked the transition from the Middle Ages to the modern world. It began in the city-states of Italy, such as Florence and Venice, where a new class of wealthy merchants began to support artists and thinkers, reviving the lost knowledge of ancient Greece and Rome.\n\nThe core philosophy of the Renaissance was 'Humanism.' While the Middle Ages were dominated by religious concerns, Humanism shifted the focus towards human potential, achievements, and the beauty of the natural world. This new perspective had a profound impact on art. Artists like Leonardo da Vinci and Michelangelo moved away from flat, symbolic religious paintings and began to use techniques like perspective and anatomy to create incredibly realistic and lifelike figures. Their works, such as the 'Mona Lisa' and the 'David,' remain some of the greatest achievements in human history.\n\nThe Renaissance was also an era of revolutionary scientific discovery. The invention of the printing press by Johannes Gutenberg in the mid-15th century allowed ideas to spread faster than ever before. Scientific thinkers like Nicolaus Copernicus challenged the church's view of the universe by proposing that the Earth revolved around the Sun, rather than the Sun around the Earth. Galileo Galilei's use of the telescope further supported this new view, paving the way for modern astronomy. These discoveries were not just about science; they challenged the established authority of the era and encouraged people to think for themselves and seek evidence-based truths.\n\nFurthermore, the Renaissance encouraged the exploration of the wider world. Navigators like Christopher Columbus and Ferdinand Magellan set out to find new trade routes, leading to the discovery of the Americas and the first circumnavigation of the globe. While the Renaissance eventually faded, its legacy of curiosity, intellectual freedom, and artistic brilliance continues to shape Western civilization. It taught us that by looking back at the wisdom of the past, we could create a bolder and brighter future.",
    questions: [
      {
        id: "q_p18_1",
        text: "What does the word 'Renaissance' literally mean?",
        options: [
          "The middle ages.",
          "Rebirth.",
          "Religious war.",
          "Technical growth."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第一段明确指出：Renaissance在法语中意味着“重生”（rebirth），选B。"
      },
      {
        id: "q_p18_2",
        text: "How did the philosophy of Humanism change people's perspective?",
        options: [
          "It made everyone become a professional artist.",
          "It focused more on religion and the afterlife.",
          "It shifted focus to human potential and the natural world.",
          "It taught people that machines were more important than humans."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第二段解释：人文主义（Humanism）将关注点转向了人的潜力（human potential）、成就以及自然界的美，选C。"
      },
      {
        id: "q_p18_3",
        text: "What was the significance of Gutenberg's printing press?",
        options: [
          "It allowed for the mass production of metal toys.",
          "It made it possible for ideas to spread much faster.",
          "It was the first machine that could predict the future.",
          "It helped artists paint more realistic religious figures."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段提到：古腾堡印刷机的发明使得思想（ideas）能以前所未有的速度传播，选B。"
      },
      {
        id: "q_p18_4",
        text: "How did Copernicus challenge the established view of the universe?",
        options: [
          "He proved that the moon was made of cheese.",
          "He claimed that the Earth was flat like a pancake.",
          "He proposed that the Earth revolved around the Sun.",
          "He discovered that there were thousands of other suns."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第三段写到哥白尼挑战了教会观点，提出地球绕太阳运行（Earth revolved around the Sun），选C。"
      }
    ]
  },
  {
    id: "p19",
    topic: "Artificial Intelligence in Healthcare",
    type: "科技说明文 (Tech Expository)",
    difficulty: "较难",
    content: "The field of medicine is on the brink of a major transformation, driven by the rapid development of Artificial Intelligence (AI). From diagnosing diseases to discovering new drugs, AI is becoming an essential tool for doctors and researchers. By processing massive amounts of medical data at incredible speeds, these systems can identify patterns and insights that humans might miss, potentially saving millions of lives.\n\nOne of the most promising applications of AI is in medical imaging. Radiologists currently spend hours analyzing X-rays, MRIs, and CT scans to look for signs of illness. AI algorithms, however, can be trained to recognize the early signs of cancer or heart disease with a high degree of accuracy. In some cases, AI has even outperformed human experts in identifying small tumors that are difficult to see with the naked eye. This allows for earlier diagnosis and more effective treatment, significantly improving the chances of survival for patients.\n\nFurthermore, AI is accelerating the process of drug discovery. Traditionally, it takes over a decade and billions of dollars to bring a new medicine to the market. Researchers must test thousands of chemical compounds to find one that is both effective and safe. AI can simulate these interactions in a virtual environment, narrowing down the potential candidates in a fraction of the time. This was particularly evident during the recent global health crisis, where AI was used to quickly analyze the structure of viruses and help develop vaccines in record time.\n\nHowever, the integration of AI into healthcare also raises serious ethical concerns. Privacy is a major issue; these systems require access to vast amounts of sensitive patient data to learn and improve. There are also concerns about 'algorithmic bias.' If the data used to train the AI is not diverse, the system may provide less accurate results for certain groups of people. Finally, there is the question of accountability: if an AI makes a wrong diagnosis, who is responsible? Despite these challenges, the potential benefits of AI in healthcare are too great to ignore. As we move forward, the goal is not to replace doctors with machines, but to create a symbiotic relationship where AI enhances human expertise to provide better care for everyone.",
    questions: [
      {
        id: "q_p19_1",
        text: "How does AI benefit medical imaging (like X-rays)?",
        options: [
          "It makes the X-ray machines much cheaper to build.",
          "It can identify early signs of disease with high accuracy.",
          "It replaces the need for any electricity in hospitals.",
          "It turns the images into colorful 3D cartoons."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第二段写到AI算法能被训练来以极高的准确率识别癌症或心脏病的早期征兆，有时甚至超过人类专家，选B。"
      },
      {
        id: "q_p19_2",
        text: "What is a major advantage of using AI in drug discovery?",
        options: [
          "It allows scientist to stop doing any research at all.",
          "It makes medicine much more expensive for patients.",
          "It can simulate chemical interactions much faster than humans can.",
          "It proves that natural herbs are useless for health."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题。第三段提到：AI可以在虚拟环境中模拟化学反应，在极短时间内缩小候选药物范围，显著加速新药研发，选C。"
      },
      {
        id: "q_p19_3",
        text: "What does 'algorithmic bias' mean in the context of the text?",
        options: [
          "The AI becomes too smart and tries to take over the world.",
          "The AI doesn't have enough battery power to work on weekends.",
          "The AI might give inaccurate results if its training data is not diverse.",
          "The AI only works for people who can speak multiple languages."
        ],
        correctAnswerIndex: 2,
        explanation: "细节理解题/词义。第四段提到算法偏见（algorithmic bias）是因为如果训练数据不够多样（not diverse），系统对某些群体的判断可能不够准确，选C。"
      },
      {
        id: "q_p19_4",
        text: "What is the writer's view on the future of doctors and AI?",
        options: [
          "Doctors will eventually be completely replaced by robots.",
          "AI should be banned from all hospitals immediately.",
          "AI and doctors should work together to provide better healthcare.",
          "Doctors should focus on learning how to build their own AI."
        ],
        correctAnswerIndex: 2,
        explanation: "作者观点题。最后一段指出目标不是用机器取代医生，而是建立一种“共生关系”（symbiotic relationship），让AI辅助人类专业能力，选C。"
      }
    ]
  },
  {
    id: "p20",
    topic: "Critical Thinking: A Survival Skill in the Digital Age",
    type: "社会议论文 (Sociological/Philosophical)",
    difficulty: "难",
    content: "We live in an era characterized by an explosion of information. Every day, we are bombarded with news, advertisements, and social media posts from every corner of the globe. While this provides us with unprecedented access to knowledge, it also presents a significant challenge: how do we distinguish truth from falsehood? In this 'post-truth' world, critical thinking has become more than just an academic skill; it is a vital survival tool for every citizen.\n\nCritical thinking is the ability to analyze information objectively and make reasoned judgments based on evidence. It involves questioning assumptions, identifying biases, and evaluating the credibility of sources. Instead of blindly accepting what we read or hear, a critical thinker asks: Who created this information? What is their motive? Is there evidence to support these claims? Are there other perspectives that are being ignored? By slowing down and reflecting on these questions, we can avoid falling victim to misinformation and 'fake news' designed to manipulate our emotions.\n\nDeveloping critical thinking skills requires active effort and practice. One important step is to recognize our own cognitive biases. We all have a tendency to seek out information that confirms what we already believe—a phenomenon known as 'confirmation bias.' To combat this, we must actively seek out diverse perspectives and be willing to change our minds when presented with new evidence. Furthermore, we must learn to distinguish between 'facts' and 'opinions.' A fact is something that can be proven with evidence, while an opinion is a personal belief or feeling that may or may not be based on truth.\n\nIn the digital age, critical thinking also involves 'digital literacy.' This means understanding how algorithms work and how they can create 'echo chambers' where we only see information that aligns with our interests. As we move forward, the ability to think critically will be the most valuable asset we possess. It allows us to navigate the complexities of the modern world with clarity and independence, ensuring that we are not just passive consumers of information, but active and informed participants in society.",
    questions: [
      {
        id: "q_p20_1",
        text: "Why is critical thinking particularly important in today's world?",
        options: [
          "Because people have stopped using the internet completely.",
          "Because we need to distinguish truth from the vast amount of misinformation.",
          "Because everyone now has a photographic memory for everything they read.",
          "Because books are no longer being printed in any language."
        ],
        correctAnswerIndex: 1,
        explanation: "综合理解题。第一段指出在信息爆炸的时代，辨别真伪（distinguish truth from falsehood）极其困难，因此批判性思维成了生存工具，选B。"
      },
      {
        id: "q_p20_2",
        text: "What does it mean to 'question assumptions' as a critical thinker?",
        options: [
          "To always assume that everyone is lying to you all the time.",
          "To ignore any evidence that doesn't fit your current beliefs.",
          "To examine things that people take for granted and look for proof.",
          "To refuse to read anything that is longer than ten words."
        ],
        correctAnswerIndex: 2,
        explanation: "推理判断题。第二段说明批判性思维涉及质疑假设，即不盲目接受，而是寻找证据支持或分析背后的动机，选C。"
      },
      {
        id: "q_p20_3",
        text: "What is 'confirmation bias' as described in the text?",
        options: [
          "A type of computer virus that deletes news articles.",
          "The tendency to look only for information that agrees with our existing beliefs.",
          "The ability to remember only the facts that we learn in primary school.",
          "A feeling of happiness when we find a mistake in a book."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。第三段定义了确认偏误（confirmation bias）：倾向于寻找能证实我们已有信念的信息，选B。"
      },
      {
        id: "q_p20_4",
        text: "What is the benefit of having 'digital literacy'?",
        options: [
          "It helps us build our own computers from scratch.",
          "It allows us to avoid 'echo chambers' and understand information algorithms.",
          "It makes us the fastest typists in our city or school.",
          "It guarantees that we will never have to pay for the internet again."
        ],
        correctAnswerIndex: 1,
        explanation: "细节理解题。最后一段指出数字素养（digital literacy）涉及理解算法和“回声室”（echo chambers）效应，帮助我们更理智地处理信息，选B。"
      }
    ]
  }
];

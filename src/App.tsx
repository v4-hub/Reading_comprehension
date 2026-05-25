import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  ChevronRight, 
  HelpCircle, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  Trophy, 
  LayoutDashboard,
  Target,
  Clock,
  Menu,
  X,
  Loader2,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { exercises as staticExercises, Exercise } from './data/exercises';

const TOTAL_EXERCISES = 100;

interface Keyword {
  word: string;
  translation: string;
  explanation: string;
}

function App() {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, Record<string, number>>>({}); 
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dynamicExercises, setDynamicExercises] = useState<Record<number, Exercise>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [keywordsMap, setKeywordsMap] = useState<Record<string, Keyword[]>>({});
  const [loadingKeywords, setLoadingKeywords] = useState<Record<string, boolean>>({});
  const [activeKeyword, setActiveKeyword] = useState<Keyword | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem('gz_eng_answers');
    const savedSubmitted = localStorage.getItem('gz_eng_submitted');
    const savedDynamic = localStorage.getItem('gz_eng_dynamic_exercises');
    const savedKeywords = localStorage.getItem('gz_eng_keywords');
    
    if (savedAnswers) try { setAnswers(JSON.parse(savedAnswers)); } catch(e) {}
    if (savedSubmitted) try { setSubmitted(JSON.parse(savedSubmitted)); } catch(e) {}
    if (savedDynamic) try { setDynamicExercises(JSON.parse(savedDynamic)); } catch(e) {}
    if (savedKeywords) try { setKeywordsMap(JSON.parse(savedKeywords)); } catch(e) {}
  }, []);

  // Save progress
  useEffect(() => {
    if (Object.keys(answers).length > 0) localStorage.setItem('gz_eng_answers', JSON.stringify(answers));
    if (Object.keys(submitted).length > 0) localStorage.setItem('gz_eng_submitted', JSON.stringify(submitted));
    if (Object.keys(dynamicExercises).length > 0) localStorage.setItem('gz_eng_dynamic_exercises', JSON.stringify(dynamicExercises));
    if (Object.keys(keywordsMap).length > 0) localStorage.setItem('gz_eng_keywords', JSON.stringify(keywordsMap));
  }, [answers, submitted, dynamicExercises, keywordsMap]);

  const getExercise = (index: number): Exercise | null => {
    if (index < staticExercises.length) return staticExercises[index];
    return dynamicExercises[index] || null;
  };

  const exercise = currentExerciseIndex !== null ? getExercise(currentExerciseIndex) : null;
  const currentAnswers = exercise ? (answers[exercise.id] || {}) : {};
  const isCurrentSubmitted = exercise ? (submitted[exercise.id] || false) : false;

  // Fetch keywords when exercise loads
  useEffect(() => {
    if (!exercise) return;
    if (keywordsMap[exercise.id] || loadingKeywords[exercise.id]) return;

    setLoadingKeywords(prev => ({...prev, [exercise.id]: true}));
    fetch('/api/extract-keywords', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: exercise.content })
    })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setKeywordsMap(prev => ({...prev, [exercise.id]: data}));
        }
      })
      .catch(err => console.error("Failed to load keywords", err))
      .finally(() => {
        setLoadingKeywords(prev => ({...prev, [exercise.id]: false}));
      });
  }, [exercise, keywordsMap, loadingKeywords]);

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (!exercise || submitted[exercise.id]) return;
    setAnswers(prev => ({
      ...prev,
      [exercise.id]: {
        ...(prev[exercise.id] || {}),
        [questionId]: optionIndex
      }
    }));
  };

  const handleSubmit = () => {
    if (!exercise) return;
    if (Object.keys(currentAnswers).length < exercise.questions.length) {
      alert('请完成所有题目后再提交！');
      return;
    }
    setSubmitted(prev => ({ ...prev, [exercise.id]: true }));
  };

  const calculateScore = (exId: string) => {
    // Find exercise anywhere
    let ex: Exercise | undefined = staticExercises.find(e => e.id === exId);
    if (!ex) {
      ex = (Object.values(dynamicExercises) as Exercise[]).find(e => e.id === exId);
    }
    if (!ex) return 0;
    
    const exAnswers = answers[exId] || {};
    let score = 0;
    ex.questions.forEach(q => {
      if (exAnswers[q.id] === q.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const getTotalScore = () => {
    return Object.keys(submitted).reduce((total, exId) => total + calculateScore(exId), 0);
  };

  const getTotalPossible = () => {
    return Object.keys(submitted).reduce((total, exId) => {
      let ex: Exercise | undefined = staticExercises.find(e => e.id === exId);
      if (!ex) ex = (Object.values(dynamicExercises) as Exercise[]).find(e => e.id === exId);
      return total + (ex?.questions.length || 0);
    }, 0);
  };

  const resetAllProgress = () => {
    if (window.confirm('确定要清除所有练习记录吗？(AI生成的题目也会被保留)')) {
      setAnswers({});
      setSubmitted({});
      localStorage.removeItem('gz_eng_answers');
      localStorage.removeItem('gz_eng_submitted');
    }
  };

  const generateAndLoadExercise = async (index: number) => {
    if (getExercise(index)) {
      setCurrentExerciseIndex(index);
      return;
    }

    setIsGenerating(true);
    setCurrentExerciseIndex(index); // Still set it so we show the loading state
    try {
      const response = await fetch('/api/generate-passage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index })
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate passage');
      }

      const data = await response.json();
      setDynamicExercises(prev => ({ ...prev, [index]: data }));
    } catch (error) {
      console.error(error);
      alert('Failed to generate passage. Please make sure the Gemini API key is configured in the environment variables.');
      setCurrentExerciseIndex(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const completedCount = Object.keys(submitted).length;

  const renderPassageParagraph = (paragraph: string, keywords: Keyword[] | undefined) => {
    if (!keywords || keywords.length === 0) return paragraph;
    
    // Sort keywords by length descending to match longest first
    const sortedKeywords = [...keywords].sort((a,b) => b.word.length - a.word.length);
    const regex = new RegExp(`\\b(${sortedKeywords.map(k => k.word.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\\\$&')).join('|')})\\b`, 'gi');
    
    const parts = paragraph.split(regex);
    return parts.map((part, i) => {
      const isKeyword = sortedKeywords.find(k => k.word.toLowerCase() === part.toLowerCase());
      if (isKeyword) {
        return (
          <button
            key={i}
            onClick={() => setActiveKeyword(isKeyword)}
            className="text-indigo-600 font-bold underline decoration-indigo-200 decoration-dashed underline-offset-4 hover:bg-indigo-50 hover:text-indigo-800 transition-colors cursor-pointer rounded px-0.5 relative group"
          >
            {part}
          </button>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      {/* Keyword Modal */}
      <AnimatePresence>
        {activeKeyword && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setActiveKeyword(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full border border-slate-100 relative overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveKeyword(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1 italic">Vocabulary</div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{activeKeyword.word}</h3>
              <div className="text-lg font-medium text-slate-700 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg">
                {activeKeyword.translation}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {activeKeyword.explanation}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ x: -288, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -288, opacity: 0 }}
            className="w-72 bg-white border-r border-slate-200 overflow-hidden flex-shrink-0 flex flex-col shadow-xl z-30"
          >
            <div className="p-6 border-b border-slate-100 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative">
              <button 
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-md transition-colors lg:hidden"
              >
                <X className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                广州中考英语
              </h1>
              <p className="text-blue-100 text-sm mt-1 opacity-90 font-medium tracking-wide">阅读理解 20 篇专项特训</p>
              
              <div className="mt-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/20 cursor-pointer" onClick={() => setCurrentExerciseIndex(null)}>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-blue-100/80 uppercase font-bold tracking-wider">总得分</div>
                    <div className="text-2xl font-black">{getTotalScore()} <span className="text-sm font-normal opacity-70">/ {getTotalPossible() || 0}</span></div>
                  </div>
                  <Target className="w-8 h-8 opacity-40 mb-1" />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
              <button 
                onClick={() => setCurrentExerciseIndex(null)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${currentExerciseIndex === null ? 'bg-blue-50 text-blue-700 font-bold border border-blue-100' : 'hover:bg-slate-50 text-slate-600'}`}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>学习仪表盘</span>
              </button>

              <div className="pt-4 pb-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-2 italic">
                训练题目 (Passages)
              </div>

              {Array.from({ length: TOTAL_EXERCISES }).map((_, index) => {
                const ex = getExercise(index);
                const isCompleted = ex ? submitted[ex.id] : false;
                const isActive = currentExerciseIndex === index;
                const score = isCompleted && ex ? calculateScore(ex.id) : 0;
                const isPerfect = isCompleted && ex && score === ex.questions.length;
                const isDynamic = index >= staticExercises.length;
                const isLocked = !ex && index > 0 && !getExercise(index - 1); // Optional: unlock sequentially
                
                // Keep it simple: they can generate any, but maybe better to just let them click

                return (
                  <button
                    key={`sidebar_idx_${index}`}
                    id={`sidebar-item-${index}`}
                    onClick={() => generateAndLoadExercise(index)}
                    className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all duration-200 group ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-600 ring-offset-2 scale-[1.02]' 
                        : isCompleted 
                          ? 'bg-white border border-slate-100 hover:border-blue-200 text-slate-700' 
                          : 'hover:bg-slate-100 text-slate-600 border border-transparent'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      isActive ? 'bg-white/20 text-white' : isCompleted ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 truncate">
                      {ex ? (
                        <>
                          <div className="font-bold truncate text-[14px] leading-tight">{ex.topic}</div>
                          <div className={`text-[11px] font-medium mt-0.5 flex items-center gap-2 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                            {ex.difficulty} • {ex.questions.length} 题
                            {isDynamic && <Sparkles className="w-3 h-3 text-amber-500 inline-block ml-1" />}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="font-bold truncate text-[14px] leading-tight opacity-50">Day {Math.floor(index / 2) + 1} Passage {index % 2 + 1}</div>
                          <div className={`text-[11px] font-medium mt-0.5 flex items-center gap-2 text-slate-400 opacity-60`}>
                            AI 自动生成专属阅读
                          </div>
                        </>
                      )}
                    </div>
                    {isCompleted && (
                      <div className={`flex-shrink-0 transition-transform group-hover:scale-110`}>
                        <CheckCircle className={`w-5 h-5 ${isPerfect ? 'text-green-500' : 'text-orange-400'}`} />
                      </div>
                    )}
                  </button>
                );
              })}

              <div className="pt-4">
                <button 
                  onClick={resetAllProgress}
                  className="w-full py-3 text-xs text-slate-400 hover:text-red-500 transition-colors uppercase font-bold tracking-widest flex items-center justify-center gap-2"
                >
                  <Clock className="w-3 h-3" /> 重置所有进度
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!sidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-40 bg-white p-3 rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-all hover:scale-110 active:scale-95"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative flex flex-col h-full bg-[#fcfdfe]">
        {currentExerciseIndex === null ? (
          /* Welcome Dashboard */
          <div className="max-w-5xl mx-auto p-12 py-16 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  准备好了吗？<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">攻克广州中考一模！</span>
                </h2>
                <p className="text-xl text-slate-500 mt-6 max-w-2xl leading-relaxed">
                  这里为你精选了 20 篇高难度、长篇幅的英语阅读理解，完全模拟真实考试难度与题型。通过深度训练，提升核心阅读素养。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">100 篇专项特训</h3>
                  <p className="text-slate-500 mt-2">每天2篇，50天持续训练。包含精选阅读及AI自适应生成的专属短文。</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">详细名师解析</h3>
                  <p className="text-slate-500 mt-2">每一题均配备深度解析，分析解题思路，查漏补缺。</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">真题难度对标</h3>
                  <p className="text-slate-500 mt-2">精准对标广州一模、中考难度梯度，逐步提高阅读素养。</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="z-10 text-center md:text-left">
                  <div className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2 italic">Ready to Start?</div>
                  <h3 className="text-3xl font-black">开始你的训练里程</h3>
                  <p className="text-slate-400 mt-2 text-lg">目前已完成 {completedCount} / {TOTAL_EXERCISES} 篇练习</p>
                </div>
                <button 
                  onClick={() => generateAndLoadExercise(completedCount < TOTAL_EXERCISES ? completedCount : 0)}
                  className="z-10 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group/btn"
                  disabled={isGenerating}
                >
                  {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : completedCount === 0 ? "开启第一篇" : "继续训练"} 
                  {!isGenerating && <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />}
                </button>
              </div>

              {/* Progress Detail Table */}
              {completedCount > 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <LayoutDashboard className="w-6 h-6 text-blue-600" />
                    训练历史
                  </h3>
                  <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden text-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50/50">
                          <th className="px-8 py-5 text-sm font-bold text-slate-400 uppercase tracking-wider">练习篇目</th>
                          <th className="px-8 py-5 text-sm font-bold text-slate-400 uppercase tracking-wider">难度</th>
                          <th className="px-8 py-5 text-sm font-bold text-slate-400 uppercase tracking-wider text-center">得分率</th>
                          <th className="px-8 py-5 text-sm font-bold text-slate-400 uppercase tracking-wider text-right">状态</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {Array.from({ length: TOTAL_EXERCISES }).map((_, idx) => {
                          const ex = getExercise(idx);
                          if (!ex || !submitted[ex.id]) return null;
                          const score = calculateScore(ex.id);
                          const total = ex.questions.length;
                          const percent = Math.round((score / total) * 100);
                          const isDynamic = idx >= staticExercises.length;
                          return (
                            <tr key={ex.id} className="hover:bg-slate-50/30 transition-colors group">
                              <td className="px-8 py-6">
                                <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => generateAndLoadExercise(idx)}>
                                  Passage {idx + 1}: {ex.topic} {isDynamic && <Sparkles className="w-4 h-4 text-amber-500 inline-block ml-1" />}
                                </div>
                                <div className="text-xs text-slate-400 mt-1">{ex.type}</div>
                              </td>
                              <td className="px-8 py-6">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                  ex.difficulty === '难' || ex.difficulty === '较难' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'
                                }`}>
                                  {ex.difficulty}
                                </span>
                              </td>
                              <td className="px-8 py-6">
                                <div className="flex flex-col items-center">
                                  <div className="text-lg font-black text-slate-800">{score} / {total}</div>
                                  <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                    <div 
                                      className={`h-full rounded-full ${percent === 100 ? 'bg-green-500' : percent >= 60 ? 'bg-blue-500' : 'bg-red-500'}`}
                                      style={{ width: `${percent}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-8 py-6 text-right">
                                <button 
                                  onClick={() => setCurrentExerciseIndex(idx)}
                                  className="text-blue-600 font-bold text-sm hover:underline"
                                >
                                  查看详情
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ) : exercise ? (
          /* Exercise view */
          <div className="w-full flex-1 flex flex-col overflow-hidden">
             {/* Header */}
             <div className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between flex-shrink-0 z-20 shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest italic">Exercise Mode</div>
                    <h2 className="text-xl font-black text-slate-900 truncate max-w-[400px]">Passage {currentExerciseIndex + 1}: {exercise.topic}</h2>
                  </div>
                  <div className="h-8 w-[1px] bg-slate-200"></div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg">
                      <FileText className="w-3.5 h-3.5" /> {exercise.type}
                    </span>
                    <span className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg ${
                      exercise.difficulty === '难' || exercise.difficulty === '较难' ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-500'
                    }`}>
                      <Target className="w-3.5 h-3.5" /> {exercise.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                   <button 
                     onClick={() => setCurrentExerciseIndex(null)}
                     className="px-5 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                   >
                     返回仪表盘
                   </button>
                   {isCurrentSubmitted && (
                     <div className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-slate-900/20">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        得分: {calculateScore(exercise.id)} / {exercise.questions.length}
                     </div>
                   )}
                </div>
             </div>

             <div className="flex-1 flex overflow-hidden bg-[#F1F5F9]/30">
               {/* Left Column: Passage */}
               <div className="w-[55%] flex-shrink-0 h-full overflow-y-auto custom-scrollbar px-6 lg:px-10 py-8 border-r border-slate-200">
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden"
                 >
                    <div className="p-8 text-[18px] leading-[1.8] text-slate-700 font-serif antialiased relative">
                      {loadingKeywords[exercise.id] && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                          <Loader2 className="w-3 h-3 animate-spin"/> 分析生词中...
                        </div>
                      )}
                      {exercise.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-6 indent-8 first-letter:text-2xl first-letter:font-bold first-letter:text-blue-600">
                          {renderPassageParagraph(paragraph, keywordsMap[exercise.id])}
                        </p>
                      ))}
                    </div>
                 </motion.div>
               </div>

               {/* Right Column: Questions */}
               <div className="flex-1 h-full overflow-y-auto custom-scrollbar px-6 py-8 bg-white/50 flex flex-col">
                 <div className="space-y-8 flex-1">
                    <div className="flex items-center justify-between">
                       <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                         <HelpCircle className="w-6 h-6 text-blue-600" />
                         题目内容
                       </h3>
                       {!isCurrentSubmitted && (
                         <div className="text-xs font-bold text-slate-400 italic">
                           已完成: {Object.keys(currentAnswers).length} / {exercise.questions.length}
                         </div>
                       )}
                    </div>

                    <div className="space-y-6">
                       {exercise.questions.map((q, idx) => {
                         const selectedAnswer = currentAnswers[q.id];
                         const isCorrect = selectedAnswer === q.correctAnswerIndex;
                         
                         return (
                           <motion.div 
                             key={q.id} 
                             initial={{ opacity: 0, x: -20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             className={`bg-white p-6 rounded-[2rem] shadow-sm border ${
                               isCurrentSubmitted 
                                ? isCorrect 
                                  ? 'border-green-100 ring-4 ring-green-500/5' 
                                  : 'border-red-100 ring-4 ring-red-500/5'
                                : 'border-slate-100 hover:border-slate-200 transition-colors'
                             }`}
                           >
                             <div className="font-bold text-[17px] mb-6 text-slate-900 flex items-start gap-4">
                               <span className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-400 rounded-xl flex items-center justify-center font-black italic text-sm">{idx + 1}</span>
                               <span className="mt-0.5 leading-snug">{q.text}</span>
                             </div>

                             <div className="grid grid-cols-1 gap-3">
                               {q.options.map((opt, optIdx) => {
                                 const isSelected = selectedAnswer === optIdx;
                                 const isTheCorrectOne = optIdx === q.correctAnswerIndex;
                                 
                                 let containerStyle = "border-slate-100 bg-[#F9FBFF]";
                                 let badgeStyle = "bg-white text-slate-400 border-slate-200";

                                 if (isSelected && !isCurrentSubmitted) {
                                   containerStyle = "border-blue-200 bg-blue-50 shadow-sm ring-1 ring-blue-500/10";
                                   badgeStyle = "bg-blue-600 text-white border-blue-600";
                                 } else if (isCurrentSubmitted) {
                                   if (isTheCorrectOne) {
                                      containerStyle = "border-green-300 bg-green-50 text-green-800 ring-1 ring-green-500/20";
                                      badgeStyle = "bg-green-600 text-white border-green-600";
                                   } else if (isSelected && !isCorrect) {
                                      containerStyle = "border-red-300 bg-red-50 text-red-800 ring-1 ring-red-500/20";
                                      badgeStyle = "bg-red-600 text-white border-red-600";
                                   } else {
                                      containerStyle = "border-slate-50 opacity-40 grayscale-[0.8]";
                                      badgeStyle = "bg-slate-100 text-slate-300 border-slate-100";
                                   }
                                 } else {
                                   containerStyle += " hover:bg-white hover:border-blue-200 hover:shadow-sm";
                                 }

                                 return (
                                   <button 
                                     key={optIdx}
                                     onClick={() => handleSelectAnswer(q.id, optIdx)}
                                     disabled={isCurrentSubmitted}
                                     className={`p-4 rounded-2xl border transition-all text-left flex items-center gap-3 group ${containerStyle}`}
                                   >
                                     <div className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg border font-black text-sm transition-all ${badgeStyle}`}>
                                       {String.fromCharCode(65 + optIdx)}
                                     </div>
                                     <span className="font-medium text-[14px] leading-tight">{opt}</span>
                                   </button>
                                 )
                               })}
                             </div>

                             {isCurrentSubmitted && (
                               <motion.div 
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: 'auto' }}
                                 className="mt-6 pt-6 border-t border-slate-100"
                               >
                                 <div className={`p-5 rounded-2xl flex items-start gap-4 ${isCorrect ? 'bg-green-50/50' : 'bg-red-50/50'}`}>
                                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                      {isCorrect ? <CheckCircle className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                                   </div>
                                   <div>
                                      <div className={`text-sm font-black uppercase tracking-widest ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                        {isCorrect ? '回答正确！' : '回答错误'}
                                      </div>
                                      <div className="mt-2 text-[#475569] font-serif leading-relaxed text-[14px]">
                                        <span className="font-black text-slate-900 bg-white px-2 py-0.5 rounded shadow-sm mr-2 italic border border-slate-100">Analysis</span> 
                                        {q.explanation}
                                      </div>
                                   </div>
                                 </div>
                               </motion.div>
                             )}
                           </motion.div>
                         );
                       })}
                    </div>
                 </div>

                 {/* Navigation footer in-content */}
                 <div className="pt-10 pb-6 flex flex-col xl:flex-row justify-between items-center gap-4">
                    <button 
                      onClick={() => {
                        const nextId = currentExerciseIndex - 1;
                        if (nextId >= 0) setCurrentExerciseIndex(nextId);
                      }}
                      disabled={currentExerciseIndex === 0}
                      className="w-full xl:w-auto flex justify-center items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
                    >
                      <ArrowLeft className="w-5 h-5" /> Previous
                    </button>
                    
                    {!isCurrentSubmitted ? (
                      <button 
                        onClick={handleSubmit}
                        className="w-full xl:w-auto flex justify-center items-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-base shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.03] active:scale-95 ring-4 ring-indigo-600/5 group"
                      >
                        Submit <CheckCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      </button>
                    ) : (
                      <button 
                        onClick={() => {
                          const nextId = currentExerciseIndex + 1;
                          if (nextId < TOTAL_EXERCISES) generateAndLoadExercise(nextId);
                          else setCurrentExerciseIndex(null);
                        }}
                        disabled={isGenerating}
                        className="w-full xl:w-auto flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-base shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.03] active:scale-95 ring-4 ring-blue-600/5 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? 'Generating...' : currentExerciseIndex === TOTAL_EXERCISES - 1 ? 'Finish' : 'Next'} 
                        {!isGenerating && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    )}
                 </div>
               </div>
             </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center h-full">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-6" />
            <h2 className="text-2xl font-black text-slate-900 mb-2">正在为你生成专属阅读...</h2>
            <p className="text-slate-500 max-w-md">
              AI正在根据教学大纲，精细编写适合九年级难度的高质量英文短文。这需要几秒钟的时间，请耐心等待。
            </p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E2E8F0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #CBD5E1;
        }
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&display=swap');
        font-serif {
          font-family: 'Crimson Pro', 'Noto Serif SC', serif;
        }
      `}} />
    </div>
  );
}

export default App;

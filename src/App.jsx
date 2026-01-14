'use client';

import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useMemo, useReducer, useState, useRef } from 'react';
import { 
  Brain, Share2, AlertTriangle, RefreshCw, Smartphone, 
  CheckCircle, XCircle, CheckSquare, Info, Link as LinkIcon 
} from 'lucide-react';
import { TRANSLATIONS } from './translations';

const QUESTIONS_META = [
  { point: 1 }, { point: 1 }, { point: 2 }, { point: 1 }, { point: 2 }, { point: 2 },
  { point: 1 }, { point: 2 }, { point: 2 }, { point: 2 }, { point: 1 }, { point: 2 }
];

const RESULTS_META = [
  { min: 0, color: "text-blue-400", border: "border-blue-500/50", bg: "from-blue-500/10", marker: "bg-blue-400" },
  { min: 4, color: "text-emerald-400", border: "border-emerald-500/50", bg: "from-emerald-500/10", marker: "bg-emerald-400" },
  { min: 8, color: "text-yellow-400", border: "border-yellow-500/50", bg: "from-yellow-500/10", marker: "bg-yellow-400" },
  { min: 12, color: "text-orange-500", border: "border-orange-500/50", bg: "from-orange-500/10", marker: "bg-orange-500" },
  { min: 16, color: "text-red-500", border: "border-red-500/50", bg: "from-red-500/10", marker: "bg-red-500" }
];

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'en';
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam && TRANSLATIONS[langParam]) return langParam;
  const shortLang = (navigator.language || 'en').split('-')[0];
  return TRANSLATIONS[shortLang] ? shortLang : 'en';
};

const ACTIONS = { START: 'START', ANSWER: 'ANSWER', LOADING_TICK: 'LOADING_TICK', RESET: 'RESET' };
const initialState = { step: 'start', currentQ: 0, score: 0, progress: 0, answers: [] };

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START: return { ...state, step: 'quiz' };
    case ACTIONS.ANSWER: {
      const { isYes, point, idx } = action.payload;
      if (typeof idx !== 'number' || idx < 0 || idx >= QUESTIONS_META.length) return state;
      const willCount = isYes && !state.answers.includes(idx);
      const nextAnswers = willCount ? [...state.answers, idx] : state.answers;
      const nextScore = willCount ? state.score + point : state.score;
      if (idx >= QUESTIONS_META.length - 1) return { ...state, answers: nextAnswers, score: nextScore, step: 'loading', progress: 0 };
      return { ...state, answers: nextAnswers, score: nextScore, currentQ: idx + 1 };
    }
    case ACTIONS.LOADING_TICK: {
      const next = state.progress + 2;
      return next >= 100 ? { ...state, progress: 100, step: 'result' } : { ...state, progress: next };
    }
    case ACTIONS.RESET: return { ...initialState };
    default: return state;
  }
}

export default function DopamineTest() {
  const [lang] = useState(getInitialLang());
  const t = useMemo(() => TRANSLATIONS[lang] || TRANSLATIONS.en, [lang]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedOption, setSelectedOption] = useState(null);
  const resultRef = useRef(null);

  const getDynamicCount = () => {
    const launchDate = new Date('2026-01-14T00:00:00').getTime(); 
    const now = new Date().getTime();
    const diffInSeconds = Math.max(0, Math.floor((now - launchDate) / 1000));
    return Math.floor(diffInSeconds / 400); 
  };

  const [participantCount, setParticipantCount] = useState(getDynamicCount());

  useEffect(() => {
    const interval = setInterval(() => setParticipantCount(getDynamicCount()), 10000);
    return () => clearInterval(interval);
  }, []);

  const initKakao = () => {
    if (typeof window !== 'undefined' && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('304d9d079f4f881ad2c17ae749aa7a39');
      }
    }
  };

  useEffect(() => { initKakao(); }, []);

  const MAX_SCORE = useMemo(() => QUESTIONS_META.reduce((sum, q) => sum + q.point, 0), []);
  const markerLeft = useMemo(() => (!MAX_SCORE ? 0 : Math.min(98, (state.score / MAX_SCORE) * 100)), [state.score, MAX_SCORE]);
  const top3Answers = useMemo(() => [...state.answers].sort((a, b) => (QUESTIONS_META[b]?.point || 0) - (QUESTIONS_META[a]?.point || 0)).slice(0, 3), [state.answers]);
  const resIdx = useMemo(() => {
    for (let i = RESULTS_META.length - 1; i >= 0; i--) { if (state.score >= RESULTS_META[i].min) return i; }
    return 0;
  }, [state.score]);

  const meta = RESULTS_META[resIdx];
  const trans = t.levels?.[resIdx] || { title: "...", label: "...", desc: "..." };

  useEffect(() => {
    if (state.step === 'loading') {
      const interval = setInterval(() => dispatch({ type: ACTIONS.LOADING_TICK }), 30);
      return () => clearInterval(interval);
    }
  }, [state.step]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(lang === 'ko' ? '링크가 복사되었습니다!' : 'Link copied!');
  };

  const shareViaWebAPI = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ 
          title: `도파민 테스트 결과: ${trans.title}`, 
          text: `제 도파민 민감도는 [${trans.label}]입니다. 여러분도 측정해보세요!`, 
          url: window.location.href 
        });
      } catch (e) { if (e.name !== 'AbortError') copyLink(); }
    } else { copyLink(); }
  };

  const shareToKakao = () => {
    initKakao();
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `내 도파민 결과: ${trans.title}`, 
          description: `제 민감도는 [${trans.label}] 수준이네요! 여러분의 패턴도 1분 만에 확인해보세요.`,
          imageUrl: 'https://dopamine-test-alpha.vercel.app/og-image.png',
          link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
        buttons: [{ title: '나도 테스트 하기', link: { mobileWebUrl: window.location.href, webUrl: window.location.href } }],
      });
    } else { shareViaWebAPI(); }
  };

  const shareSNS = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const resultText = `내 도파민 테스트 결과는 [${trans.title}]! 당신의 패턴은 어떤가요?`;
    const text = encodeURIComponent(resultText);

    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    else if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    else shareViaWebAPI();
  };

  const handleAnswerClick = (isYes) => {
    if (selectedOption !== null) return;
    setSelectedOption(isYes);
    const idx = state.currentQ;
    const point = QUESTIONS_META[idx]?.point ?? 0;
    if (typeof window !== 'undefined' && window.navigator?.vibrate) window.navigator.vibrate(15);
    setTimeout(() => {
      dispatch({ type: ACTIONS.ANSWER, payload: { isYes, point, idx } });
      setSelectedOption(null);
    }, 400);
  };

  const shareResultAsImage = async () => {
    try {
      const htmlToImage = await import('html-to-image');
      if (!resultRef.current) return;
      const dataUrl = await htmlToImage.toPng(resultRef.current, { backgroundColor: '#0a0a0a', pixelRatio: 2 });
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'result.png', { type: 'image/png' });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: t.start?.title2 ?? "Result" });
      } else {
        const link = document.createElement('a'); link.download = 'result.png'; link.href = dataUrl; link.click();
      }
    } catch (e) { alert(lang === 'ko' ? '캡처에 실패했습니다.' : 'Capture failed.'); }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans flex items-center justify-center">
      <div className="max-w-md w-full min-h-screen md:min-h-[auto] bg-neutral-950 md:bg-neutral-900/50 backdrop-blur-xl md:rounded-[3rem] shadow-2xl border-x border-neutral-800 overflow-hidden relative flex flex-col">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
        <div className="p-6 md:p-10 relative z-10 flex-1 flex flex-col justify-center">    

          {state.step === 'start' && (
            <div className="text-center space-y-10 animate-in fade-in zoom-in duration-300">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-neutral-800 rounded-full mb-2 ring-2 ring-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <Brain size={48} className="text-purple-400" />
              </div>
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold tracking-wider mb-2">{t.start?.sub}</div>
                <h1 className="text-3xl font-extrabold leading-tight text-white tracking-tight">{t.start?.title1}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{t.start?.title2}</span></h1>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap px-4">{t.start?.desc}</p>
              </div>
              <div className="pt-2"><p className="text-emerald-400 text-[13px] font-bold animate-pulse">현재 총 <span className="underline decoration-2 underline-offset-4">{participantCount.toLocaleString()}명</span>이 참여했습니다.</p></div>
              <div className="px-4"><button onClick={() => dispatch({ type: ACTIONS.START })} className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-5 rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-95 transition-all border border-purple-400/30 text-xl">{t.start?.btn}</button></div>
              <div className="flex justify-center gap-3 pt-8 pb-2 opacity-90">
                <button onClick={copyLink} className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors border border-neutral-700 shadow-lg active:scale-95"><LinkIcon size={20} className="text-gray-300"/></button>
                <button onClick={shareViaWebAPI} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg active:scale-95 overflow-hidden"><img src="/icons/Instagram_Glyph_Gradient.svg" alt="Instagram" className="w-7 h-7" /></button>
                <button onClick={() => shareSNS('facebook')} className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg active:scale-95 overflow-hidden"><img src="/icons/Facebook_Logo_Primary.png" alt="Facebook" className="w-full h-full object-cover" /></button>
                <button onClick={() => shareSNS('twitter')} className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg active:scale-95 border border-neutral-800"><img src="/icons/x_logo-white.png" alt="X" className="w-6 h-6 object-contain" /></button>
                <button onClick={shareToKakao} className="w-12 h-12 rounded-full bg-[#FEE500] flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg active:scale-95"><img src="/icons/kakaotalk_sharing_btn_small.png" alt="Kakao" className="w-7 h-7" /></button>
              </div>
            </div>
          )}

          {state.step === 'quiz' && (
            <div key={state.currentQ} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden"><div className="bg-purple-500 h-full transition-all duration-300" style={{ width: `${((state.currentQ + 1) / QUESTIONS_META.length) * 100}%` }} /></div>
              <div className="flex justify-between items-center text-xs text-gray-400 font-mono"><span>{t.quiz?.q_prefix} {state.currentQ + 1}</span><span>{QUESTIONS_META.length}</span></div>
              <div className="min-h-[140px] flex items-center justify-center"><h2 className="text-xl font-bold text-center break-keep leading-snug">{t.questions?.[state.currentQ]?.q}</h2></div>
              <div className="space-y-3">
                <button disabled={selectedOption !== null} onClick={() => handleAnswerClick(true)} className={`w-full border p-5 rounded-2xl flex justify-between items-center transition-all ${selectedOption === true ? 'bg-purple-500/30 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]' : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700'}`}><span className="font-semibold text-lg">{t.quiz?.yes}</span><CheckCircle className={selectedOption === true ? 'text-purple-400' : 'text-neutral-500'} size={24} /></button>
                <button disabled={selectedOption !== null} onClick={() => handleAnswerClick(false)} className={`w-full border p-5 rounded-2xl flex justify-between items-center transition-all ${selectedOption === false ? 'bg-blue-500/30 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'bg-neutral-800 border-neutral-700 hover:bg-neutral-700'}`}><span className="font-semibold text-lg">{t.quiz?.no}</span><XCircle className={selectedOption === false ? 'text-blue-400' : 'text-neutral-500'} size={24} /></button>
              </div>
            </div>
          )}

          {state.step === 'loading' && (
            <div className="text-center py-20 space-y-6 flex flex-col justify-center min-h-[400px] animate-in fade-in">
              <div className="relative w-24 h-24 mx-auto border-4 border-neutral-800 border-t-purple-500 rounded-full animate-spin"></div>
              <div className="space-y-2"><h2 className="text-2xl font-bold">{t.loading?.title}</h2><p className="text-gray-400 text-sm">{t.loading?.desc}</p></div>
            </div>
          )}

          {state.step === 'result' && (
            <div className="text-center space-y-6 animate-in fade-in duration-500 py-4 overflow-y-auto max-h-screen no-scrollbar">
              <div ref={resultRef} className="bg-neutral-950 rounded-3xl p-6 border border-neutral-800 relative">
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className={`text-xs font-black tracking-[0.2em] uppercase ${meta.color}`}>{t.result?.label} {trans.label}</span>
                    <h2 className={`text-4xl font-black mt-1 ${meta.color} drop-shadow-lg`}>{trans.title}</h2>
                  </div>
                  <div className="w-full bg-neutral-900 h-3 rounded-full overflow-hidden relative border border-neutral-800 flex">
                    {[0, 1, 2, 3, 4].map(i => <div key={i} className={`h-full flex-1 ${i <= resIdx ? meta.marker : 'bg-neutral-900'}`} />)}
                    <div className="absolute top-0 h-full w-1.5 bg-white transition-all duration-1000 ease-out z-10 shadow-[0_0_10px_white]" style={{ left: `${markerLeft}%` }} />
                  </div>
                </div>
                <div className={`bg-neutral-900/50 rounded-2xl p-5 border ${meta.border} text-left mt-6 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta.bg} to-transparent opacity-20 pointer-events-none`} />
                  <div className="relative z-10 flex items-start gap-3 text-base font-medium break-keep text-gray-200"><AlertTriangle className={`${meta.color} shrink-0 mt-1`} size={20} /><p>{trans.desc}</p></div>
                </div>
                <div className="text-left space-y-3 mt-8">
                  <div className="flex items-center gap-2 mb-1"><CheckSquare size={16} className="text-gray-400"/><div className="text-sm font-bold text-gray-400 tracking-wider uppercase">{t.result?.action_title}</div></div>
                  <div className="space-y-3">
                    {top3Answers.map((ansIdx, i) => (
                      <div key={i} className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs shrink-0 mt-0.5 border border-purple-500/30 font-bold">{i+1}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5"><span className="text-sm font-bold text-white leading-tight">{t.questions?.[ansIdx]?.title}</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 whitespace-nowrap font-medium">#{t.questions?.[ansIdx]?.cat}</span></div>
                          <p className="text-xs text-gray-400 leading-normal">{t.questions?.[ansIdx]?.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-900 text-center space-y-2">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-600"><Info size={12} /><span>{t.result?.disclaimer}</span></div>
                    <span className="text-[10px] text-neutral-700 font-bold tracking-widest uppercase block">Designed by Windvane</span>
                </div>
              </div>

              {/* ✨ 1. 친구들에게 결과 공유하기 (SNS 버튼 모음) */}
              <div className="space-y-4 pt-8 pb-4">
                <p className="text-sm text-gray-400 font-bold tracking-tight text-center">{t.result?.share_title}</p>
                <div className="flex justify-center gap-4">
                  <button onClick={copyLink} className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 shadow-lg active:scale-95"><LinkIcon size={20} className="text-gray-300"/></button>
                  <button onClick={shareResultAsImage} className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg active:scale-95 overflow-hidden"><img src="/icons/Instagram_Glyph_Gradient.svg" alt="Instagram" className="w-7 h-7" /></button>
                  <button onClick={() => shareSNS('facebook')} className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg active:scale-95 overflow-hidden"><img src="/icons/Facebook_Logo_Primary.png" alt="Facebook" className="w-full h-full object-cover" /></button>
                  <button onClick={() => shareSNS('twitter')} className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-neutral-800 shadow-lg active:scale-95"><img src="/icons/x_logo-white.png" alt="X" className="w-6 h-6 object-contain" /></button>
                  <button onClick={shareToKakao} className="w-12 h-12 rounded-full bg-[#FEE500] flex items-center justify-center shadow-lg active:scale-95"><img src="/icons/kakaotalk_sharing_btn_small.png" alt="Kakao" className="w-7 h-7" /></button>
                </div>
              </div>

              {/* 🎯 2. MINUS 앱 홍보 (인디고 강조 버튼) */}
              <a href="https://play.google.com/store/apps/details?id=com.peo.minus.habitoff" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl flex flex-col items-center gap-1 shadow-lg mt-4 transition-all active:scale-95 text-white">
                <span className="text-xs font-bold text-indigo-100">{t.result?.promo_sub}</span>
                <span className="text-base font-bold flex items-center gap-1"><Smartphone size={18}/> {t.result?.promo_btn}</span>
              </a>

              {/* 🔄 3. 다시하기 버튼 (최하단 유틸리티) */}
              <button onClick={() => dispatch({ type: ACTIONS.RESET })} className="w-full bg-neutral-800 hover:bg-neutral-700 text-gray-300 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 mt-3 transition-colors active:scale-95">
                <RefreshCw size={18} /> {t.result?.retry || "Retry"}
              </button>
            </div>
          )}
        </div>
      </div>
      <Analytics />
    </div>
  );
}
'use client';

import { Analytics } from '@vercel/analytics/react';
import React, { useEffect, useMemo, useReducer, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);
  const resultRef = useRef(null);
  const shareCardRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

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

  // HEX 컬러 매핑
  const LEVEL_HEX = ['#60a5fa', '#34d399', '#facc15', '#f97316', '#ef4444'];
  const levelHex = LEVEL_HEX[resIdx] || '#a855f7';

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

  const shareViaWebAPI = async (forceLink = false) => {
    const isResult = state.step === 'result' && !forceLink;
    const shareUrl = window.location.href;
    const shareTitle = t.start?.title2 || "도파민 습관 테스트";
    const shareText = isResult 
      ? `${t.result?.share_msg} [${trans.title}]${t.result?.share_suffix}`
      : t.start?.desc;

    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
      } catch (e) { if (e.name !== 'AbortError') copyLink(); }
    } else { copyLink(); }
  };

  const shareToKakao = () => {
    initKakao();
    if (!window.Kakao || !window.Kakao.isInitialized()) return shareViaWebAPI(true);
    const isResult = state.step === 'result';
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: isResult ? `내 도파민 결과: ${trans.title}` : t.start?.title2,
        description: isResult ? `${trans.desc.slice(0, 45)}...` : t.start?.desc,
        imageUrl: 'https://dopamine-test-alpha.vercel.app/og-image.png',
        link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
      },
      buttons: [{ title: isResult ? '나도 테스트 하기' : '테스트 시작하기', link: { mobileWebUrl: window.location.href, webUrl: window.location.href } }],
    });
  };

  const shareSNS = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const resultText = state.step === 'result' 
      ? `${t.result?.share_msg} [${trans.title}]${t.result?.share_suffix}`
      : t.start?.title2;
    const text = encodeURIComponent(resultText);

    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    else if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    else shareViaWebAPI(true);
  };

  // 📸 [핵심 수정] 이미지 생성 및 공유 로직 (안정성 최우선)
  const shareResultAsImage = async () => {
    let popup = null;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // 모바일 등에서 새 창 제어를 위해 미리 팝업을 엽니다.
    if (isMobile || !navigator.share) {
      popup = window.open('', '_blank');
      if (popup) {
        popup.document.write(`
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>이미지 생성 중...</title>
            </head>
            <body style="margin:0; background:#0a0a0a; display:flex; justify-content:center; align-items:center; height:100vh; color:white; font-family:sans-serif;">
              <div style="text-align:center;">
                <div style="margin-bottom:10px;">🎨</div>
                <div>이미지를 만들고 있어요...</div>
              </div>
            </body>
          </html>
        `);
      }
    }

    try {
      const htmlToImage = await import('html-to-image');
      if (!shareCardRef.current) return;

      // 1. DOM 안정화 대기
      await new Promise(r => setTimeout(r, 100));

      // 2. 폰트 로딩 대기
      if (document.fonts?.ready) await document.fonts.ready;
      await new Promise(r => requestAnimationFrame(r));
      await new Promise(r => requestAnimationFrame(r));

      // 3. 이미지 생성 (옵션 수정: cacheBust false, pixelRatio 조정)
      const dataUrl = await htmlToImage.toPng(shareCardRef.current, { 
        backgroundColor: '#0a0a0a', 
        pixelRatio: 2,         // 선명도 유지
        cacheBust: false,      // ❌ 중요: 로컬 이미지/아이콘 깨짐 방지 위해 끔
        skipAutoScale: true,   // 크기 변형 방지
      });
      
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'result.png', { type: 'image/png' });

      // [Case A] 네이티브 공유 (모바일 앱 등)
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        if (popup) popup.close(); // 공유 창 뜨면 대기화면 닫기
        await navigator.share({ 
          files: [file], 
          title: t.start?.title2, 
          text: `${t.result?.share_msg} [${trans.title}]`, 
          url: window.location.href 
        });
      } 
      // [Case B] 공유 불가 -> 미리 열어둔 팝업에 이미지 출력 (가장 확실한 방법)
      else if (popup) {
        // dataUrl 이동 대신 이미지를 직접 씁니다 (about:blank 방지)
        popup.document.body.innerHTML = `
          <div style="background:#0a0a0a; width:100%; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; box-sizing:border-box;">
            <img src="${dataUrl}" style="max-width:100%; height:auto; border-radius:12px; box-shadow:0 0 20px rgba(0,0,0,0.5);" alt="Result" />
            <p style="color:#888; font-size:12px; margin-top:20px; font-family:sans-serif;">이미지를 꾹 눌러 저장하세요</p>
          </div>
        `;
      } 
      // [Case C] PC 등 나머지 -> 다운로드 트리거
      else {
        const link = document.createElement('a'); 
        link.download = 'result.png'; 
        link.href = dataUrl; 
        link.click();
      }

    } catch (e) { 
      console.error(e);
      if (popup) popup.close();
      alert(lang === 'ko' ? '이미지 생성에 실패했습니다.' : 'Failed to generate image.'); 
    }
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

  // 🖼️ [핵심 수정] 캡처용 카드 (가장 안전한 스타일링: absolute + left:-9999px + opacity:1)
  const CaptureCard = (
    <div 
      ref={shareCardRef} 
      style={{
        // 화면 밖으로 보내되, '투명'하지 않게 설정 (중요)
        position: 'absolute',
        left: '-9999px',  
        top: '0px',
        width: '400px',
        
        // 투명도 1이어야 캡처 라이브러리가 내용을 그립니다.
        opacity: 1,      
        
        zIndex: -1,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        backgroundColor: '#0a0a0a',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      }} 
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span style={{ fontSize: '14px', fontWeight: '900', color: levelHex, letterSpacing: '0.1em' }}>
          {t.result?.label} {trans.label}
        </span>
        <h2 style={{ fontSize: '38px', fontWeight: '900', marginTop: '8px', color: '#fff' }}>{trans.title}</h2>
        <div style={{ width: '100%', height: '12px', background: '#171717', borderRadius: '999px', marginTop: '20px', position: 'relative', overflow: 'hidden', border: '1px solid #262626' }}>
          <div style={{ position: 'absolute', left: `${markerLeft}%`, height: '100%', width: '4px', background: 'white', boxShadow: '0 0 10px white', zIndex: 10 }} />
          <div style={{ display: 'flex', height: '100%' }}>
            {[0, 1, 2, 3, 4].map(i => <div key={i} style={{ flex: 1, background: i <= resIdx ? '#a855f7' : '#171717', borderRight: '1px solid #0a0a0a' }} />)}
          </div>
        </div>
      </div>

      <div style={{ background: 'rgba(23, 23, 23, 0.5)', padding: '20px', borderRadius: '20px', border: '1px solid #262626', marginBottom: '30px', textAlign: 'left' }}>
        <p style={{ fontSize: '16px', lineHeight: '1.6', wordBreak: 'keep-all' }}>{trans.desc}</p>
      </div>

      <div style={{ textAlign: 'left' }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#737373', marginBottom: '15px', letterSpacing: '0.05em' }}>{t.result?.action_title}</div>
        {top3Answers.map((ansIdx, i) => (
          <div key={i} style={{ background: '#171717', padding: '15px', borderRadius: '15px', border: '1px solid #262626', marginBottom: '12px', display: 'flex', gap: '12px' }}>
            <div style={{ width: '24px', height: '24px', background: 'rgba(168, 85, 247, 0.2)', color: '#a855f7', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', flexShrink: 0 }}>{i+1}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px', wordBreak: 'keep-all' }}>{t.questions?.[ansIdx]?.title}</div>
              <p style={{ fontSize: '12px', color: '#a3a3a3', lineHeight: '1.4', wordBreak: 'keep-all' }}>{t.questions?.[ansIdx]?.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '12px', opacity: 0.4 }}>dopamine-test-alpha.vercel.app</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans flex items-center justify-center">
      <div className="max-w-md w-full min-h-screen md:min-h-[auto] bg-neutral-950 md:bg-neutral-900/50 backdrop-blur-xl md:rounded-[3rem] shadow-2xl border-x border-neutral-800 overflow-hidden relative flex flex-col">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
        <div className="p-6 md:p-10 relative z-10 flex-1 flex flex-col justify-center">    

          {state.step === 'start' && (
            <div className="text-center space-y-10 animate-in fade-in zoom-in duration-300">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-neutral-800 rounded-full mb-2 ring-2 ring-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]"><Brain size={48} className="text-purple-400" /></div>
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-xs font-bold tracking-wider mb-2">{t.start?.sub}</div>
                <h1 className="text-3xl font-extrabold leading-tight text-white tracking-tight">{t.start?.title1}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{t.start?.title2}</span></h1>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap px-4">{t.start?.desc}</p>
              </div>
              <div className="pt-2"><p className="text-emerald-400 text-[13px] font-bold animate-pulse">현재 총 <span className="underline decoration-2 underline-offset-4">{participantCount.toLocaleString()}명</span>이 참여했습니다.</p></div>
              <div className="px-4"><button onClick={() => dispatch({ type: ACTIONS.START })} className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-5 rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-95 border border-purple-400/30 text-xl">{t.start?.btn}</button></div>
              <div className="flex justify-center gap-3 pt-8 pb-2 opacity-90">
                <button onClick={copyLink} className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 active:scale-95"><LinkIcon size={20} className="text-gray-300"/></button>
                <button onClick={() => shareViaWebAPI(true)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center active:scale-95 overflow-hidden"><img src="/icons/Instagram_Glyph_Gradient.svg" alt="Instagram" className="w-7 h-7" /></button>
                <button onClick={() => shareSNS('facebook')} className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center active:scale-95 overflow-hidden"><img src="/icons/Facebook_Logo_Primary.png" alt="Facebook" className="w-full h-full object-cover" /></button>
                <button onClick={() => shareSNS('twitter')} className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-neutral-800 active:scale-95"><img src="/icons/x_logo-white.png" alt="X" className="w-6 h-6 object-contain" /></button>
                <button onClick={shareToKakao} className="w-12 h-12 rounded-full bg-[#FEE500] flex items-center justify-center active:scale-95"><img src="/icons/kakaotalk_sharing_btn_small.png" alt="Kakao" className="w-7 h-7" /></button>
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

          {state.step === 'loading' && ( <div className="text-center py-20 space-y-6 flex flex-col justify-center min-h-[400px] animate-in fade-in"><div className="relative w-24 h-24 mx-auto border-4 border-neutral-800 border-t-purple-500 rounded-full animate-spin"></div><div className="space-y-2"><h2 className="text-2xl font-bold">{t.loading?.title}</h2><p className="text-gray-400 text-sm">{t.loading?.desc}</p></div></div> )}

          {state.step === 'result' && (
            <div className="text-center space-y-6 animate-in fade-in duration-500 py-4 overflow-y-auto max-h-screen no-scrollbar">
              <div ref={resultRef} className="bg-neutral-950 rounded-3xl p-6 border border-neutral-800 relative">
                <div className="space-y-4 text-center">
                  <span className={`text-xs font-black tracking-[0.2em] uppercase ${meta.color}`}>{t.result?.label} {trans.label}</span>
                  <h2 className={`text-4xl font-black mt-1 ${meta.color} drop-shadow-lg`}>{trans.title}</h2>
                  <div className="w-full bg-neutral-900 h-3 rounded-full overflow-hidden relative border border-neutral-800 flex">
                    {[0, 1, 2, 3, 4].map(i => <div key={i} className={`h-full flex-1 ${i <= resIdx ? meta.marker : 'bg-neutral-900'}`} />)}
                    <div className="absolute top-0 h-full w-1.5 bg-white z-10 shadow-[0_0_10px_white]" style={{ left: `${markerLeft}%` }} />
                  </div>
                </div>
                <div className={`bg-neutral-900/50 rounded-2xl p-5 border ${meta.border} text-left mt-6 relative overflow-hidden`}><div className={`absolute inset-0 bg-gradient-to-br ${meta.bg} to-transparent opacity-20`} /><div className="relative z-10 flex items-start gap-3 text-base font-medium text-gray-200"><AlertTriangle className={`${meta.color} shrink-0 mt-1`} size={20} /><p>{trans.desc}</p></div></div>
                <div className="text-left space-y-3 mt-8">
                  <div className="flex items-center gap-2 mb-1"><CheckSquare size={16} className="text-gray-400"/><div className="text-sm font-bold text-gray-400 tracking-wider uppercase">{t.result?.action_title}</div></div>
                  {top3Answers.map((ansIdx, i) => ( <div key={i} className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-4 flex items-start gap-3"><div className="w-6 h-6 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs shrink-0 mt-0.5 border border-purple-500/30 font-bold">{i+1}</div><div className="flex-1 min-w-0"><div className="flex flex-wrap items-center gap-2 mb-1.5"><span className="text-sm font-bold text-white leading-tight">{t.questions?.[ansIdx]?.title}</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">#{t.questions?.[ansIdx]?.cat}</span></div><p className="text-xs text-gray-400 leading-normal">{t.questions?.[ansIdx]?.desc}</p></div></div> ))}
                </div>
                <div className="mt-8 pt-4 border-t border-neutral-900 text-center space-y-2"><div className="flex items-center justify-center gap-1.5 text-xs text-gray-600"><Info size={12} /><span>{t.result?.disclaimer}</span></div><div className="py-1 px-3 bg-neutral-900 rounded-full inline-block border border-neutral-800"><span className="text-[10px] text-purple-400 font-mono tracking-tighter text-center block">dopamine-test-alpha.vercel.app</span></div><span className="text-[10px] text-neutral-700 font-bold tracking-widest uppercase block text-center">Designed by Windvane</span></div>
              </div>

              <div className="space-y-4 pt-8 pb-4 text-center">
                <p className="text-sm text-gray-400 font-bold tracking-tight">{t.result?.share_title}</p>
                <div className="flex justify-center gap-4">
                  <button onClick={copyLink} className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 active:scale-95"><LinkIcon size={20} className="text-gray-300"/></button>
                  <button onClick={shareResultAsImage} className="w-12 h-12 rounded-full bg-white flex items-center justify-center active:scale-95 overflow-hidden"><img src="/icons/Instagram_Glyph_Gradient.svg" alt="Instagram" className="w-7 h-7" /></button>
                  <button onClick={() => shareSNS('facebook')} className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center active:scale-95 overflow-hidden"><img src="/icons/Facebook_Logo_Primary.png" alt="Facebook" className="w-full h-full object-cover" /></button>
                  <button onClick={() => shareSNS('twitter')} className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-neutral-800 active:scale-95"><img src="/icons/x_logo-white.png" alt="X" className="w-6 h-6 object-contain" /></button>
                  <button onClick={shareToKakao} className="w-12 h-12 rounded-full bg-[#FEE500] flex items-center justify-center active:scale-95"><img src="/icons/kakaotalk_sharing_btn_small.png" alt="Kakao" className="w-7 h-7" /></button>
                </div>
              </div>

              <a href="https://play.google.com/store/apps/details?id=com.peo.minus.habitoff" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl flex flex-col items-center gap-1 active:scale-95 text-white shadow-lg"><span className="text-xs font-bold text-indigo-100">{t.result?.promo_sub}</span><span className="text-base font-bold flex items-center gap-1"><Smartphone size={18}/> {t.result?.promo_btn}</span></a>
              <button onClick={() => dispatch({ type: ACTIONS.RESET })} className="w-full bg-neutral-800 hover:bg-neutral-700 text-gray-300 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 mt-3 active:scale-95"><RefreshCw size={18} /> {t.result?.retry || "Retry"}</button>
            </div>
          )}
        </div>
      </div>
      <Analytics />
      {/* ✅ Portal: body 직속으로 렌더링 */}
      {mounted && createPortal(CaptureCard, document.body)}
    </div>
  );
}
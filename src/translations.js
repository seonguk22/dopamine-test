export const TRANSLATIONS = {
  ko: {
    start: { 
      sub: "1분 정밀 검사", 
      title1: "나는 도파민 중독일까?", 
      title2: "도파민 중독 테스트", 
      desc: "숏폼, 충동구매, 뇌 과부하... 당신의 도파민 중독 지수를 1분 만에 확인해 보세요.", 
      btn: "테스트 시작하기", 
      tags: ["1분 소요", "익명 검사", "즉시 결과 확인"] 
    },
    quiz: { yes: "그렇다", no: "아니다", q_prefix: "질문" },
    loading: { 
      title: "중독 수치를 분석 중...", 
      desc: "뇌의 자극 민감도와 중독 루프를 정밀하게 확인하고 있어요." 
    },
    result: { 
      label: "도파민 중독 지수", 
      action_title: "중독 탈출을 위한 액션 플랜 3", 
      share_title: "✨ 친구들에게 결과 공유하기", 
      share_msg: "내 도파민 중독 레벨은", 
      share_suffix: "! 당신의 상태도 점검해보세요.", 
      disclaimer: "이 테스트는 자기 점검용이며 의학적 진단이 아닙니다.", 
      promo_sub: "더 강력한 해결책이 필요하다면?", 
      promo_btn: "MINUS 앱으로 중독 끊기", 
      retry: "다시하기", 
      share: "결과 공유" 
    },
    questions: [
      { q: "최근 2주 동안, 기상 후 5분 안에 스마트폰을 확인한 적이 있다.", cat: "수면/기상", title: "기상 후 10분 무폰", desc: "알람 끄자마자 앱을 열기 대신, 물 한 잔으로 시작해보세요." },
      { q: "최근 2주 동안, 알림이 오면 하던 일을 멈추고 바로 확인한 적이 있다.", cat: "집중력", title: "알림은 필수만", desc: "알림이 많을수록 집중이 잘게 쪼개져요. 꼭 필요한 것만 남기세요." },
      { q: "최근 2주 동안, 숏폼을 1시간 이상 연속으로 본 적이 있다.", cat: "디지털 습관", title: "숏폼 진입장벽 올리기", desc: "앱을 첫 화면에서 빼고, 사용 시간 제한을 설정해보세요." },
      { q: "최근 2주 동안, 식사나 이동 중에 영상이 없으면 허전하다고 느낀 적이 있다.", cat: "멀티태스킹", title: "온전한 감각에 집중", desc: "식사할 때는 맛에, 걸을 때는 풍경에 집중해 뇌를 쉬게 하세요." },
      { q: "최근 2주 동안, 영상을 보면서 쇼핑/SNS 같은 다른 앱도 같이 본 적이 있다.", cat: "뇌 과부하", title: "한 번에 하나만 하기", desc: "영상 볼 때는 영상만. 뇌에게 한 번에 하나의 정보만 주세요." },
      { q: "최근 2주 동안, 할 일을 미루고 게임/영상 등 자극적인 것을 먼저 찾은 적이 있다.", cat: "미루기", title: "2분 착수 법칙", desc: "시작이 어렵습니다. 딱 2분만 하고 멈춘다는 생각으로 시작하세요." },
      { q: "최근 2주 동안, 특별한 목적 없이 무심코 SNS/커뮤니티 앱을 켠 적이 있다.", cat: "무의식", title: "아이콘 위치 바꾸기", desc: "손이 기억하는 위치에서 앱을 치워 무의식적 접근을 막으세요." },
      { q: "최근 2주 동안, 스트레스를 충동구매나 자극적인 음식으로 푼 적이 있다.", cat: "충동 조절", title: "대체 보상 정하기", desc: "결제 대신 8분 산책 등 몸을 움직이는 대체 행동을 하세요." },
      { q: "최근 2주 동안, 대화 중이나 회의 중에도 몰래 폰을 확인한 적이 있다.", cat: "관계", title: "폰 뒤집어 두기", desc: "사람과 있을 때는 폰을 가방에 넣어 눈앞의 대화에 집중하세요." },
      { q: "최근 2주 동안, 자기 전 스마트폰을 보느라 예정보다 늦게 잠든 적이 있다.", cat: "수면", title: "취침 30분 전 로그아웃", desc: "침대에는 폰을 가져가지 마세요. 수면의 질이 내일을 결정합니다." },
      { q: "최근 2주 동안, 폰 배터리가 없거나 폰이 안 보이면 불안하다고 느낀 적이 있다.", cat: "금단 증상", title: "의도적인 거리두기", desc: "아주 짧은 시간부터 폰 없이 외출하는 연습을 시작해보세요." },
      { q: "최근 2주 동안, 이동/대기 시간에 폰 없이 가만히 있는 게 힘들다고 느낀 적이 있다.", cat: "뇌 휴식", title: "심심함 연습하기", desc: "하루 5분만 폰 없이 가만히 앉아 자극을 찾는 습관을 줄여보세요." }
    ],
    levels: [
      { title: "도파민 청정 상태 🟦", label: "매우 낮음", desc: "자극에 휘둘리지 않고 뇌의 건강한 리듬을 유지하고 있습니다." },
      { title: "안정적 몰입 상태 🟩", label: "낮음", desc: "전반적으로 양호합니다. 가끔의 디지털 디톡스면 충분합니다." },
      { title: "중독 초기 단계 🟨", label: "주의", desc: "무의식적인 폰 사용이 늘고 있습니다. 지금 조절하지 않으면 위험합니다." },
      { title: "심각한 중독 구간 🟧", label: "높음", desc: "뇌가 강한 자극에만 반응합니다. 즉시 의도적인 디톡스가 필요합니다." },
      { title: "위험: 뇌 과부하 🟥", label: "매우 높음", desc: "도파민 수용체가 무뎌진 상태입니다. 전문가 수준의 환경 통제가 필수적입니다." }
    ]
  },
  en: {
    start: { 
      sub: "1-min Clinical Check", 
      title1: "Are you addicted?", 
      title2: "Dopamine Addiction Test", 
      desc: "Check your dopamine addiction level and reclaim your focus in 1 minute.", 
      btn: "Start Assessment", 
      tags: ["1 min", "Anonymous", "Instant Result"] 
    },
    quiz: { yes: "Yes", no: "No", q_prefix: "Question" },
    loading: { 
      title: "Analyzing addiction level...", 
      desc: "Identifying your digital addiction loops." 
    },
    result: { 
      label: "Addiction Index", 
      action_title: "3 Action Plans to Break the Loop", 
      share_title: "✨ Share with friends", 
      share_msg: "My Addiction Level:", 
      share_suffix: "! Check yours now.", 
      disclaimer: "Self-assessment only.", 
      promo_sub: "Need a more powerful solution?", 
      promo_btn: "Start MINUS App", 
      retry: "Retry", 
      share: "Share Result" 
    },
    questions: [
      { q: "In the past 2 weeks, checked phone within 5 mins of waking up?", cat: "Sleep", title: "10-min Phone-free Wakeup", desc: "Start with water instead of apps." },
      { q: "In the past 2 weeks, stopped tasks to check notifications?", cat: "Focus", title: "Essential Alerts Only", desc: "Keep only critical alerts to maintain focus." },
      { q: "In the past 2 weeks, watched short-form for over an hour straight?", cat: "Habit", title: "Barrier for Shorts", desc: "Move apps off home screen or set limits." },
      { q: "In the past 2 weeks, felt uneasy eating without a video?", cat: "Sensory", title: "Focus on Real Senses", desc: "Try focusing on taste or scenery while walking." },
      { q: "In the past 2 weeks, used other apps while watching videos?", cat: "Overload", title: "One Task at a Time", desc: "Give your brain only one source of info." },
      { q: "In the past 2 weeks, prioritized games over urgent tasks?", cat: "Delay", title: "2-Minute Rule", desc: "Just start for 2 minutes. Starting is hardest." },
      { q: "In the past 2 weeks, opened social apps unconsciously?", cat: "Habit", title: "Change Icon Positions", desc: "Break muscle memory by moving your app icons." },
      { q: "In the past 2 weeks, used shopping for stress?", cat: "Impulse", title: "Alternative Rewards", desc: "Try an 8-min walk instead of spending." },
      { q: "In the past 2 weeks, checked phone secretly during meetings?", cat: "Social", title: "Phone Face Down", desc: "Put it away to focus on the person in front." },
      { q: "In the past 2 weeks, delayed sleep because of phone usage?", cat: "Sleep", title: "Logout 30 mins Before Bed", desc: "No phones in bed for better sleep quality." },
      { q: "In the past 2 weeks, felt anxious when phone is away?", cat: "Withdrawal", title: "Intentional Distance", desc: "Practice leaving your phone for short errands." },
      { q: "In the past 2 weeks, hard to stay still without a phone?", cat: "Brain Reset", title: "Practice Being Bored", desc: "Sit for 5 mins daily without re-stimulation." }
    ],
    levels: [
      { title: "Clean Zone 🟦", label: "Very Low", desc: "You maintain a healthy rhythm without being swayed." },
      { title: "Stable Focus 🟩", label: "Low", desc: "Well-balanced. Just keep an eye on your fatigue." },
      { title: "Addiction Alert 🟨", label: "Warning", desc: "Unconscious phone usage is increasing. Time to adjust." },
      { title: "Over-Stimulated 🟧", label: "High", desc: "Brain is used to instant rewards. Needs detox." },
      { title: "Reset Required 🟥", label: "Very High", desc: "Willpower isn't enough. You need app-blocking." }
    ]
  },
  ja: {
    start: { sub: "1分診断", title1: "依存度は？", title2: "習慣チェックテスト", desc: "日常を邪魔するパターンを1分でチェックしましょう。", btn: "診断を始める", tags: ["1分で完了", "収集なし", "即時診断"] },
    quiz: { yes: "はい", no: "いいえ", q_prefix: "質問" },
    loading: { title: "パターン分析中...", desc: "あなたのデジタル習慣を特定しています。" },
    result: { label: "感受性", action_title: "今日から実践すべき3つの行動", share_title: "✨ 友達に結果を共有する", share_msg: "私のドーパミン診断結果は", share_suffix: "！ あなたのパターンもチェックしてみてください。", disclaimer: "この診断は自己チェック用です。", promo_sub: "もっと強力な対策が必要なら？", promo_btn: "MINUSアプリを試す", retry: "やり直す", share: "結果を共有" },
    questions: [
      { q: "起床後5分以内にスマホをチェックしたことがありますか？", cat: "睡眠", title: "起床後10分ノー・スマホ", desc: "アプリの代わりに、まず一杯の水から始めましょう。" },
      { q: "通知が来るとすぐに確認してしまいますか？", cat: "集中力", title: "通知は必須のみに", desc: "通知を最小限にして、深い集中を守りましょう。" },
      { q: "ショート動画を1時間以上連続で見ましたか？", cat: "習慣", title: "動画視聴への障壁", desc: "アプリをホームから外し、制限時間を設定しましょう。" },
      { q: "動画がないと食事や移動が寂しいと感じますか？", cat: "五感", title: "五感に集中する", desc: "食べる時は味に、歩く時は景色に集中しましょう。" },
      { q: "動画を見ながら他のアプリを使いましたか？", cat: "過負荷", title: "一度に一つだけ", desc: "脳に一度に一つの情報だけを与える練習を。" },
      { q: "やるべきことを後回しにして動画を見ましたか？", cat: "遅延", title: "2分着手法則", desc: "まず2分だけと決めて、一歩を踏み出しましょう。" },
      { q: "目的なく無意識にアプリを開きましたか？", cat: "無意識", title: "配置の変更", desc: "無意識な起動を防ぐため、配置を入れ替えましょう。" },
      { q: "ストレスを買い物や刺激物で解消しましたか？", cat: "衝動", title: "代替のご褒美", desc: "決済の代わりに8分の散歩などを選んでください。" },
      { q: "会話中や会議中にこっそりスマホを見ましたか？", cat: "関係", title: "スマホを伏せておく", desc: "人といる時はスマホをしまい、会話に集中しましょう。" },
      { q: "スマホのせいで夜更かしをしましたか？", cat: "睡眠", title: "就寝30分前に終了", desc: "ベッドにスマホを持ち込まず、質を高めましょう。" },
      { q: "スマホがないと不安を感じましたか？", cat: "禁断", title: "意図的な距離置き", desc: "スマホなしの短い外出から練習してください。" },
      { q: "スマホなしで待つのが苦痛でしたか？", cat: "脳", title: "退屈に慣れる練習", desc: "1日5分、刺激なしで座る習慣が脳をリセットします。" }
    ],
    levels: [
      { title: "クリーンゾーン 🟦", label: "非常に低い", desc: "自分のリズムを維持できています。今の調子で！" },
      { title: "安定した没入型 🟩", label: "低い", desc: "全体的にバランスが取れています。体調管理に気を。" },
      { title: "ドーパミン注意報 🟨", label: "注意", desc: "無意識な使用が増えています。環境を整える時期です。" },
      { title: "刺激過多ゾーン 🟧", label: "高い", desc: "脳が即時快楽に慣れています。デトックスが必要です。" },
      { title: "環境調整が必須 🟥", label: "非常に高い", desc: "意志だけでは困難です。アプリ制限が必要です。" }
    ]
  },
  de: {
    start: { sub: "1-Min-Check", title1: "Dopamin-Muster?", title2: "Gewohnheits-Test", desc: "Überprüfe deinen Fokus in nur 1 Minute.", btn: "Starten", tags: ["1 Min.", "Kein Tracking", "Ergebnis"] },
    quiz: { yes: "Ja", no: "Nein", q_prefix: "Frage" },
    loading: { title: "Wird analysiert...", desc: "Identifiziere deine digitalen Gewohnheiten." },
    result: { label: "Sensibilität", action_title: "3 Pläne für heute", share_title: "✨ Ergebnis mit Freunden teilen", share_msg: "Mein Dopamin-Ergebnis:", share_suffix: "! Teste auch dein Muster.", disclaimer: "Nur zur Selbsteinschätzung.", promo_sub: "Stärkere Lösung?", promo_btn: "MINUS App", retry: "Wiederholen", share: "Teilen" },
    questions: [
      { q: "Handy innerhalb von 5 Min. nach dem Aufwachen gecheckt?", cat: "Schlaf", title: "10 Min. handyfrei", desc: "Starte mit Wasser statt mit Apps." },
      { q: "Aufgaben unterbrochen, um Mitteilungen zu prüfen?", cat: "Fokus", title: "Nur Wichtiges", desc: "Deaktiviere Unwichtiges für tiefen Fokus." },
      { q: "Über eine Stunde am Stück Shorts geschaut?", cat: "Digital", title: "Barrieren für Shorts", desc: "Setze Zeitlimits für diese Apps." },
      { q: "Unwohl ohne Video beim Essen gefühlt?", cat: "Sinne", title: "Fokus auf Sinne", desc: "Genieße bewusst den Geschmack beim Essen." },
      { q: "Gleichzeitig gesurft, während Videos liefen?", cat: "Überlast", title: "Eins nach dem anderen", desc: "Gib dem Gehirn nur eine Infoquelle." },
      { q: "Aufgaben für Spiele/Videos aufgeschoben?", cat: "Aufschieben", title: "2-Minuten-Regel", desc: "Fange einfach für 2 Minuten an." },
      { q: "Unbewusst Social Apps ohne Zweck geöffnet?", cat: "Unbewusst", title: "Icons verschieben", desc: "Verschiebe Icons, um Routinen zu brechen." },
      { q: "Shopping oder Essen gegen Stress genutzt?", cat: "Impuls", title: "Ersatz-Belohnung", desc: "Probiere 8 Min Gehen statt Kaufen." },
      { q: "Handy heimlich bei Meetings gecheckt?", cat: "Beziehung", title: "Handy weglegen", desc: "Konzentriere dich auf dein Gegenüber." },
      { q: "Schlaf durch Smartphone verzögert?", cat: "Schlaf", title: "Logout vor dem Bett", desc: "Handy raus aus dem Schlafzimmer." },
      { q: "Unruhig ohne Handy gefühlt?", cat: "Entzug", title: "Bewusste Distanz", desc: "Übe Erledigungen ohne Smartphone." },
      { q: "Schwer beim Warten ohne Handy stillzusitzen?", cat: "Reset", title: "Langeweile üben", desc: "5 Min ohne Reize resetten das Gehirn." }
    ],
    levels: [
      { title: "Saubere Zone 🟦", label: "Sehr niedrig", desc: "Gute Arbeit! Sie behalten Ihren Rhythmus bei." },
      { title: "Stabiler Fokus 🟩", label: "Niedrig", desc: "Allgemein ausgewogen. Achten Sie auf sich." },
      { title: "Dopamin-Warnung 🟨", label: "Warnung", desc: "Unbewusstes Checken nimmt zu. Zeit für Anpassung." },
      { title: "Überstimuliert 🟧", label: "Hoch", desc: "Gehirn ist an Reize gewöhnt. Detox nötig." },
      { title: "Reset erforderlich 🟥", label: "Sehr hoch", desc: "Wille allein reicht nicht. Sperre nötig." }
    ]
  },
  es: {
    start: { sub: "Test de 1 min", title1: "¿Tu patrón?", title2: "Test de hábitos", desc: "Analiza tu enfoque en 1 min.", btn: "Iniciar", tags: ["1 min", "Sin rastreo", "Resultado"] },
    quiz: { yes: "Sí", no: "No", q_prefix: "Pregunta" },
    loading: { title: "Analizando...", desc: "Identificando tus bucles." },
    result: { label: "Sensibilidad", action_title: "3 planes para hoy", share_title: "✨ Comparte el resultado con amigos", share_msg: "Mi resultado de dopamina:", share_suffix: "! ¡Prueba el tuyo también!", disclaimer: "Solo autoevaluación.", promo_sub: "¿Buscas algo más fuerte?", promo_btn: "App MINUS", retry: "Reintentar", share: "Compartir" },
    questions: [
      { q: "¿Miraste el móvil tras despertar?", cat: "Sueño", title: "10 min sin móvil", desc: "Empieza con agua en lugar de apps." },
      { q: "¿Interrumpes tareas por notificaciones?", cat: "Foco", title: "Alertas críticas", desc: "Mantén solo lo esencial." },
      { q: "¿Viste videos cortos por más de una hora?", cat: "Digital", title: "Barreras a los videos", desc: "Pon límites a estas apps." },
      { q: "¿Te sientes inquieto si comes sin videos?", cat: "Sentidos", title: "Foco en los sentidos", desc: "Céntrate en el sabor al comer." },
      { q: "¿Usas redes viendo videos?", cat: "Carga", title: "Una tarea a la vez", desc: "Dale a tu cerebro solo una fuente." },
      { q: "¿Pospones tareas por juegos/videos?", cat: "Demora", title: "Regla de 2 min", desc: "Empieza por solo 2 min." },
      { q: "¿Abres redes inconscientemente?", cat: "Hábitos", title: "Cambia iconos", desc: "Mueve apps para romper la rutina." },
      { q: "¿Compras o comes por estrés?", cat: "Impulso", title: "Premios alternativos", desc: "Pasea 8 min en vez de gastar." },
      { q: "¿Miras el móvil en reuniones?", cat: "Relación", title: "Móvil boca abajo", desc: "Céntrate en los demás." },
      { q: "¿Retrasas sueño por el móvil?", cat: "Sueño", title: "Desconecta antes", desc: "Sin móvil en la cama." },
      { q: "¿Ansioso si no ves el móvil?", cat: "Ansia", title: "Distancia planeada", desc: "Sal sin móvil para recados." },
      { q: "¿Cuesta estar quieto sin móvil?", cat: "Reset", title: "Practica el aburrimiento", desc: "5 min al día para resetear." }
    ],
    levels: [
      { title: "Zona Limpia 🟦", label: "Muy baja", desc: "Mantienes un ritmo saludable." },
      { title: "Enfoque Estable 🟩", label: "Baja", desc: "Equilibrado. Vigila tu cansancio." },
      { title: "Alerta 🟨", label: "Aviso", desc: "Miras el móvil sin querer." },
      { title: "Sobreestimulado 🟧", label: "Alta", desc: "Necesitas un detox digital." },
      { title: "Reinicio 🟥", label: "Muy alta", desc: "Usa bloqueo de aplicaciones." }
    ]
  },
  fr: {
    start: { sub: "Test de 1 min", title1: "Votre profil ?", title2: "Test d'habitudes", desc: "Vérifiez votre concentration en 1 min.", btn: "Démarrer", tags: ["1 min", "Anonyme", "Résultat"] },
    quiz: { yes: "Oui", no: "Non", q_prefix: "Question" },
    loading: { title: "Analyse...", desc: "Identification de vos habitudes." },
    result: { label: "Sensibilité", action_title: "3 actions aujourd'hui", share_title: "✨ Partager avec vos amis", share_msg: "Mon résultat dopamine :", share_suffix: "! Testez le vôtre aussi.", disclaimer: "Auto-évaluation uniquement.", promo_sub: "Solution plus forte ?", promo_btn: "App MINUS", retry: "Réessayer", share: "Partager" },
    questions: [
      { q: "Vérifié votre tel après le réveil ?", cat: "Sommeil", title: "10 min sans tel", desc: "Commencez par un verre d'eau." },
      { q: "Interrompu vos tâches pour notifs ?", cat: "Focus", title: "Alertes critiques", desc: "Gardez l'essentiel pour rester concentré." },
      { q: "Regardé des shorts plus d'une heure ?", cat: "Digital", title: "Barrières aux vidéos", desc: "Mettez des limites sur ces apps." },
      { q: "Mal à l'aise de manger sans vidéo ?", cat: "Sens", title: "Focus sur les sens", desc: "Ciblez le goût en marchant." },
      { q: "Utilisé apps sociales en voyant des vidéos ?", cat: "Charge", title: "Une tâche à la fois", desc: "Une seule info à votre cerveau." },
      { q: "Priorisé jeux/vidéos sur le travail ?", cat: "Retard", title: "Règle des 2 minutes", desc: "Commencez juste 2 min." },
      { q: "Ouvert réseaux sociaux sans but ?", cat: "Habitude", title: "Changez les icônes", desc: "Cassez la routine." },
      { q: "Shopping ou piment pour le stress ?", cat: "Impulsion", title: "Récompenses alternatives", desc: "Marchez 8 min plutôt que de dépenser." },
      { q: "Vérifié tel en secret en réunion ?", cat: "Relation", title: "Tel face cachée", desc: "Écoutez votre interlocuteur." },
      { q: "Retardé sommeil avec smartphone ?", cat: "Sommeil", title: "Déconnexion avant le lit", desc: "Pas de tel au lit." },
      { q: "Anxieux quand le tel est loin ?", cat: "Sevrage", title: "Distance voulue", desc: "Sortez sans tel." },
      { q: "Dur de rester immobile sans tel ?", cat: "Reset", title: "Pratiquer l'ennui", desc: "5 min/jour sans tel." }
    ],
    levels: [
      { title: "Zone Propre 🟦", label: "Très basse", desc: "Bravo ! Vous gardez un rythme sain." },
      { title: "Focus Stable 🟩", label: "Basse", desc: "Équilibré. Surveillez votre fatigue." },
      { title: "Alerte 🟨", label: "Avertissement", desc: "Vous consultez sans y penser." },
      { title: "Surstimulé 🟧", label: "Haute", desc: "Détox requise." },
      { title: "Reset Nécessaire 🟥", label: "Très haute", desc: "Bloquez les apps." }
    ]
  },
  pt: {
    result: { label: "Sensibilidade", action_title: "3 ações para hoje", share_title: "✨ Partilhar com amigos", share_msg: "Meu resultado de dopamina:", share_suffix: "! Teste o seu também.", disclaimer: "Apenas autoavaliação.", promo_sub: "Algo mais forte?", promo_btn: "App MINUS", retry: "Repetir", share: "Partilhar" },
    start: { sub: "Teste 1 min", title1: "¿Padrão?", title2: "Teste de hábitos", desc: "Veja seu foco em 1 min.", btn: "Iniciar", tags: ["1 min", "Sem dados", "Resultado"] },
    quiz: { yes: "Sim", no: "Não", q_prefix: "Pergunta" },
    loading: { title: "Analisando...", desc: "Identificando seus ciclos." },
    questions: [
      { q: "Checou celular logo após acordar?", cat: "Sono", title: "10 min sem celular", desc: "Comece com água." },
      { q: "Parou tarefas para ver notificações?", cat: "Foco", title: "Apenas alertas críticos", desc: "Mantenha o essencial." },
      { q: "Viu vídeos curtos por mais de uma hora?", cat: "Digital", title: "Barreiras para vídeos", desc: "Ponha limites." },
      { q: "Mal ao comer sem vídeo?", cat: "Sentido", title: "Foco nos sentidos", desc: "Foque no sabor ao comer." },
      { q: "Apps sociais enquanto via vídeos?", cat: "Sobrecarga", title: "Uma tarefa por vez", desc: "Dê apenas uma info." },
      { q: "Adiou tarefas por jogos/vídeos?", cat: "Atraso", title: "Regra dos 2 min", desc: "Comece por 2 min." },
      { q: "Abriu redes sem querer?", cat: "Hábito", title: "Mude ícones", desc: "Quebre a rotina." },
      { q: "Comprou ou comeu por estresse?", cat: "Impulsivo", title: "Prêmios alternativos", desc: "Caminhe 8 min." },
      { q: "Celular escondido em reuniões?", cat: "Relação", title: "Virado para baixo", desc: "Foque em quem está na frente." },
      { q: "Atrasou sono pelo celular?", cat: "Sono", title: "Desconecte antes", desc: "Sem celular na cama." },
      { q: "Ansioso se celular está longe?", cat: "Abstinência", title: "Distância planejada", desc: "Saia sem celular." },
      { q: "Difícil ficar parado sem celular?", cat: "Reset", title: "Pratique o tédio", desc: "Sente-se 5 min/dia." }
    ],
    levels: [
      { title: "Zona Limpa 🟦", label: "Muito baixa", desc: "Mantém um ritmo saudável." },
      { title: "Foco Estável 🟩", label: "Baixa", desc: "Equilibrado. Cuide do cansaço." },
      { title: "Aviso 🟨", label: "Atenção", desc: "Checa sem notar." },
      { title: "Superestimulado 🟧", label: "Alta", desc: "Precisa de detox." },
      { title: "Reset Necessário 🟥", label: "Muito alta", desc: "Bloqueie os apps." }
    ]
  },
  id: {
    result: { label: "Sensitivitas", action_title: "3 Rencana Hari Ini", share_title: "✨ Bagikan ke teman", share_msg: "Hasil Dopamin saya:", share_suffix: "! Cek polamu juga.", disclaimer: "Hanya penilaian diri.", promo_sub: "Butuh yang lebih kuat?", promo_btn: "App MINUS", retry: "Coba Lagi", share: "Bagikan" },
    start: { sub: "Tes 1 Menit", title1: "Pola Anda?", title2: "Tes Kebiasaan", desc: "Cek fokus Anda dalam 1 menit.", btn: "Mulai", tags: ["1 menit", "Tanpa data", "Instan"] },
    quiz: { yes: "Ya", no: "Tidak", q_prefix: "Pertanyaan" },
    loading: { title: "Menganalisis...", desc: "Mencari pola digital Anda." },
    questions: [
      { q: "Cek HP dalam 5 menit setelah bangun?", cat: "Tidur", title: "10 Menit Tanpa HP", desc: "Mulai dengan air." },
      { q: "Cek notif saat sedang bekerja?", cat: "Fokus", title: "Notif Penting Saja", desc: "Aktifkan peringatan darurat." },
      { q: "Nonton video pendek sejam lebih?", cat: "Kebiasaan", title: "Batasi Video Pendek", desc: "Pasang timer." },
      { q: "Gelisah makan tanpa video?", cat: "Indra", title: "Fokus pada Rasa", desc: "Rasakan makanan." },
      { q: "Belanja online sambil nonton?", cat: "Beban Otak", title: "Satu Tugas Saja", desc: "Beri otak satu info." },
      { q: "Tunda tugas demi game/video?", cat: "Penundaan", title: "Aturan 2 Menit", desc: "Mulai 2 menit saja." },
      { q: "Buka medsos tanpa sadar?", cat: "Bawah Sadar", title: "Pindah Posisi Ikon", desc: "Acak posisi ikon." },
      { q: "Belanja saat stres?", cat: "Impuls", title: "Cari Hadiah Lain", desc: "Jalan kaki 8 menit." },
      { q: "Cek HP diam-diam saat rapat?", cat: "Relasi", title: "Balik Layar HP", desc: "Fokus pada lawan bicara." },
      { q: "Kurang tidur gara-gara HP?", cat: "Tidur", title: "Matikan Sebelum Tidur", desc: "Jangan bawa HP ke kasur." },
      { q: "Gelisah saat baterai low?", cat: "Kecanduan", title: "Jarak Sengaja", desc: "Keluar tanpa HP." },
      { q: "Susah diam tanpa HP?", cat: "Reset Otak", title: "Latihan Bosan", desc: "Diam 5 menit tanpa HP." }
    ],
    levels: [
      { title: "Zona Bersih 🟦", label: "Sangat rendah", desc: "Anda menjaga ritme sehat." },
      { title: "Fokus Stabil 🟩", label: "Rendah", desc: "Cukup seimbang." },
      { title: "Waspada 🟨", label: "Peringatan", desc: "Cek HP tanpa sadar." },
      { title: "Over-Stimulasi 🟧", label: "Tinggi", desc: "Butuh detoks." },
      { title: "Butuh Reset 🟥", label: "Sangat tinggi", desc: "Blokir aplikasi." }
    ]
  },
  hi: {
    result: { label: "संवेदनशीलता", action_title: "3 एक्शन प्लान", share_title: "✨ दोस्तों के साथ साझा करें", share_msg: "मेरा डोपामीन परिणाम:", share_suffix: "! आप भी अपना पैटर्न चेक करें।", disclaimer: "केवल आत्म-मूल्यांकन के लिए.", promo_sub: "ठोस समाधान चाहिए?", promo_btn: "MINUS ऐप", retry: "फिर से", share: "शेयर" },
    start: { sub: "1 मिनट टेस्ट", title1: "पैटर्न?", title2: "आदत टेस्ट", desc: "1 मिनट में फोकस चेक करें.", btn: "शुरू करें", tags: ["1 मिनट", "कोई डेटा नहीं", "तुरंत"] },
    quiz: { yes: "हाँ", no: "नहीं", q_prefix: "प्रश्न" },
    loading: { title: "विश्लेषण...", desc: "आदतों की पहचान हो रही है." },
    questions: [
      { q: "जागने के 5 मिनट के भीतर फोन देखा?", cat: "नींद", title: "10 मिनट फोन-मुक्त", desc: "पानी से शुरुआत करें." },
      { q: "काम रोककर नोटिफिकेशन देखा?", cat: "फोकस", title: "जरूरी अलर्ट ही", desc: "अलर्ट कम रखें." },
      { q: "लगातार एक घंटे से ज्यादा वीडियो देखे?", cat: "आदत", title: "वीडियो पर नियंत्रण", desc: "समय सीमा तय करें." },
      { q: "बिना वीडियो के खाना अजीब लगा?", cat: "इंद्रियां", title: "स्वाद पर ध्यान दें", desc: "स्वाद का आनंद लें." },
      { q: "वीडियो के साथ शॉपिंग की?", cat: "ओवरलोड", title: "एक समय में एक काम", desc: "एक ही जानकारी दें." },
      { q: "काम के बजाय वीडियो देखे?", cat: "देरी", title: "2-मिनट का नियम", desc: "2 मिनट के लिए शुरू करें." },
      { q: "अनजाने में सोशल ऐप खोले?", cat: "आदत", title: "आइकन की जगह बदलें", desc: "पुरानी आदत तोड़ें." },
      { q: "तनाव में शॉपिंग की?", cat: "आवेग", title: "विकल्प चुनें", desc: "खर्च के बजाय टहलें." },
      { q: "मीटिंग में चोरी-छिपे फोन देखा?", cat: "रिश्ते", title: "फोन उल्टा रखें", desc: "सामने वाले पर ध्यान दें." },
      { q: "फोन की वजह से नींद में देरी?", cat: "नींद", title: "सोने से पहले बंद", desc: "बिस्तर से दूर रखें." },
      { q: "बैटरी कम होने पर बेचैनी?", cat: "लत", title: "जानबूझकर दूरी", desc: "बिना फोन बाहर जाएं." },
      { q: "बिना फोन के ऊब महसूस हुई?", cat: "दिमाग रीसेट", title: "ऊबने का अभ्यास", desc: "5 मिनट बिना फोन बैठें." }
    ],
    levels: [
      { title: "क्लीन ज़ोन 🟦", label: "बहुत कम", desc: "शानदार! आप अच्छी लय में हैं." },
      { title: "स्थिर फोकस 🟩", label: "कम", desc: "संतुलित रहे." },
      { title: "डोपामीन अलर्ट 🟨", label: "चेतावनी", desc: "अनजाने में फोन देख रहे हैं." },
      { title: "अति-उत्तेजित 🟧", label: "ज्यादा", desc: "डिटॉक्स करें." },
      { title: "रीसेट जरूरी 🟥", label: "बहुत ज्यादा", desc: "ऐप्स को ब्लॉक करें." }
    ]
  },
  it: {
    result: { label: "Sensibilità", action_title: "3 piani per oggi", share_title: "✨ Condividi con gli amici", share_msg: "Il mio risultato dopamina:", share_suffix: "! Controlla anche il tuo.", disclaimer: "Solo autovalutazione.", promo_sub: "Soluzione più forte?", promo_btn: "App MINUS", retry: "Riprova", share: "Condividi" },
    start: { sub: "Test di 1 min", title1: "Profilo?", title2: "Test abitudini", desc: "Verifica il tuo focus in 1 min.", btn: "Inizia", tags: ["1 min", "Nessun dato", "Risultato"] },
    quiz: { yes: "Sì", no: "No", q_prefix: "Domanda" },
    loading: { title: "Analisi...", desc: "Identificazione abitudini." },
    questions: [
      { q: "Controllato tel al risveglio?", cat: "Sonno", title: "10 min senza tel", desc: "Inizia con acqua." },
      { q: "Interrotto compiti per notifs?", cat: "Focus", title: "Solo critiche", desc: "Tieni l'essenziale." },
      { q: "Video brevi per più di un'ora?", cat: "Digital", title: "Barriere ai video", desc: "Metti dei limiti." },
      { q: "Disagio a mangiare senza video?", cat: "Sensi", title: "Focus sui sensi", desc: "Gusta il cibo." },
      { q: "App sociali guardando video?", cat: "Carico", title: "Un compito alla volta", desc: "Solo una fonte." },
      { q: "Rimandato compiti per video?", cat: "Ritardo", title: "Regola 2 min", desc: "Inizia per 2 min." },
      { q: "Aperto social senza motivo?", cat: "Inconscio", title: "Sposta icone", desc: "Rompi la routine." },
      { q: "Shopping o cibo per stress?", cat: "Impulso", title: "Premi alternativi", desc: "Cammina 8 min." },
      { q: "Tel nascosto in riunione?", cat: "Relazione", title: "Faccia in giù", desc: "Ascolta chi hai di fronte." },
      { q: "Ritardato sonno con tel?", cat: "Sonno", title: "Sconnetti prima", desc: "Niente tel a letto." },
      { q: "Ansia se il tel è lontano?", cat: "Astinenza", title: "Distanza pianificata", desc: "Esci senza tel." },
      { q: "Difficile stare senza tel?", cat: "Reset", title: "Pratica la noia", desc: "5 min senza tel." }
    ],
    levels: [
      { title: "Zona Pulita 🟦", label: "Molto bassa", desc: "Mantieni un ritmo sano." },
      { title: "Focus Stabile 🟩", label: "Bassa", desc: "Equilibrado." },
      { title: "Allerta 🟨", label: "Avviso", desc: "Controlli senza accorgerti." },
      { title: "Sovrastimolato 🟧", label: "Alta", desc: "Serve detox." },
      { title: "Reset 🟥", label: "Molto alta", desc: "Blocca le app." }
    ]
  }
};
// translations.js
export const TRANSLATIONS = {
  ko: {
    start: { sub: "1분 자가 점검", title1: "내 도파민 패턴은?", title2: "도파민 습관 테스트", desc: "숏폼, 충동구매, 미루기... 일상을 방해하는 패턴을 1분 만에 점검해 보세요.", btn: "테스트 시작하기", tags: ["1분 소요", "개인정보 수집 없음", "결과 바로 확인"] },
    quiz: { yes: "그렇다", no: "아니다", q_prefix: "질문" },
    loading: { title: "패턴을 분석 중...", desc: "당신의 습관 패턴을 정밀하게 확인하고 있어요." },
    result: { label: "자극 민감도", action_title: "바로 실행할 행동 3가지", disclaimer: "이 테스트는 자기 점검용이며 의학적 진단이 아닙니다.", promo_sub: "더 강력한 해결책이 필요하다면?", promo_btn: "MINUS 앱 시작하기", retry: "다시하기", share: "결과 공유" },
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
      { title: "도파민 청정 구역 🟦", label: "매우 낮음", desc: "자극에 크게 휘둘리지 않고 본인만의 리듬을 잘 유지하고 계시네요." },
      { title: "안정적인 몰입형 🟩", label: "낮음", desc: "전반적으로 균형이 잘 잡혀 있습니다. 컨디션 관리에만 신경 써주세요." },
      { title: "도파민 주의보 🟨", label: "주의", desc: "집중력이 자주 끊기고 무의식적으로 폰을 찾는 횟수가 늘고 있습니다." },
      { title: "자극 과다 구간 🟧", label: "높음", desc: "즉각적인 보상에 뇌가 많이 익숙해져 있어요. 의도적인 디톡스가 필요합니다." },
      { title: "환경 조정 필수 🟥", label: "매우 높음", desc: "강한 자극에 대한 갈망이 커져 있어 의지만으로는 조절이 어려울 수 있습니다." }
    ]
  },
  en: {
    start: { sub: "1-min Assessment", title1: "Your Dopamine Pattern?", title2: "Dopamine Habit Test", desc: "Check your focus patterns in just 1 minute.", btn: "Start Test", tags: ["1 min", "No data collection", "Instant result"] },
    quiz: { yes: "Yes", no: "No", q_prefix: "Question" },
    loading: { title: "Analyzing patterns...", desc: "Identifying your digital habit loops." },
    result: { label: "Sensitivity", action_title: "3 Action Plans for Today", disclaimer: "Self-assessment only.", promo_sub: "Need a more powerful solution?", promo_btn: "Start MINUS App", retry: "Retry", share: "Share Result" },
    questions: [
      { q: "In the past 2 weeks, have you checked your phone within 5 mins of waking up?", cat: "Sleep", title: "10-min Phone-free Wakeup", desc: "Start with water instead of apps." },
      { q: "In the past 2 weeks, have you stopped tasks to check notifications?", cat: "Focus", title: "Essential Alerts Only", desc: "Keep only critical alerts to maintain focus." },
      { q: "In the past 2 weeks, have you watched short-form content for over an hour straight?", cat: "Habit", title: "Barrier for Shorts", desc: "Move apps off the home screen or set limits." },
      { q: "In the past 2 weeks, have you felt uneasy eating without a video?", cat: "Sensory", title: "Focus on Real Senses", desc: "Try focusing on taste or scenery while walking." },
      { q: "In the past 2 weeks, have you used other apps while watching videos?", cat: "Overload", title: "One Task at a Time", desc: "Give your brain only one source of info." },
      { q: "In the past 2 weeks, have you prioritized games over urgent tasks?", cat: "Delay", title: "2-Minute Rule", desc: "Just start for 2 minutes. Starting is the hardest." },
      { q: "In the past 2 weeks, have you opened social apps unconsciously?", cat: "Habit", title: "Change Icon Positions", desc: "Break muscle memory by moving your app icons." },
      { q: "In the past 2 weeks, have you used shopping for stress?", cat: "Impulse", title: "Alternative Rewards", desc: "Try an 8-min walk instead of spending." },
      { q: "In the past 2 weeks, have you checked your phone secretly during meetings?", cat: "Social", title: "Phone Face Down", desc: "Put it away to focus on the person in front." },
      { q: "In the past 2 weeks, have you delayed sleep because of late-night phone usage?", cat: "Sleep", title: "Logout 30 mins Before Bed", desc: "No phones in bed for better sleep quality." },
      { q: "In the past 2 weeks, have you felt anxious when the phone is away?", cat: "Withdrawal", title: "Intentional Distance", desc: "Practice leaving your phone for short errands." },
      { q: "In the past 2 weeks, has it been hard to stay still without a phone?", cat: "Brain Reset", title: "Practice Being Bored", desc: "Sit for 5 mins daily without re-stimulation." }
    ],
    levels: [
      { title: "Clean Zone 🟦", label: "Very Low", desc: "You maintain a healthy rhythm without being swayed." },
      { title: "Stable Focus 🟩", label: "Low", desc: "Well-balanced. Just keep an eye on your fatigue." },
      { title: "Dopamine Alert 🟨", label: "Warning", desc: "Unconscious phone usage is increasing. Time to adjust." },
      { title: "Over-Stimulated 🟧", label: "High", desc: "Brain is used to instant rewards. Needs detox." },
      { title: "Reset Required 🟥", label: "Very High", desc: "Willpower isn't enough. You need app-blocking." }
    ]
  },
  ja: {
    start: { sub: "1分診断", title1: "あなたの依存度は？", title2: "習慣チェックテスト", desc: "日常を邪魔する習慣を1分でチェックしましょう。", btn: "診断を始める", tags: ["1分で完了", "個人情報収集なし", "即時診断"] },
    quiz: { yes: "はい", no: "いいえ", q_prefix: "質問" },
    loading: { title: "パターン分析中...", desc: "あなたのデジタル習慣を特定しています." },
    result: { label: "感受性", action_title: "今日から実践すべき3つの行動", disclaimer: "この診断は自己チェック用です.", promo_sub: "もっと強力な対策が必要なら？", promo_btn: "MINUSアプリを試す", retry: "やり直す", share: "結果を共有" },
    questions: [
      { q: "直近2週間で、起床後5分以内にスマホをチェックしましたか？", cat: "睡眠", title: "起床後10分ノー・スマホ", desc: "アプリの代わりに、まず一杯の水から始めましょう." },
      { q: "直近2週間で、通知が来るとすぐに確認してしまいますか？", cat: "集中力", title: "通知は必須のみに", desc: "通知를 最小限にして、深い集中を守りましょう." },
      { q: "直近2週間で、ショート動画を1時間以上連続で見ましたか？", cat: "デジタル習慣", title: "動画視聴への障벽", desc: "アプリをホームから外し、制限時間を設定しましょう." },
      { q: "直近2週間で、動画がないと食事や移動が寂しいと感じますか？", cat: "五感", title: "感覚に集中する", desc: "食べる時は味に、歩く時は景色に集中しましょう." },
      { q: "直近2週間で、動画を見ながら他のアプリを使いましたか？", cat: "過負荷", title: "一度に一つだけ", desc: "脳に一度に一つの情報だけを与える練習を." },
      { q: "直近2週間で、やるべきことを後回しにして動画を見ましたか？", cat: "遅延", title: "2分着手法則", desc: "まず2分だけと決めて、最初の一歩を踏み出しましょう." },
      { q: "直近2週間で、目的なく無意識にアプリを開きましたか？", cat: "無意識", title: "アイコン配置の変更", desc: "無意識な起動を防ぐため、配置を入れ替えましょう." },
      { q: "直近2週間で、ストレスを買い物や刺激物で解消しましたか？", cat: "衝動", title: "代替のご褒美", desc: "決済の代わりに8分の散歩などを選んでください." },
      { q: "直近2週間で、会話中や会議中にこっそりスマホを見ましたか？", cat: "関係", title: "スマホを伏せておく", desc: "人といる時はスマホをしまい、会話に集中しましょう." },
      { q: "直近2週間で、スマホのせいで夜更かしをしましたか？", cat: "睡眠", title: "就寝30分前に終了", desc: "ベッドにスマホを持ち込まず、質を高めましょう." },
      { q: "直近2週間で、スマホがないと不安を感じましたか？", cat: "禁断", title: "意図的な距離置き", desc: "スマホなしの短い外出から練習してください." },
      { q: "直近2週間で、スマホなしで待つのが苦痛でしたか？", cat: "脳", title: "退屈に慣れる練習", desc: "1日5分、スマホなしで座る習慣が脳をリセットします." }
    ],
    levels: [
      { title: "クリーンゾーン 🟦", label: "非常に低い", desc: "自分のリズムを維持できています. 今の調子で！" },
      { title: "安定した集中型 🟩", label: "低い", desc: "全体的にバランスが取れています. 体調管理に気を. " },
      { title: "ドーパミン注意報 🟨", label: "注意", desc: "無意識な使用が増えています. 環境を整える時期です." },
      { title: "刺激過多区間 🟧", label: "高い", desc: "脳が即時快楽に慣れています. デトックスが必要です." },
      { title: "リセット必須 🟥", label: "非常に高い", desc: "意志だけでは困難です. アプリ制限が必要です." }
    ]
  },
  de: {
    start: { sub: "1-Min-Check", title1: "Dopamin-Muster?", title2: "Gewohnheits-Test", desc: "Überprüfe deinen Fokus in nur 1 Minute.", btn: "Starten", tags: ["1 Min.", "Kein Tracking", "Ergebnis"] },
    quiz: { yes: "Ja", no: "Nein", q_prefix: "Frage" },
    loading: { title: "Wird analysiert...", desc: "Identifiziere deine digitalen Gewohnheiten." },
    result: { label: "Sensibilität", action_title: "3 Pläne für heute", disclaimer: "Nur zur Selbsteinschätzung.", promo_sub: "Stärkere Lösung?", promo_btn: "MINUS App", retry: "Wiederholen", share: "Teilen" },
    questions: [
      { q: "In den letzten 2 Wochen innerhalb von 5 Min. nach dem Aufwachen das Handy gecheckt?", cat: "Schlaf", title: "10 Min. handyfrei", desc: "Starten Sie mit Wasser statt mit Apps." },
      { q: "In den letzten 2 Wochen Aufgaben sofort unterbrochen, um Mitteilungen zu prüfen?", cat: "Fokus", title: "Nur Wichtiges", desc: "Deaktivieren Sie Unwichtiges für tiefen Fokus." },
      { q: "In den letzten 2 Wochen über eine Stunde am Stück Shorts geschaut?", cat: "Digital", title: "Barrieren für Shorts", desc: "Setzen Sie Zeitlimits für diese Apps." },
      { q: "In den letzten 2 Wochen unwohl ohne Video beim Essen gefühlt?", cat: "Sinne", title: "Fokus auf Sinne", desc: "Genießen Sie bewusst den Geschmack beim Essen." },
      { q: "In den letzten 2 Wochen gleichzeitig gesurft, während Videos liefen?", cat: "Überlast", title: "Eins nach dem anderen", desc: "Geben Sie dem Gehirn nur eine Infoquelle." },
      { q: "In den letzten 2 Wochen Aufgaben für Spiele/Videos aufgeschoben?", cat: "Aufschieben", title: "2-Minuten-Regel", desc: "Fangen Sie einfach für 2 Minuten an." },
      { q: "In den letzten 2 Wochen unbewusst Social Apps ohne Zweck geöffnet?", cat: "Unbewusst", title: "Icons verschieben", desc: "Verschieben Sie Icons, um Routinen zu brechen." },
      { q: "In den letzten 2 Wochen Shopping oder Essen gegen Stress genutzt?", cat: "Impuls", title: "Ersatz-Belohnung", desc: "Probieren Sie 8 Min Gehen statt Kaufen." },
      { q: "In den letzten 2 Wochen Handy heimlich bei Meetings gecheckt?", cat: "Beziehung", title: "Handy weglegen", desc: "Konzentrieren Sie sich auf Ihr Gegenüber." },
      { q: "In den letzten 2 Wochen Schlaf durch Smartphone verzögert?", cat: "Schlaf", title: "Logout vor dem Bett", desc: "Handy raus aus dem Schlafzimmer für Qualität." },
      { q: "In den letzten 2 Wochen unruhig ohne Handy oder bei leerem Akku gefühlt?", cat: "Entzug", title: "Bewusste Distanz", desc: "Üben Sie Erledigungen ohne Smartphone." },
      { q: "In den letzten 2 Wochen schwer beim Warten ohne Handy stillzusitzen gefunden?", cat: "Reset", title: "Langeweile üben", desc: "5 Min ohne Reize resetten das Gehirn." }
    ],
    levels: [
      { title: "Saubere Zone 🟦", label: "Sehr niedrig", desc: "Gute Arbeit! Sie behalten Ihren Rhythmus bei." },
      { title: "Stabiler Fokus 🟩", label: "Niedrig", desc: "Allgeme인 ausgewogen. Achten Sie auf sich." },
      { title: "Dopamin-Warnung 🟨", label: "Warnung", desc: "Unbewusstes Checken nimmt zu. Zeit für Anpassung." },
      { title: "Überstimuliert 🟧", label: "Hoch", desc: "Gehirn ist an Reize gewöhnt. Detox nötig." },
      { title: "Reset erforderlich 🟥", label: "Sehr hoch", desc: "Wille allein reicht nicht. Sperre nötig." }
    ]
  },
  es: {
    start: { sub: "Test de 1 min", title1: "¿Tu patrón de dopamina?", title2: "Test de hábitos", desc: "Analiza tu enfoque en solo 1 minuto.", btn: "Iniciar", tags: ["1 min", "Sin rastreo", "Resultado"] },
    quiz: { yes: "Sí", no: "No", q_prefix: "Pregunta" },
    loading: { title: "Analizando...", desc: "Identificando tus bucles digitales." },
    result: { label: "Sensibilidad", action_title: "3 planes para hoy", disclaimer: "Solo autoevaluación.", promo_sub: "¿Buscas algo más fuerte?", promo_btn: "App MINUS", retry: "Reintentar", share: "Compartir" },
    questions: [
      { q: "En las últimas 2 semanas, ¿miraste el móvil tras despertar?", cat: "Sueño", title: "10 min sin móvil al despertar", desc: "Empieza con agua en lugar de con apps." },
      { q: "En las últimas 2 semanas, ¿interrumpes tareas por notificaciones?", cat: "Foco", title: "Alertas críticas", desc: "Mantén solo lo esencial para tu enfoque." },
      { q: "En las últimas 2 semanas, ¿viste videos cortos por más de una hora?", cat: "Digital", title: "Barreras a los videos", desc: "Quita las apps del inicio o pon límites." },
      { q: "En las últimas 2 semanas, ¿te sientes inquieto si comes sin videos?", cat: "Sentidos", title: "Foco en los sentidos", desc: "Céntrate en el sabor mientras comes." },
      { q: "En las últimas 2 semanas, ¿usas apps sociales viendo videos?", cat: "Carga", title: "Una tarea a la vez", desc: "Dale a tu cerebro solo una fuente." },
      { q: "En las últimas 2 semanas, ¿pospones tareas por juegos/videos?", cat: "Demora", title: "Regla de 2 minutos", desc: "Solo empieza por 2 min. Haz lo difícil." },
      { q: "En las últimas 2 semanas, ¿abres redes inconscientemente?", cat: "Hábitos", title: "Cambia iconos", desc: "Mueve tus apps para romper la rutina." },
      { q: "En las últimas 2 semanas, ¿compras o comes por estrés?", cat: "Impulso", title: "Premios alternativos", desc: "Prueba pasear 8 min en vez de gastar." },
      { q: "En las últimas 2 semanas, ¿miras el móvil en reuniones?", cat: "Relación", title: "Móvil boca abajo", desc: "Guárdalo para centrarte en los demás." },
      { q: "En las últimas 2 semanas, ¿retrasas sueño por el móvil?", cat: "Sueño", title: "Desconecta 30 min antes", desc: "Sin móvil en la cama para dormir mejor." },
      { q: "En las últimas 2 semanas, ¿ansioso si no ves el móvil?", cat: "Ansia", title: "Distancia planeada", desc: "Sal sin móvil para recados cortos." },
      { q: "En las últimas 2 semanas, ¿cuesta estar quieto sin móvil?", cat: "Reset", title: "Practica el aburrimiento", desc: "5 min al día sin móvil para resetear." }
    ],
    levels: [
      { title: "Zona Limpia 🟦", label: "Muy baja", desc: "¡Buen trabajo! Mantienes un ritmo saludable." },
      { title: "Enfoque Estable 🟩", label: "Baja", desc: "Equilibrado. Solo vigila tu cansancio." },
      { title: "Alerta de Dopamina 🟨", label: "Aviso", desc: "Miras el móvil sin querer. Ajusta tu entorno." },
      { title: "Sobreestimulado 🟧", label: "Alta", desc: "Cerebro busca recompensas. Necesitas detox." },
      { title: "Reinicio Necesario 🟥", label: "Muy alta", desc: "La voluntad no basta. Usa bloqueo de apps." }
    ]
  },
  fr: {
    start: { sub: "Test de 1 min", title1: "Votre profil dopamine ?", title2: "Test d'habitudes", desc: "Vérifiez votre concentration en 1 minute.", btn: "Démarrer", tags: ["1 min", "Anonyme", "Résultat"] },
    quiz: { yes: "Oui", no: "Non", q_prefix: "Question" },
    loading: { title: "Analyse...", desc: "Identification de vos habitudes." },
    result: { label: "Sensibilité", action_title: "3 actions aujourd'hui", disclaimer: "Auto-évaluation uniquement.", promo_sub: "Solution plus forte ?", promo_btn: "App MINUS", retry: "Réessayer", share: "Partager" },
    questions: [
      { q: "Au cours des 2 dernières semaines, vérifié votre tel après le réveil ?", cat: "Sommeil", title: "10 min sans tel au réveil", desc: "Commencez par un verre d'eau." },
      { q: "Au cours des 2 dernières semaines, interrompu vos tâches pour notifs ?", cat: "Focus", title: "Alertes critiques", desc: "Gardez l'essentiel pour rester concentré." },
      { q: "Au cours des 2 dernières semaines, regardé des shorts plus d'une heure ?", cat: "Digital", title: "Barrières aux vidéos", desc: "Mettez des limites sur ces apps." },
      { q: "Au cours des 2 dernières semaines, mal à l'aise de manger sans vidéo ?", cat: "Sens", title: "Focus sur les sens", desc: "Ciblez le goût ou le paysage en marchant." },
      { q: "Au cours des 2 dernières semaines, utilisé apps sociales en voyant des vidéos ?", cat: "Charge", title: "Une tâche à la fois", desc: "Donnez une seule info à votre cerveau." },
      { q: "Au cours des 2 dernières semaines, priorisé jeux/vidéos sur le travail ?", cat: "Retard", title: "Règle des 2 minutes", desc: "Commencez juste 2 min. C'est le plus dur." },
      { q: "Au cours des 2 dernières semaines, ouvert réseaux sociaux sans but précis ?", cat: "Habitude", title: "Changez les icônes", desc: "Déplacez vos icônes pour casser l'habitude." },
      { q: "Au cours des 2 dernières semaines, shopping ou piment pour le stress ?", cat: "Impulsion", title: "Récompenses alternatives", desc: "Marchez 8 min plutôt que de dépenser." },
      { q: "Au cours des 2 dernières semaines, vérifié tel en secret durant une réunion ?", cat: "Relation", title: "Tel face cachée", desc: "Écoutez vraiment votre interlocuteur." },
      { q: "Au cours des 2 dernières semaines, retardé sommeil avec smartphone ?", cat: "Sommeil", title: "Déconnexion avant le lit", desc: "Pas de tel au lit pour mieux dormir." },
      { q: "Au cours des 2 dernières semaines, anxieux quand le tel est loin ?", cat: "Sevrage", title: "Distance voulue", desc: "Sortez sans tel pour de petites courses." },
      { q: "Au cours des 2 dernières semaines, dur de rester immobile sans tel ?", cat: "Reset", title: "Pratiquer l'ennui", desc: "5 min/jour sans tel pour reset." }
    ],
    levels: [
      { title: "Zone Propre 🟦", label: "Très basse", desc: "Bravo ! Vous gardez un rythme sain." },
      { title: "Focus Stable 🟩", label: "Basse", desc: "Équilibré. Surveillez votre fatigue." },
      { title: "Alerte Dopamine 🟨", label: "Avertissement", desc: "Vous consultez sans y penser. Changez d'air." },
      { title: "Surstimulé 🟧", label: "Haute", desc: "Cerveau veut du plaisir. Détox requise." },
      { title: "Reset Nécessaire 🟥", label: "Très haute", desc: "Volonté insuffisante. Bloquez les apps." }
    ]
  },
  pt: {
    start: { sub: "Teste 1 min", title1: "Padrão de dopamina?", title2: "Teste de hábitos", desc: "Veja seu foco em apenas 1 minuto.", btn: "Iniciar", tags: ["1 min", "Sem dados", "Resultado"] },
    quiz: { yes: "Sim", no: "Não", q_prefix: "Pergunta" },
    loading: { title: "Analisando...", desc: "Identificando seus ciclos digitais." },
    result: { label: "Sensibilidade", action_title: "3 ações para hoje", disclaimer: "Apenas autoavaliação.", promo_sub: "Algo mais forte?", promo_btn: "App MINUS", retry: "Repetir", share: "Partilhar" },
    questions: [
      { q: "Nas últimas 2 semanas, checou o celular logo após acordar?", cat: "Sono", title: "10 min sem celular", desc: "Comece com água em vez de apps." },
      { q: "Nas últimas 2 semanas, parou tarefas para ver notificações?", cat: "Foco", title: "Apenas alertas críticos", desc: "Mantenha o essencial para focar." },
      { q: "Nas últimas 2 semanas, viu vídeos curtos por mais de uma hora?", cat: "Digital", title: "Barreiras para vídeos", desc: "Tire apps do início ou ponha limites." },
      { q: "Nas últimas 2 semanas, mal ao comer sem vídeo?", cat: "Sentido", title: "Foco nos sentidos", desc: "Foque no sabor ao caminhar ou comer." },
      { q: "Nas últimas 2 semanas, apps sociais enquanto via vídeos?", cat: "Sobrecarga", title: "Uma tarefa por vez", desc: "Dê apenas uma info ao cérebro." },
      { q: "Nas últimas 2 semanas, adiou tarefas por jogos/vídeos?", cat: "Atraso", title: "Regra dos 2 min", desc: "Comece por 2 min. É o mais difícil." },
      { q: "Nas últimas 2 semanas, abriu redes sem querer?", cat: "Hábito", title: "Mude ícones", desc: "Quebre a rotina mudando os apps." },
      { q: "Nas últimas 2 semanas, comprou ou comeu por estresse?", cat: "Impulsivo", title: "Prêmios alternativos", desc: "Caminhe 8 min em vez de gastar." },
      { q: "Nas últimas 2 semanas, celular escondido em reuniões?", cat: "Relação", title: "Celular virado", desc: "Guarde-o para focar em quem está na frente." },
      { q: "Nas últimas 2 semanas, atrasou sono pelo celular?", cat: "Sono", title: "Desconecte antes", desc: "Sem celular na cama para dormir melhor." },
      { q: "Nas últimas 2 semanas, ansioso se o celular está longe?", cat: "Abstinência", title: "Distância planejada", desc: "Saia sem celular para tarefas curtas." },
      { q: "Nas últimas 2 semanas, difícil ficar parado sem celular?", cat: "Reset", title: "Pratique o tédio", desc: "Sente-se 5 min/dia sem celular." }
    ],
    levels: [
      { title: "Zona Limpa 🟦", label: "Muito baixa", desc: "Bom trabalho! Mantém um ritmo saudável." },
      { title: "Foco Estável 🟩", label: "Baixa", desc: "Equilibrado. Cuide do cansaço." },
      { title: "Aviso de Dopamina 🟨", label: "Atenção", desc: "Checa sem notar. Mude o ambiente." },
      { title: "Superestimulado 🟧", label: "Alta", desc: "Cérebro quer prazer. Precisa de detox." },
      { title: "Reset Necessário 🟥", label: "Muito alta", desc: "Só vontade não basta. Bloqueie." }
    ]
  },
  id: {
    start: { sub: "Tes 1 Menit", title1: "Pola Dopamin Anda?", title2: "Tes Kebiasaan", desc: "Cek pola fokus Anda dalam 1 menit saja.", btn: "Mulai", tags: ["1 menit", "Tanpa data", "Instan"] },
    quiz: { yes: "Ya", no: "Tidak", q_prefix: "Pertanyaan" },
    loading: { title: "Menganalisis...", desc: "Mencari tahu pola digital Anda." },
    result: { label: "Sensitivitas", action_title: "3 Rencana Hari Ini", disclaimer: "Hanya penilaian diri.", promo_sub: "Butuh yang lebih kuat?", promo_btn: "App MINUS", retry: "Coba Lagi", share: "Bagikan" },
    questions: [
      { q: "Dalam 2 minggu terakhir, cek HP dalam 5 menit setelah bangun?", cat: "Tidur", title: "10 Menit Tanpa HP", desc: "Mulai dengan air, bukan aplikasi." },
      { q: "Dalam 2 minggu terakhir, cek notif saat sedang bekerja?", cat: "Fokus", title: "Notif Penting Saja", desc: "Aktifkan peringatan darurat saja." },
      { q: "Dalam 2 minggu terakhir, nonton video pendek sejam lebih?", cat: "Kebiasaan", title: "Batasi Video Pendek", desc: "Pindahkan ikon atau pasang timer." },
      { q: "Dalam 2 minggu terakhir, gelisah makan tanpa video?", cat: "Indra", title: "Fokus pada Rasa", desc: "Rasakan makanan tanpa gangguan." },
      { q: "Dalam 2 minggu terakhir, belanja online sambil nonton?", cat: "Beban Otak", title: "Satu Tugas Saja", desc: "Beri otak satu info saja." },
      { q: "Dalam 2 minggu terakhir, tunda tugas demi game/video?", cat: "Penundaan", title: "Aturan 2 Menit", desc: "Mulai 2 menit saja. Awal itu sulit." },
      { q: "Dalam 2 minggu terakhir, buka medsos tanpa sadar?", cat: "Bawah Sadar", title: "Pindah Posisi Ikon", desc: "Acak ikon agar tangan tak otomatis." },
      { q: "Dalam 2 minggu terakhir, belanja/makan pedas saat stres?", cat: "Impuls", title: "Cari Hadiah Lain", desc: "Coba jalan kaki 8 menit." },
      { q: "Dalam 2 minggu terakhir, cek HP diam-diam saat rapat?", cat: "Relasi", title: "Balik Layar HP", desc: "Fokus pada lawan bicara." },
      { q: "Dalam 2 minggu terakhir, kurang tidur gara-gara HP?", cat: "Tidur", title: "Matikan Sebelum Tidur", desc: "Jangan bawa HP ke kasur." },
      { q: "Dalam 2 minggu terakhir, gelisah saat baterai low?", cat: "Kecanduan", title: "Jarak Sengaja", desc: "Latihan keluar tanpa HP sebentar." },
      { q: "Dalam 2 minggu terakhir, susah diam tanpa HP?", cat: "Reset Otak", title: "Latihan Bosan", desc: "Diam 5 menit tanpa HP untuk reset." }
    ],
    levels: [
      { title: "Zona Bersih 🟦", label: "Sangat rendah", desc: "Bagus! Anda menjaga ritme sehat." },
      { title: "Fokus Stabil 🟩", label: "Rendah", desc: "Cukup seimbang. Jaga terus." },
      { title: "Waspada Dopamin 🟨", label: "Peringatan", desc: "Cek HP tanpa sadar. Atur lingkungan." },
      { title: "Over-Stimulasi 🟧", label: "Tinggi", desc: "Otak terbiasa hadiah instan. Butuh detoks." },
      { title: "Butuh Reset 🟥", label: "Sangat tinggi", desc: "Niat saja tak cukup. Blokir aplikasi." }
    ]
  },
  hi: {
    start: { sub: "1 मिनट टेस्ट", title1: "डोपामीन पैटर्न?", title2: "आदत टेस्ट", desc: "1 मिनट में फोकस चेक करें.", btn: "शुरू करें", tags: ["1 मिनट", "कोई डेटा नहीं", "तुरंत"] },
    quiz: { yes: "हाँ", no: "नहीं", q_prefix: "प्रश्न" },
    loading: { title: "विश्लेषण...", desc: "आदतों की पहचान हो रही है." },
    result: { label: "संवेदनशीलता", action_title: "3 एक्शन प्लान", disclaimer: "केवल आत्म-मूल्यांकन के लिए.", promo_sub: "ठोस समाधान चाहिए?", promo_btn: "MINUS ऐप", retry: "फिर से", share: "शेयर" },
    questions: [
      { q: "पिछले 2 हफ्तों में, जागने के 5 मिनट के भीतर फोन देखा?", cat: "नींद", title: "10 मिनट फोन-मुक्त", desc: "पानी से शुरुआत करें, ऐप्स से नहीं." },
      { q: "पिछले 2 हफ्तों में, काम रोककर नोटिफिकेशन देखा?", cat: "फोकस", title: "जरूरी अलर्ट ही", desc: "गहरे काम के लिए अलर्ट कम रखें." },
      { q: "पिछले 2 हफ्तों में, लगातार एक घंटे से ज्यादा वीडियो देखे?", cat: "आदत", title: "वीडियो पर नियंत्रण", desc: "ऐप्स पर समय सीमा तय करें." },
      { q: "पिछले 2 हफ्तों में, बिना वीडियो के खाना अजीब लगा?", cat: "इंद्रियां", title: "स्वाद पर ध्यान दें", desc: "बिना विचलित हुए स्वाद का आनंद लें." },
      { q: "पिछले 2 हफ्तों में, वीडियो के साथ शॉपिंग की?", cat: "ओवरलोड", title: "एक समय में एक काम", desc: "दिमाग को एक ही जानकारी दें." },
      { q: "पिछले 2 हफ्तों में, काम के बजाय वीडियो देखे?", cat: "देरी", title: "2-मिनट का नियम", desc: "बस 2 मिनट के लिए शुरू करें." },
      { q: "पिछले 2 हफ्तों में, अनजाने में सोशल ऐप खोले?", cat: "आदत", title: "आइकन की जगह बदलें", desc: "पुरानी आदत को तोड़ें." },
      { q: "पिछले 2 हफ्तों में, तनाव में शॉपिंग की?", cat: "आवेग", title: "विकल्प चुनें", desc: "खर्च के बजाय टहलें." },
      { q: "पिछले 2 हफ्तों में, मीटिंग में चोरी-छिपे फोन देखा?", cat: "रिश्ते", title: "फोन उल्टा रखें", desc: "सामने वाले पर ध्यान दें." },
      { q: "पिछले 2 हफ्तों में, फोन की वजह से नींद में देरी?", cat: "नींद", title: "सोने से पहले बंद", desc: "फोन को बिस्तर से दूर रखें." },
      { q: "पिछले 2 हफ्तों में, बैटरी कम होने पर बेचैनी?", cat: "लत", title: "जानबूझकर दूरी", desc: "बि나 फोन के बाहर जाने का प्रयास करें." },
      { q: "पिछले 2 हफ्तों में, बिना फोन के ऊब महसूस हुई?", cat: "दिमाग रीसेट", title: "ऊबने का अभ्यास", desc: "दिमाग रीसेट करने के लिए बैठें." }
    ],
    levels: [
      { title: "क्लीन ज़ोन 🟦", label: "बहुत कम", desc: "शानदार! आप अच्छी लय में हैं." },
      { title: "स्थिर फोकस 🟩", label: "कम", desc: "संतुलित। थकान का ध्यान रखें." },
      { title: "डोपामीन अलर्ट 🟨", label: "चेतावनी", desc: "अनजाने में फोन देख रहे हैं." },
      { title: "अति-उत्तेजित 🟧", label: "ज्यादा", desc: "मजे की आदत हो गई है। डिटॉक्स करें." },
      { title: "रीसेट जरूरी 🟥", label: "बहुत ज्यादा", desc: "블로킹의 필요성." }
    ]
  },
  it: {
    start: { sub: "Test di 1 min", title1: "Profilo dopamina?", title2: "Test abitudini", desc: "Verifica il tuo focus in 1 minuto.", btn: "Inizia", tags: ["1 min", "Nessuna raccolta dati", "Risultato"] },
    quiz: { yes: "Sì", no: "No", q_prefix: "Domanda" },
    loading: { title: "Analisi...", desc: "Identificazione delle tue abitudini." },
    result: { label: "Sensibilità", action_title: "3 piani per oggi", disclaimer: "Solo autovalutazione.", promo_sub: "Soluzione più forte?", promo_btn: "App MINUS", retry: "Riprova", share: "Condividi" },
    questions: [
      { q: "Nelle ultime 2 settimane, controllato tel al risveglio?", cat: "Sonno", title: "10 min senza tel", desc: "Inizia con acqua invece che con app." },
      { q: "Nelle ultime 2 settimane, interrotto compiti per notifs?", cat: "Focus", title: "Solo critiche", desc: "Tieni l'essenziale per il focus." },
      { q: "Nelle ultime 2 settimane, video brevi per più di un'ora?", cat: "Abitudine Digital", title: "Barriere ai video", desc: "Metti dei limiti alle app." },
      { q: "Nelle ultime 2 settimane, disagio a mangiare senza video?", cat: "Sensi", title: "Focus sui sensi", desc: "Gusta il cibo senza distrazioni." },
      { q: "Nelle ultime 2 settimane, app sociali guardando video?", cat: "Carico", title: "Un compito alla volta", desc: "Solo una fonte di info al cervello." },
      { q: "Nelle ultime 2 settimane, rimandato compiti per video?", cat: "Ritardo", title: "Regola 2 min", desc: "Inizia per 2 min. L'inizio è duro." },
      { q: "Nelle ultime 2 settimane, aperto social tanpa motivo?", cat: "Inconscio", title: "Sposta icone", desc: "Rompi la routine cambiando posto." },
      { q: "Nelle ultime 2 settimane, shopping o cibo per stress?", cat: "Impulso", title: "Premi alternativi", desc: "Cammina 8 min invece di spendere." },
      { q: "Nelle ultime 2 settimane, tel nascosto in riunione?", cat: "Relazione", title: "Tel a faccia in giù", desc: "Ascolta chi hai di fronte." },
      { q: "Nelle ultime 2 settimane, ritardato sonno con tel?", cat: "Sonno", title: "Sconnetti prima", desc: "Niente tel a letto per dormire." },
      { q: "Nelle ultime 2 settimane, ansia se il tel è lontano?", cat: "Astinenza", title: "Distanza pianificata", desc: "Esci senza tel per poco tempo." },
      { q: "Nelle ultime 2 settimane, difficile stare senza tel?", cat: "Reset", title: "Pratica la noia", desc: "5 min/giorno senza tel per reset." }
    ],
    levels: [
      { title: "Zona Pulita 🟦", label: "Molto bassa", desc: "Ottimo lavoro! Mantieni un ritmo sano." },
      { title: "Focus Stabile 🟩", label: "Bassa", desc: "Equilibrato. Occhio alla stanchezza." },
      { title: "Allerta Dopamina 🟨", label: "Avviso", desc: "Controlli senza accorgerti. Cambia." },
      { title: "Sovrastimolato 🟧", label: "Alta", desc: "Cervello vuole premi. Serve detox." },
      { title: "Reset Necessario 🟥", label: "Molto alta", desc: "Serve il blocco delle app." }
    ]
  }
};
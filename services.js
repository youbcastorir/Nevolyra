// Nevolyra – Services Data
const services = [
  {
    id: "lettres-administratives",
    icon: "✉️",
    slug: "lettres-administratives",
    titles: {
      fr: "Rédaction de Lettres Administratives",
      ar: "كتابة الرسائل الإدارية",
      en: "Administrative Letters",
      es: "Cartas Administrativas",
      ru: "Административные письма",
      zh: "行政信函撰写"
    },
    descs: {
      fr: "Lettres officielles rédigées avec précision pour toute administration marocaine. Mairie, tribunal, préfecture, ministère : nous garantissons un style formel conforme aux exigences locales.",
      ar: "رسائل رسمية محررة بدقة لأي إدارة مغربية. بلدية، محكمة، ولاية، وزارة: نضمن أسلوباً رسمياً يلبي المتطلبات المحلية.",
      en: "Officially drafted letters for any Moroccan administration. Town hall, court, prefecture, ministry: we guarantee formal style meeting local requirements.",
      es: "Cartas redactadas con precisión para cualquier administración marroquí. Ayuntamiento, tribunal, prefectura, ministerio: garantizamos un estilo formal.",
      ru: "Официальные письма для любой марокканской администрации. Мэрия, суд, префектура, министерство.",
      zh: "为摩洛哥任何行政机关精准起草正式信函。市政厅、法院、省政府、部委。"
    },
    keywords_fr: ["lettre administrative Marrakech", "rédaction lettre officielle", "écrivain public Guéliz"]
  },
  {
    id: "demandes",
    icon: "📋",
    slug: "demandes",
    titles: {
      fr: "Rédaction de Demandes",
      ar: "كتابة الطلبات",
      en: "Request Writing",
      es: "Redacción de Solicitudes",
      ru: "Написание заявлений",
      zh: "申请书撰写"
    },
    descs: {
      fr: "Demandes de logement social, d'aide financière, de dérogation, de régularisation ou toute autre requête officielle. Formulation claire et argumentée pour maximiser vos chances.",
      ar: "طلبات السكن الاجتماعي، المساعدة المالية، الاستثناء، أو أي طلب رسمي آخر. صياغة واضحة ومحجوجة لزيادة فرصك.",
      en: "Social housing, financial aid, exemption or regularization requests. Clear and argued formulation to maximize your chances.",
      es: "Solicitudes de vivienda social, ayuda financiera, exención o regularización. Formulación clara y argumentada.",
      ru: "Заявления на социальное жильё, финансовую помощь, исключения или легализацию.",
      zh: "社会住房、财政援助、豁免或正规化申请。清晰有据的措辞，最大化您的成功机会。"
    },
    keywords_fr: ["rédaction demande administrative Marrakech", "aide rédaction Guéliz", "écrivain public Maroc"]
  },
  {
    id: "plaintes",
    icon: "⚖️",
    slug: "plaintes",
    titles: {
      fr: "Rédaction de Plaintes",
      ar: "كتابة الشكايات",
      en: "Complaint Writing",
      es: "Redacción de Quejas",
      ru: "Написание жалоб",
      zh: "投诉书撰写"
    },
    descs: {
      fr: "Plaintes auprès de la police, du tribunal, de l'administration ou d'un médiateur. Nous exposons clairement les faits, les préjudices et les demandes de réparation.",
      ar: "شكايات لدى الشرطة، المحكمة، الإدارة أو الوسيط. نعرض الوقائع والأضرار وطلبات التعويض بوضوح.",
      en: "Complaints to police, court, administration or ombudsman. We clearly present facts, damages and compensation requests.",
      es: "Quejas ante la policía, el tribunal, la administración o un mediador.",
      ru: "Жалобы в полицию, суд, администрацию или омбудсмену.",
      zh: "向警察、法院、行政机关或调解员投诉。清晰陈述事实、损失和赔偿请求。"
    },
    keywords_fr: ["rédaction plainte Marrakech", "écrivain public plainte", "aide plainte administrative Maroc"]
  },
  {
    id: "traduction",
    icon: "🌐",
    slug: "traduction",
    titles: {
      fr: "Traduction de Documents",
      ar: "ترجمة الوثائق",
      en: "Document Translation",
      es: "Traducción de Documentos",
      ru: "Перевод документов",
      zh: "文件翻译"
    },
    descs: {
      fr: "Traduction Français ↔ Arabe, Espagnol, Anglais, Russe, Chinois. Documents administratifs, actes d'état civil, diplômes, contrats. Traductions certifiées disponibles.",
      ar: "ترجمة فرنسي ↔ عربي، إسباني، إنجليزي، روسي، صيني. وثائق إدارية، عقود الحالة المدنية، الشهادات، العقود.",
      en: "Translation French ↔ Arabic, Spanish, English, Russian, Chinese. Administrative documents, civil status deeds, diplomas, contracts.",
      es: "Traducción Francés ↔ Árabe, Español, Inglés, Ruso, Chino.",
      ru: "Перевод Французский ↔ Арабский, Испанский, Английский, Русский, Китайский.",
      zh: "法语↔阿拉伯语、西班牙语、英语、俄语、中文翻译。"
    },
    keywords_fr: ["traduction document Marrakech", "traduction certifiée Guéliz", "traducteur Marrakech"]
  },
  {
    id: "cv",
    icon: "📄",
    slug: "cv",
    titles: {
      fr: "Curriculum Vitae (CV)",
      ar: "السيرة الذاتية",
      en: "Curriculum Vitae (CV)",
      es: "Currículum Vitae (CV)",
      ru: "Резюме (CV)",
      zh: "个人简历 (CV)"
    },
    descs: {
      fr: "CV professionnel structuré selon les standards marocains et internationaux. Mise en page moderne, accrocheur et adapté à votre secteur d'activité.",
      ar: "سيرة ذاتية احترافية منظمة وفق المعايير المغربية والدولية. تصميم عصري وجذاب ملائم لقطاعك.",
      en: "Professional CV structured to Moroccan and international standards. Modern layout tailored to your sector.",
      es: "CV profesional estructurado según estándares marroquíes e internacionales.",
      ru: "Профессиональное резюме по марокканским и международным стандартам.",
      zh: "按摩洛哥和国际标准构建的专业简历。现代版式，适合您的行业。"
    },
    keywords_fr: ["rédaction CV Marrakech", "CV professionnel Guéliz", "aide CV Marrakech"]
  },
  {
    id: "lettres-motivation",
    icon: "✍️",
    slug: "lettres-motivation",
    titles: {
      fr: "Lettres de Motivation",
      ar: "رسائل التحفيز",
      en: "Cover Letters",
      es: "Cartas de Motivación",
      ru: "Мотивационные письма",
      zh: "求职信"
    },
    descs: {
      fr: "Lettre de motivation personnalisée qui met en valeur votre profil. Adaptée à chaque offre d'emploi, formation ou candidature spontanée.",
      ar: "رسالة تحفيز مخصصة تبرز ملفك الشخصي. مكيفة لكل عرض عمل أو تدريب أو طلب تلقائي.",
      en: "Personalized cover letter highlighting your profile. Tailored to each job, training or spontaneous application.",
      es: "Carta de motivación personalizada que destaca su perfil.",
      ru: "Персонализированное мотивационное письмо, подчёркивающее ваш профиль.",
      zh: "突出您个人特色的个性化求职信。针对每个职位、培训或自荐申请量身定制。"
    },
    keywords_fr: ["lettre motivation Marrakech", "rédaction motivation Guéliz", "aide emploi Marrakech"]
  },
  {
    id: "assistance-administrative",
    icon: "🏛️",
    slug: "assistance-administrative",
    titles: {
      fr: "Assistance Administrative",
      ar: "المساعدة الإدارية",
      en: "Administrative Assistance",
      es: "Asistencia Administrativa",
      ru: "Административная помощь",
      zh: "行政协助"
    },
    descs: {
      fr: "Accompagnement personnalisé pour toutes vos démarches : identification des administrations compétentes, constitution des dossiers, suivi des procédures.",
      ar: "مرافقة شخصية لجميع إجراءاتكم: تحديد الجهات الإدارية المختصة، تجميع الملفات، متابعة الإجراءات.",
      en: "Personalized support for all your procedures: identifying the right administrations, building files, following up.",
      es: "Acompañamiento personalizado para todos sus trámites.",
      ru: "Персональная поддержка во всех ваших административных делах.",
      zh: "为您所有行政手续提供个性化陪同：确定主管机构、整理档案、跟进程序。"
    },
    keywords_fr: ["assistance administrative Marrakech", "aide démarches administratives Maroc", "accompagnement administratif Guéliz"]
  },
  {
    id: "preparation-dossiers",
    icon: "📁",
    slug: "preparation-dossiers",
    titles: {
      fr: "Préparation de Dossiers",
      ar: "إعداد الملفات",
      en: "File Preparation",
      es: "Preparación de Expedientes",
      ru: "Подготовка досье",
      zh: "档案准备"
    },
    descs: {
      fr: "Constitution complète de dossiers administratifs : liste des pièces requises, vérification de la conformité, organisation et présentation optimale.",
      ar: "تشكيل كامل للملفات الإدارية: قائمة الوثائق المطلوبة، التحقق من الامتثال، التنظيم والعرض الأمثل.",
      en: "Complete administrative file preparation: required documents list, compliance check, optimal organization.",
      es: "Constitución completa de expedientes administrativos.",
      ru: "Полная подготовка административных досье: список документов, проверка соответствия.",
      zh: "完整准备行政档案：所需文件清单、合规性核查、最优组织和呈现。"
    },
    keywords_fr: ["préparation dossier administratif Marrakech", "aide constitution dossier Guéliz"]
  },
  {
    id: "visa",
    icon: "🛂",
    slug: "visa",
    titles: {
      fr: "Demandes de Visa",
      ar: "طلبات التأشيرة",
      en: "Visa Applications",
      es: "Solicitudes de Visa",
      ru: "Заявления на визу",
      zh: "签证申请"
    },
    descs: {
      fr: "Assistance complète pour les demandes de visa : Europe, Amérique, Asie. Rédaction des lettres de motivation, préparation des dossiers et vérification des documents.",
      ar: "مساعدة شاملة لطلبات التأشيرة: أوروبا، أمريكا، آسيا. تحرير رسائل الدوافع، إعداد الملفات والتحقق من الوثائق.",
      en: "Complete assistance for visa applications: Europe, America, Asia. Cover letters, file preparation and document verification.",
      es: "Asistencia completa para solicitudes de visa: Europa, América, Asia.",
      ru: "Полная помощь в оформлении виз: Европа, Америка, Азия.",
      zh: "签证申请全程协助：欧洲、美洲、亚洲。撰写动机信、准备档案和核查文件。"
    },
    keywords_fr: ["demande visa Marrakech", "aide visa Maroc", "dossier visa Guéliz", "visa Europe Maroc"]
  },
  {
    id: "contrats",
    icon: "📝",
    slug: "contrats",
    titles: {
      fr: "Rédaction de Contrats",
      ar: "كتابة العقود",
      en: "Contract Writing",
      es: "Redacción de Contratos",
      ru: "Написание контрактов",
      zh: "合同撰写"
    },
    descs: {
      fr: "Rédaction de contrats de bail, de travail, de prestation de services ou de reconnaissance de dette. Documents conformes à la législation marocaine.",
      ar: "تحرير عقود الإيجار والعمل وتقديم الخدمات أو الاعتراف بالدين. وثائق متوافقة مع التشريع المغربي.",
      en: "Lease, employment, service or debt recognition contracts. Documents compliant with Moroccan legislation.",
      es: "Contratos de arrendamiento, trabajo, servicios o reconocimiento de deuda.",
      ru: "Договоры аренды, трудовые, сервисные договоры или признание долга.",
      zh: "起草租赁合同、劳动合同、服务合同或债务承认书。符合摩洛哥法律法规。"
    },
    keywords_fr: ["rédaction contrat Marrakech", "contrat bail Maroc", "contrat travail Marrakech"]
  },
  {
    id: "correction",
    icon: "✅",
    slug: "correction",
    titles: {
      fr: "Correction de Documents",
      ar: "تصحيح الوثائق",
      en: "Document Proofreading",
      es: "Corrección de Documentos",
      ru: "Корректура документов",
      zh: "文件校对"
    },
    descs: {
      fr: "Relecture et correction orthographique, grammaticale et stylistique de vos documents administratifs, professionnels ou personnels.",
      ar: "مراجعة وتصحيح إملائي ونحوي وأسلوبي لوثائقك الإدارية والمهنية والشخصية.",
      en: "Spelling, grammar and style proofreading of your administrative, professional or personal documents.",
      es: "Corrección ortográfica, gramatical y de estilo de sus documentos.",
      ru: "Орфографическая, грамматическая и стилистическая корректура документов.",
      zh: "对您的行政、专业或个人文件进行拼写、语法和文体校对。"
    },
    keywords_fr: ["correction document Marrakech", "relecture texte Guéliz", "correction administratif Maroc"]
  },
  {
    id: "saisie-mise-en-page",
    icon: "💻",
    slug: "saisie-mise-en-page",
    titles: {
      fr: "Saisie et Mise en Page",
      ar: "الإدخال والتنسيق",
      en: "Typing & Layout",
      es: "Mecanografía y Maquetación",
      ru: "Набор и вёрстка",
      zh: "录入与排版"
    },
    descs: {
      fr: "Transcription de documents manuscrits, saisie professionnelle et mise en page soignée sous Word, PDF ou tout autre format requis.",
      ar: "نسخ الوثائق المكتوبة بخط اليد، الإدخال المهني والتنسيق المتقن بتنسيق Word أو PDF أو أي تنسيق مطلوب آخر.",
      en: "Manuscript transcription, professional typing and careful layout in Word, PDF or any required format.",
      es: "Transcripción de manuscritos, mecanografía profesional y maquetación cuidada.",
      ru: "Транскрипция рукописей, профессиональный набор и аккуратная вёрстка.",
      zh: "手写文件转录、专业录入和精心排版，支持Word、PDF或任何所需格式。"
    },
    keywords_fr: ["saisie document Marrakech", "mise en page professionnelle Guéliz", "dactylo Marrakech"]
  },
  {
    id: "etrangers-maroc",
    icon: "🌍",
    slug: "etrangers-maroc",
    titles: {
      fr: "Services pour Étrangers au Maroc",
      ar: "خدمات للأجانب بالمغرب",
      en: "Services for Foreigners in Morocco",
      es: "Servicios para Extranjeros en Marruecos",
      ru: "Услуги для иностранцев в Марокко",
      zh: "摩洛哥外籍人士服务"
    },
    descs: {
      fr: "Assistance complète pour les expatriés et touristes : carte de séjour, immatriculation consulaire, régularisation de situation, démarches bancaires et plus.",
      ar: "مساعدة شاملة للمغتربين والسياح: بطاقة الإقامة، التسجيل القنصلي، تسوية الوضع، الإجراءات البنكية والمزيد.",
      en: "Complete assistance for expats and tourists: residence card, consular registration, status regularization, banking procedures and more.",
      es: "Asistencia completa para expatriados y turistas: tarjeta de residencia, registro consular.",
      ru: "Полная помощь для экспатов и туристов: вид на жительство, консульская регистрация.",
      zh: "为外籍人士和游客提供全面协助：居留证、领事登记、身份合法化、银行手续等。"
    },
    keywords_fr: ["services étrangers Marrakech", "aide expatriés Maroc", "carte séjour Marrakech", "public writer Marrakech foreigners"]
  },
  {
    id: "mariage-mixte",
    icon: "💍",
    slug: "mariage-mixte",
    titles: {
      fr: "Mariage Mixte",
      ar: "الزواج المختلط",
      en: "Mixed Marriage",
      es: "Matrimonio Mixto",
      ru: "Смешанный брак",
      zh: "跨国婚姻"
    },
    descs: {
      fr: "Accompagnement des couples internationaux pour les démarches de mariage au Maroc : publication des bans, dossier de mariage, traduction et légalisation des actes.",
      ar: "مرافقة الأزواج الدوليين في إجراءات الزواج بالمغرب: إعلان النية، ملف الزواج، ترجمة وتصديق الوثائق.",
      en: "Support for international couples in Moroccan marriage procedures: banns, marriage file, document translation and legalization.",
      es: "Acompañamiento para parejas internacionales en trámites de matrimonio en Marruecos.",
      ru: "Поддержка международных пар в бракосочетании в Марокко.",
      zh: "为国际夫妇在摩洛哥婚姻手续提供全程陪同：婚前公告、婚姻档案、文件翻译和公证。"
    },
    keywords_fr: ["mariage mixte Marrakech", "mariage franco-marocain", "mariage étranger Maroc", "dossier mariage mixte Marrakech"]
  },
  {
    id: "documents-marocains",
    icon: "🇲🇦",
    slug: "documents-marocains",
    titles: {
      fr: "Documents Administratifs Marocains",
      ar: "الوثائق الإدارية المغربية",
      en: "Moroccan Administrative Documents",
      es: "Documentos Administrativos Marroquíes",
      ru: "Марокканские административные документы",
      zh: "摩洛哥行政文件"
    },
    descs: {
      fr: "Aide pour l'obtention et la compréhension des documents officiels marocains : extrait d'acte de naissance, casier judiciaire, légalisation, apostille, procuration.",
      ar: "مساعدة في الحصول وفهم الوثائق الرسمية المغربية: مستخرج شهادة الميلاد، صحيفة السوابق القضائية، التصديق، الأبوستيل، الوكالة.",
      en: "Help obtaining and understanding Moroccan official documents: birth certificate, criminal record, legalization, apostille, power of attorney.",
      es: "Ayuda para obtener documentos oficiales marroquíes: acta de nacimiento, antecedentes penales.",
      ru: "Помощь в получении марокканских официальных документов.",
      zh: "协助获取和理解摩洛哥官方文件：出生证明、无犯罪记录证明、公证、海牙认证、授权书。"
    },
    keywords_fr: ["documents administratifs marocains", "acte naissance Marrakech", "légalisation document Maroc", "apostille Marrakech"]
  }
];

window.services = services;

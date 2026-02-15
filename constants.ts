import { Project, NavItem, Certificate } from './types';

export const APP_NAME = "RAUSQEN_AI";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/rausqen14",
  linkedin: "https://www.linkedin.com/in/rausqen/",
  kaggle: "https://www.kaggle.com/rausqen"
};

export const GLOBAL_CERTIFICATES: Certificate[] = [
  {
    name: "Veri Bilimci Kariyer Yolculuğu",
    nameKey: "dataScientistPath",
    issuer: "Miuul",
    date: "Eylül 2025",
    image: "/sertifikalar/omer_faruk_koc2.png",
    url: "/sertifikalar/omer_faruk_koc2.png"
  },
  {
    name: "Derin Öğrenme",
    nameKey: "deepLearning",
    issuer: "Miuul",
    date: "Mayıs 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-05-27.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-05-27.pdf"
  },
  {
    name: "Veri Bilimi ve Yapay Zekaya Giriş",
    nameKey: "introAI",
    issuer: "Miuul",
    date: "Haziran 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04.pdf"
  },
  {
    name: "Veri Bilimi için Python Programlama",
    nameKey: "pythonDS",
    issuer: "Miuul",
    date: "Haziran 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04 (1).png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04 (1).pdf"
  },
  {
    name: "CRM Analitiği",
    nameKey: "crmAnalytics",
    issuer: "Miuul",
    date: "Haziran 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04 (2).png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-04 (2).pdf"
  },
  {
    name: "Generative AI & Prompt Engineer",
    nameKey: "genAI",
    issuer: "Miuul",
    date: "Haziran 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-26.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-06-26.pdf"
  },
  {
    name: "Tavsiye Sistemleri",
    nameKey: "recommender",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-09.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-09.pdf"
  },
  {
    name: "Ölçüm Problemleri",
    nameKey: "measurement",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-09 (1).png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-09 (1).pdf"
  },
  {
    name: "Özellik Mühendisliği",
    nameKey: "featureEngineering",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-10.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-10.pdf"
  },
  {
    name: "Makine Öğrenmesi",
    nameKey: "machineLearning",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-17.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-17.pdf"
  },
  {
    name: "SQL ile Veritabanı Sorgulama",
    nameKey: "sql",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-22.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-22.pdf"
  },
  {
    name: "Canlı Ortam Veri Bilimi",
    nameKey: "productionDS",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-22 (1).png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-22 (1).pdf"
  },
  {
    name: "Zaman Serileri Analizi",
    nameKey: "timeSeries",
    issuer: "Miuul",
    date: "Temmuz 2025",
    image: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-23.png",
    url: "/sertifikalar/ÖMER FARUK KOÇ - 2025-07-23.pdf"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "VOZANT - AI-Powered Vehicle Valuation System",
    titleKey: "vozant",
    descriptionKey: "vozant",
    description: "", // Will be populated from translations
    technologies: ["Machine Learning", "LightGBM", "Generative AI", "Gemini API", "Vehicle Valuation"],
    category: "End-to-End ML/DL",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    images: [
      "/vozant/vozant-01.png",
      "/vozant/vozant-02.png",
      "/vozant/vozant-03.png",
      "/vozant/vozant-04.png",
      "/vozant/vozant-05.png"
    ],
    liveUrl: "https://www.vozant.com/",
    featured: true,
    certificates: [
      { name: "Google Data Analytics Professional", url: "#", issuer: "Google", date: "2023" },
      { name: "Advanced Machine Learning Specialization", url: "#", issuer: "Coursera", date: "2022" }
    ]
  },
  {
    id: 2,
    title: "Legal AI Assistant (Agentic RAG)",
    titleKey: "legalAI",
    descriptionKey: "legalAI",
    description: "",
    technologies: ["RAG", "Agentic Systems", "Multi-Agent Architecture", "Prompt Engineering", "LangChain", "GenerativeAI", "ChromaDB", "PyTorch"],
    category: "Agentic AI & LLMs",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
    images: [
      "/legal_ai/Ekran Görüntüsü (2179).png",
      "/legal_ai/Ekran Görüntüsü (2181).png",
      "/legal_ai/Ekran Görüntüsü (2182).png",
      "/legal_ai/Ekran Görüntüsü (2183).png",
      "/legal_ai/Ekran Görüntüsü (2184).png"
    ],
    liveUrl: "https://www.hukcep.com/",
    featured: true,
    certificates: [
      { name: "LangChain A-Z: Build LLM Apps", url: "#", issuer: "Udemy", date: "2024" }
    ]
  },
  {
    id: 3,
    title: "AI Exam Evaluation System",
    titleKey: "examAI",
    descriptionKey: "examAI",
    description: "",
    technologies: ["Agentic Architecture", "Multi-Agent System", "Prompt Engineering", "Explainable AI", "OCR Processing", "Full-Stack AI"],
    category: "Agentic AI & LLMs",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    images: [],
    githubUrl: "https://github.com/rausqen14/sinav_degerlendirici",
    featured: true
  },
  {
    id: 4,
    title: "LLM-Powered Data Dashboard",
    titleKey: "dashboard",
    descriptionKey: "dashboard",
    description: "",
    technologies: ["LLM", "Dashboard", "Data Analysis", "Natural Language", "Visualization", "EDA", "Actionable Recommendations"],
    category: "Agentic AI & LLMs",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    images: [
      "/llm_dashboard/Ekran Görüntüsü (1345).png",
      "/llm_dashboard/Ekran Görüntüsü (1387).png",
      "/llm_dashboard/Ekran Görüntüsü (1388).png",
      "/llm_dashboard/Ekran Görüntüsü (1389).png",
      "/llm_dashboard/Ekran Görüntüsü (1391).png",
      "/llm_dashboard/Ekran Görüntüsü (1392).png",
      "/llm_dashboard/Ekran Görüntüsü (1393).png",
      "/llm_dashboard/Ekran Görüntüsü (1394).png"
    ],
    featured: false
  },
  {
    id: 5,
    title: "Brain MRI Tumor Detection",
    titleKey: "mri",
    descriptionKey: "mri",
    description: "",
    technologies: ["Deep Learning", "Transfer Learning", "Computer Vision", "EfficientNetB3", "TensorFlow"],
    category: "Computer Vision",
    imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
    images: [
      "/brain_tumor/Ekran Görüntüsü (903).png",
      "/brain_tumor/Ekran Görüntüsü (904).png",
      "/brain_tumor/Ekran Görüntüsü (905).png",
      "/brain_tumor/Ekran Görüntüsü (906).png",
      "/brain_tumor/Ekran Görüntüsü (9061).png"
    ],
    githubUrl: "https://www.kaggle.com/code/rausqen/brain-mri-tumor-detection-two-seed",
    featured: false
  },
  {
    id: 6,
    title: "CIFAR-10 Robust CNN",
    titleKey: "cifar",
    descriptionKey: "cifar",
    description: "",
    technologies: ["CNN", "Computer Vision", "Mixup", "Label Smoothing", "Data Augmentation"],
    category: "Computer Vision",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    images: [
      "/cifar-10/Ekran Görüntüsü (907).png",
      "/cifar-10/Ekran Görüntüsü (908).png",
      "/cifar-10/Ekran Görüntüsü (909).png",
      "/cifar-10/Ekran Görüntüsü (910).png",
      "/cifar-10/Ekran Görüntüsü (911).png",
      "/cifar-10/Ekran Görüntüsü (912).png"
    ],
    githubUrl: "https://www.kaggle.com/code/rausqen/cifar-10-cnn-with-mixup-label-smoothing",
    featured: false
  },
  {
    id: 7,
    title: "CLTV Modeling with BG-NBD & Gamma-Gamma",
    titleKey: "cltv",
    descriptionKey: "cltv",
    description: "",
    technologies: ["CLTV", "BG-NBD", "Gamma-Gamma", "Marketing Analytics", "Customer Analytics"],
    category: "End-to-End ML/DL",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    images: [
      "/gamma-gamma/Ekran Görüntüsü (923).png",
      "/gamma-gamma/Ekran Görüntüsü (924).png",
      "/gamma-gamma/Ekran Görüntüsü (925).png",
      "/gamma-gamma/Ekran Görüntüsü (926).png",
      "/gamma-gamma/Ekran Görüntüsü (927).png",
      "/gamma-gamma/Ekran Görüntüsü (928).png",
      "/gamma-gamma/Ekran Görüntüsü (929).png",
      "/gamma-gamma/Ekran Görüntüsü (930).png"
    ],
    githubUrl: "https://www.kaggle.com/code/rausqen/cltv-modeling-with-bg-nbd-gamma-gamma",
    featured: false
  },
  {
    id: 8,
    title: "Amazon Reviews Sentiment-Based Ranking",
    titleKey: "amazonReviews",
    descriptionKey: "amazonReviews",
    description: "",
    technologies: ["Sentiment Analysis", "Wilson Lower Bound", "Amazon Reviews", "Time-Weighted Rating"],
    category: "End-to-End ML/DL",
    imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop",
    images: [
      "/amazon/Ekran Görüntüsü (931).png",
      "/amazon/Ekran Görüntüsü (932).png",
      "/amazon/Ekran Görüntüsü (933).png",
      "/amazon/Ekran Görüntüsü (934).png",
      "/amazon/Ekran Görüntüsü (935).png",
      "/amazon/Ekran Görüntüsü (936).png",
      "/amazon/Ekran Görüntüsü (937).png",
      "/amazon/Ekran Görüntüsü (938).png"
    ],
    githubUrl: "https://www.kaggle.com/code/rausqen/amazon-reviews-sentiment-based-ranking",
    featured: false
  },
  {
    id: 9,
    title: "House Price Prediction with Deep Learning",
    titleKey: "housePrice",
    descriptionKey: "housePrice",
    description: "",
    technologies: ["Deep Learning", "Regression", "Feature Engineering", "KerasTuner", "Error Analysis", "TensorFlow"],
    category: "End-to-End ML/DL",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    images: [
      "/house/Ekran Görüntüsü (1091).png",
      "/house/Ekran Görüntüsü (1092).png",
      "/house/Ekran Görüntüsü (1093).png",
      "/house/Ekran Görüntüsü (1094).png",
      "/house/Ekran Görüntüsü (1095).png",
      "/house/Ekran Görüntüsü (1096).png",
      "/house/Ekran Görüntüsü (1097).png",
      "/house/Ekran Görüntüsü (1098).png"
    ],
    githubUrl: "https://www.kaggle.com/code/rausqen/house-price-prediction-with-deep-learning",
    featured: false
  }
];

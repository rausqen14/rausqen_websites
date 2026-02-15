export type Language = 'en' | 'tr';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
    },
    hero: {
      shinyText1: 'Artificial Intelligent',
      shinyText2: 'Solutions',
      description: 'Transforming complex business processes into scalable and intelligent solutions through autonomous agent ecosystems and high-scale predictive modeling.',
      viewProjects: 'View AI Projects',
      contactMe: 'Contact Me',
    },
    workflow: {
      title: 'AI Development Lifecycle',
      step1: { title: 'Discovery', desc: 'Requirement analysis and strategic problem definition.' },
      step2: { title: 'Architecture', desc: 'Structural system design and methodology selection.' },
      step3: { title: 'Engineering', desc: 'Core implementation and iterative optimization.' },
      step4: { title: 'Orchestration', desc: 'Deployment and system integration.' },
    },
    services: {
      title: 'Core Focus',
      frontend: {
        title: 'Agentic AI & RAG',
        desc: 'Building autonomous multi-agent systems and Retrieval-Augmented Generation pipelines for complex reasoning tasks.',
      },
      backend: {
        title: 'Machine Learning',
        desc: 'Architecting high-performance, explainable, and production-ready predictive systems on large-scale tabular datasets and complex data structures.',
      },
      design: {
        title: 'Full Stack AI',
        desc: 'Orchestrating AI models and autonomous agents with modern software architectures to build end-to-end intelligent interfaces and systems that solve real-world problems.',
      }
    },
    certificates: {
      title: 'Certifications',
      view: 'View Credential',
      names: {
        deepLearning: "Deep Learning Path",
        dataScientistPath: "Data Scientist Path",
        introAI: "Introduction to Data Science and AI",
        pythonDS: "Python Programming for Data Science",
        crmAnalytics: "CRM Analytics",
        genAI: "Generative AI & Prompt Engineer",
        recommender: "Recommendation Systems",
        measurement: "Measurement Problems",
        featureEngineering: "Feature Engineering",
        machineLearning: "Machine Learning",
        sql: "Querying MS SQL",
        productionDS: "Production Level Data Science",
        timeSeries: "Time Series"
      }
    },
    projects: {
      title: 'Featured',
      titleSuffix: 'Innovations',
      description: 'Advanced AI systems ranging from end-to-end machine learning models to production-grade agentic NLP workflows.',
      code: 'Code',
      notebook: 'Notebook',
      liveDemo: 'Live Demo',
      footer: 'Have a complex problem?',
      letsTalk: "Let's Solve It.",
      searchPlaceholder: 'Search technologies...',
      filterAll: 'All',
      viewDetails: 'View Details',
      certificates: 'Certificates',
      about: 'About the Project',
      technologies: 'TECHNOLOGIES',
      screenshots: 'PROJECT SCREENSHOTS',
      titles: {
        vozant: "VOZANT - AI-Powered Vehicle Valuation System",
        legalAI: "Legal AI Assistant (Agentic RAG)",
        examAI: "AI Exam Evaluation System",
        dashboard: "LLM-Powered Data Dashboard",
        mri: "Brain MRI Tumor Detection",
        cifar: "CIFAR-10 Robust CNN",
        cltv: "CLTV Modeling with BG-NBD & Gamma-Gamma",
        amazonReviews: "Amazon Reviews Sentiment-Based Ranking",
        housePrice: "House Price Prediction with Deep Learning"
      },
      descriptions: {
        vozant: `GOAL

Develop a production-oriented vehicle valuation system powered by a LightGBM regression model trained on 2M+ vehicle records from the United States. The platform delivers market-accurate price estimates and augments each valuation with AI-generated vehicle visuals and structured information cards using the Gemini API.

SYSTEM OVERVIEW

- Large-scale, tabular-data-driven pricing system optimized for non-linear regression.
- Combines supervised learning, domain-specific feature engineering, and generative AI to produce both numerical and contextual outputs.
- Designed with a focus on model robustness, interpretability, and extensibility.

MODELING & DATA

Model Architecture:
- Gradient Boosting Decision Trees implemented via LightGBM.

Training Data:
- 2M+ US vehicle listings, covering 55 manufacturers and 917 models.

Target:
- Vehicle market price regression with realistic variance preservation.

FEATURE ENGINEERING

- Non-linear age depreciation modeling.
- Mileage normalization and saturation effects.
- Engine and performance-related pricing signals.
- Categorical encoding of brand, model, and specifications.

GENERATIVE INTELLIGENCE

Vehicle Visual Generation:
- AI-generated vehicle images using the Gemini API.

Vehicle Information Cards:
- Context-aware summaries generated via the Gemini API.

CAPABILITIES

- Market value prediction with calibrated price ranges.
- Broad coverage across brands and models.
- Unified quantitative and contextual valuation output.

OUTCOME

- Demonstrates large-scale tabular ML expertise.
- Showcases predictive modeling and generative AI integration.
- Highlights end-to-end AI system design.`,
        legalAI: `GOAL

Develop a multi-stage Agentic RAG system capable of interpreting Turkish legal queries, retrieving relevant legislation and Yargıtay case law, and generating context-aware, reference-backed legal answers through coordinated multi-agent reasoning.

SYSTEM ARCHITECTURE

- Modular 8-agent pipeline handling initial and follow-up queries separately
- 3 decision flags regulating domain validation, relevance tracking, and topic resets
- Deterministic flow control: domain detection → database selection → article retrieval → case law research → answer synthesis
- Robust follow-up logic with context retention and topic-shift detection

INITIAL QUESTION PIPELINE (Ajan1–Ajan5)

- Ajan1 | Domain Classification: Legal vs non-legal question detection
- Ajan2 | Database Selector: Targets correct legal corpus (TCK, TBK, İş Kanunu, TTK, HMK, VUK, etc.)
- Ajan3 | Article Retriever: Embedding-based semantic search over vectorized law databases
- Ajan4 | Case Law Researcher: Fetches and summarizes relevant Yargıtay decisions
- Ajan5 | Answer Synthesizer: Merges legislation + case law into structured output (summary, explanation, rights)

FOLLOW-UP PIPELINE (Ajan6–Ajan8)

- Ajan6 | Relevance Checker: Determines whether the new message aligns with ongoing context
- Ajan7 | Follow-Up Responder: Generates context-consistent follow-up answers
- Ajan8 | Topic/Domain Validator: Detects topic shifts; triggers reset or re-routing logic

KEY MECHANISMS

- Flag1 (Legal Check): Determines entry into main pipeline
- Flag2 (Relevance Check): Controls follow-up flow
- Flag3 (Topic Shift Check): Handles context reset and conversation branching
- Hash-based conversation tracking & concurrency-safe state management
- Input guards, retry logic, fallback responses

CAPABILITIES

- Multi-law semantic retrieval
- Article-level legal grounding
- Yargıtay integration via auto-research
- Structured reasoning and explainable outputs
- Intelligent follow-up handling with context verification`,
        examAI: `GOAL

Develop an agent-based AI system that automatically evaluates student exam sheets, assigns scores, and provides transparent, explainable feedback. The system is designed to support schools, teachers, and EdTech platforms by offering a scalable, modular, and explainable grading pipeline.

ARCHITECTURE & AGENTS

- File Agent – Processes PDF answer sheets and keys, extracts text via OCR.
- Rubric Agent – Extracts and standardizes scoring rubrics from the answer key.
- Scoring Agent – Evaluates student answers with GPT-4o and structured reasoning prompts.
- Feedback Agent – Generates human-like explanations and improvement suggestions.
- Conversational Agent – Handles follow-up questions like "Why did I get this score?".
- Reporting Agent – Summarizes and formats the results into per-student reports.
- Coordinator Agent – Orchestrates the workflow and manages agent communication.

FEATURES

- Fully automated 7-agent orchestration with modular design.
- GPT-4o-powered deep evaluation and explainable scoring pipeline.
- Native support for Turkish language, free-form answers, and rubric-based evaluation.
- Real-time streaming of results via Server-Sent Events (SSE).
- FastAPI + Next.js full-stack architecture, deployed on Vercel + Render.
- Prompt engineering tailored for educational contexts.

OUTCOMES

- Significantly reduces manual grading time and improves consistency.
- Supports evaluation of dozens of exams simultaneously.
- Enables students to understand their scores through interactive explanations.
- Demonstrates how agentic AI architectures can transform traditional assessment workflows.`,
        dashboard: `GOAL

Build an AI-powered dashboard that analyzes uploaded Excel/CSV datasets and generates meaningful summaries, visualizations, and actionable recommendations. Designed for non-technical users who need decision support and technical users who want quick data preview & EDA (Exploratory Data Analysis).

DATA UPLOAD & ANALYSIS

- Users upload Excel/CSV files.
- The system automatically generates summary reports and visualizations.
- Provides an instant overview of dataset structure, trends, and distributions.

NATURAL LANGUAGE QUERIES

- Users can interact with the data using plain language questions:
  - "What is the sales trend over the last 6 months?"
  - "Which customer segment generates the most revenue?"
- Answers are delivered in tables, charts, and text-based insights.

ACTIONABLE RECOMMENDATIONS

- Beyond raw numbers, the system provides meaningful insights.
- Example: "High churn detected in segment X – consider targeted discounts."
- Output translates directly into business actions.

USER SEGMENTS

- Non-Technical Users: Instant summaries and visuals for decision-making.
- Technical Users: Quick data preview, EDA, pre-modeling analysis.

OUTCOME

- Dual-purpose usage: For both technical & non-technical users
- Instant summaries, visuals, and recommendations
- Saves time & accelerates decision-making
- Supports a data-driven culture with AI-powered insights`,
        mri: `GOAL

Explore transfer learning and deep learning methods on a Kaggle MRI dataset to build a high-accuracy, reproducible classification model.

FOCUS

- Experiment with transfer learning strategies
- Apply augmentation & regularization to reduce overfitting
- Boost accuracy with ensemble & calibration

METHODOLOGY

Model:
- EfficientNetB3 (transfer learning)

Two-stage Training:
- S1: Freeze backbone + Mixup augmentation + Label smoothing (0.10)
- S2: Unfreeze last 100 layers + Label smoothing (0.00)

Ensemble:
- Two different seeds combined with soft-vote + bias-gate adjustment

Explainability:
- Grad-CAM visualizations of model attention regions

RESULTS

- Achieved ~99.5% test accuracy
- Reduced overfitting, improved generalization
- Grad-CAM provided explainable predictions, highlighting decision areas`,
        cifar: `GOAL

Demonstrate the impact of Mixup and Label Smoothing on generalization and robustness on CIFAR-10, building an end-to-end, reproducible CNN training pipeline.

APPROACH

Architecture:
- 4-stage CNN (Conv-BN blocks with MaxPool & progressive Dropout)
- GlobalAvgPooling, Dense(512)+BN+Dropout, Softmax

Augmentation:
- Random flip/rotation/zoom/translation (light)

Mixup:
- alpha=0.2 integrated into the tf.data stream (NumPy-based)

Label Smoothing:
- ε=0.1 to regularize targets

Training:
- Adam + EarlyStopping + ReduceLROnPlateau + ModelCheckpoint

Evaluation:
- Val accuracy/loss curves
- Qualitative predictions on random test samples

OUTCOME

- Reduced overfitting and improved cross-class generalization with Mixup + Label Smoothing.
- More stable training curves and consistent predictions on random samples.

HIGHLIGHTS

- Clean integration of Mixup + LS for stronger regularization
- Efficient tf.data pipeline with augmentation + mixup
- Reproducible training logs and sample predictions for qualitative checks`,
        cltv: `GOAL

Model repeat purchases to forecast 3-month revenue and create customer segments for data-driven marketing.

APPROACH (END-TO-END)

Cleaning:
- Remove cancellations (Invoice "C*"), drop NAs, cap outliers in Quantity/Price, compute TotalPrice.

Lifetimes Structure:
- recency (weeks), T (weeks), frequency (>1), monetary per purchase.

Purchase Frequency:
- BG-NBD → expected purchases in 1 week / 1 month / 3 months.

Monetary Value:
- Gamma-Gamma → expected average profit.

CLTV:
- Combined BG-NBD + Gamma-Gamma 3-month CLV with 1% monthly discount (freq="W").

Segmentation:
- CLV-based A–D quartiles with summary stats.

RESULTS (SAMPLE OUTPUTS)

- Company-level expected transactions for 1w / 1m / 3m.
- Per-customer fields: expected_purc_1w, expected_purc_1m, expected_purc_3m, expected_average_profit, CLV.
- Segments: A (top value), B, C, D — report count / mean CLV / total CLV.

MARKETING ACTIONS

- A Segment: Loyalty perks, VIP offers, early access.
- B: Cross-sell & up-sell bundles.
- C: Win-back emails, limited discounts.
- D: Cost-aware, low-touch flows.

NOTE

Forecasts are learned from historical data. For production, schedule periodic retraining and integrate campaign feedback for calibration.`,
        amazonReviews: `GOAL

Compute a fair product rating by accounting for recency, and rank top-20 trustworthy reviews for the product page.

PROBLEM

- Naive averages are biased toward old reviews and vote brigading.
- "Most helpful" lists can be gamed, hurting conversion and trust.

SOLUTION

Time-Based Weighted Average:
- Split reviews into 4 recency quartiles (day_diff) and apply weights (e.g., 28/26/24/22; tunable).

Review Reliability Ranking:
- From helpful_yes / helpful_no compute:
  - Pos–Neg Difference
  - Average Rating
  - Wilson Lower Bound (WLB) → final ranking metric (lower bound of the CI).

Outputs:
- Revised average rating (recency-aware)
- Top-20 reviews to display (sorted by WLB)

OUTCOME & IMPACT

- Ratings reflect recent customer experience → trust ↑
- More manipulation-resistant review list → expected gains in conversion / fewer returns
- A reusable Python pipeline for marketplace teams

NOTES / LIMITATIONS

- WLB is conservative with small n; consider Bayesian Average Rating and NLP (sentiment/language detection) as next steps.
- Weights should be calibrated via A/B tests per category.`,
        housePrice: `GOAL

Develop a deep learning regression model to predict house sale prices using the Ames Housing dataset, applying advanced preprocessing, feature engineering, and hyperparameter tuning.

APPROACH

Preprocessing:
- Applied extensive preprocessing: missing value imputation, outlier clipping (1st & 99th percentile), log1p transformation.

Feature Engineering:
- Created ratio-based and interaction features (e.g., TotalSqFeet, LotRatio, OverallGrade, PorchArea, Age/Restoration features).
- One-hot encoding for categorical features, MinMax scaling for numerical variables.

Model Architecture:
- Training/validation pipeline built with tf.data for efficient batching.
- Baseline model: 2 dense layers (16–32 units, ReLU, L2 regularization, BatchNorm).

Hyperparameter Optimization:
- KerasTuner RandomSearch: tuned depth, units, activation (ReLU/LeakyReLU/PReLU), dropout, and Adam β1/β2.

RESULTS

- Baseline: RMSE ≈ $29,678, MAE ≈ $19,787
- Improved pipeline (log1p + outlier clipping + feature engineering): RMSE ≈ $24,883, MAE ≈ $16,356
- R² up to 0.99 for central percentiles; extreme luxury/rare houses remained most challenging.
- Error analysis identified high-value properties as main outlier sources; guided further feature adjustments.

OUTCOME

- Reliable, scalable prediction pipeline for real estate valuation.
- Strong generalization with robust preprocessing + engineered features.
- Ready-to-use deep learning workflow: data cleaning → feature engineering → DNN regression → error analysis.`
      }
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
    },
    hero: {
      shinyText1: 'Yapay Zeka',
      shinyText2: 'Çözümleri',
      description: 'Karmaşık iş süreçlerini otonom ajan ekosistemleri ve büyük ölçekli tahminleme modelleriyle ölçeklenebilir ve akıllı çözümlere dönüştürüyorum.',
      viewProjects: 'Projeleri İncele',
      contactMe: 'İletişime Geç',
    },
    workflow: {
      title: 'Yapay Zeka Geliştirme Süreci',
      step1: { title: 'Keşİf', desc: 'Gereksinim analizi ve stratejik problem tanımı.' },
      step2: { title: 'Mİmarİ', desc: 'Yapısal sistem tasarımı ve metodoloji seçimi.' },
      step3: { title: 'Mühendİslİk', desc: 'Çekirdek uygulama ve iteratif optimizasyon.' },
      step4: { title: 'Orkestrasyon', desc: 'Yayına alma ve sistem entegrasyonu.' },
    },
    services: {
      title: 'Odak Alanları',
      frontend: {
        title: 'Ajan Tabanlı AI & RAG',
        desc: 'Karmaşık muhakeme görevleri için otonom çoklu ajan sistemleri ve RAG boru hatları inşa etme.',
      },
      backend: {
        title: 'Makine Öğrenmesi',
        desc: 'Büyük ölçekli tablo verileri ve karmaşık veri yapıları üzerinde; yüksek performanslı, açıklanabilir ve üretime hazır (production-ready) tahminleme sistemleri kurguluyorum.',
      },
      design: {
        title: 'Full Stack AI',
        desc: 'Yapay zeka modellerini ve otonom ajanları modern yazılım mimarileriyle orkestre ederek; gerçek dünya problemlerini çözen uçtan uca akıllı arayüzler ve sistemler inşa ediyorum.',
      }
    },
    certificates: {
      title: 'Sertifikalar',
      view: 'Sertifikayı Görüntüle',
      names: {
        deepLearning: "Derin Öğrenme",
        dataScientistPath: "Veri Bilimci Kariyer Yolculuğu",
        introAI: "Veri Bilimi ve Yapay Zekaya Giriş",
        pythonDS: "Veri Bilimi için Python Programlama",
        crmAnalytics: "CRM Analitiği",
        genAI: "Generative AI & Prompt Engineer",
        recommender: "Tavsiye Sistemleri",
        measurement: "Ölçüm Problemleri",
        featureEngineering: "Özellik Mühendisliği",
        machineLearning: "Makine Öğrenmesi",
        sql: "MS SQL ile Veritabanı Sorgulama",
        productionDS: "Canlı Ortam Veri Bilimi",
        timeSeries: "Zaman Serileri"
      }
    },
    projects: {
      title: 'Öne Çıkan',
      titleSuffix: 'İnovasyonlar',
      description: 'Uçtan uca makine öğrenmesi modellerinden, üretim seviyesindeki ajan tabanlı NLP iş akışlarına kadar gelişmiş AI sistemleri.',
      code: 'Kod',
      notebook: 'Notebook',
      liveDemo: 'Canlı Demo',
      footer: 'Karmaşık bir probleminiz mi var?',
      letsTalk: 'Çözelim.',
      searchPlaceholder: 'Teknoloji ara...',
      filterAll: 'Tümü',
      viewDetails: 'Detayları Gör',
      certificates: 'Sertifikalar',
      about: 'Proje Hakkında',
      technologies: 'TEKNOLOJİLER',
      screenshots: 'PROJE EKRAN GÖRÜNTÜLERİ',
      titles: {
        vozant: "VOZANT - AI Destekli Araç Değerleme Sistemi",
        legalAI: "Hukuk AI Asistanı (Ajan Tabanlı RAG)",
        examAI: "AI Sınav Değerlendirme Sistemi",
        dashboard: "LLM Destekli Veri Gösterge Paneli",
        mri: "Beyin MRI Tümör Tespiti",
        cifar: "CIFAR-10 Güçlü CNN",
        cltv: "BG-NBD & Gamma-Gamma ile CLTV Modellemesi",
        amazonReviews: "Amazon Yorumları Duygu Tabanlı Sıralama",
        housePrice: "Derin Öğrenme ile Ev Fiyat Tahmini"
      },
      descriptions: {
        vozant: `HEDEF

Amerika Birleşik Devletleri'nden 2M+ araç kaydı üzerinde eğitilmiş bir LightGBM regresyon modeli ile desteklenen, üretime yönelik bir araç değerleme sistemi geliştirmek. Platform, piyasaya uygun fiyat tahminleri sunar ve her değerlemeyi Gemini API kullanarak AI tarafından oluşturulan araç görselleri ve yapılandırılmış bilgi kartları ile zenginleştirir.

SİSTEM GENEL BAKIŞ

- Doğrusal olmayan regresyon için optimize edilmiş, büyük ölçekli, tablo verisi odaklı fiyatlandırma sistemi.
- Hem sayısal hem de bağlamsal çıktılar üretmek için denetimli öğrenme, alana özgü özellik mühendisliği ve üretken AI'yı birleştirir.
- Model sağlamlığı, yorumlanabilirlik ve genişletilebilirlik odaklı tasarlanmıştır.

MODELLEME & VERİ

Model Mimarisi:
- LightGBM ile uygulanan Gradient Boosting Karar Ağaçları.

Eğitim Verisi:
- 55 üretici ve 917 modeli kapsayan 2M+ ABD araç ilanı.

Hedef:
- Gerçekçi varyans koruması ile araç piyasa fiyatı regresyonu.

ÖZELLİK MÜHENDİSLİĞİ

- Doğrusal olmayan yaş amortisman modellemesi.
- Kilometre normalizasyonu ve doygunluk etkileri.
- Motor ve performansla ilgili fiyatlandırma sinyalleri.
- Marka, model ve özelliklerin kategorik kodlaması.

ÜRETİCİ ZEKA

Araç Görsel Üretimi:
- Gemini API kullanarak AI tarafından oluşturulan araç görselleri.

Araç Bilgi Kartları:
- Gemini API aracılığıyla oluşturulan bağlam farkında özetler.

YETENEKLER

- Kalibre edilmiş fiyat aralıkları ile piyasa değeri tahmini.
- Markalar ve modeller arasında geniş kapsam.
- Birleşik nicel ve bağlamsal değerleme çıktısı.

SONUÇ

- Büyük ölçekli tablo ML uzmanlığını gösterir.
- Tahmine dayalı modelleme ve üretken AI entegrasyonunu sergiler.
- Uçtan uca AI sistem tasarımını vurgular.`,
        legalAI: `HEDEF

Türk hukuku sorgularını yorumlayabilen, ilgili mevzuat ve Yargıtay içtihatlarını alabilen ve koordineli çoklu ajan muhakemesi yoluyla bağlam farkında, referans destekli hukuki cevaplar üreten çok aşamalı bir Ajan Tabanlı RAG sistemi geliştirmek.

SİSTEM MİMARİSİ

- İlk ve takip sorgularını ayrı ayrı işleyen modüler 8 ajan hattı
- Alan doğrulama, ilgililik takibi ve konu sıfırlamalarını düzenleyen 3 karar bayrağı
- Deterministik akış kontrolü: alan tespiti → veritabanı seçimi → madde erişimi → içtihat araştırması → cevap sentezi
- Bağlam saklama ve konu değişimi tespiti ile güçlü takip mantığı

İLK SORU HATTI (Ajan1–Ajan5)

- Ajan1 | Alan Sınıflandırması: Hukuki vs hukuki olmayan soru tespiti
- Ajan2 | Veritabanı Seçici: Doğru hukuk korpusunu hedefler (TCK, TBK, İş Kanunu, TTK, HMK, VUK, vb.)
- Ajan3 | Madde Erişici: Vektörize edilmiş hukuk veritabanları üzerinde gömme tabanlı semantik arama
- Ajan4 | İçtihat Araştırmacısı: İlgili Yargıtay kararlarını getirir ve özetler
- Ajan5 | Cevap Sentezleyici: Mevzuat + içtihatı yapılandırılmış çıktıda birleştirir (özet, açıklama, haklar)

TAKİP HATTI (Ajan6–Ajan8)

- Ajan6 | İlgililik Kontrolcüsü: Yeni mesajın devam eden bağlamla uyumlu olup olmadığını belirler
- Ajan7 | Takip Yanıtlayıcı: Bağlam tutarlı takip cevapları üretir
- Ajan8 | Konu/Alan Doğrulayıcı: Konu değişimlerini tespit eder; sıfırlama veya yeniden yönlendirme mantığını tetikler

ANA MEKANİZMALAR

- Bayrak1 (Hukuki Kontrol): Ana hatta girişi belirler
- Bayrak2 (İlgililik Kontrolü): Takip akışını kontrol eder
- Bayrak3 (Konu Değişimi Kontrolü): Bağlam sıfırlama ve konuşma dallanmasını yönetir
- Hash tabanlı konuşma takibi ve eşzamanlılık güvenli durum yönetimi
- Girdi korumaları, yeniden deneme mantığı, yedek yanıtlar

YETENEKLER

- Çoklu hukuk semantik erişimi
- Madde seviyesinde hukuki dayanak
- Otomatik araştırma ile Yargıtay entegrasyonu
- Yapılandırılmış muhakeme ve açıklanabilir çıktılar
- Bağlam doğrulama ile akıllı takip işleme`,
        examAI: `HEDEF

Öğrenci sınav kağıtlarını otomatik olarak değerlendiren, puan atayan ve şeffaf, açıklanabilir geri bildirim sağlayan ajan tabanlı bir AI sistemi geliştirmek. Sistem, ölçeklenebilir, modüler ve açıklanabilir bir değerlendirme hattı sunarak okulları, öğretmenleri ve EdTech platformlarını desteklemek üzere tasarlanmıştır.

MİMARİ & AJANLAR

- Dosya Ajanı – PDF cevap kağıtlarını ve anahtarlarını işler, OCR ile metin çıkarır.
- Rubrik Ajanı – Cevap anahtarından puanlama rubriklerini çıkarır ve standartlaştırır.
- Puanlama Ajanı – GPT-4o ve yapılandırılmış muhakeme komutları ile öğrenci cevaplarını değerlendirir.
- Geri Bildirim Ajanı – İnsan benzeri açıklamalar ve iyileştirme önerileri üretir.
- Konuşma Ajanı – "Neden bu puanı aldım?" gibi takip sorularını işler.
- Raporlama Ajanı – Sonuçları öğrenci bazında raporlara özetler ve formatlar.
- Koordinatör Ajan – İş akışını orkestra eder ve ajan iletişimini yönetir.

ÖZELLİKLER

- Modüler tasarımla tamamen otomatik 7 ajan orkestrasyonu.
- GPT-4o destekli derin değerlendirme ve açıklanabilir puanlama hattı.
- Türkçe dil, serbest form cevaplar ve rubrik tabanlı değerlendirme için yerel destek.
- Server-Sent Events (SSE) ile gerçek zamanlı sonuç akışı.
- Vercel + Render'da deploy edilmiş FastAPI + Next.js full-stack mimarisi.
- Eğitim bağlamları için özelleştirilmiş prompt mühendisliği.

SONUÇLAR

- Manuel değerlendirme süresini önemli ölçüde azaltır ve tutarlılığı artırır.
- Aynı anda onlarca sınavın değerlendirilmesini destekler.
- Öğrencilerin etkileşimli açıklamalar yoluyla puanlarını anlamalarını sağlar.
- Ajan tabanlı AI mimarilerinin geleneksel değerlendirme iş akışlarını nasıl dönüştürebileceğini gösterir.`,
        dashboard: `HEDEF

Yüklenen Excel/CSV veri setlerini analiz eden ve anlamlı özetler, görselleştirmeler ve eyleme dönüştürülebilir öneriler üreten AI destekli bir gösterge paneli oluşturmak. Karar desteğine ihtiyaç duyan teknik olmayan kullanıcılar ve hızlı veri önizleme & EDA (Keşifsel Veri Analizi) isteyen teknik kullanıcılar için tasarlanmıştır.

VERİ YÜKLEME & ANALİZ

- Kullanıcılar Excel/CSV dosyaları yükler.
- Sistem otomatik olarak özet raporlar ve görselleştirmeler üretir.
- Veri seti yapısı, trendler ve dağılımların anlık genel görünümünü sağlar.

DOĞAL DİL SORGULARI

- Kullanıcılar sade dil soruları kullanarak veri ile etkileşime geçebilir:
  - "Son 6 aydaki satış trendi nedir?"
  - "Hangi müşteri segmenti en fazla gelir üretir?"
- Cevaplar tablolar, grafikler ve metin tabanlı içgörüler olarak sunulur.

EYLEME DÖNÜŞTÜRÜLEBİLİR ÖNERİLER

- Ham sayıların ötesinde, sistem anlamlı içgörüler sağlar.
- Örnek: "X segmentinde yüksek kayıp tespit edildi – hedefli indirimler düşünün."
- Çıktı doğrudan iş eylemlerine dönüşür.

KULLANICI SEGMENTLERİ

- Teknik Olmayan Kullanıcılar: Karar verme için anlık özetler ve görseller.
- Teknik Kullanıcılar: Hızlı veri önizleme, EDA, modelleme öncesi analiz.

SONUÇ

- Çift amaçlı kullanım: Hem teknik hem de teknik olmayan kullanıcılar için
- Anlık özetler, görseller ve öneriler
- Zaman tasarrufu sağlar ve karar vermeyi hızlandırır
- AI destekli içgörülerle veri odaklı kültürü destekler`,
        mri: `HEDEF

Yüksek doğruluklu, tekrarlanabilir bir sınıflandırma modeli oluşturmak için Kaggle MRI veri seti üzerinde transfer öğrenme ve derin öğrenme yöntemlerini keşfetmek.

ODAK

- Transfer öğrenme stratejileri ile deney yapmak
- Aşırı öğrenmeyi azaltmak için artırma ve düzenlileştirme uygulamak
- Topluluk ve kalibrasyon ile doğruluğu artırmak

METODOLOJİ

Model:
- EfficientNetB3 (transfer öğrenme)

İki Aşamalı Eğitim:
- A1: Omurga dondurma + Mixup artırma + Etiket yumuşatma (0.10)
- A2: Son 100 katmanı çözme + Etiket yumuşatma (0.00)

Topluluk:
- Yumuşak oylama + önyargı kapısı ayarlaması ile birleştirilen iki farklı tohum

Açıklanabilirlik:
- Model dikkat bölgelerinin Grad-CAM görselleştirmeleri

SONUÇLAR

- ~%99.5 test doğruluğu elde edildi
- Aşırı öğrenme azaltıldı, genelleme iyileştirildi
- Grad-CAM, karar alanlarını vurgulayarak açıklanabilir tahminler sağladı`,
        cifar: `HEDEF

CIFAR-10 üzerinde Mixup ve Label Smoothing'in genelleme ve sağlamlık üzerindeki etkisini göstermek, uçtan uca, tekrarlanabilir bir CNN eğitim hattı oluşturmak.

YAKLAŞIM

Mimari:
- 4 aşamalı CNN (MaxPool ve ilerleyici Dropout ile Conv-BN blokları)
- GlobalAvgPooling, Dense(512)+BN+Dropout, Softmax

Artırma:
- Rastgele çevirme/döndürme/yakınlaştırma/öteleme (hafif)

Mixup:
- tf.data akışına entegre alpha=0.2 (NumPy tabanlı)

Etiket Yumuşatma:
- Hedefleri düzenlileştirmek için ε=0.1

Eğitim:
- Adam + EarlyStopping + ReduceLROnPlateau + ModelCheckpoint

Değerlendirme:
- Val doğruluk/kayıp eğrileri
- Rastgele test örnekleri üzerinde niteliksel tahminler

SONUÇ

- Mixup + Label Smoothing ile aşırı öğrenme azaltıldı ve sınıflar arası genelleme iyileştirildi.
- Daha kararlı eğitim eğrileri ve rastgele örneklerde tutarlı tahminler.

ÖNE ÇIKANLAR

- Daha güçlü düzenlileştirme için Mixup + LS'nin temiz entegrasyonu
- Artırma + mixup ile verimli tf.data hattı
- Niteliksel kontroller için tekrarlanabilir eğitim kayıtları ve örnek tahminler`,
        cltv: `HEDEF

Tekrar satın alımları modelleyerek 3 aylık geliri tahmin etmek ve veri odaklı pazarlama için müşteri segmentleri oluşturmak.

YAKLAŞIM (UÇTAN UCA)

Temizleme:
- İptalleri kaldır (Fatura "C*"), NA'ları düşür, Miktar/Fiyat'ta aykırı değerleri sınırla, TotalPrice hesapla.

Lifetimes Yapısı:
- recency (hafta), T (hafta), frequency (>1), satın alma başına monetary.

Satın Alma Sıklığı:
- BG-NBD → 1 hafta / 1 ay / 3 ay için beklenen satın almalar.

Parasal Değer:
- Gamma-Gamma → beklenen ortalama kar.

CLTV:
- %1 aylık indirimle (freq="W") birleştirilmiş BG-NBD + Gamma-Gamma 3 aylık CLV.

Segmentasyon:
- Özet istatistiklerle CLV tabanlı A–D çeyrekleri.

SONUÇLAR (ÖRNEK ÇIKTILAR)

- 1h / 1a / 3a için şirket düzeyinde beklenen işlemler.
- Müşteri başına alanlar: expected_purc_1w, expected_purc_1m, expected_purc_3m, expected_average_profit, CLV.
- Segmentler: A (en yüksek değer), B, C, D — sayım / ortalama CLV / toplam CLV raporu.

PAZARLAMA AKSİYONLARI

- A Segmenti: Sadakat avantajları, VIP teklifler, erken erişim.
- B: Çapraz satış ve yukarı satış paketleri.
- C: Geri kazanma e-postaları, sınırlı indirimler.
- D: Maliyet bilinçli, düşük temaslı akışlar.

NOT

Tahminler geçmiş verilerden öğrenilir. Üretim için periyodik yeniden eğitim planlayın ve kalibrasyon için kampanya geri bildirimini entegre edin.`,
        amazonReviews: `HEDEF

Yeniliği hesaba katarak adil bir ürün puanı hesaplamak ve ürün sayfası için en güvenilir 20 yorumu sıralamak.

PROBLEM

- Naif ortalamalar eski yorumlara ve oy manipülasyonuna karşı önyargılıdır.
- "En yararlı" listeleri manipüle edilebilir, dönüşüme ve güvene zarar verir.

ÇÖZÜM

Zaman Tabanlı Ağırlıklı Ortalama:
- Yorumları 4 yenilik çeyreğine (day_diff) böl ve ağırlıklar uygula (örn. 28/26/24/22; ayarlanabilir).

Yorum Güvenilirlik Sıralaması:
- helpful_yes / helpful_no'dan hesapla:
  - Pozitif–Negatif Farkı
  - Ortalama Puan
  - Wilson Alt Sınırı (WLB) → nihai sıralama metriği (CI'nin alt sınırı).

Çıktılar:
- Revize edilmiş ortalama puan (yenilik farkında)
- Görüntülenecek ilk 20 yorum (WLB'ye göre sıralanmış)

SONUÇ & ETKİ

- Puanlar son müşteri deneyimini yansıtır → güven ↑
- Daha manipülasyona dirençli yorum listesi → dönüşümde beklenen kazançlar / daha az iade
- Pazar yeri ekipleri için yeniden kullanılabilir Python hattı

NOTLAR / SINIRLAMALAR

- WLB küçük n ile muhafazakardır; sonraki adımlar olarak Bayesian Ortalama Puan ve NLP (duygu/dil tespiti) düşünün.
- Ağırlıklar kategori başına A/B testleri ile kalibre edilmelidir.`,
        housePrice: `HEDEF

Ames Housing veri seti kullanarak ev satış fiyatlarını tahmin etmek için gelişmiş ön işleme, özellik mühendisliği ve hiperparametre ayarlaması uygulayan bir derin öğrenme regresyon modeli geliştirmek.

YAKLAŞIM

Ön İşleme:
- Kapsamlı ön işleme uygulandı: eksik değer imputasyonu, aykırı değer kırpma (1. ve 99. yüzdelik), log1p dönüşümü.

Özellik Mühendisliği:
- Oran tabanlı ve etkileşim özellikleri oluşturuldu (örn. TotalSqFeet, LotRatio, OverallGrade, PorchArea, Yaş/Restorasyon özellikleri).
- Kategorik özellikler için one-hot encoding, sayısal değişkenler için MinMax ölçekleme.

Model Mimarisi:
- Verimli toplu işleme için tf.data ile eğitim/doğrulama hattı oluşturuldu.
- Temel model: 2 yoğun katman (16–32 birim, ReLU, L2 düzenlileştirme, BatchNorm).

Hiperparametre Optimizasyonu:
- KerasTuner RandomSearch: derinlik, birimler, aktivasyon (ReLU/LeakyReLU/PReLU), dropout ve Adam β1/β2 ayarlandı.

SONUÇLAR

- Temel: RMSE ≈ $29,678, MAE ≈ $19,787
- İyileştirilmiş hat (log1p + aykırı değer kırpma + özellik mühendisliği): RMSE ≈ $24,883, MAE ≈ $16,356
- Merkezi yüzdelikler için R² 0.99'a kadar; aşırı lüks/nadir evler en zorlu kaldı.
- Hata analizi, ana aykırı değer kaynakları olarak yüksek değerli mülkleri belirledi; daha fazla özellik ayarlamasına rehberlik etti.

SONUÇ

- Gayrimenkul değerlemesi için güvenilir, ölçeklenebilir tahmin hattı.
- Sağlam ön işleme + mühendislik özellikleri ile güçlü genelleme.
- Kullanıma hazır derin öğrenme iş akışı: veri temizleme → özellik mühendisliği → DNN regresyonu → hata analizi.`
      }
    }
  }
};
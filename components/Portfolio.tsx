import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Certificates from './Certificates';
import Contact from './Contact';
import type { Project } from '../types';
import backgroundImage from '../assets/background.jpg';

// Safari tespiti
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const SECTION_HEADER_KEYWORDS = [
  'Model Selection',
  'Dataset & RAG',
  'Model Upgrade',
  'Prompt Engineering',
  'Re-Ranking Layer',
  'This approach:',
  'Data Upload & Analysis',
  'Natural Language Queries',
  'Actionable Recommendations',
  'User Segments',
  'Focus',
  'Methodology',
  'Approach',
  'Highlights',
  'Cleaning',
  'Lifetimes Structure',
  'Problem',
  'Solution',
  'Notes / Limitations',
  'Results',
  'Marketing Actions',
  'GOAL',
  'ARCHITECTURE & AGENTS',
  'SYSTEM ARCHITECTURE',
  'DATASET & MODEL',
  'USER FLOW',
  'FEATURES',
  'OUTCOME',
  'OUTCOMES',
  'INITIAL QUESTION PIPELINE',
  'FOLLOW-UP PIPELINE',
  'KEY MECHANISMS',
  'CAPABILITIES',
  'APPROACH',
  'RESULTS'
];

const SUB_HEADER_KEYWORDS = [
  '- Time-Based Weighted Average',
  '- From helpful_yes / helpful_no compute',
  '- Outputs'
];

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'portfolio' | 'certificates' | 'education'>('portfolio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const portfolioProjects: Project[] = [
    {
      id: 9,
      title: 'AI-POWERED EXAM EVALUATION SYSTEM WITH AGENTIC ARCHITECTURE',
description: `Goal: Develop an agent-based AI system that automatically evaluates student exam sheets, assigns scores, and provides transparent, explainable feedback. The system is designed to support schools, teachers, and EdTech platforms by offering a scalable, modular, and explainable grading pipeline.

ARCHITECTURE & AGENTS

- File Agent – Processes PDF answer sheets and keys, extracts text via OCR.

- Rubric Agent – Extracts and standardizes scoring rubrics from the answer key.

- Scoring Agent – Evaluates student answers with GPT-4o and structured reasoning prompts.

- Feedback Agent – Generates human-like explanations and improvement suggestions.

- Conversational Agent – Handles follow-up questions like “Why did I get this score?”.

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
      imageUrl: '',
      kaggleUrl: '',
      githubUrl: 'https://github.com/rausqen14/sinav_degerlendirici',
      liveUrl: 'https://github.com/rausqen14/sinav_degerlendirici',
      tags: ['Agentic Architecture', 'Multi-Agent System', 'Prompt Engineering', 'Explainable AI', 'OCR Processing', 'Full-Stack AI'],
      images: []
    },
    {
      id: 1,
      title: 'Legal AI Assistant',
      description: `Goal: Develop a multi-stage Agentic RAG system capable of interpreting Turkish legal queries, retrieving relevant legislation and Yargıtay case law, and generating context-aware, reference-backed legal answers through coordinated multi-agent reasoning.

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
      imageUrl: '',
      kaggleUrl: '',
      tags: ['RAG', 'Agentic Systems', 'Multi-Agent Architecture', 'Prompt Engineering', 'LangChain', 'GenerativeAI', 'ChromaDB', 'PyTorch'],
      images: [
        '/legal_ai/Ekran Görüntüsü (2179).png',
        '/legal_ai/Ekran Görüntüsü (2181).png',
        '/legal_ai/Ekran Görüntüsü (2182).png',
        '/legal_ai/Ekran Görüntüsü (2183).png',
        '/legal_ai/Ekran Görüntüsü (2184).png'
      ]
    },
    {
      id: 2,
      title: 'LLM-Powered Dashboard',
      description: `Goal: Build an AI-powered dashboard that analyzes uploaded Excel/CSV datasets and generates meaningful summaries, visualizations, and actionable recommendations. Designed for non-technical users who need decision support and technical users who want quick data preview & EDA (Exploratory Data Analysis).

Data Upload & Analysis

- Users upload Excel/CSV files.

- The system automatically generates summary reports and visualizations.

- Provides an instant overview of dataset structure, trends, and distributions.

Natural Language Queries

- Users can interact with the data using plain language questions:

  - "What is the sales trend over the last 6 months?"
  - "Which customer segment generates the most revenue?"

- Answers are delivered in tables, charts, and text-based insights.

Actionable Recommendations

- Beyond raw numbers, the system provides meaningful insights.

  - Example: "High churn detected in segment X – consider targeted discounts."

- Output translates directly into business actions.

User Segments

- Non-Technical Users: Instant summaries and visuals for decision-making.

- Technical Users: Quick data preview, EDA, pre-modeling analysis.

Outcome

- Dual-purpose usage: For both technical & non-technical users

- Instant summaries, visuals, and recommendations

- Saves time & accelerates decision-making

- Supports a data-driven culture with AI-powered insights`,
      imageUrl: '',
      kaggleUrl: '',
      tags: ['LLM', 'Dashboard', 'Data Analysis', 'Natural Language', 'Visualization', 'EDA', 'Actionable Recommendations'],
      images: [
        '/llm_dashboard/Adsız video ‐ Clipchamp ile yapıldı.mp4',
        '/llm_dashboard/Ekran Görüntüsü (1345).png',
        '/llm_dashboard/Ekran Görüntüsü (1387).png',
        '/llm_dashboard/Ekran Görüntüsü (1388).png',
        '/llm_dashboard/Ekran Görüntüsü (1389).png',
        '/llm_dashboard/Ekran Görüntüsü (1391).png',
        '/llm_dashboard/Ekran Görüntüsü (1392).png',
        '/llm_dashboard/Ekran Görüntüsü (1393).png',
        '/llm_dashboard/Ekran Görüntüsü (1394).png'
      ]
    },
    {
      id: 8,
      title: 'CAR PRICE PREDICTION WITH XGBOOST',
      description: `GOAL

Build a machine learning–powered web application that estimates the market value of vehicles based on brand, model, mileage, age, and technical specifications. Designed for both car buyers and sellers who want a quick and reliable price estimation.


DATASET & MODEL

- Trained on 2 million+ vehicle records from the US automotive market.
- Applied advanced preprocessing: missing value handling, outlier detection, feature encoding.
- Built predictive models with XGBoost for high accuracy and scalability.


USER FLOW

- Users enter car details (brand, model, year/age, mileage, fuel type, power, torque, transmission).
- The system instantly predicts an estimated price range (min–max).
- Displays evaluation factors to show how each input contributes to the prediction.


FEATURES

- Real-time car price estimation.
- User-friendly web interface with instant feedback.
- Supports both new and used vehicles.
- Transparent results: shows key factors affecting the estimation.


OUTCOME

- Provides accurate and explainable car price predictions.
- Saves time for buyers and sellers in negotiations.
- Demonstrates the power of machine learning models on large-scale structured datasets.
- Supports data-driven decision-making in the automotive industry.`,
      imageUrl: '',
      kaggleUrl: '',
      liveUrl: 'https://velora-black.vercel.app/',
      tags: ['Machine Learning', 'XGBoost', 'Data Analysis'],
      images: [
        '/car_price/Desktop 2025.10.07 - 20.50.56.08.mp4',
        '/car_price/Ekran Görüntüsü (1309).png',
        '/car_price/Ekran Görüntüsü (1312).png',
        '/car_price/Ekran Görüntüsü (1313).png'
      ]
    },
    {
      id: 3,
      title: 'Brain MRI Tumor Detection with Transfer Learning',
      description: `Goal: Explore transfer learning and deep learning methods on a Kaggle MRI dataset to build a high-accuracy, reproducible classification model.

Focus

- Experiment with transfer learning strategies

- Apply augmentation & regularization to reduce overfitting

- Boost accuracy with ensemble & calibration

Methodology

- Model: EfficientNetB3 (transfer learning)

- Two-stage Training:

- S1: Freeze backbone + Mixup augmentation + Label smoothing (0.10)

- S2: Unfreeze last 100 layers + Label smoothing (0.00)

- Ensemble: Two different seeds combined with soft-vote + bias-gate adjustment

- Explainability: Grad-CAM visualizations of model attention regions

Results

- Achieved ~99.5% test accuracy

- Reduced overfitting, improved generalization

- Grad-CAM provided explainable predictions, highlighting decision areas`,
      imageUrl: '',
      kaggleUrl: 'https://www.kaggle.com/code/rausqen/brain-mri-tumor-detection-two-seed',
      tags: ['Deep Learning', 'Transfer Learning', 'Computer Vision', 'EfficientNetB3', 'TensorFlow'],
      images: [
        '/brain_tumor/Ekran Görüntüsü (903).png',
        '/brain_tumor/Ekran Görüntüsü (904).png',
        '/brain_tumor/Ekran Görüntüsü (905).png',
        '/brain_tumor/Ekran Görüntüsü (906).png',
        '/brain_tumor/Ekran Görüntüsü (9061).png'
      ]
    },
    {
      id: 4,
      title: 'CIFAR-10 CNN with Mixup & Label Smoothing',
      description: `Goal: Demonstrate the impact of Mixup and Label Smoothing on generalization and robustness on CIFAR-10, building an end-to-end, reproducible CNN training pipeline.

Approach

- Architecture: 4-stage CNN (Conv-BN blocks with MaxPool & progressive Dropout), GlobalAvgPooling, Dense(512)+BN+Dropout, Softmax

- Augmentation: Random flip/rotation/zoom/translation (light)

- Mixup: alpha=0.2 integrated into the tf.data stream (NumPy-based)

- Label Smoothing: ε=0.1 to regularize targets

- Training: Adam + EarlyStopping + ReduceLROnPlateau + ModelCheckpoint

- Evaluation: Val accuracy/loss curves; qualitative predictions on random test samples

Outcome

- Reduced overfitting and improved cross-class generalization with Mixup + Label Smoothing.

- More stable training curves and consistent predictions on random samples.

Highlights

- Clean integration of Mixup + LS for stronger regularization

- Efficient tf.data pipeline with augmentation + mixup

- Reproducible training logs and sample predictions for qualitative checks`,
      imageUrl: '',
      kaggleUrl: 'https://www.kaggle.com/code/rausqen/cifar-10-cnn-with-mixup-label-smoothing',
      tags: ['CNN', 'Computer Vision', 'Mixup', 'Label Smoothing', 'Data Augmentation'],
      images: [
        '/cifar-10/Ekran Görüntüsü (907).png',
        '/cifar-10/Ekran Görüntüsü (908).png',
        '/cifar-10/Ekran Görüntüsü (909).png',
        '/cifar-10/Ekran Görüntüsü (910).png',
        '/cifar-10/Ekran Görüntüsü (911).png',
        '/cifar-10/Ekran Görüntüsü (912).png'
      ]
    },
    {
      id: 5,
      title: 'CLTV Modeling with BG-NBD & Gamma-Gamma',
      description: `Goal: Model repeat purchases to forecast 3-month revenue and create customer segments for data-driven marketing.

Approach (End-to-End)

Cleaning

- Remove cancellations (Invoice "C*"), drop NAs, cap outliers in Quantity/Price, compute TotalPrice.

Lifetimes Structure

- recency (weeks), T (weeks), frequency (>1), monetary per purchase.

- Purchase Frequency: BG-NBD → expected purchases in 1 week / 1 month / 3 months.

- Monetary Value: Gamma-Gamma → expected average profit.

- CLTV: Combined BG-NBD + Gamma-Gamma 3-month CLV with 1% monthly discount (freq="W").

- Segmentation: CLV-based A–D quartiles with summary stats.

Results (Sample Outputs)

- Company-level expected transactions for 1w / 1m / 3m.

- Per-customer fields: expected_purc_1w, expected_purc_1m, expected_purc_3m, expected_average_profit, CLV.

- Segments: A (top value), B, C, D — report count / mean CLV / total CLV.

Note: Forecasts are learned from historical data. For production, schedule periodic retraining and integrate campaign feedback for calibration.

Marketing Actions

- A Segment: Loyalty perks, VIP offers, early access.

- B: Cross-sell & up-sell bundles.

- C: Win-back emails, limited discounts.

- D: Cost-aware, low-touch flows.`,
      imageUrl: '',
      kaggleUrl: 'https://www.kaggle.com/code/rausqen/cltv-modeling-with-bg-nbd-gamma-gamma',
      tags: ['CLTV', 'BG-NBD', 'Gamma-Gamma', 'Marketing Analytics', 'Customer Analytics'],
      images: [
        '/gamma-gamma/Ekran Görüntüsü (923).png',
        '/gamma-gamma/Ekran Görüntüsü (924).png',
        '/gamma-gamma/Ekran Görüntüsü (925).png',
        '/gamma-gamma/Ekran Görüntüsü (926).png',
        '/gamma-gamma/Ekran Görüntüsü (927).png',
        '/gamma-gamma/Ekran Görüntüsü (928).png',
        '/gamma-gamma/Ekran Görüntüsü (929).png',
        '/gamma-gamma/Ekran Görüntüsü (930).png'
      ]
    },
    {
      id: 6,
      title: 'Amazon Reviews Sentiment-Based Ranking',
      description: `Goal: Compute a fair product rating by accounting for recency, and rank top-20 trustworthy reviews for the product page.

Problem

- Naive averages are biased toward old reviews and vote brigading.

- "Most helpful" lists can be gamed, hurting conversion and trust.

Solution

- Time-Based Weighted Average

- Split reviews into 4 recency quartiles (day_diff) and apply weights (e.g., 28/26/24/22; tunable).

- Review Reliability Ranking

- From helpful_yes / helpful_no compute

- Pos–Neg Difference

- Average Rating

- Wilson Lower Bound (WLB) → final ranking metric (lower bound of the CI).

- Outputs

- Revised average rating (recency-aware)

- Top-20 reviews to display (sorted by WLB)

Outcome & Impact

- Ratings reflect recent customer experience → trust ↑

- More manipulation-resistant review list → expected gains in conversion / fewer returns

- A reusable Python pipeline for marketplace teams

Notes / Limitations

- WLB is conservative with small n; consider Bayesian Average Rating and NLP (sentiment/language detection) as next steps.

- Weights should be calibrated via A/B tests per category.`,
      imageUrl: '',
      kaggleUrl: 'https://www.kaggle.com/code/rausqen/amazon-reviews-sentiment-based-ranking',
      tags: ['Sentiment Analysis', 'Wilson Lower Bound', 'Amazon Reviews', 'Time-Weighted Rating'],
      images: [
        '/amazon/Ekran Görüntüsü (931).png',
        '/amazon/Ekran Görüntüsü (932).png',
        '/amazon/Ekran Görüntüsü (933).png',
        '/amazon/Ekran Görüntüsü (934).png',
        '/amazon/Ekran Görüntüsü (935).png',
        '/amazon/Ekran Görüntüsü (936).png',
        '/amazon/Ekran Görüntüsü (937).png',
        '/amazon/Ekran Görüntüsü (938).png'
      ]
    },
    {
      id: 7,
      title: 'House Price Prediction with Deep Learning',
      description: `GOAL

Develop a deep learning regression model to predict house sale prices using the Ames Housing dataset, applying advanced preprocessing, feature engineering, and hyperparameter tuning.


APPROACH

- Applied extensive preprocessing: missing value imputation, outlier clipping (1st & 99th percentile), log1p transformation.

- Feature engineering: created ratio-based and interaction features (e.g., TotalSqFeet, LotRatio, OverallGrade, PorchArea, Age/Restoration features).

- One-hot encoding for categorical features, MinMax scaling for numerical variables.

- Training/validation pipeline built with tf.data for efficient batching.

- Baseline model: 2 dense layers (16–32 units, ReLU, L2 regularization, BatchNorm).

- Hyperparameter optimization with KerasTuner RandomSearch: tuned depth, units, activation (ReLU/LeakyReLU/PReLU), dropout, and Adam β1/β2.


RESULTS

- Baseline: RMSE ≈ $29,678, MAE ≈ $19,787

- Improved pipeline (log1p + outlier clipping + feature engineering): RMSE ≈ $24,883, MAE ≈ $16,356

- R² up to 0.99 for central percentiles; extreme luxury/rare houses remained most challenging.

- Error analysis identified high-value properties as main outlier sources; guided further feature adjustments.


OUTCOME

- Reliable, scalable prediction pipeline for real estate valuation.

- Strong generalization with robust preprocessing + engineered features.

- Ready-to-use deep learning workflow: data cleaning → feature engineering → DNN regression → error analysis.`,
      imageUrl: '',
      kaggleUrl: 'https://www.kaggle.com/code/rausqen/house-price-prediction-with-deep-learning',
      tags: ['Deep Learning', 'Regression', 'Feature Engineering', 'KerasTuner', 'Error Analysis', 'TensorFlow'],
      images: [
        '/house/Ekran Görüntüsü (1091).png',
        '/house/Ekran Görüntüsü (1092).png',
        '/house/Ekran Görüntüsü (1093).png',
        '/house/Ekran Görüntüsü (1094).png',
        '/house/Ekran Görüntüsü (1095).png',
        '/house/Ekran Görüntüsü (1096).png',
        '/house/Ekran Görüntüsü (1097).png',
        '/house/Ekran Görüntüsü (1098).png',
        '/house/Ekran Görüntüsü (1099).png',
        '/house/Ekran Görüntüsü (1100).png',
        '/house/Ekran Görüntüsü (1101).png',
        '/house/Ekran Görüntüsü (1102).png',
        '/house/Ekran Görüntüsü (1103).png',
        '/house/Ekran Görüntüsü (1104).png',
        '/house/Ekran Görüntüsü (1105).png',
        '/house/Ekran Görüntüsü (1106).png',
        '/house/Ekran Görüntüsü (1107).png'
      ]
    }
  ];

  const openProjectModal = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Zoom fonksiyonları
  const zoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newZoom = Math.min(zoom + 0.2, 5);
    setZoom(newZoom);
  };

  const zoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newZoom = Math.max(zoom - 0.2, 0.2);
    setZoom(newZoom);
  };

  const resetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse wheel ile zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    let newZoom = zoom + (e.deltaY < 0 ? 0.1 : -0.1);
    newZoom = Math.max(0.2, Math.min(newZoom, 5));
    setZoom(newZoom);
  };

  // Drag fonksiyonları
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // ESC tuşu ile modal kapatılması
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeProjectModal();
      }
    };
    
    const handleGlobalWheel = (e: WheelEvent) => {
      if (selectedProject) {
        e.preventDefault();
      }
    };
    
    if (selectedProject) {
      window.addEventListener('keydown', handleEscape);
      window.addEventListener('wheel', handleGlobalWheel, { passive: false });
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleEscape);
        window.removeEventListener('wheel', handleGlobalWheel);
        document.body.style.overflow = '';
      };
    }
  }, [selectedProject]);

  // Drag eventi için global mouse up
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseUp = () => setIsDragging(false);
      window.addEventListener('mouseup', handleGlobalMouseUp);
      return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setSelectedImageIndex((prev) => 
        prev < selectedProject.images!.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setSelectedImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedProject.images!.length - 1
      );
    }
  };
  return (
    <div className="bg-black text-gray-300 antialiased relative min-h-screen">
      {/* Background Image Container */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          zIndex: 0,
          backgroundPosition: '30% 50%',
          backgroundSize: 'cover',
          // Sadece Chrome'da blur uygula
          filter: (!isSafari && /chrome/i.test(navigator.userAgent)) ? 'blur(12px)' : undefined
        }}
      />
      {/* Safari'de arka planı gerçekten bulanıklaştıran overlay */}
      {isSafari && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: 'rgba(255,255,255,0.05)', // hafif aydınlatma efekti
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)'
          }}
        />
      )}
      
      {/* Genel aydınlatma overlay'i */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          background: 'rgba(255,255,255,0.03)', // hafif aydınlatma efekti
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        {/* Mobilde menü başlıkları 2x2 grid */}
        <div className="md:hidden w-full px-4 pt-24">
          <div className="grid grid-cols-2 gap-2">
            <button className={`w-full border border-white/10 text-white font-light py-3 rounded-sm uppercase tracking-widest text-xs transition-all duration-300 hover:border-white/60 ${activeSection==='portfolio' ? 'bg-black/30 border-white/20' : ''}`} onClick={() => setActiveSection('portfolio')}>Projects</button>
            <button className={`w-full border border-white/10 text-white font-light py-3 rounded-sm uppercase tracking-widest text-xs transition-all duration-300 hover:border-white/60 ${activeSection==='certificates' ? 'bg-black/30 border-white/20' : ''}`} onClick={() => setActiveSection('certificates')}>Certificates</button>
            <button className={`w-full border border-white/10 text-white font-light py-3 rounded-sm uppercase tracking-widest text-xs transition-all duration-300 hover:border-white/60 ${activeSection==='education' ? 'bg-black/30 border-white/20' : ''}`} onClick={() => setActiveSection('education')}>ABOUT ME</button>
          </div>
        </div>
        <div className="flex flex-1 w-full pt-20 pb-16">
          {/* Sol cam efektli dikdörtgen */}
          <div className="hidden md:flex flex-col items-start justify-start fixed top-20 left-0 w-96 min-w-[320px] p-8 bg-black/30 border border-white/10 shadow-lg backdrop-blur-[2px] rounded-none" style={{height: 'calc(100vh - 25rem)'}}>
            <div className="flex flex-col gap-4 w-full">
              <a href="#" className={`w-full border border-transparent text-white font-light py-3 pl-2 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 ease-out hover:border-white/60 text-left ${activeSection === 'portfolio' ? 'bg-black/30 border-white/15' : ''}`} onClick={() => setActiveSection('portfolio')}>Projects</a>
              <a href="#" className={`w-full border border-transparent text-white font-light py-3 pl-2 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 ease-out hover:border-white/60 text-left ${activeSection === 'certificates' ? 'bg-black/30 border-white/15' : ''}`} onClick={() => setActiveSection('certificates')}>Certificates</a>
              <a href="#" className={`w-full border border-transparent text-white font-light py-3 pl-2 rounded-sm uppercase tracking-widest text-sm transition-all duration-300 ease-out hover:border-white/60 text-left ${activeSection === 'education' ? 'bg-black/30 border-white/15' : ''}`} onClick={() => setActiveSection('education')}>ABOUT ME</a>
            </div>
          </div>
          {/* Sağ ana içerik */}
          <section className="flex-1 flex flex-col items-center justify-start w-full md:ml-96 md:pl-8 mt-0">
            {activeSection === 'portfolio' && (
              <div className="w-full px-4">
                <div className="grid grid-cols-1 gap-8">
                  {portfolioProjects.map((project) => (
                    <div 
                      key={project.id} 
                      id={`project-${project.id}`}
                      className="bg-black/30 border border-white/10 shadow-lg backdrop-blur-[2px] rounded-none overflow-hidden transition-all duration-300 w-full"
                    >
                      <div className="p-12">
                        <h3 className="text-white tracking-widest text-lg mb-4 uppercase cursor-default">{project.title}</h3>
                        <div className="text-gray-300 text-sm mb-4 leading-relaxed whitespace-pre-line cursor-default">
                          {project.description.split('\n').map((line, index) => {

                            const trimmedLine = line.trim();

                            const normalizedLine = trimmedLine.replace(/\([^)]*\)/g, '').trim();



                            const matchesHeaderKeyword = SECTION_HEADER_KEYWORDS.some((keyword) =>

                              normalizedLine.includes(keyword)

                            );

                            const isAllCapsHeader = normalizedLine.length > 0 && normalizedLine === normalizedLine.toUpperCase();

                            const isHeader = (matchesHeaderKeyword || isAllCapsHeader) && !trimmedLine.startsWith('-');

                            

                            // Check if line is a subsection header (specific bullet points to highlight)

                            const isSubHeader = SUB_HEADER_KEYWORDS.some((keyword) => line.includes(keyword));

                            

                            if (isHeader) {

                              // ARCHITECTURE & AGENTS basligina ozel bir ust margin ekle

                              const marginTopClass = normalizedLine.includes('ARCHITECTURE & AGENTS') ? 'mt-6' : 'mt-4';

                              return (

                                <div key={index} className={`text-white font-light text-sm mb-2 tracking-widest uppercase ${marginTopClass}`}>

                                  {line}

                                </div>

                              );

                            }

                            

                            if (isSubHeader) {

                              return (

                                <div key={index} className="text-white font-medium text-sm mt-3 mb-1 tracking-wide">

                                  {line}

                                </div>

                              );

                            }

                            

                            return (

                              <div key={index}>

                                {line}

                              </div>

                            );

                          })}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span key={tag} className="inline-block border border-gray-600 px-3 py-1 text-xs font-semibold text-gray-300 mr-2 mb-2 transition-all duration-300 hover:border-white/60 cursor-default">
                              {tag}
                            </span>
                          ))}
                          {project.kaggleUrl && (
                            <a href={project.kaggleUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white/5 border border-white/20 px-4 py-2 text-xs font-semibold text-white mr-2 mb-2 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                              KAGGLE
                            </a>
                          )}
                        </div>
                        {/* Project Images or View Project Button */}
                        {(project.images && project.images.length > 0) ? (
                          <div className="grid grid-cols-6 gap-2">
                            {project.images.map((image, index) => {
                              const firstImageThumbnail = project.images.find(item => !item.endsWith('.mp4'));
                              return (
                                <div 
                                  key={index} 
                                  className="bg-white/2 border border-white/10 shadow-lg backdrop-blur-lg rounded-none overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    openProjectModal(project, index);
                                  }}
                                >
                                  {image.endsWith('.mp4') ? (
                                    <div className="relative w-full h-20 bg-black flex items-center justify-center text-white text-sm font-medium">
                                      {firstImageThumbnail ? (
                                        <img
                                          src={encodeURI(firstImageThumbnail)}
                                          alt={`${project.title} - Video Thumbnail`}
                                          className="object-cover w-full h-full absolute inset-0 opacity-50"
                                          loading="eager"
                                          style={{ background: '#222' }}
                                        />
                                      ) : (
                                        <div className="absolute inset-0 bg-black/50"></div>
                                      )}
                                      <svg className="relative w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                    </div>
                                  ) : (
                                    <img
                                      src={encodeURI(image)}
                                      alt={`${project.title} - ${index + 1}`}
                                      className="object-cover w-full h-20"
                                      loading="eager"
                                      style={{ background: '#222' }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        ) : null}
                        
                        <div className="flex space-x-4 mt-4">
                          {/* Kaggle Link Button */}
                          {project.kaggleUrl && (
                            <a 
                              href={project.kaggleUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-block border border-gray-600 text-white text-sm font-medium py-2 px-4 rounded-none transition-all duration-300 hover:border-white/60"
                            >
                              View on Kaggle
                            </a>
                          )}
                          
                          {/* Live Project Link Button */}
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-block border border-gray-600 text-white text-sm font-medium py-2 px-4 rounded-none transition-all duration-300 hover:border-white/60"
                            >
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeProjectModal}>
                    <div 
                      className="relative max-w-5xl w-full mx-6" 
                      onClick={(e) => e.stopPropagation()}
                      onWheel={handleWheel}
                    >
                      {/* Navigation Arrows */}
                      {selectedProject.images && selectedProject.images.length > 1 && (
                        <>
                          <button 
                            onClick={prevImage}
                            className="absolute -left-12 top-1/2 -translate-y-1/2 text-white text-3xl z-50 hover:text-white/50 transition-colors"
                          >
                            &#x276E;
                          </button>
                          <button 
                            onClick={nextImage}
                            className="absolute -right-12 top-1/2 -translate-y-1/2 text-white text-3xl z-50 hover:text-white/50 transition-colors"
                          >
                            &#x276F;
                          </button>
                        </>
                      )}
                      
                      {/* Media Display */}
                      {selectedProject.images && selectedProject.images[selectedImageIndex] && (
                        <>
                          {selectedProject.images[selectedImageIndex].endsWith('.mp4') ? (
                            <video
                              src={encodeURI(selectedProject.images[selectedImageIndex])}
                              controls
                              preload="metadata"
                              className="object-contain max-h-[80vh] w-[85vw] md:w-[75vw] mx-auto rounded-lg shadow-2xl"
                              style={{ 
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                                transition: isDragging ? 'none' : 'transform 0.15s'
                              }}
                              onMouseDown={handleMouseDown}
                              onMouseMove={handleMouseMove}
                              onMouseUp={handleMouseUp}
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              src={encodeURI(selectedProject.images[selectedImageIndex])}
                              alt={`${selectedProject.title} - Image ${selectedImageIndex + 1}`}
                              className="object-contain max-h-[80vh] w-[85vw] md:w-[75vw] mx-auto rounded-lg shadow-2xl cursor-move"
                              style={{ 
                                transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                                transition: isDragging ? 'none' : 'transform 0.15s'
                              }}
                              draggable={false}
                              onMouseDown={handleMouseDown}
                              onMouseMove={handleMouseMove}
                              onMouseUp={handleMouseUp}
                            />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
            {activeSection === 'certificates' && (
              <div className="w-full flex flex-col items-center justify-start px-4">
                <Certificates />
              </div>
            )}

            {activeSection === 'education' && (
              <div className="w-full flex flex-col items-start justify-start px-0" style={{marginBottom: '29rem'}}>
                <div className="bg-black/30 border border-white/10 shadow-lg backdrop-blur-[2px] p-16 mb-8 w-full max-w-7xl ml-4">
                  <div className="text-gray-300 text-lg leading-relaxed">
                    <p className="mb-8">
                      I am interested in artificial intelligence and data-driven problem solving, aiming to build a career that combines technical expertise and continuous growth. My academic journey from Electrical and Electronics Engineering to Statistics directed my focus toward data analysis and artificial intelligence, strengthening my analytical perspective.
                    </p>
                    <p>
                      In my professional life, I follow a competitive and results-oriented approach. I value taking on new responsibilities and continuously strive for improvement with discipline, motivation, and a commitment to high standards.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
        
        {/* Contact Section - Below sidebar, spans full width, visible on all sections */}
        <div className="w-full mt-48">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

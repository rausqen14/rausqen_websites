import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Legal AI Assistant',
    description: 'Processes thousands of legal documents with OCR + semantic chunking and integrates them into a RAG pipeline. Provides instant answers to user queries with relevant laws and case precedents; pipeline auto-updates when new documents are added.',
    imageUrl: '',
    kaggleUrl: '',
    tags: ['RAG', 'OCR', 'Semantic Search', 'Prompt Engineering', 'Fine-Tuning', 'ChromaDB', 'LlamaIndex', 'PyTorch', 'Google Cloud API Integration'],
  },
  {
    id: 2,
    title: 'LLM-Powered Dashboard',
    description: 'This LLM-powered dashboard analyzes uploaded Excel/CSV datasets, generating meaningful summaries and visualizations. Users can interact with the data through natural language queries, receiving instant insights and actionable reports. Designed to make data-driven decision making accessible to non-technical users.',
    imageUrl: '',
    kaggleUrl: '',
    tags: ['LLM', 'Dashboard', 'Data Analysis', 'Natural Language', 'Visualization', 'EDA', 'Actionable Recommendations'],
  },
  {
    id: 8,
    title: 'CAR PRICE PREDICTION WITH XGBOOST',
    description: 'A machine learning web app that estimates vehicle market value based on brand, model, mileage, and age. Trained on 2M+ records with XGBoost for quick, reliable price estimation for buyers and sellers.',
    imageUrl: '',
    kaggleUrl: '',
    tags: ['Machine Learning', 'XGBoost', 'Data Analysis'],
  },
  {
    id: 3,
    title: 'Brain MRI Tumor Detection with Transfer Learning',
    description: 'Built a high-accuracy brain tumor classification system using EfficientNetB3 with Mixup augmentation, label smoothing, and a 2-seed ensemble. Achieved ~99.5% test accuracy with explainable results.',
    imageUrl: '',
    kaggleUrl: 'https://www.kaggle.com/code/rausqen/brain-mri-tumor-detection-two-seed',
    tags: ['Deep Learning', 'Transfer Learning', 'Computer Vision', 'EfficientNetB3', 'TensorFlow'],
  },
  {
    id: 4,
    title: 'CIFAR-10 CNN with Mixup & Label Smoothing',
    description: 'Implemented a CNN-based image classifier on CIFAR-10 with Mixup augmentation and Label Smoothing to reduce overfitting. Achieved robust generalization across classes with improved accuracy.',
    imageUrl: '',
    kaggleUrl: 'https://www.kaggle.com/code/rausqen/cifar-10-cnn-with-mixup-label-smoothing',
    tags: ['CNN', 'Computer Vision', 'Mixup', 'Label Smoothing', 'Data Augmentation'],
  },
  {
    id: 5,
    title: 'CLTV Modeling with BG-NBD & Gamma-Gamma',
    description: 'Models repeat purchases to forecast 3-month revenue and creates customer segments for data-driven marketing. Uses BG-NBD for purchase frequency and Gamma-Gamma for monetary value to calculate CLTV and segment customers into A-D quartiles.',
    imageUrl: '',
    kaggleUrl: 'https://www.kaggle.com/code/rausqen/cltv-modeling-with-bg-nbd-gamma-gamma',
    tags: ['CLTV', 'BG-NBD', 'Gamma-Gamma', 'Marketing Analytics', 'Customer Analytics'],
  },
  {
    id: 6,
    title: 'Amazon Reviews Sentiment-Based Ranking',
    description: 'Computes fair product ratings by accounting for recency and ranks top-20 trustworthy reviews. Uses time-based weighted averages and Wilson Lower Bound to create manipulation-resistant review rankings.',
    imageUrl: '',
    kaggleUrl: 'https://www.kaggle.com/code/rausqen/amazon-reviews-sentiment-based-ranking',
    tags: ['Sentiment Analysis', 'Wilson Lower Bound', 'Amazon Reviews', 'Time-Weighted Rating'],
  },
  {
    id: 7,
    title: 'House Price Prediction with Deep Learning',
    description: 'Developed a deep learning regression model using the Ames Housing dataset with advanced preprocessing, feature engineering, and hyperparameter tuning to achieve accurate house price predictions.',
    imageUrl: '',
    kaggleUrl: 'https://www.kaggle.com/code/rausqen/house-price-prediction-with-deep-learning',
    tags: ['Deep Learning', 'Regression', 'Feature Engineering', 'KerasTuner', 'Error Analysis', 'TensorFlow'],
  },
];

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreProjects = () => {
    navigate('/portfolio');
  };
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center relative px-6 pt-20">

      <div className="container mx-auto z-10 flex flex-col items-center justify-center flex-grow" style={{ marginTop: '0px' }}>
        <p className="text-base md:text-lg lg:text-xl text-white font-light tracking-[0.3em] uppercase cursor-default" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.9), 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.1)' }}>
          AI Engineer
        </p>
        <button
          onClick={handleExploreProjects}
          className="mt-4 inline-block border border-white/30 py-2 px-8 rounded-sm tracking-widest transition-all duration-300 hover:bg-black/30 hover:backdrop-blur-[2px] hover:border-white/60 shiny-text text-sm"
          style={{ fontWeight: 550 }}
        >
          EXPLORE PROJECTS
        </button>
        
        {/* Project Cards */}
        <div className="mt-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

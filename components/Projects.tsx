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
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-4 md:py-6 bg-black/30 border border-white/10 shadow-lg backdrop-blur-[2px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

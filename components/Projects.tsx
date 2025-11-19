import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 9,
    title: 'AI-POWERED EXAM EVALUATION SYSTEM WITH AGENTIC ARCHITECTURE',
    description: 'Goal: Develop an agent-based AI system that automatically evaluates student exam sheets, assigns scores, and provides transparent, explainable feedback. The system is designed to support schools, teachers, and EdTech platforms by offering a scalable, modular, and explainable grading pipeline.\n\n\n\nARCHITECTURE & AGENTS\n\n- File Agent – Processes PDF answer sheets and keys, extracts text via OCR.\n\n- Rubric Agent – Extracts and standardizes scoring rubrics from the answer key.\n\n- Scoring Agent – Evaluates student answers with GPT-4o and structured reasoning prompts.\n\n- Feedback Agent – Generates human-like explanations and improvement suggestions.\n\n- Conversational Agent – Handles follow-up questions like “Why did I get this score?”.\n\n- Reporting Agent – Summarizes and formats the results into per-student reports.\n\n- Coordinator Agent – Orchestrates the workflow and manages agent communication.\n\nFEATURES\n\n- Fully automated 7-agent orchestration with modular design.\n\n- GPT-4o-powered deep evaluation and explainable scoring pipeline.\n\n- Native support for Turkish language, free-form answers, and rubric-based evaluation.\n\n- Real-time streaming of results via Server-Sent Events (SSE).\n\n- FastAPI + Next.js full-stack architecture, deployed on Vercel + Render.\n\n- Prompt engineering tailored for educational contexts.\n\nOUTCOMES\n\n- Significantly reduces manual grading time and improves consistency.\n\n- Supports evaluation of dozens of exams simultaneously.\n\n- Enables students to understand their scores through interactive explanations.\n\n- Demonstrates how agentic AI architectures can transform traditional assessment workflows.',
    imageUrl: '',
    kaggleUrl: '',
    liveUrl: 'https://github.com/rausqen14/sinav_degerlendirici',
    tags: ['Agentic Architecture', 'Multi-Agent System', 'AI Assessment', 'GPT-4o', 'Prompt Engineering', 'OCR', 'SSE', 'EdTech', 'FastAPI', 'Next.js'],
  },
  {
    id: 1,
    title: 'Legal AI Assistant',
    description: 'Multi-stage Agentic RAG system with 8-agent pipeline for Turkish legal queries. Features modular architecture with domain classification, multi-law database selection, article retrieval, Yargıtay case law research, and intelligent follow-up handling. Includes 3 decision flags for flow control, hash-based conversation tracking, and context-aware answer synthesis.',
    imageUrl: '',
    kaggleUrl: '',
    liveUrl: 'https://www.hukcep.com/',
    tags: ['RAG', 'Agentic Systems', 'Multi-Agent Architecture', 'Prompt Engineering', 'LangChain', 'GenerativeAI', 'ChromaDB', 'PyTorch'],
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

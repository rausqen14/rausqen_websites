import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate('/portfolio');
    // Wait for navigation to complete, then jump directly to the specific project using ID
    setTimeout(() => {
      const projectElement = document.getElementById(`project-${project.id}`);
      if (projectElement) {
        // Calculate the exact position considering header height
        const headerHeight = 80; // Approximate header height
        const elementTop = projectElement.offsetTop - headerHeight;
        window.scrollTo({ top: elementTop, behavior: 'instant' });
      }
    }, 100);
  };

  return (
    <div className="border border-white/10 shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }}>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h3 className="text-white text-xl font-medium uppercase tracking-widest text-center p-4 cursor-default">{project.title}</h3>
            </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <div className="mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="inline-block border border-gray-600 px-3 py-1 text-xs font-semibold text-gray-300 mr-2 mb-2 transition-all duration-300 hover:bg-black/15 hover:backdrop-blur-[2px] hover:border-gray-400 cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow cursor-default">{project.description}</p>
            <button 
              onClick={handleViewProject}
              className="mt-auto inline-block border border-gray-600 text-white text-sm font-semibold py-2 px-4 transition-all duration-300 text-center hover:bg-black/15 hover:backdrop-blur-[2px] hover:border-gray-400"
            >
                View Project
            </button>
        </div>
    </div>
  );
};

export default ProjectCard;
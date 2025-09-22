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
    <div className="border border-white/20 bg-black/20 backdrop-blur-md shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-black/30">
        <div className="relative h-28 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }}>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-base font-medium uppercase tracking-widest text-center p-2 cursor-default">{project.title}</h3>
            </div>
        </div>
        <div className="p-4 flex-grow flex flex-col">
            <div className="mb-3">
                {project.tags.map(tag => (
                    <span key={tag} className="inline-block border border-gray-600 px-2 py-1 text-xs font-semibold text-gray-300 mr-1 mb-1 transition-all duration-300 hover:bg-black/15 hover:backdrop-blur-[2px] hover:border-gray-400 cursor-default">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-gray-300 text-xs mb-3 leading-relaxed flex-grow cursor-default">{project.description}</p>
            <button 
              onClick={handleViewProject}
              className="mt-auto inline-block border border-gray-600 text-white text-xs font-semibold py-2 px-3 transition-all duration-300 text-center hover:bg-black/15 hover:backdrop-blur-[2px] hover:border-gray-400"
            >
                View Project
            </button>
        </div>
    </div>
  );
};

export default ProjectCard;

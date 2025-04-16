
import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  details?: string;
  showGithubLink?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="card-cyber group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/50 to-transparent opacity-80"></div>
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-tech font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-purple hover:text-cyber-purple/80 text-sm flex items-center transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              <span>View Project</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Hover overlay with additional details - updated with more blur */}
      <div 
        className={`absolute inset-0 bg-cyber-darker/98 backdrop-blur-md p-6 flex flex-col transition-all duration-300 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h3 className="text-xl font-tech font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{project.details || project.description}</p>
        
        <div className="mt-4">
          {project.link && project.showGithubLink && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-cyber w-full justify-center"
            >
              <span>View on GitHub</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

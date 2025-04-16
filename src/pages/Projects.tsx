
import React, { useState, useEffect } from 'react';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // In a real app, this would come from an API or CMS
  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      const projectsData: Project[] = [
        {
          id: '1',
          title: 'Network Defense System',
          description: 'Enterprise-grade intrusion detection and prevention system.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
          tags: ['Security', 'Network', 'Enterprise'],
          details: 'Designed and implemented a comprehensive network defense system for a financial institution, including IDS/IPS, firewall rules, and network segmentation.'
        },
        {
          id: '2',
          title: 'Secure Cloud Migration',
          description: 'Security architecture for AWS cloud infrastructure.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
          tags: ['Cloud', 'AWS', 'Infrastructure'],
          details: 'Led security aspects of a major cloud migration project, ensuring data protection and compliance throughout the transition.'
        },
        {
          id: '3',
          title: 'Vulnerability Assessment',
          description: 'Web application penetration testing framework.',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
          tags: ['Web Security', 'Pentesting', 'Tool'],
          details: 'Developed a custom web application penetration testing framework used to identify critical vulnerabilities across multiple client systems.'
        },
        {
          id: '4',
          title: 'Incident Response Planning',
          description: 'Comprehensive security incident response protocol.',
          image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop',
          tags: ['Incident Response', 'Planning', 'Corporate'],
          details: 'Created and implemented an incident response plan for a healthcare organization, ensuring HIPAA compliance and minimizing breach impact.'
        },
        {
          id: '5',
          title: 'Security Training Program',
          description: 'Employee security awareness and training module.',
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
          tags: ['Training', 'Awareness', 'Corporate'],
          details: 'Developed and delivered a comprehensive security awareness training program for a multinational corporation with over 5,000 employees.'
        },
        {
          id: '6',
          title: 'Red Team Assessment',
          description: 'Full-scale penetration testing and security evaluation.',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
          tags: ['Red Team', 'Pentesting', 'Assessment'],
          details: 'Conducted a comprehensive red team assessment for a financial institution, identifying critical vulnerabilities and providing remediation strategies.'
        }
      ];
      
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Extract all unique tags from projects
  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects based on selected tag
  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    
    if (tag === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark"></div>
        
        <div className="cyber-container relative z-10">
          <h1 className="font-tech text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & <span className="text-glow">Certifications</span>
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Explore my portfolio of cybersecurity projects, certifications, and professional achievements. Each project demonstrates my expertise in different aspects of security implementation and threat mitigation.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          {/* Filter menu */}
          <div className="mb-10 border-b border-gray-800 pb-4">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-cyber-green mr-2" />
              <span className="text-gray-300 font-medium">Filter Projects:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-md text-sm transition-all ${
                    activeFilter === tag
                      ? 'bg-cyber-green text-cyber-darker font-medium'
                      : 'bg-cyber-darker text-gray-300 hover:bg-cyber-green/20'
                  }`}
                  onClick={() => handleFilterChange(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 rounded-full border-4 border-cyber-green/20 border-t-cyber-green animate-spin"></div>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">No projects match the selected filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-16 bg-cyber-darker relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        <div className="cyber-container relative z-10">
          <h2 className="font-tech text-3xl font-bold text-white mb-8">
            Professional <span className="text-glow">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Certified Ethical Hacker (CEH)",
                issuer: "EC-Council",
                date: "2023",
                icon: "🔒"
              },
              {
                name: "Certified Information Systems Security Professional (CISSP)",
                issuer: "ISC²",
                date: "2022",
                icon: "🛡️"
              },
              {
                name: "Offensive Security Certified Professional (OSCP)",
                issuer: "Offensive Security",
                date: "2021",
                icon: "⚔️"
              },
              {
                name: "CompTIA Security+",
                issuer: "CompTIA",
                date: "2020",
                icon: "🔐"
              },
              {
                name: "AWS Certified Security - Specialty",
                issuer: "Amazon Web Services",
                date: "2021",
                icon: "☁️"
              },
              {
                name: "Certified Cloud Security Professional (CCSP)",
                issuer: "ISC²",
                date: "2022",
                icon: "💾"
              }
            ].map((cert, index) => (
              <div key={index} className="card-cyber p-6 flex flex-col h-full">
                <div className="mb-4 text-4xl">{cert.icon}</div>
                <h3 className="font-tech text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-cyber-green text-sm font-medium">{cert.date}</span>
                  <span className="bg-cyber-green/10 text-cyber-green text-xs px-2 py-1 rounded-md">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

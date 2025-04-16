
import React from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';

const Index = () => {
  // Updated featured projects based on user requirements
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'ISO 27001 Implementation',
      description: 'Lead implementer for ISO 27001 across three IPMC Ghana branches.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
      tags: ['ISO 27001', 'ISMS', 'Compliance'],
      details: 'Spearheaded the implementation of ISO 27001 at IPMC Ghana across three branches. Conducted GAP analysis, created asset registries totaling over 800,000 USD, and authored 12+ ISO compliant policies, improving efficiency by 23%.'
    },
    {
      id: '5',
      title: 'EcoCar EV Challenge',
      description: 'System controls and data-driven decision-making frameworks.',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop',
      tags: ['Automotive', 'MathWorks', 'Simulink'],
      details: 'Led cross-functional research teams to design system controls using CAN bus controls. Pioneered the modification of the Platinum Model using MathWorks and Simulink, boosting system performance and achieving all project KPIs.'
    },
    {
      id: '6',
      title: 'Distributed Clock Algorithms',
      description: 'Research and implementation of novel Gossipping Time Protocol (GTP).',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
      tags: ['Research', 'Protocols', 'Networking'],
      details: 'Conducted pioneering research in distributed clock algorithms, recognizing their critical role in ensuring accurate timekeeping across networks. Implemented a novel Gossipping Time Protocol (GTP), addressing limitations of existing protocols by decentralizing clock synchronization.',
      link: 'https://github.com/abheekmondal',
      showGithubLink: true
    }
  ];
  
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Featured Projects */}
      <section className="py-20 bg-cyber-dark relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        <div className="cyber-container relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-tech text-3xl font-bold text-white">
                Featured <span className="text-glow">Projects</span>
              </h2>
              <p className="mt-2 text-gray-400">
                Showcasing my expertise in cybersecurity implementation
              </p>
            </div>
            
            <Link 
              to="/projects" 
              className="btn-cyber group"
            >
              <span>View All</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-matrix opacity-20"></div>
        
        <div className="cyber-container relative z-10 text-center">
          <h2 className="font-tech text-3xl font-bold text-white mb-6 mx-auto max-w-3xl">
            Ready to Secure Your <span className="text-glow">Digital Assets</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to protect your organization from cyber threats with tailored security solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-cyber">
              <span>Get in Touch</span>
            </Link>
            <Link to="/resume" className="btn-cyber bg-cyber-green/10">
              <span>View Resume</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

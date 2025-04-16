
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
          title: 'ISO 27001 Implementation',
          description: 'Lead implementer for ISO 27001 across three IPMC Ghana branches.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
          tags: ['ISO 27001', 'ISMS', 'Compliance'],
          details: 'Spearheaded the implementation of ISO 27001 at IPMC Ghana across three branches. Conducted GAP analysis, created asset registries totaling over 800,000 USD, and authored 12+ ISO compliant policies, improving efficiency by 23%.'
        },
        {
          id: '2',
          title: 'WhatsRoute',
          description: 'Lead Software Developer for restaurant ordering system with WhatsApp integration.',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
          tags: ['Development', 'Agile', 'API'],
          details: 'Developed technical architecture design for a restaurant ordering system integrated with the WhatsApp Business API. Orchestrated project timelines using Agile methodologies and led a cross-functional team for backend and system integration development.'
        },
        {
          id: '3',
          title: 'Web Application Pentesting',
          description: 'Comprehensive security assessment and vulnerability remediation.',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
          tags: ['Security', 'Pentesting', 'OWASP'],
          details: 'Developed a detailed Pentesting manual using comprehensive tools such as OWASP ZAP, SQL injection, XSS. Identified 40+ vulnerabilities including 12+ critical issues, contributing to a 25% reduction in overall risk exposure.'
        },
        {
          id: '4',
          title: 'RND4IMPACT Data Analysis',
          description: 'Business data analysis using Python, GraphQL, and Lambda.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
          tags: ['Data Analysis', 'Python', 'GraphQL'],
          details: 'Conducted in-depth analysis of business sales data using Python, GraphQL, and Lambda, identifying key insights and potential fraud patterns. Performed trend analysis and regression techniques to deliver actionable insights that optimized marketing efforts.'
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
        },
        {
          id: '7',
          title: 'SmartHart',
          description: 'Hardware Lead and Cybersecurity Co-lead for wearable device.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
          tags: ['Hardware', 'PCB', 'IoT'],
          details: 'Designed hardware blueprint of all sensors necessary and the custom PCB board for the watch. Successfully implemented a voltage regulator to ensure consistent output, decreasing malfunction risk by 20%. Spearheaded the integration of sensor arrays and LED systems.'
        },
        {
          id: '8',
          title: 'Orthogonal Time Shift Modulation',
          description: 'Comprehensive analysis of OTSM for next-generation communications.',
          image: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop',
          tags: ['Research', 'Communications', 'Modulation'],
          details: 'Conducted an in-depth survey on Orthogonal Time Shift Modulation (OTSM) with comprehensive analysis of its theoretical foundations, performance evaluation, and practical implementation challenges. Demonstrated OTSM\'s robustness against synchronization errors.',
          link: 'https://github.com/abheekmondal',
          showGithubLink: true
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
            Projects & <span className="text-glow">Experience</span>
          </h1>
          <p className="text-gray-300 max-w-3xl">
            Explore my portfolio of projects, professional experience, and certifications. Each project demonstrates my expertise in cybersecurity, software development, and system architecture.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          {/* Filter menu */}
          <div className="mb-10 border-b border-gray-800 pb-4">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-cyber-purple mr-2" />
              <span className="text-gray-300 font-medium">Filter Projects:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-md text-sm transition-all ${
                    activeFilter === tag
                      ? 'bg-cyber-purple text-cyber-darker font-medium'
                      : 'bg-cyber-darker text-gray-300 hover:bg-cyber-purple/20'
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
              <div className="w-12 h-12 rounded-full border-4 border-cyber-purple/20 border-t-cyber-purple animate-spin"></div>
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
                name: "PECB ISO/IEC 27001: ISMS Lead Implementer",
                issuer: "PECB",
                date: "2025",
                icon: "🔒"
              },
              {
                name: "Problem Solving (Intermediate)",
                issuer: "Hackerrank",
                date: "2023",
                icon: "🧩"
              },
              {
                name: "SQL (Advanced)",
                issuer: "Hackerrank",
                date: "2023",
                icon: "💾"
              },
              {
                name: "GO",
                issuer: "Hackerrank",
                date: "2022",
                icon: "🚀"
              },
              {
                name: "Python",
                issuer: "Hackerrank",
                date: "2022",
                icon: "🐍"
              },
              {
                name: "C|EH + C|EH Practical",
                issuer: "EC Council",
                date: "2023",
                icon: "⚔️"
              }
            ].map((cert, index) => (
              <div key={index} className="card-cyber p-6 flex flex-col h-full">
                <div className="mb-4 text-4xl">{cert.icon}</div>
                <h3 className="font-tech text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex-grow">
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-cyber-purple text-sm font-medium">{cert.date}</span>
                  <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section className="py-16 bg-cyber-dark relative">
        <div className="cyber-container relative z-10">
          <h2 className="font-tech text-3xl font-bold text-white mb-8">
            Skills & <span className="text-glow">Education</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Column */}
            <div className="lg:col-span-2">
              <div className="card-cyber p-6">
                <h3 className="font-tech text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    "Java", "Python", "JavaScript", "React", "HTML/CSS", "Go",
                    "Kubernetes", "MySQL", "Azure", "ISO 27001", 
                    "Penetration Testing", "SIEM", "Risk Assessment",
                    "OWASP", "Wireshark", "Metasploit", "Burp Suite",
                    "Agile/Scrum", "Jira", "Azure DevOps"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-cyber-purple rounded-full"></span>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h3 className="font-tech text-xl font-semibold text-white mb-4">Memberships</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "IEEE - HKN: IEEE Honor Society",
                      "Order of Engineering: Honor Society",
                      "IIT Greek Council: VP Positions",
                      "Alpha Sigma Phi: Leadership Position"
                    ].map((membership, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-cyber-purple rounded-full"></span>
                        <span className="text-gray-300 text-sm">{membership}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education Column */}
            <div>
              <div className="card-cyber p-6 h-full">
                <h3 className="font-tech text-xl font-semibold text-white mb-4">Education</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-white">Illinois Institute of Technology</h4>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">2023</span>
                    </div>
                    <p className="text-sm text-cyber-purple font-medium">Master of Science, Computer Systems and Software</p>
                    <p className="text-xs text-gray-400">Specialization in Cybersecurity</p>
                    <p className="text-xs text-gray-400 mt-1">GPA: 3.65, Magna Cum Laude</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-medium text-white">Illinois Institute of Technology</h4>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">2023</span>
                    </div>
                    <p className="text-sm text-cyber-purple font-medium">Bachelor of Science, Computer Engineering</p>
                    <p className="text-xs text-gray-400 mt-1">IIT Dean's Honor List (2020-2023)</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="text-lg font-medium text-white mb-2">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Encryption Algorithms and Cryptography",
                        "Wireless Network Security Protocols",
                        "Cybersecurity for Hardware Architecture",
                        "Artificial Intelligence",
                        "Cloud Computing & Native Systems"
                      ].map((course, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="w-2 h-2 bg-cyber-purple rounded-full"></span>
                          <span className="text-gray-300 text-xs">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

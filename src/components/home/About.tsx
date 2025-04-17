
import React, { useEffect, useRef } from 'react';
import { Shield, Server, Code, AlertTriangle, CheckCircle } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const skills = [
    { name: "Network Security", level: 90 },
    { name: "Penetration Testing", level: 85 },
    { name: "Vulnerability Assessment", level: 95 },
    { name: "Incident Response", level: 80 },
    { name: "Security Architecture", level: 75 },
  ];
  
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="cyber-container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="font-tech text-3xl font-bold text-white mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              About <span className="text-glow">Me</span>
            </h2>
            
            <div className="space-y-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <p className="text-gray-300">
                I am a passionate cybersecurity professional with over 5 years of experience in protecting digital assets and infrastructures from evolving cyber threats. My expertise spans across vulnerability assessment, penetration testing, and security architecture.
              </p>
              <p className="text-gray-300">
                I leverage a combination of AI-Augmented offensive and defensive security approaches to identify vulnerabilities before they can be exploited by malicious actors. My goal is to help businesses establish robust security postures that can withstand modern cyber threats.
              </p>
              
              <div className="flex items-center space-x-6 mt-6">
                <div className="flex flex-col items-center">
                  <span className="text-cyber-green font-bold text-3xl">12+</span>
                  <span className="text-gray-400 text-sm">Projects</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-cyber-purple font-bold text-3xl">5+</span>
                  <span className="text-gray-400 text-sm">Years</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-cyber-green font-bold text-3xl">80+</span>
                  <span className="text-gray-400 text-sm">All-nighters</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <h3 className="font-tech text-xl font-semibold text-white mb-4">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyber-green">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyber-green to-cyber-purple animate-pulse-glow rounded-full" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <Shield size={18} className="text-cyber-green" />
                  <span className="text-gray-300">Firewall Configuration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={18} className="text-cyber-green" />
                  <span className="text-gray-300">Threat Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Server size={18} className="text-cyber-green" />
                  <span className="text-gray-300">Cloud Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code size={18} className="text-cyber-green" />
                  <span className="text-gray-300">Secure Coding</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={18} className="text-cyber-green" />
                  <span className="text-gray-300">Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

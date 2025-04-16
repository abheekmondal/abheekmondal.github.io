
import React from 'react';
import PDFViewer from '@/components/resume/PDFViewer';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  // We'd use a real PDF URL in production
  const resumePdfUrl = '/sample-resume.pdf';
  
  // Sample resume data - in a real app, this might come from CMS or API
  const resumeData = {
    experience: [
      {
        title: "Senior Security Consultant",
        company: "CyberDefend Solutions",
        period: "2021 - Present",
        description: "Lead security assessments, penetration testing, and security architecture reviews for enterprise clients. Develop custom security solutions and provide strategic security guidance.",
        achievements: [
          "Implemented zero-trust architecture for a Fortune 500 company",
          "Reduced security incidents by 70% through enhanced monitoring",
          "Developed custom threat detection algorithms"
        ]
      },
      {
        title: "Cybersecurity Analyst",
        company: "SecureNet Inc.",
        period: "2018 - 2021",
        description: "Conducted vulnerability assessments, security audits, and incident response. Developed and implemented security policies and procedures.",
        achievements: [
          "Led SOC team during major ransomware incident recovery",
          "Implemented SIEM solution reducing detection time by 60%",
          "Authored company-wide security training program"
        ]
      },
      {
        title: "Network Security Engineer",
        company: "TechGuard Systems",
        period: "2016 - 2018",
        description: "Designed and implemented secure network infrastructures, firewalls, and VPNs. Conducted regular security assessments and audits.",
        achievements: [
          "Redesigned network security architecture",
          "Implemented IDS/IPS systems across multiple datacenters",
          "Created automated vulnerability scanning framework"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Cybersecurity",
        institution: "Tech University",
        year: "2016",
        details: "Specialized in Advanced Threat Detection and Incident Response"
      },
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "State University",
        year: "2014",
        details: "Focus on Network Security and Cryptography"
      }
    ],
    skills: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Architecture",
      "Incident Response",
      "Cloud Security",
      "Network Defense",
      "SIEM Implementation",
      "Risk Assessment",
      "Threat Modeling",
      "Security Compliance",
      "Cryptography",
      "Python",
      "Bash Scripting"
    ]
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-12 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark"></div>
        
        <div className="cyber-container relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div>
              <h1 className="font-tech text-4xl font-bold text-white mb-2">
                Resume & <span className="text-glow">Experience</span>
              </h1>
              <p className="text-gray-300 max-w-2xl">
                A detailed overview of my professional experience, skills, and qualifications in the cybersecurity domain.
              </p>
            </div>
            
            <a 
              href="/sample-resume.pdf" 
              download="Cybersecurity_Resume.pdf"
              className="btn-cyber flex items-center w-fit"
            >
              <Download size={18} className="mr-2" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* PDF Viewer Section */}
      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          <div className="card-cyber h-[700px] mb-12">
            <PDFViewer pdfUrl={resumePdfUrl} />
          </div>
        </div>
      </section>
      
      {/* Resume Details */}
      <section className="py-12 bg-cyber-darker">
        <div className="cyber-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-cyber-green mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="card-cyber p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{job.title}</h3>
                      <span className="bg-cyber-green/10 text-cyber-green text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-cyber-green font-medium mb-4">{job.company}</div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <GraduationCap size={24} className="text-cyber-green mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="card-cyber p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{edu.degree}</h3>
                      <span className="bg-cyber-green/10 text-cyber-green text-xs px-2 py-1 rounded-md">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-cyber-green font-medium mb-2">{edu.institution}</div>
                    <p className="text-gray-300">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Column */}
            <div>
              <div className="flex items-center mb-6">
                <Award size={24} className="text-cyber-green mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Skills & Expertise</h2>
              </div>
              
              <div className="card-cyber p-6">
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-cyber-green/10 text-cyber-green text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <FileText size={24} className="text-cyber-green mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Certifications</h2>
              </div>
              
              <div className="card-cyber p-6">
                <ul className="space-y-4">
                  {[
                    "Certified Ethical Hacker (CEH)",
                    "Certified Information Systems Security Professional (CISSP)",
                    "Offensive Security Certified Professional (OSCP)",
                    "CompTIA Security+",
                    "AWS Certified Security - Specialty",
                    "Certified Cloud Security Professional (CCSP)"
                  ].map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-cyber-green rounded-full mr-3"></span>
                      <span className="text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

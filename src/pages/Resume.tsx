
import React from 'react';
import PDFViewer from '@/components/resume/PDFViewer';
import { Download, FileText, Award, Briefcase, GraduationCap, Code, Shield } from 'lucide-react';

const Resume = () => {
  // We'd use a real PDF URL in production
  const resumePdfUrl = '/Cybersecurity-Engineer-Abheek-Mondal-ISO270001-Certified.pdf';
  
  // Resume data based on Abheek's experience
  const resumeData = {
    experience: [
      {
        title: "ISO 27001 Lead Implementer",
        company: "IPMC Ghana",
        period: "2024 - Present",
        description: "Leading ISO 27001 implementation across multiple branches and implementing cybersecurity protocols.",
        achievements: [
          "Spearheaded the implementation of ISO 27001 at IPMC Ghana across three of its branches, the head office, training centre and service centre",
          "Conducted GAP analysis of each of the locations to determine the changes that need to be made.",
          "Created critical asset registries for all three branches, totaling over 800,000 USD and assigned risks and contingency plans for severe risk assets.",
          "Authored over 12 detailed ISO compliant policies for each of the branches, improving IPMC’s efficiency by 23%, including a detailed CSIRP on how to conduct Cybersecurity incidents, how to mitigate incidents and report to proper management."
        ]
      },
      {
        title: "WebApp Pentester",
        company: "IPMC Ghana",
        period: "2024 - Present",
        description: "Conducted pen-testing on web applications using OWASP top 10 framework, among others.",
        achievements: [
          "Developed a detailed Pentesting manual and used comprehensive tools such as OWASP ZAP, SQL injection, XSS, and other tools.",
          "Collaborated with development teams to implement security fixes, enhancing security of the webapp before deployment.",
          "Identified 40+ vulnerabilities including 12+ critical issues",
          "Developed detailed vulnerability reports (technical and non-technical) with risk assessment and proper remediation steps to take to effectively communicate details to technical and non-technical managers.",
          "Reduced overall risk exposure of app by 25%"
        ]
      },
      {
        title: "Cybersecurity Solutions Consultant",
        company: "IPMC Ghana",
        period: "2024 - Present",
        description: "Developed strategic cybersecurity initiatives and conducted gap analyses of client infrastructure to identify security weaknesses.",
        achievements: [
          "Collaborated directly with the CEO to develop strategic cybersecurity initiatives and spearhead targeted client engagement, driving business growth and strengthening market presence.",
          "Leveraged advanced server log to detect for anomalous IPs and malicious activity and implemented real-time threat detection and preemptive IP blacklisting to fortify network defenses. Improved server performance by 10% and reduce resource utilization by 13%.",
          "Authored several detailed, ISO 27001-compliant incident reports that accurately documented cyber threats, which ensured swift threat mitigation, maintained strict regulatory adherence, and minimized risk exposure.",
          "Conduct in-depth analyses of clients' existing infrastructure and systems to identify potential security weaknesses, vulnerabilities, and compliance gaps.",
          "Develop tailored, threat-mitigating solutions for vulnerable systems, incorporating best practices in security architecture, and emerging threat intelligence.",
          "Improved client cybersecurity infrastructure, resulting in a 15% enhancement in system resilience against cyber threats.",
          "Enhanced cybersecurity protocols by reducing vulnerability exposure by 30% by implementing comprehensive risk assessments"
        ]
      },
      {
        title: "Webmaster (Full-Stack Developer)",
        company: "ESports Trade Association",
        period: "2022",
        description: "Managed ESTA's website, ensuring high uptime and improved operational.",
        achievements: [
          "Managed ESTA's website ensuring 90% uptime and a 25% improvement in operational efficiency.",
          "Increased site traffic by 20% through the development of 32 custom WordPress pages.",
          "Improved website speed and responsiveness by 30%",
          "Enhanced cross-platform functionality, boosting user experience by 15%"
        ]
      },
      {
        title: "Lead Software Developer and Engineer",
        company: "WhatsRoute (Startup)",
        period: "2024",
        description: "Worked with the founders and creators to develop their ideas in real time",
        achievements: [
          "Developed technical architecture design for a restaurant ordering system integrated with the WhatsApp Business API.",
          "Orchestrated project timelines and deliverables using Agile methodologies and Scrum, led bi-weekly sprints.",
          "Led a cross-functional team for the backend and system integration development.",
          "Implemented a location-based service using Google Maps API."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science, Computer Systems and Software Specialization in Cybersecurity",
        institution: "Illinois Institute of Technology",
        year: "2023",
        details: "GPA: 3.65, Magna Cum Laude",
        courses: [
          "Application Software Design",
          "Wireless Network Protocols",
          "Cloud Computing & Native Systems",
          "Embedded Systems and Software",
          "Security protocols",
          "Encryption Algorithms and Cryptography",
          "Intro to Artificial Intelligence"
        ]
      },
      {
        degree: "Bachelor of Science, Computer Engineering",
        institution: "Illinois Institute of Technology",
        year: "2020-2023",
        details: "IIT Dean's Honor List (2020-2023)"
      }
    ],
    skills: [
      "Java",
      "Python",
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "GoLang",
      "MySQL",
      "Azure",
      "Apache",
      "GitHub",
      "WordPress",
      "Linux",
      "Windows Server",
      "OSWAP",
      "Metasploit",
      "Wireshark",
      "BurpSuite",
      "Agile Development",
      "Scrum Master"
    ],
    certifications: [
      "PECB ISO/IEC 27001: ISMS Lead Implementer 2025",
      "Problem Solving (Intermediate): Hackerrank Certification",
      "SQL (Advanced): Hackerrank Certification",
      "GO: Hackerrank Certification",
      "Python: Hackerrank Certification",
      "IEEE - HKN: IEEE Honor Society",
      "Order of Engineering: Order of Engineering Honor Society"
    ],
    projects: [
      {
        name: "WhatsRoute",
        role: "Lead Software Developer and Engineer",
        year: "2024",
        description: "Developed technical architecture for a restaurant ordering system integrated with WhatsApp Business API."
      },
      {
        name: "RND4IMPACT Inc.",
        role: "Data Analyst",
        year: "2024",
        description: "Conducted in-depth analysis of business sales data using Python, GraphQL, and Lambda."
      },
      {
        name: "EcoCar EV Challenge",
        role: "Team Lead",
        year: "2022-2023",
        description: "Led cross-functional research teams to design system controls using CAN bus controls."
      },
      {
        name: "Research on Distributed Clock Algorithms",
        role: "Researcher",
        year: "2023",
        description: "Implemented a novel Gossipping Time Protocol (GTP) addressing limitations of existing protocols."
      }
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
              download="Abheek_Mondal_Resume.pdf"
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
                <Briefcase size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="card-cyber p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{job.title}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-4">{job.company}</div>
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
                <Code size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Projects</h2>
              </div>
              
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="card-cyber p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{project.name}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">
                        {project.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-2">{project.role}</div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <GraduationCap size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="card-cyber p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{edu.degree}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-2">{edu.institution}</div>
                    <p className="text-gray-300 mb-2">{edu.details}</p>
                    {edu.courses && (
                      <div>
                        <h4 className="text-white font-medium mb-2">Relevant Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Column */}
            <div>
              <div className="flex items-center mb-6">
                <Award size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Skills & Expertise</h2>
              </div>
              
              <div className="card-cyber p-6">
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-cyber-purple/10 text-cyber-purple text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <Shield size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Certifications</h2>
              </div>
              
              <div className="card-cyber p-6">
                <ul className="space-y-4">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-cyber-purple rounded-full mr-3"></span>
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

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import servicePentest from '@/assets/service-pentest.jpg';
import serviceISO from '@/assets/service-iso27001.jpg';
import serviceArchitecture from '@/assets/service-architecture.jpg';
import serviceSOC from '@/assets/service-soc.jpg';

const Services = () => {
  const services = [
    {
      title: 'VULNERABILITY AND PENTEST ASSESSMENT',
      description: 'Comprehensive security testing to identify vulnerabilities in your infrastructure before malicious actors do. Our penetration testing services simulate real-world attacks to uncover weaknesses in your systems. We provide detailed reports with actionable remediation strategies to strengthen your security posture.',
      image: servicePentest,
      align: 'left'
    },
    {
      title: 'ISO 27001 ISMS IMPLEMENTATION',
      description: 'Expert guidance in implementing and maintaining ISO 27001 Information Security Management Systems. We help organizations establish robust security frameworks that meet international standards. Our structured approach ensures your business achieves certification while building a culture of security excellence.',
      image: serviceISO,
      align: 'right'
    },
    {
      title: 'SECURITY ARCHITECTURE ASSESSMENT',
      description: 'In-depth analysis of your security infrastructure to ensure it meets current and future threats. We evaluate your network design, cloud security, and system architecture for potential weaknesses. Our assessments provide strategic recommendations to build resilient and scalable security frameworks.',
      image: serviceArchitecture,
      align: 'left'
    },
    {
      title: 'SOC MANAGEMENT (CONTRACT BASED)',
      description: 'Professional Security Operations Center management tailored to your organization\'s needs. We provide continuous monitoring, threat detection, and incident response capabilities on a flexible contract basis. Our SOC experts ensure 24/7 protection of your critical assets and rapid response to security events.',
      image: serviceSOC,
      align: 'right'
    }
  ];

  const clients = [
    {
      name: 'IPMC Ghana',
      description: 'Implemented comprehensive ISO 27001 ISMS framework, achieving certification within 6 months and establishing enterprise-grade security controls.',
      logo: '🏢'
    },
    {
      name: 'DarFin (FinTech)',
      description: 'Conducted an in-depth evaluation of their networks and their resources to implement a firewall and establish custom rules and controls.',
      logo: '🏙️'
    },
    {
      name: 'CallinClinic',
      description: 'Conducted extensive penetration testing across cloud infrastructure, identifying and remediating critical vulnerabilities before go-live.',
      logo: '🏨'
    },
    {
      name: 'Electricity Company of Ghana',
      description: 'Managed and Implemented their SOC and Firewall for various data centers, ensuring uptime for critical infrastructures and remediating attacks instantly.',
      logo: '🏙️'
    },
    {
      name: 'Apex Bank of Ghana',
      description: 'Conducted extensive research for their infrastructure and implemented security solutions for their infrastructure according to their RFQ Requirements.',
      logo: '🛒'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="cyber-container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow">Professional</span>{' '}
            <span className="text-cyber-purple">Cybersecurity Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Protecting your digital assets with expert security solutions tailored to your business needs
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                service.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg border border-cyber-purple/30 shadow-lg hover:shadow-cyber-purple/20 transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-cyber-purple">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inquire Now Button */}
        <div className="text-center mb-24 animate-fade-in">
          <Link to="/contact">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-cyber-purple hover:bg-cyber-purple/90 text-white font-bold shadow-lg hover:shadow-cyber-purple/50 transition-all duration-300"
            >
              INQUIRE NOW
            </Button>
          </Link>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-glow">Client</span>{' '}
            <span className="text-cyber-purple">Success Stories</span>
          </h2>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-cyber-darker/50 border-cyber-purple/30 hover:border-cyber-purple/60 transition-all duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className="text-4xl mb-2">{client.logo}</div>
                        <h3 className="text-xl font-bold text-cyber-purple">
                          {client.name}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {client.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Services;

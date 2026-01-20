import { Link } from "react-router-dom";
import { AlertTriangle, Shield, Wifi, Download, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrPreviewIOS from "@/assets/qr-preview-ios.png";
import qrPreviewAndroid from "@/assets/qr-preview-android.png";

const QRSecurity = () => {
  const risks = [
    {
      icon: Globe,
      title: "Phishing Attacks",
      description: "Malicious QR codes can redirect you to convincing fake websites designed to steal your personal information, login credentials, or financial data. The seamless nature of QR scanning often bypasses the scrutiny users would normally apply to suspicious links."
    },
    {
      icon: Download,
      title: "Malware Downloads",
      description: "Some QR codes are programmed to initiate automatic downloads when scanned. Without proper vigilance, you could unknowingly install malicious software that compromises your device's security and exposes sensitive data."
    },
    {
      icon: Wifi,
      title: "Rogue Network Connections",
      description: "QR codes that auto-connect devices to Wi-Fi networks can be manipulated to connect you to rogue access points. Attackers use these compromised networks to intercept your data, monitor your activity, and capture sensitive information."
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-cyber-dark to-cyber-dark"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Warning Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-red-500/20 to-yellow-500/20 p-6 rounded-full border border-red-500/30">
                  <AlertTriangle className="w-16 h-16 text-red-400" />
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-red-400">Stop.</span>{" "}
              <span className="text-white">Think Before You Scan.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              You've just demonstrated why scanning unknown QR codes can be dangerous. 
              Fortunately, this was a security awareness demonstration — not an attack.
            </p>

            <div className="bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-8">
              <p className="text-lg text-yellow-200/90 font-medium">
                In a real-world scenario, this scan could have led to compromised credentials, 
                malware infection, or unauthorized access to your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Potential </span>
              <span className="text-red-400">Consequences</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding the risks associated with scanning unknown QR codes is the first step toward better security practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {risks.map((risk, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-card/80 to-card/40 border border-border/50 rounded-xl p-8 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="bg-red-500/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-red-500/20 transition-colors">
                  <risk.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{risk.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitigation Section */}
      <section className="py-16 bg-gradient-to-b from-transparent via-cyber-green/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="bg-cyber-green/10 p-4 rounded-full">
                  <Shield className="w-10 h-10 text-cyber-green" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">How to </span>
                <span className="text-cyber-green">Protect Yourself</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Previewing QR code content before acting is like looking through a peephole before opening a door. 
                This simple practice helps you verify destinations, avoid malicious websites, prevent harmful downloads, 
                and protect your sensitive information.
              </p>
            </div>

            {/* Device Instructions */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* iOS */}
              <div className="bg-card/60 border border-border/50 rounded-xl p-8 hover:border-cyber-green/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyber-green/10 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-cyber-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Apple iOS</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  On iOS devices, use the built-in Camera app to scan QR codes. The URL preview appears as a notification banner — 
                  tap and hold to inspect before visiting.
                </p>
                <div className="bg-background/50 rounded-lg p-4 flex justify-center">
                  <img 
                    src={qrPreviewIOS} 
                    alt="iOS QR Code Preview Example" 
                    className="max-h-64 rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Android */}
              <div className="bg-card/60 border border-border/50 rounded-xl p-8 hover:border-cyber-green/30 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyber-green/10 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-cyber-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Android</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  On Android devices, use Google Lens or your camera app to scan. Most modern Android phones show a URL preview — 
                  review the destination before tapping.
                </p>
                <div className="bg-background/50 rounded-lg p-4 flex justify-center">
                  <img 
                    src={qrPreviewAndroid} 
                    alt="Android QR Code Preview Example" 
                    className="max-h-64 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-cyber-green/10 via-card to-cyber-green/5 border border-cyber-green/20 rounded-2xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Strengthen Your Organization's </span>
                <span className="text-cyber-green">Security Posture</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Interested in security awareness training, penetration testing, or comprehensive cybersecurity solutions for your organization? 
                Let's discuss how I can help protect your business with proactive threat mitigation strategies.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-cyber-green hover:bg-cyber-green/90 text-cyber-dark font-semibold px-8 py-6 text-lg group">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QRSecurity;

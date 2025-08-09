import { Github, Twitter, MessageCircle, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Roadmap', 'Changelog', 'API'],
    Developers: ['Documentation', 'SDK', 'GitHub', 'Community'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit'],
    Support: ['Help Center', 'Contact', 'Status', 'Bug Reports']
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Discord', icon: MessageCircle, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-secondary border-t border-border/20 relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        {/* Newsletter Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Stay in the loop
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest updates on Dimension's development, new features, and community highlights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-lg focus:border-primary/50 focus:outline-none text-foreground placeholder-muted-foreground"
              />
            </div>
            <Button className="hero-button px-6 py-3">
              Join
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 animate-slide-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-foreground font-bold text-2xl gradient-text">Dimension</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Building the future of decentralized social networking. 
              Own your identity, control your data, connect without limits.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300 hover-glow group animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category} className="animate-slide-up" style={{ animationDelay: `${(categoryIndex + 1) * 150}ms` }}>
              <h3 className="text-foreground font-semibold mb-6 text-lg">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground hover:gradient-text transition-all duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center animate-slide-up">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2025 Dimension Labs. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
                <p className="text-muted-foreground text-sm">
                Created By ©Shreya Dhaytonde
              </p>
               <p className="text-muted-foreground text-sm">
                Gmail -- shreyadhaytonde23@gmail.com
              </p>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToTop}
              className="hover-glow group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
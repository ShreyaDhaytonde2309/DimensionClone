import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Zap } from "lucide-react";

const DeveloperLanding = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
      
      {/* Soft Glowing Accents */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Build software faster, together.
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              The complete developer platform for modern teams. 
              Code, collaborate, and deploy with confidence.
            </p>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass p-6 border-border/20 hover:border-primary/30 transition-all duration-300 hover-glow">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Code Editor</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered coding with real-time collaboration and intelligent suggestions.
                </p>
              </Card>
              
              <Card className="glass p-6 border-border/20 hover:border-primary/30 transition-all duration-300 hover-glow">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Deploy</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy to production in seconds with our global edge network.
                </p>
              </Card>
            </div>
          </div>
          
          {/* Right Side - Rotating Neon Lines */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-64 h-64">
              {/* Pink Line */}
              <div className="absolute inset-0">
                <div className="w-full h-full border-2 border-transparent border-t-pink-500 rounded-full animate-spin opacity-80" 
                     style={{animationDuration: '8s'}} />
              </div>
              
              {/* Blue Line */}
              <div className="absolute inset-8">
                <div className="w-full h-full border-2 border-transparent border-t-blue-500 rounded-full animate-spin opacity-70" 
                     style={{animationDuration: '6s', animationDirection: 'reverse'}} />
              </div>
              
              {/* Orange Line */}
              <div className="absolute inset-16">
                <div className="w-full h-full border-2 border-transparent border-t-orange-500 rounded-full animate-spin opacity-60" 
                     style={{animationDuration: '10s'}} />
              </div>
              
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full blur-sm opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperLanding;
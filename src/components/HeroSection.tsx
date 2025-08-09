import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "You've joined the waitlist!"
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-pink-900/10" />
        <div className="absolute inset-0 opacity-20 animate-pulse" style={{
          background: 'radial-gradient(800px circle at 30% 40%, rgba(147, 51, 234, 0.2), transparent 50%)',
          animation: 'moveGradient1 0.5s ease-in-out infinite'
        }} />
        <div className="absolute inset-0 opacity-15" style={{
          background: 'radial-gradient(1200px circle at 70% 60%, rgba(236, 72, 153, 0.15), transparent 60%)',
          animation: 'moveGradient2 0.5s ease-in-out infinite'
        }} />
      </div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#ec4899' : '#06b6d4',
              animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Announcement Badge */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-primary/30 hover-glow group cursor-pointer">
            <Sparkles className="w-4 h-4 mr-2 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium gradient-text">
              🎉 Announcing our $1.4M Fundraise
            </span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-slide-up animation-delay-300">
          <span className="text-foreground block mb-2">Dimension is the</span>
          <span className="gradient-text block">New Standard for collaboration</span>
       {/*<span className="text-foreground block">is Here</span>*/}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-500 leading-relaxed">
          Connect, create, and collaborate in the decentralized web. 
          <br className="hidden md:block" />
          Your identity, your data, your rules.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up animation-delay-700">
          {[
            { icon: Shield, text: "Privacy First" },
            { icon: Zap, text: "Lightning Fast" },
            { icon: Sparkles, text: "AI Powered" }
          ].map((feature, index) => (
            <div key={index} className="flex items-center px-4 py-2 glass rounded-full border border-primary/20 hover-glow">
              <feature.icon className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-1000">
          <Button className="hero-button px-8 py-4 text-lg rounded-full group">
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-primary/30 hover:border-primary/60 hover-glow">
            Watch Demo
          </Button>
        </div>

        {/* Interactive Demo Preview */}
        <div className="relative max-w-6xl mx-auto animate-slide-up animation-delay-1000">
          <div className="glass rounded-3xl p-6 shadow-elegant hover-glow group cursor-pointer">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Team Chat Interface */}
              <div className="w-full max-w-6xl h-[500px] relative">
                {/* Browser Header */}
                <div className="flex items-center justify-between mb-4 px-4 py-2 glass rounded-t-xl border-b border-border/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-muted-foreground">dimension.dev</div>
                </div>
                
                <div className="flex h-[450px] glass rounded-b-xl overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-16 bg-gradient-to-b from-purple-900/20 to-pink-900/20 border-r border-border/20 flex flex-col items-center py-4 space-y-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">D</span>
                    </div>
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 bg-muted/20 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer"></div>
                    ))}
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 flex">
                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col">
                      {/* Top Nav */}
                      <div className="h-12 bg-gradient-to-r from-background/50 to-background-secondary/50 border-b border-border/20 flex items-center px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                          <span className="text-sm font-medium"># general</span>
                        </div>
                      </div>
                      
                      {/* Messages */}
                      <div className="flex-1 p-4 space-y-3 overflow-hidden">
                        {[
                          { user: 'Alice', msg: 'Hey team! Ready for the demo?', time: '2:14 PM', color: 'from-blue-500 to-cyan-500' },
                          { user: 'Bob', msg: 'Looks amazing! 🚀', time: '2:15 PM', color: 'from-purple-500 to-pink-500' },
                          { user: 'Carol', msg: 'The new features are incredible', time: '2:16 PM', color: 'from-green-500 to-emerald-500' }
                        ].map((chat, i) => (
                          <div key={i} className="flex items-start space-x-3 hover:bg-muted/5 p-2 rounded-lg transition-colors">
                            <div className={`w-8 h-8 bg-gradient-to-r ${chat.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white text-xs font-medium">{chat.user[0]}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium">{chat.user}</span>
                                <span className="text-xs text-muted-foreground">{chat.time}</span>
                              </div>
                              <p className="text-sm text-foreground">{chat.msg}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Input */}
                      <div className="h-12 border-t border-border/20 flex items-center px-4">
                        <div className="flex-1 bg-muted/10 rounded-lg px-3 py-2">
                          <span className="text-sm text-muted-foreground">Type a message...</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Panel */}
                    <div className="w-48 border-l border-border/20 flex flex-col">
                      {/* Members */}
                      <div className="flex-1 p-3">
                        <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Team (3)</h3>
                        <div className="space-y-2">
                          {['Alice', 'Bob', 'Carol'].map((name, i) => (
                            <div key={i} className="flex items-center space-x-2 p-1 rounded hover:bg-muted/10 transition-colors">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm">{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tasks */}
                      <div className="border-t border-border/20 p-3">
                        <h3 className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Tasks</h3>
                        <div className="space-y-2">
                          {['Deploy v2.0', 'Fix bugs', 'Review PR'].map((task, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs">
                              <div className="w-3 h-3 border border-muted-foreground rounded-sm"></div>
                              <span className="text-muted-foreground">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Rotating Neon Lines - Both Sides */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                    <div className="absolute inset-2 border border-transparent border-t-cyan-400 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
                  </div>
                </div>
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 border-2 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                    <div className="absolute inset-2 border border-transparent border-t-cyan-400 rounded-full animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Bright Border Lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-pulse" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-90 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 animate-slide-up animation-delay-1000">
          <p className="text-muted-foreground mb-6">
            Trusted by developers from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Meta', 'Apple', 'Microsoft', 'OpenAI'].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
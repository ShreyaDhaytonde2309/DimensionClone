import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";

const CTASection = () => {
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

  const stats = [
    { icon: Users, value: "10K+", label: "Early Adopters" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
    { icon: Sparkles, value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <Card className="glass max-w-5xl mx-auto p-16 border-border/20 relative animate-slide-up hover-glow">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium gradient-text">
                🚀 Join the Dimension Social Revolution
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Ready to own </span>
              <span className="gradient-text block">your digital identity?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience true decentralized social networking. 
              <br className="hidden md:block" />
              Your data, your rules, your community.
            </p>

            {!isSubmitted ? (
              <div className="space-y-8">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-slide-up">
                  <Input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary text-foreground placeholder-muted-foreground h-14 px-6 rounded-full"
                  />
                  <Button type="submit" className="hero-button h-14 px-8 rounded-full group">
                    Join Waitlist
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="px-8 py-4 rounded-full border-primary/30 hover:border-primary/60 hover-glow">
                    Watch Demo
                  </Button>
                  <Button variant="ghost" className="px-8 py-4 rounded-full hover:bg-primary/10">
                    Read Whitepaper
                  </Button>
                </div>
              </div>
            ) : (
              <div className="animate-slide-up space-y-6">
                <div className="text-primary font-medium text-2xl mb-4">
                  🎉 Welcome to the future!
                </div>
                <p className="text-muted-foreground text-lg">
                  You're now part of the Dimension community. We'll keep you updated on our progress.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" className="px-6 py-3 rounded-full">
                    Join Discord
                  </Button>
                  <Button variant="ghost" className="px-6 py-3 rounded-full">
                    Follow on Twitter
                  </Button>
                </div>
              </div>
            )}

            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No spam, ever
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Unsubscribe anytime
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Privacy first
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl float"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl float animation-delay-1000"></div>
          <div className="absolute top-1/2 -right-20 w-20 h-20 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-xl float animation-delay-500"></div>
        </Card>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default CTASection;
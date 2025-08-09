import { Card } from "@/components/ui/card";
import { Globe, Users, Zap, Shield, Sparkles, Code, MessageCircle, Wallet } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Decentralized Identity",
      description: "Own your digital identity across all platforms. No more centralized control.",
      icon: Shield,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cross-Chain Social",
      description: "Connect and interact across multiple blockchains seamlessly.",
      icon: Globe,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Feed",
      description: "Intelligent content curation that learns from your preferences.",
      icon: Sparkles,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Developer Tools",
      description: "Built-in tools for developers to create and deploy dApps effortlessly.",
      icon: Code,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Community Spaces",
      description: "Create and manage decentralized communities with governance tools.",
      icon: Users,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Crypto Wallet",
      description: "Integrated wallet for seamless transactions and asset management.",
      icon: Wallet,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">Features</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Everything you need for </span>
            <span className="gradient-text">Dimension social</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built from the ground up for the decentralized web. 
            Experience social networking without compromises.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="glass p-8 border-border/20 hover:border-primary/30 transition-all duration-500 group hover-glow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="max-w-6xl mx-auto animate-slide-up animation-delay-700">
          <div className="glass rounded-3xl p-8 border-border/20 hover-glow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-2">See it in action</h3>
              <p className="text-muted-foreground">Experience the future of social interaction</p>
            </div>
            
            {/* Mock Chat Interface */}
            <div className="bg-gradient-to-br from-background/50 to-background-secondary/50 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground">Dimension Social</div>
              </div>
              
              <div className="space-y-4">
                {/* Message 1 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">A</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">alice.eth</span>
                      <span className="text-xs text-muted-foreground">2m ago</span>
                    </div>
                    <div className="glass rounded-lg p-3 border border-border/20">
                      <p className="text-sm">Just deployed my new dApp on Dimension! 🚀</p>
                    </div>
                  </div>
                </div>
                
                {/* Message 2 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">B</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">bob.lens</span>
                      <span className="text-xs text-muted-foreground">1m ago</span>
                    </div>
                    <div className="glass rounded-lg p-3 border border-border/20">
                      <p className="text-sm">Looks amazing! Love the cross-chain integration ⚡</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Input */}
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Y</span>
                </div>
                <div className="flex-1 glass rounded-lg border border-border/20 p-3">
                  <p className="text-sm text-muted-foreground">Share your thoughts...</p>
                </div>
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FeaturesSection;
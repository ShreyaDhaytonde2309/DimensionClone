import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Wallet, MessageCircle, Globe, Zap } from "lucide-react";

const ProductDemoSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Social Feed",
      description: "Decentralized timeline",
      content: "Experience social media without algorithms or censorship. Your feed, your rules.",
      icon: MessageCircle,
      demo: {
        type: "feed",
        posts: [
          { user: "alice.eth", content: "Just minted my first NFT on Dimension! 🎨", time: "2m" },
          { user: "bob.lens", content: "The future of social is here 🚀", time: "5m" }
        ]
      }
    },
    {
      title: "Identity",
      description: "Own your digital self",
      content: "One identity across all platforms. Portable, secure, and truly yours.",
      icon: Shield,
      demo: {
        type: "profile",
        user: "you.dimension",
        verified: true,
        followers: "1.2K",
        following: "456"
      }
    },
    {
      title: "Communities",
      description: "Decentralized groups",
      content: "Create and join communities with built-in governance and token rewards.",
      icon: Users,
      demo: {
        type: "community",
        name: "Web3 Builders",
        members: "5.7K",
        activity: "High"
      }
    },
    {
      title: "Wallet",
      description: "Integrated crypto wallet",
      content: "Send, receive, and manage your crypto assets without leaving the platform.",
      icon: Wallet,
      demo: {
        type: "wallet",
        balance: "1.234 ETH",
        tokens: ["USDC", "MATIC", "ARB"]
      }
    }
  ];

  const renderDemo = (demo: any) => {
    switch (demo.type) {
      case "feed":
        return (
          <div className="space-y-4">
            {demo.posts.map((post: any, index: number) => (
              <div key={index} className="glass rounded-lg p-4 border border-border/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{post.user[0].toUpperCase()}</span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{post.user}</div>
                    <div className="text-xs text-muted-foreground">{post.time} ago</div>
                  </div>
                </div>
                <p className="text-sm">{post.content}</p>
              </div>
            ))}
          </div>
        );
      case "profile":
        return (
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Y</span>
            </div>
            <div>
              <div className="font-bold text-lg flex items-center justify-center">
                {demo.user}
                {demo.verified && <Shield className="w-4 h-4 ml-1 text-blue-500" />}
              </div>
              <div className="flex justify-center space-x-4 mt-2 text-sm text-muted-foreground">
                <span>{demo.followers} followers</span>
                <span>{demo.following} following</span>
              </div>
            </div>
          </div>
        );
      case "community":
        return (
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold">{demo.name}</div>
              <div className="text-sm text-muted-foreground">{demo.members} members</div>
            </div>
            <div className="flex items-center justify-between glass rounded-lg p-3">
              <span className="text-sm">Activity Level</span>
              <span className="text-sm font-medium text-green-500">{demo.activity}</span>
            </div>
          </div>
        );
      case "wallet":
        return (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text mb-2">{demo.balance}</div>
              <div className="text-sm text-muted-foreground">Total Balance</div>
            </div>
            <div className="space-y-2">
              {demo.tokens.map((token: string, index: number) => (
                <div key={index} className="flex items-center justify-between glass rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm font-medium">{token}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">$1,234</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="products" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Globe className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">Products</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Everything you need for </span>
            <span className="gradient-text">Dimension social</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From decentralized identity to community governance, 
            experience the full power of Web3 social networking.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16 animate-slide-up animation-delay-300">
            <div className="glass rounded-2xl p-3 border border-border/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {tabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <Button
                      key={index}
                      variant={activeTab === index ? "default" : "ghost"}
                      className={`p-4 h-auto ${
                        activeTab === index 
                          ? "hero-button" 
                          : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className="text-center space-y-2">
                        <IconComponent className="w-6 h-6 mx-auto" />
                        <div className="font-medium text-sm">{tab.title}</div>
                        <div className="text-xs opacity-75">{tab.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <Card className="glass p-12 border-border/20 animate-slide-up animation-delay-500 hover-glow">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  {(() => {
                    const IconComponent = tabs[activeTab].icon;
                    return <IconComponent className="w-8 h-8 text-primary" />;
                  })()}
                  <h3 className="text-4xl font-bold gradient-text">
                    {tabs[activeTab].title}
                  </h3>
                </div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {tabs[activeTab].content}
                </p>
                <div className="flex space-x-4">
                  <Button className="hero-button px-6 py-3 rounded-full group">
                    Try {tabs[activeTab].title}
                    <Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                  </Button>
                  <Button variant="outline" className="px-6 py-3 rounded-full border-primary/30 hover:border-primary/60">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass rounded-2xl p-8 border border-border/20 hover-glow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground text-sm">dimension.social</span>
                  </div>
                  
                  <div className="min-h-[300px]">
                    {renderDemo(tabs[activeTab].demo)}
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl float"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl float animation-delay-1000"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default ProductDemoSection;
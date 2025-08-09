import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Dimension finally gives me true ownership of my digital identity. No more platform lock-in!",
      author: "vitalik.eth",
      role: "Ethereum Founder",
      company: "Ethereum Foundation",
      avatar: "V",
      gradient: "from-blue-500 to-cyan-500",
      rating: 5
    },
    {
      quote: "The cross-chain social experience is seamless. This is what Web3 social should be.",
      author: "stani.lens",
      role: "Founder", 
      company: "Aave & Lens Protocol",
      avatar: "S",
      gradient: "from-purple-500 to-pink-500",
      rating: 5
    },
    {
      quote: "Building communities on Dimension feels natural. The governance tools are incredibly powerful.",
      author: "coopahtroopa.eth",
      role: "Community Builder",
      company: "Friends With Benefits",
      avatar: "C",
      gradient: "from-orange-500 to-red-500",
      rating: 5
    },
    {
      quote: "As a developer, the integrated wallet and dApp tools make building on Web3 social effortless.",
      author: "danfinlay.eth",
      role: "Co-founder",
      company: "MetaMask",
      avatar: "D",
      gradient: "from-green-500 to-emerald-500",
      rating: 5
    },
    {
      quote: "The AI-powered feed actually understands what I want to see. It's like having a personal curator.",
      author: "linda.mirror",
      role: "Content Creator",
      company: "Mirror Protocol",
      avatar: "L",
      gradient: "from-indigo-500 to-purple-500",
      rating: 5
    },
    {
      quote: "Dimension's approach to privacy-first social networking is exactly what the world needs right now.",
      author: "balajis.eth",
      role: "Former CTO",
      company: "Coinbase",
      avatar: "B",
      gradient: "from-yellow-500 to-orange-500",
      rating: 5
    }
  ];

  return (
    <section id="community" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/20 mb-6">
            <Quote className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium gradient-text">Community</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Loved by </span>
            <span className="gradient-text">Dimension pioneers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what industry leaders and community builders are saying about Dimension.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass p-8 border-border/20 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover-glow animate-slide-up group hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                ))}
              </div>
              
              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/50 mb-4 group-hover:text-primary transition-colors group-hover:animate-bounce" />
                <p className="text-foreground leading-relaxed text-lg">
                  {testimonial.quote}
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-lg group-hover:gradient-text transition-all duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-muted-foreground text-sm font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-20 text-center animate-slide-up animation-delay-700">
          <div className="glass rounded-3xl p-8 border border-border/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-6">
              Join the growing Dimension social movement
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                <div className="text-muted-foreground">Dimension Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                <div className="text-muted-foreground">Supported Networks</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default TestimonialsSection;
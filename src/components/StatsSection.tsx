import { useState, useEffect } from "react";
import { Users, MessageCircle, Globe, Zap } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    users: 0,
    communities: 0,
    transactions: 0,
    networks: 0
  });

  const finalCounts = {
    users: 50000,
    communities: 2500,
    transactions: 1000000,
    networks: 15
  };

  useEffect(() => {
    const animateNumber = (key: keyof typeof counts, target: number, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumber('users', finalCounts.users);
            animateNumber('communities', finalCounts.communities, 2200);
            animateNumber('transactions', finalCounts.transactions, 2400);
            animateNumber('networks', finalCounts.networks, 1800);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: counts.users.toLocaleString() + '+',
      label: 'Active Users',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: counts.communities.toLocaleString() + '+',
      label: 'Communities',
      icon: MessageCircle,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: (counts.transactions / 1000).toFixed(0) + 'K+',
      label: 'Transactions',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      number: counts.networks + '+',
      label: 'Networks',
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="stats-section" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Powering the </span>
            <span className="gradient-text">decentralized future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join millions of users building the next generation of social networking on Web3.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass rounded-3xl p-8 border border-border/20 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover-glow group">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="mt-20 text-center animate-slide-up animation-delay-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 border border-border/20">
              <div className="text-2xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Network Uptime</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-border/20">
              <div className="text-2xl font-bold gradient-text mb-2">&lt;100ms</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="glass rounded-2xl p-6 border border-border/20">
              <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Community Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl float animation-delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default StatsSection;
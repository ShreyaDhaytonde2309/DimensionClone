const LogosSection = () => {
  const logos = [
    { name: "Ethereum", color: "text-blue-400" },
    { name: "Polygon", color: "text-purple-400" },
    { name: "Solana", color: "text-green-400" },
    { name: "Arbitrum", color: "text-cyan-400" },
    { name: "Optimism", color: "text-red-400" },
    { name: "Base", color: "text-blue-500" },
    { name: "Avalanche", color: "text-red-500" }
  ];

  return (
    <section className="py-20 border-t border-border/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-muted-foreground text-sm font-medium mb-4">
            SUPPORTED NETWORKS
          </p>
          <h3 className="text-xl font-semibold text-foreground">
            Built for the multi-chain future
          </h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className={`group cursor-pointer animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {logo.name[0]}
                  </span>
                </div>
                <span className={`text-sm font-medium ${logo.color} group-hover:text-foreground transition-colors duration-300`}>
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-slide-up animation-delay-700">
          <p className="text-muted-foreground text-sm">
            And many more networks coming soon...
          </p>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default LogosSection;
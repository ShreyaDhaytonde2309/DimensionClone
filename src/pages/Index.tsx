import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogosSection from "@/components/LogosSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductDemoSection from "@/components/ProductDemoSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DeveloperLanding from "@/components/DeveloperLanding";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogosSection />
      <DeveloperLanding />
      <FeaturesSection />
      <ProductDemoSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import BetaProgram from "@/components/BetaProgram";
import WearableCompatibility from "@/components/WearableCompatibility";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <BetaProgram />
      <WearableCompatibility />
      <Footer />
    </div>
  );
};

export default Index;

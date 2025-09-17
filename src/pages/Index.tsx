import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MetricsSection />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

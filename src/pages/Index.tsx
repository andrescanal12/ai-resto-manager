import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MetricsSection from "@/components/MetricsSection";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Reveal from "@/components/utils/Reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Reveal delay={0}><Hero /></Reveal>
        <Reveal delay={80}><Services /></Reveal>
        <Reveal delay={120}><MetricsSection /></Reveal>
        <Reveal delay={160}><UseCases /></Reveal>
        <Reveal delay={120}><HowItWorks /></Reveal>
        <Reveal delay={120}><Testimonials /></Reveal>
        <Reveal delay={120}><Pricing /></Reveal>
        <Reveal delay={100}><FAQ /></Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

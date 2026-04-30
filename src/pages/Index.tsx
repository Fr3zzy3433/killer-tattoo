import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Specialties from "@/components/Specialties";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <main className="bg-background text-foreground min-h-screen">
      <div data-reveal><Hero /></div>
      <div data-reveal><About /></div>
      <div data-reveal><Portfolio /></div>
      <div data-reveal><Specialties /></div>
      <div data-reveal><HowItWorks /></div>
      <div data-reveal><Testimonials /></div>
      <div data-reveal><CtaSection /></div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;

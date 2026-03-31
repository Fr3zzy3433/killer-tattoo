import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
      <Specialties />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;

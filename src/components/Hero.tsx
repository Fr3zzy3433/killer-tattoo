import heroBg from "@/assets/hero-bg.jpg";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Tatuagem floral delicada"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <p className="font-body text-sm md:text-base tracking-[0.35em] uppercase text-muted-foreground mb-6">
          Estúdio de Tatuagem & Body Piercing
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          <span className="text-gold-gradient">Killer</span>{" "}
          <span className="text-foreground">Tattoo</span>
        </h1>
        <p className="font-display italic text-lg sm:text-xl md:text-2xl text-foreground/80 mb-10">
          Sua arte merece um artista
        </p>
        <a
          href="https://wa.me/5521990475343"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-body font-semibold text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar pelo WhatsApp
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

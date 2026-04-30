import heroBg from "@/assets/hero-bg.jpg";
import killerLogo from "@/assets/Killertattoo_LogoNova.png";
import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá, Marcio! Vi o site da Killer Tattoo e queria conversar sobre uma ideia de tatuagem."
);
const whatsappUrl = `https://wa.me/5521990475343?text=${whatsappMessage}`;

const navItems = [
  { label: "Portfólio", href: "#portfolio" },
  { label: "Especialidades", href: "#specialties" },
  { label: "Agenda", href: "#cta" },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Tatuagem floral delicada feita pela Killer Tattoo"
          className="h-full w-full scale-105 object-cover opacity-75"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,10,0.62),rgba(5,6,10,0.32)_43%,rgba(5,6,10,0.88)),radial-gradient(circle_at_50%_38%,rgba(230,177,62,0.12),transparent_34rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <nav className="liquid-glass absolute left-1/2 top-6 z-20 hidden -translate-x-1/2 items-center gap-1 rounded-full px-2 py-2 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative z-10 rounded-full px-4 py-2 font-body text-xs uppercase tracking-[0.22em] text-white/68 transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="relative z-10 mx-auto max-w-5xl animate-fade-in text-center">
        <div className="hero-solid-panel relative overflow-hidden rounded-[2rem] px-5 py-7 sm:px-8 md:rounded-[2.5rem] md:px-12 md:py-10">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/35 to-background/75" />
          <p className="relative z-10 mb-5 font-body text-[11px] uppercase tracking-[0.28em] text-primary md:text-sm md:tracking-[0.35em]">
            Estúdio de Tatuagem & Body Piercing em Teresópolis
          </p>
          <img
            src={killerLogo}
            alt="Killer Tattoo"
            className="relative z-10 mx-auto mb-5 h-auto object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.78)]"
            style={{ width: "clamp(150px, 22vw, 260px)" }}
          />
          <p className="relative z-10 mb-4 font-display text-lg italic text-foreground sm:text-xl md:text-2xl">
            Tatuagens autorais com traço, escuta e personalidade.
          </p>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl font-body text-sm leading-relaxed text-foreground/78 md:text-base">
            Envie sua ideia, referência ou foto do local da tattoo e receba uma orientação inicial pelo WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button relative z-10"
            aria-label="Agendar tatuagem pelo WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

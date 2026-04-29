import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá, Marcio! Vi o site da Killer Tattoo e queria conversar sobre uma tatuagem."
);
const whatsappUrl = `https://wa.me/5521990475343?text=${whatsappMessage}`;

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 bg-secondary/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-6 py-16 md:px-14 md:py-20 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-primary mb-5">
          Agendamento
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 tracking-tight">
          Quer transformar sua ideia em uma tatuagem única?
        </h2>
        <p className="font-body text-muted-foreground mb-10 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Me chama no WhatsApp com sua ideia, referência ou dúvida. Eu mesmo vou te responder e orientar o próximo passo.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-10 py-4 font-body font-semibold text-sm uppercase tracking-widest text-foreground shadow-[0_20px_70px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] hover:border-white/25"
          aria-label="Falar com a Killer Tattoo pelo WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-primary" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;

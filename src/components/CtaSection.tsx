import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá, Marcio! Vi o site da Killer Tattoo e queria conversar sobre uma tatuagem."
);
const whatsappUrl = `https://wa.me/5521990475343?text=${whatsappMessage}`;

const CtaSection = () => {
  return (
    <section id="cta" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,164,54,0.13),transparent_42rem)]" aria-hidden="true" />
      <div className="liquid-glass relative mx-auto max-w-4xl rounded-[2rem] px-6 py-16 text-center md:rounded-[2.5rem] md:px-14 md:py-20">
        <p className="relative z-10 mb-5 font-body text-[11px] uppercase tracking-[0.35em] text-primary">
          Agendamento
        </p>
        <h2 className="relative z-10 mb-5 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Quer transformar sua ideia em uma tatuagem única?
        </h2>
        <p className="relative z-10 mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          Me chama no WhatsApp com sua ideia, referência ou dúvida. Eu mesmo vou te responder e orientar o próximo passo.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-button relative z-10"
          aria-label="Falar com a Killer Tattoo pelo WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;

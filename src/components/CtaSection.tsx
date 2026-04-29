import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá, Marcio! Vi o site da Killer Tattoo e queria conversar sobre uma tatuagem."
);
const whatsappUrl = `https://wa.me/5521990475343?text=${whatsappMessage}`;

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
          Quer transformar sua ideia em uma tatuagem única?
        </h2>
        <p className="font-body text-muted-foreground mb-10 text-base md:text-lg">
          Me chama no WhatsApp com sua ideia, referência ou dúvida. Eu mesmo vou te responder e orientar o próximo passo.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-body font-semibold text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;

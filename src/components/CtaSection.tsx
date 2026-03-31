import { MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
          Pronto para sua próxima tatuagem?
        </h2>
        <p className="font-body text-muted-foreground mb-10 text-base md:text-lg">
          Converse diretamente com o Marcio e transforme sua ideia em arte.
        </p>
        <a
          href="https://wa.me/5521990475343"
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

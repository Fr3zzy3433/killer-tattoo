const steps = [
  {
    number: "01",
    title: "Manda sua ideia",
    description:
      "Me chama no WhatsApp com sua referência, palavra ou sentimento. Pode ser uma foto, um desenho, uma música. Qualquer coisa que inspire.",
  },
  {
    number: "02",
    title: "A gente conversa",
    description:
      "Eu entendo o que você quer, faço o orçamento e já agendamos sua sessão. Sem burocracia, sem enrolação.",
  },
  {
    number: "03",
    title: "Vira arte",
    description:
      "Você sai com uma tatuagem que parece que sempre esteve ali. Feita para durar uma vida inteira.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 text-center">
          Como Funciona
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          Simples assim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="font-display text-6xl md:text-7xl font-bold text-primary/30 block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

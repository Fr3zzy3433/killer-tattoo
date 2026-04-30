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
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center font-body text-xs uppercase tracking-[0.4em] text-primary">
          Como Funciona
        </p>
        <h2 className="mb-16 text-center font-display text-3xl font-semibold text-foreground md:text-5xl">
          Simples assim
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="liquid-glass relative rounded-[1.75rem] p-7 md:p-8">
              <span className="relative z-10 mb-5 block font-display text-6xl font-bold text-primary/35 md:text-7xl">
                {step.number}
              </span>
              <h3 className="relative z-10 mb-3 font-display text-xl font-semibold text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="relative z-10 font-body text-sm leading-relaxed text-muted-foreground">
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

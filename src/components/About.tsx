const stats = [
  { value: "20+", label: "anos de arte" },
  { value: "5+", label: "anos tatuando" },
  { value: "RJ", label: "Teresópolis" },
];

const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-primary">
            Sobre o Artista
          </p>
          <h2 className="mb-6 font-display text-4xl font-semibold text-foreground md:text-6xl">
            Marcio Barcellos
          </h2>
          <div className="divider-gold mb-8 w-20" />
          <p className="font-body text-base leading-relaxed text-secondary-foreground/82 md:text-lg">
            Sou artista plástico com mais de{" "}
            <span className="font-semibold text-primary">20 anos de experiência</span>{" "}
            e há 5 anos descobri na tatuagem uma nova forma de expressar minha arte.
            Construí minha reputação em Teresópolis fazendo o que poucos tatuadores
            conseguem: capturar quem você é e traduzir isso em traço. Cada sessão
            começa com escuta e termina com algo que parece que sempre esteve ali.
          </p>
        </div>

        <div className="liquid-glass relative rounded-[2rem] p-5 md:p-7">
          <div className="relative z-10 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center">
                <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-body text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <p className="relative z-10 mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-5 font-display text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
            "Sua pele merece alguém que a trate como obra de arte."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Sobre o Artista
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">
          Marcio Barcellos
        </h2>
        <div className="divider-gold w-16 mx-auto mb-8" />
        <p className="font-body text-base md:text-lg leading-relaxed text-secondary-foreground/80">
          Sou artista plástico com mais de{" "}
          <span className="text-primary font-semibold">5 anos transformando pele em arte</span>.
          Construí minha reputação em Teresópolis fazendo o que poucos tatuadores
          conseguem: capturar quem você é e traduzir isso em traço. Sou especialista
          em tatuagem feminina, mas cada sessão — independente do estilo — começa com
          escuta e termina com algo que parece que sempre esteve ali. Sua pele merece
          alguém que a trate como obra de arte. Esse alguém sou eu.
        </p>
      </div>
    </section>
  );
};

export default About;

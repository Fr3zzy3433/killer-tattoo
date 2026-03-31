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
          Artista plástico e tatuador com mais de{" "}
          <span className="text-primary font-semibold">536 trabalhos publicados</span>,
          Marcio é especialista em tatuagem feminina — traços delicados, arte botânica
          e composições que valorizam o corpo como tela. Radicado em Teresópolis, RJ,
          ele transforma referências em peças únicas com sensibilidade, técnica e
          respeito à história de cada cliente.
        </p>
      </div>
    </section>
  );
};

export default About;

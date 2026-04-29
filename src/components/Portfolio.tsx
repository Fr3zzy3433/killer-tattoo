const portfolioItems = [
  {
    title: "Blackwork simbólico",
    category: "Traço e sombra",
    image: "/portfolio/portfolio-01.jpeg",
  },
  {
    title: "Old school colorida",
    category: "Cor e personalidade",
    image: "/portfolio/portfolio-02.jpeg",
  },
  {
    title: "Feminina floral",
    category: "Delicadeza e composição",
    image: "/portfolio/portfolio-03.jpeg",
  },
  {
    title: "Caveira minimal",
    category: "Preto e precisão",
    image: "/portfolio/portfolio-04.jpeg",
  },
  {
    title: "Fine line autoral",
    category: "Leveza e detalhe",
    image: "/portfolio/portfolio-05.jpeg",
  },
  {
    title: "Botânica sombreada",
    category: "Natureza e textura",
    image: "/portfolio/portfolio-06.jpeg",
  },
  {
    title: "Floral delicada",
    category: "Traço fino",
    image: "/portfolio/portfolio-07.jpeg",
  },
  {
    title: "Escorpião blackwork",
    category: "Impacto visual",
    image: "/portfolio/portfolio-08.jpeg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 overflow-hidden">
      <div className="px-6 max-w-5xl mx-auto text-center mb-14">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Portfólio
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5">
          Trabalhos que carregam presença
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Uma seleção de tatuagens autorais com foco em composição, intenção e acabamento.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolioItems.map((item) => (
            <article
              key={item.title}
              className="group relative min-w-[78vw] sm:min-w-[420px] md:min-w-[460px] h-[560px] snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl"
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.category}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  {item.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

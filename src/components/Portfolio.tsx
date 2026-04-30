import portfolio01 from "@/assets/portfolio/IMG_3642.jpeg";
import portfolio02 from "@/assets/portfolio/IMG_3643.jpeg";
import portfolio03 from "@/assets/portfolio/IMG_3644.jpeg";
import portfolio04 from "@/assets/portfolio/IMG_3645.jpeg";
import portfolio05 from "@/assets/portfolio/IMG_3646.jpeg";
import portfolio06 from "@/assets/portfolio/IMG_3647.jpeg";
import portfolio07 from "@/assets/portfolio/IMG_3648.jpeg";
import portfolio08 from "@/assets/portfolio/IMG_3649.jpeg";

const portfolioImages = [
  portfolio01,
  portfolio02,
  portfolio03,
  portfolio04,
  portfolio05,
  portfolio06,
  portfolio07,
  portfolio08,
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-5xl px-6 text-center">
        <div className="liquid-glass relative mb-5 inline-flex items-center rounded-full px-5 py-2">
          <p className="relative z-10 font-body text-[11px] uppercase tracking-[0.35em] text-primary">
            Portfólio
          </p>
        </div>
        <h2 className="mb-5 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Trabalhos que carregam presença
        </h2>
        <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          Uma vitrine limpa de tatuagens autorais com foco em composição, intenção e acabamento.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolioImages.map((image, index) => (
            <article
              key={image}
              className="liquid-glass group relative h-[520px] min-w-[78vw] snap-center overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 sm:min-w-[420px] md:h-[560px] md:min-w-[460px]"
            >
              <img
                src={image}
                alt={`Tatuagem autoral Killer Tattoo ${index + 1}`}
                className="relative z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/5 opacity-80" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <p className="font-body text-[10px] uppercase tracking-[0.28em] text-white/80">
                  Trabalho autoral
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

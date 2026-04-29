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
    <section id="portfolio" className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="px-6 max-w-5xl mx-auto text-center mb-14">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Portfólio
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5">
          Trabalhos que carregam presença
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Uma vitrine de tatuagens autorais com foco em composição, intenção e acabamento.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-5 overflow-x-auto px-6 pb-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolioImages.map((image, index) => (
            <article
              key={image}
              className="group relative min-w-[78vw] sm:min-w-[420px] md:min-w-[460px] h-[560px] snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-2xl"
            >
              <img
                src={image}
                alt={`Tatuagem autoral Killer Tattoo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">
                  Trabalho autoral
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Killer Tattoo #{String(index + 1).padStart(2, "0")}
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

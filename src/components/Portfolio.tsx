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
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] mb-5">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-primary">
            Portfólio
          </p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 tracking-tight">
          Trabalhos que carregam presença
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Uma vitrine limpa de tatuagens autorais com foco em composição, intenção e acabamento.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex gap-5 overflow-x-auto px-6 pb-8 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolioImages.map((image, index) => (
            <article
              key={image}
              className="group relative min-w-[78vw] sm:min-w-[420px] md:min-w-[460px] h-[560px] snap-center overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <img
                src={image}
                alt={`Tatuagem autoral Killer Tattoo ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/5 opacity-80" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
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

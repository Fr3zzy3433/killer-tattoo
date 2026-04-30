import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Andrade",
    text: "Mano, fui lá sem saber direito o que queria e saí com a tattoo mais linda que já vi na vida. Ele pegou a minha ideia e fez melhor do que eu imaginei.",
  },
  {
    name: "Gabriela Nunes",
    text: "Primeira tatuagem e tava com muito medo. O Marcio foi super paciente, explicou tudo, o traço ficou perfeito. Já tô querendo a segunda.",
  },
  {
    name: "Bruno Carvalho",
    text: "Já tatuo faz anos e é raro achar artista que realmente escuta o cliente. Ele entende o que você quer antes mesmo de terminar de explicar.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center font-body text-xs uppercase tracking-[0.4em] text-primary">
          Depoimentos
        </p>
        <h2 className="mb-16 text-center font-display text-3xl font-semibold text-foreground md:text-5xl">
          O que dizem nossos clientes
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="liquid-glass relative flex rounded-[1.75rem] p-8">
              <div className="relative z-10 flex min-h-full flex-col">
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-6 flex-1 font-body text-sm italic leading-relaxed text-secondary-foreground/82">
                  "{t.text}"
                </p>
                <p className="font-display text-sm font-semibold text-foreground">
                  - {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

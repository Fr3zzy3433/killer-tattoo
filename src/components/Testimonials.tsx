import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rafael Andrade",
    text: "Mano, fui lá sem saber direito o que queria e saí com a tattoo mais linda que já vi na vida. Ele pegou a minha ideia e fez melhor do que eu imaginei 🖤",
  },
  {
    name: "Gabriela Nunes",
    text: "Primeira tatuagem e tava com muito medo. O Marcio foi super paciente, explicou tudo, o traço ficou perfeito. Já tô querendo a segunda kkkk",
  },
  {
    name: "Bruno Carvalho",
    text: "Já tatuo faz anos e é raro achar artista que realmente escuta o cliente. Ele entende o que vc quer antes mesmo de vc terminar de explicar. Nota 10",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 text-center">
          Depoimentos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          O que dizem nossos clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-gold rounded-sm p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-sm leading-relaxed text-secondary-foreground/80 italic mb-6 flex-1">
                "{t.text}"
              </p>
              <p className="font-display text-sm font-semibold text-foreground">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

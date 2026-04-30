import { CircleDot, Flower2, Hexagon } from "lucide-react";

const specialties = [
  {
    icon: Flower2,
    title: "Tattoo Feminina",
    description: "Traços finos e delicados que celebram a feminilidade com elegância.",
  },
  {
    icon: Hexagon,
    title: "Blackwork & Ornamental",
    description: "Geometria e padrões densos para quem busca impacto e personalidade.",
  },
  {
    icon: CircleDot,
    title: "Body Piercing",
    description: "Perfuração segura com joias de alta qualidade e curadoria estética.",
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center font-body text-xs uppercase tracking-[0.4em] text-primary">
          Especialidades
        </p>
        <h2 className="mb-16 text-center font-display text-3xl font-semibold text-foreground md:text-5xl">
          O que fazemos
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="liquid-glass group relative rounded-[1.75rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/35 md:p-10"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-[0_18px_40px_rgba(219,164,54,0.14)] transition-transform duration-300 group-hover:scale-105">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="relative z-10 mb-3 font-display text-xl font-semibold text-foreground md:text-2xl">
                {item.title}
              </h3>
              <p className="relative z-10 font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

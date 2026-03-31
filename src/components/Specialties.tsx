import { Flower2, Hexagon, CircleDot } from "lucide-react";

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
    <section id="specialties" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 text-center">
          Especialidades
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-16 text-center">
          O que fazemos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-gold rounded-sm p-8 md:p-10 text-center hover:border-primary/50 transition-colors duration-500"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
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

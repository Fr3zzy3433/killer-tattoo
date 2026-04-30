import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá! Vi o site da Killer Tattoo e queria fazer uma tatuagem."
);
const whatsappUrl = `https://wa.me/5521990475343?text=${whatsappMessage}`;

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="liquid-glass fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="relative z-10 h-6 w-6 text-primary" />
    </a>
  );
};

export default WhatsAppButton;

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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-white/[0.08] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.12] hover:border-white/25"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-primary" />
    </a>
  );
};

export default WhatsAppButton;

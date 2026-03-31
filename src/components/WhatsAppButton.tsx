import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/5521990475343"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
            style={{ backgroundColor: "#25D366" }}
            aria-label="Chamar no WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-[whatsapp-pulse_3s_ease-in-out_infinite]"
              style={{ backgroundColor: "#25D366" }}
            />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card text-foreground border-gold">
          <p className="font-body text-sm">Fale comigo no WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;

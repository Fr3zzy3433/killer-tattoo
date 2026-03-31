import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gold">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            Killer Tattoo
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
            <MapPin className="w-3 h-3" /> Teresópolis, RJ
          </p>
        </div>

        <a
          href="https://instagram.com/killertattoo.mk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-4 h-4" />
          @killertattoo.mk
        </a>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Killer Tattoo by Marcio Barcellos
        </p>
      </div>
    </footer>
  );
};

export default Footer;

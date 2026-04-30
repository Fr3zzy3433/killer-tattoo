import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            Killer Tattoo
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 font-body text-xs text-muted-foreground md:justify-start">
            <MapPin className="h-3 w-3" /> Teresópolis, RJ
          </p>
        </div>

        <a
          href="https://instagram.com/killertattoo.mk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-body text-sm text-muted-foreground backdrop-blur-xl transition-colors hover:text-primary"
        >
          <Instagram className="h-4 w-4" />
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

import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pb-8 text-sm text-muted-foreground">
      <p className="leading-relaxed mb-8">
        Designed and built with passion. Crafted in{" "}
        <span className="text-primary font-medium">Visual Studio Code</span>. Built with{" "}
        <span className="text-primary font-medium">React</span> and{" "}
        <span className="text-primary font-medium">Tailwind CSS</span>.
      </p>
      
      {/* Animated scrolling portfolio showcase */}
      <div className="overflow-hidden border-t border-border/30 pt-6">
        <a 
          href="#portfolios" 
          className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="font-medium">View All My Portfolios</span>
        </a>
        
        {/* Scrolling text animation */}
        <div className="mt-4 overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-scroll-left">
            <span className="text-muted-foreground/70 text-xs tracking-widest uppercase mx-4">
              Web Development • UI/UX Design • Mobile Apps • Frontend • Backend • Full Stack • React • TypeScript • Tailwind CSS •
            </span>
            <span className="text-muted-foreground/70 text-xs tracking-widest uppercase mx-4">
              Web Development • UI/UX Design • Mobile Apps • Frontend • Backend • Full Stack • React • TypeScript • Tailwind CSS •
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground text-lg">
                JB
              </div>
              <span className="font-bold text-lg">
                joel<span className="text-primary">.dev</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} Joel Baluma • Built with precision
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#stack" className="hover:text-foreground transition-colors">Stack</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: 'mailto:baluma.joel91@gmail.com' },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ y: -2 }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          className="absolute right-6 bottom-6 p-3 glass-card hover:border-primary/50 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

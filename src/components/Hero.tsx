import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Laravel Expert",
  "WordPress Developer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Terminal-style intro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="code-line mb-6 inline-block"
          >
            hello, world
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Joel <span className="gradient-text">Baluma</span>
          </h1>

          <div className="h-12 md:h-14 flex items-center justify-center mb-6">
            <span className="text-xl md:text-2xl font-mono text-muted-foreground">
              {displayText}
              <span className="terminal-cursor" />
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Software Engineer with 7+ years of experience building scalable web and SaaS applications. 
            Strong full-stack expertise in React, Next.js, PHP, Laravel, and WordPress.
          </p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8"
          >
            <a
              href="mailto:baluma.joel91@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              baluma.joel91@gmail.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href="tel:+639358292737"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +63 935 829 2737
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Tagbilaran City, Bohol, Philippines
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

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
						<a
							href="/"
							className="font-mono font-bold text-lg hover:text-primary transition-colors"
						>
							<span className="text-primary">&lt;</span>
							Joel Baluma
							<span className="text-primary">/&gt;</span>
						</a>
						<p className="text-sm text-muted-foreground font-mono">
							© {new Date().getFullYear()} Joel Baluma • Built
							with precision
						</p>
					</div>

					{/* Quick Links */}
					<div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
						<a
							href="#about"
							className="hover:text-foreground transition-colors"
						>
							About
						</a>
						<a
							href="#projects"
							className="hover:text-foreground transition-colors"
						>
							Projects
						</a>
						<a
							href="#stack"
							className="hover:text-foreground transition-colors"
						>
							Stack
						</a>
						<a
							href="#contact"
							className="hover:text-foreground transition-colors"
						>
							Contact
						</a>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-4">
						{[
							{
								icon: Github,
								href: "https://github.com/jbalums/",
							},
							{
								icon: Linkedin,
								href: "https://www.linkedin.com/in/joelbaluma/",
							},
							{
								icon: Mail,
								href: "mailto:baluma.joel91@gmail.com",
							},
						].map((link, i) => (
							<motion.a
								key={i}
								href={link.href}
								target="_blank"
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

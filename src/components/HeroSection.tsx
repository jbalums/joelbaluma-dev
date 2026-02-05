import { motion } from "framer-motion";
import {
	Mail,
	MapPin,
	Phone,
	Github,
	Linkedin,
	Download,
	ArrowDown,
	Terminal,
	Cpu,
	Database,
	Globe,
} from "lucide-react";
import { TypewriterText } from "./TypewriterText";
import { Button } from "@/components/ui/button";
import joelResume from "@/assets/resume/JoelBaluma-Resume.pdf";
export const HeroSection = () => {
	const scrollToAbout = () => {
		document
			.getElementById("stack")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Gradient overlays */}
			<div className="absolute inset-0 mesh-gradient opacity-60" />
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow delay-1000" />

			<div className="relative z-10 container mx-auto px-6 py-20 text-center">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="max-w-5xl mx-auto"
				>
					{/* Status badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="inline-flex mx-auto items-center gap-2 px-4 py-2 glass-card mb-8"
					>
						<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
						<span className="text-sm font-mono text-muted-foreground">
							Available for new opportunities!
						</span>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className="code-line mb-6 "
					>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide uppercase">
							Joel Baluma
						</h1>
					</motion.div>
					{/* Main headline */}
					<h4 className="text-md md:text-md lg:text-xl font-bold leading-tight mb-6">
						<span className="text-foreground">I build</span>&nbsp;
						<span className="gradient-text glow-text">
							<TypewriterText
								texts={[
									"scalable web apps",
									"Laravel backends",
									"WordPress solutions",
									"React interfaces",
								]}
							/>
						</span>
					</h4>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className="text-md md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed mx-auto"
					>
						Software Engineer with 7+ years of experience building
						scalable web and SaaS applications. Expert in React,
						Next.js, Laravel, and WordPress.
					</motion.p>

					{/* Contact info */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-12 "
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
						transition={{ delay: 0.6, duration: 0.6 }}
						className="flex flex-wrap gap-4 mb-16 items-center justify-center"
					>
						<motion.a
							href={joelResume}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 glow-box"
							download="JoelBaluma-Resume.pdf"
						>
							Download Resume{" "}
							<motion.span
								animate={{ y: [0, 4, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								<Download className="w-6 h-6" />
							</motion.span>
						</motion.a>
						<motion.a
							href="https://github.com/jbalums/"
							target="_blank"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center gap-2 px-8 py-4 glass-card font-semibold hover:bg-secondary/50 transition-all duration-300"
						>
							<Github className="w-4 h-4" />
							GitHub
						</motion.a>

						<motion.a
							href="https://www.linkedin.com/in/joelbaluma/"
							target="_blank"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="inline-flex items-center gap-2 px-8 py-4 glass-card font-semibold hover:bg-secondary/50 transition-all duration-300"
						>
							<Linkedin className="w-4 h-4" />
							LinkedIn
						</motion.a>
					</motion.div>
				</motion.div>

				{/* Scroll indicator */}
				<motion.button
					onClick={scrollToAbout}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5 }}
					className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
				>
					<span className="text-xs font-mono">Scroll to explore</span>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
					>
						<ArrowDown className="w-5 h-5" />
					</motion.div>
				</motion.button>
			</div>
		</section>
	);
};

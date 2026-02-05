import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
	{ label: "Stack", href: "#stack" },
	{ label: "Projects", href: "#projects" },
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Playground", href: "#playground" },
	{ label: "Contact", href: "#contact" },
];

export const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled ? "py-3" : "py-6"
				}`}
			>
				<div className="container mx-auto px-6">
					<div
						className={`flex items-center justify-between ${
							isScrolled ? "glass-card px-6 py-3" : ""
						}`}
					>
						{/* Logo */}
						<a
							href="/"
							className="font-mono font-bold text-lg hover:text-primary transition-colors"
						>
							<span className="text-primary">&lt;</span>
							Joel Baluma
							<span className="text-primary">/&gt;</span>
						</a>

						{/* Desktop Nav */}
						<div className="hidden md:flex items-center gap-1">
							{navItems.map((item) => (
								<a
									key={item.label}
									href={item.href}
									className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
								>
									{item.label}
									<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
								</a>
							))}
						</div>

						{/* CTA */}
						{/* <div className="hidden md:block">
							<a
								href="#contact"
								className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
							>
								Let's Talk
							</a>
						</div> */}

						{/* Mobile Menu Button */}
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className="md:hidden p-2 glass-card"
						>
							{isMobileMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-x-0 top-20 z-40 p-6 md:hidden"
					>
						<div className="glass-card p-6">
							<div className="flex flex-col gap-2">
								{navItems.map((item) => (
									<a
										key={item.label}
										href={item.href}
										onClick={() =>
											setIsMobileMenuOpen(false)
										}
										className="px-4 py-3 text-lg font-medium hover:bg-secondary rounded-xl transition-colors"
									>
										{item.label}
									</a>
								))}
								<a
									href="#contact"
									onClick={() => setIsMobileMenuOpen(false)}
									className="mt-4 px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-xl text-center"
								>
									Let's Talk
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

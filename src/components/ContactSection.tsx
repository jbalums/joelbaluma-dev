import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter, Mail, Terminal, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> system.init()',
    '✓ Contact terminal ready',
    '> Type your message or use: /help',
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const newHistory = [...history, `> ${command}`];

    if (command === '/help') {
      newHistory.push(
        '─────────────────────────────',
        'Available commands:',
        '  /help     - Show this menu',
        '  /social   - Show social links',
        '  /clear    - Clear terminal',
        '  [message] - Send a message',
        '─────────────────────────────'
      );
    } else if (command === '/social') {
      newHistory.push(
			"─────────────────────────────",
			"→ GitHub: github.com/jbalums",
			"→ LinkedIn: linkedin.com/in/joelbaluma",
			"→ Email: baluma.joel91@gmail.com",
			"─────────────────────────────",
		);
    } else if (command === '/clear') {
      setHistory(['> Terminal cleared', '> Ready for input...']);
      setCommand('');
      return;
    } else {
      setIsSubmitting(true);
      newHistory.push('⏳ Sending message...');
      setHistory(newHistory);
      
      // Simulate sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      newHistory.pop();
      newHistory.push(
        '✓ Message sent successfully!',
        '> Expect a response within 24 hours',
        '─────────────────────────────'
      );
      setSubmitted(true);
    }

    setHistory(newHistory);
    setCommand('');
    setIsSubmitting(false);
  };

const socialLinks = [
	{ icon: Github, href: "https://github.com/jbalums/", label: "GitHub" },
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/joelbaluma/",
		label: "LinkedIn",
	},
	{ icon: Mail, href: "mailto:baluma.joel91@gmail.com", label: "Email" },
];

  return (
		<section id="contact" className="relative py-32 overflow-hidden">
			<div className="absolute inset-0 mesh-gradient opacity-30" />

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-2 glass-card text-sm font-mono text-primary mb-6">
						// Get in Touch
					</span>
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Let's build something{" "}
						<span className="gradient-text">that scales</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Have a project in mind? Drop a message through the
						terminal below.
					</p>
				</motion.div>

				<div className="max-w-3xl mx-auto">
					{/* Terminal */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="glass-card overflow-hidden"
					>
						{/* Terminal Header */}
						<div className="flex items-center gap-2 px-4 py-3 border-b border-border">
							<div className="w-3 h-3 rounded-full bg-red-500" />
							<div className="w-3 h-3 rounded-full bg-yellow-500" />
							<div className="w-3 h-3 rounded-full bg-green-500" />
							<span className="ml-4 text-sm font-mono text-muted-foreground flex items-center gap-2">
								<Terminal className="w-4 h-4" />
								contact@developer.dev
							</span>
						</div>

						{/* Terminal Body */}
						<div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-sm">
							{history.map((line, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.2 }}
									className={`mb-1 ${
										line.startsWith("✓")
											? "text-green-400"
											: line.startsWith("⏳")
												? "text-yellow-400"
												: line.startsWith("→")
													? "text-primary"
													: line.startsWith(">")
														? "text-foreground"
														: "text-muted-foreground"
									}`}
								>
									{line}
								</motion.div>
							))}
						</div>

						{/* Terminal Input */}
						<form
							onSubmit={handleSubmit}
							className="border-t border-border p-4"
						>
							<div className="flex items-center gap-2">
								<span className="text-primary font-mono">
									$
								</span>
								<input
									type="text"
									value={command}
									onChange={(e) => setCommand(e.target.value)}
									disabled={isSubmitting}
									placeholder={
										submitted
											? "Thanks for reaching out!"
											: "Type your message..."
									}
									className="flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground disabled:opacity-50"
								/>
								<button
									type="submit"
									disabled={isSubmitting || !command.trim()}
									className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
								>
									{isSubmitting ? (
										<div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
									) : submitted ? (
										<CheckCircle className="w-4 h-4" />
									) : (
										<Send className="w-4 h-4" />
									)}
								</button>
							</div>
						</form>
					</motion.div>

					{/* Alternative Contact */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="mt-12 text-center"
					>
						<p className="text-muted-foreground mb-6">
							Or connect through:
						</p>
						<div className="flex justify-center gap-4">
							{socialLinks.map((link) => (
								<motion.a
									key={link.label}
									href={link.href}
									target="_blank"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="p-4 glass-card hover:border-primary/50 transition-colors"
									aria-label={link.label}
								>
									<link.icon className="w-5 h-5" />
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
  );
};

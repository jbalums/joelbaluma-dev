import { Helmet } from "react-helmet-async";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PlaygroundSection } from "@/components/PlaygroundSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
	return (
		<>
			<Helmet>
				<title>Joel Baluma | Full-Stack Software Engineer</title>
				<meta
					name="description"
					content="Software Engineer with 7+ years of experience building scalable web and SaaS applications. Expert in React, Next.js, Laravel, and WordPress development."
				/>
				<meta
					name="keywords"
					content="Joel Baluma, software engineer, full-stack developer, React, Next.js, Laravel, WordPress, PHP, web development"
				/>
				<link rel="canonical" href="https://joelbaluma.dev" />

				{/* Open Graph */}
				<meta
					property="og:title"
					content="Joel Baluma | Full-Stack Software Engineer"
				/>
				<meta
					property="og:description"
					content="Software Engineer with 7+ years of experience building scalable web and SaaS applications."
				/>
				<meta property="og:type" content="website" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Joel Baluma | Full-Stack Software Engineer"
				/>
				<meta
					name="twitter:description"
					content="Software Engineer with 7+ years of experience building scalable web and SaaS applications."
				/>
			</Helmet>

			<div className="relative min-h-screen">
				<ParticleBackground />
				<Navigation />

				<main>
					<HeroSection />
					<TechStackSection />
					<ProjectsSection />
					<AboutSection />
					<TechStackSection />
					<ExperienceSection />
					<PlaygroundSection />
					<ContactSection />
				</main>

				<Footer />
			</div>
		</>
	);
};

export default Index;

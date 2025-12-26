import { Helmet } from 'react-helmet-async';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { PlaygroundSection } from '@/components/PlaygroundSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Developer Portfolio | Full-Stack Engineer</title>
        <meta name="description" content="Full-stack engineer focused on building production-ready applications that solve real problems and scale with your business. Specializing in React, Node.js, and cloud architecture." />
        <meta name="keywords" content="full-stack developer, software engineer, React, Node.js, TypeScript, portfolio" />
        <link rel="canonical" href="https://developer.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Developer Portfolio | Full-Stack Engineer" />
        <meta property="og:description" content="Full-stack engineer focused on building production-ready applications that scale." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Developer Portfolio | Full-Stack Engineer" />
        <meta name="twitter:description" content="Full-stack engineer focused on building production-ready applications that scale." />
      </Helmet>

      <div className="relative min-h-screen">
        <ParticleBackground />
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
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

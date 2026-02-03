import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Users, Clock, X, Server, Database, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    icon: typeof Zap;
  }[];
  challenges: string[];
  solutions: string[];
  links: {
    live?: string;
    github?: string;
  };
  color: string;
}

const projects: Project[] = [
  {
    id: 'hospital-or-system',
    title: 'Hospital OR Management',
    tagline: 'Operating room scheduling & clinical workflows',
    description: 'A comprehensive hospital operating room management system supporting clinical workflows, real-time data handling, and scheduling for healthcare facilities.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop',
    techStack: ['React.js', 'Next.js', 'Laravel', 'MySQL', 'REST APIs'],
    metrics: [
      { label: 'Years in Production', value: '6+', icon: Clock },
      { label: 'Clinical Workflows', value: '20+', icon: Zap },
      { label: 'Healthcare Facility', value: 'Enterprise', icon: Server },
    ],
    challenges: [
      'Complex scheduling with real-time availability',
      'Strict healthcare compliance requirements',
      'Integration with existing hospital systems',
    ],
    solutions: [
      'Event-driven architecture for real-time updates',
      'Role-based access control for clinical staff',
      'RESTful APIs for seamless system integration',
    ],
    links: { live: '#' },
    color: 'from-primary to-cyan-400',
  },
  {
    id: 'wms-system',
    title: 'Warehouse Management System',
    tagline: 'Accurate inventory tracking & reporting',
    description: 'A warehouse management system supporting accurate inventory tracking, reporting, and ongoing feature development for logistics operations.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop',
    techStack: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Bootstrap'],
    metrics: [
      { label: 'Inventory Items', value: '10K+', icon: Database },
      { label: 'Reports Generated', value: '500+', icon: Zap },
      { label: 'Accuracy', value: '99.9%', icon: Clock },
    ],
    challenges: [
      'Real-time inventory synchronization',
      'Complex reporting requirements',
      'Performance with large datasets',
    ],
    solutions: [
      'Optimized database queries with proper indexing',
      'Automated reporting with scheduled jobs',
      'Caching strategies for frequently accessed data',
    ],
    links: { live: '#' },
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'healthcare-mobile',
    title: 'Rural Health Mobile App',
    tagline: 'Government demographic data collection',
    description: 'A mobile application for a Government Rural Health Unit to collect and manage demographic data, improving healthcare delivery in rural areas.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&auto=format&fit=crop',
    techStack: ['React', 'Laravel', 'MySQL', 'REST APIs', 'Mobile'],
    metrics: [
      { label: 'Data Points', value: '50K+', icon: Database },
      { label: 'Health Workers', value: '100+', icon: Users },
      { label: 'Coverage', value: 'Regional', icon: Globe },
    ],
    challenges: [
      'Offline-first functionality for rural areas',
      'Secure handling of sensitive health data',
      'User-friendly interface for field workers',
    ],
    solutions: [
      'Local data storage with sync capabilities',
      'End-to-end encryption for data protection',
      'Intuitive mobile UI for non-technical users',
    ],
    links: { live: '#' },
    color: 'from-green-500 to-emerald-500',
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 glass-card text-sm font-mono text-primary mb-6">
            // Featured Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Projects that <span className="gradient-text">scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click to explore architecture decisions, technical challenges, and live metrics.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              layoutId={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.tagline}</p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-primary">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Mini metrics */}
                  <div className="flex gap-4 text-xs">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label} className="flex items-center gap-1">
                        <metric.icon className="w-3 h-3 text-primary" />
                        <span className="text-foreground font-semibold">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={selectedProject.id}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 glass-card hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-muted-foreground">{selectedProject.tagline}</p>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Description */}
                <p className="text-lg text-muted-foreground">{selectedProject.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric.label} className="glass-card p-4 text-center">
                      <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-muted-foreground font-mono">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-2 text-sm font-mono bg-secondary rounded-lg text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-orange-400">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-orange-400 mt-1">▸</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-green-400">Solutions</h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-green-400 mt-1">✓</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      className="inline-flex items-center gap-2 px-6 py-3 glass-card font-semibold hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

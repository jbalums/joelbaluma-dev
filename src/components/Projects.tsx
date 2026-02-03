import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Hospital OR Management System",
    description: "A comprehensive operating room management system for hospitals, featuring real-time scheduling, resource allocation, and clinical workflow management.",
    tech: ["React.js", "Next.js", "Laravel", "PostgreSQL", "WebSockets"],
    category: "Healthcare",
  },
  {
    title: "Warehouse Management System",
    description: "Full-featured WMS supporting accurate inventory tracking, reporting, and warehouse operations optimization for logistics clients.",
    tech: ["PHP", "Laravel", "MySQL", "Vue.js", "REST API"],
    category: "Logistics",
  },
  {
    title: "Clinic Consultation Platform",
    description: "Online consultation platform connecting patients with healthcare providers, featuring video calls, appointment scheduling, and medical records management.",
    tech: ["React.js", "Node.js", "MongoDB", "WebRTC"],
    category: "Healthcare",
  },
  {
    title: "Rural Health Data Collection App",
    description: "Mobile application for Government Rural Health Units to collect and manage demographic data from remote communities.",
    tech: ["React Native", "Laravel", "MySQL", "Offline-first"],
    category: "Government",
  },
  {
    title: "Custom WordPress Themes & Plugins",
    description: "Collection of custom WordPress solutions including themes, plugins, and performance optimizations for various business clients.",
    tech: ["WordPress", "PHP", "ACF", "REST API", "Performance"],
    category: "Web Development",
  },
  {
    title: "Landing Page Optimization Suite",
    description: "JavaScript enhancements and custom integrations for Unbounce landing pages, improving interactivity and conversion rates.",
    tech: ["JavaScript", "Unbounce", "Analytics", "A/B Testing"],
    category: "Marketing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="code-line mb-4 block">projects.filter(featured)</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A selection of projects I've worked on across different industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-glow bg-card p-6 rounded-lg border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-2">
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <span className="text-xs font-mono text-accent mb-2 block">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

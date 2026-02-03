import { motion } from "framer-motion";
import { FlaskConical, ExternalLink, Sparkles } from "lucide-react";

const experiments = [
  {
    title: "React Component Library",
    description: "Personal component library with reusable UI elements, hooks, and utilities for rapid development.",
    status: "In Progress",
    icon: "🧩",
  },
  {
    title: "Laravel API Boilerplate",
    description: "Starter template for Laravel APIs with authentication, rate limiting, and OpenAPI documentation.",
    status: "Active",
    icon: "🚀",
  },
  {
    title: "WordPress Block Patterns",
    description: "Collection of custom Gutenberg block patterns for quick page building in WordPress projects.",
    status: "Active",
    icon: "📦",
  },
  {
    title: "Performance Monitoring Dashboard",
    description: "Real-time dashboard for monitoring web application performance metrics and Core Web Vitals.",
    status: "Concept",
    icon: "📊",
  },
];

const demos = [
  {
    title: "Interactive Data Visualization",
    description: "D3.js powered charts and graphs with real-time data updates and smooth animations.",
    tech: ["D3.js", "React", "WebSockets"],
  },
  {
    title: "Form Builder Engine",
    description: "Drag-and-drop form builder with validation, conditional logic, and multi-step support.",
    tech: ["React", "DnD Kit", "Zod"],
  },
  {
    title: "Markdown Editor",
    description: "Feature-rich markdown editor with live preview, syntax highlighting, and export options.",
    tech: ["React", "CodeMirror", "Remark"],
  },
];

const Experiments = () => {
  return (
    <section id="experiments" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="code-line mb-4 block">experiments.run()</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiments & <span className="gradient-text">Demos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Side projects, experiments, and technical explorations I'm working on.
          </p>
        </motion.div>

        {/* Experiments Grid */}
        <div className="mb-16">
          <h3 className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
            <FlaskConical className="w-4 h-4" />
            Experiments
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {experiments.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="text-3xl">{exp.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                        exp.status === "Active"
                          ? "bg-accent/20 text-accent"
                          : exp.status === "In Progress"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demos Grid */}
        <div>
          <h3 className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Interactive Demos
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors group cursor-pointer"
              >
                <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                  {demo.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {demo.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {demo.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 bg-secondary rounded text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiments;

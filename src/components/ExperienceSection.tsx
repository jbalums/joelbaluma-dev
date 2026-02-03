import { motion } from 'framer-motion';
import { Shield, Zap, Database, Globe, Cpu, Lock, BarChart3, Code2 } from 'lucide-react';

const capabilities = [
  {
    icon: Globe,
    title: 'WordPress Development',
    description: 'Custom themes, plugins, performance optimization, and security hardening',
    tags: ['Themes', 'Plugins', 'ACF'],
  },
  {
    icon: Zap,
    title: 'Laravel & PHP',
    description: 'Full-stack development with MVC architecture and RESTful APIs',
    tags: ['Laravel', 'PHP OOP', 'REST'],
  },
  {
    icon: Code2,
    title: 'React & Next.js',
    description: 'Modern frontend development with TypeScript and state management',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Schema design, query optimization, and multi-database expertise',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Caching, SEO optimization, achieving ~60% speed improvements',
    tags: ['Caching', 'SEO', 'Speed'],
  },
  {
    icon: Shield,
    title: 'API Integration',
    description: 'Third-party integrations, WebSockets, and real-time data handling',
    tags: ['REST', 'WebSockets', 'APIs'],
  },
  {
    icon: Cpu,
    title: 'Healthcare Systems',
    description: 'Hospital management, clinical workflows, and patient data systems',
    tags: ['HIPAA', 'EHR', 'Clinical'],
  },
  {
    icon: Lock,
    title: 'SaaS Applications',
    description: 'Scalable web applications with multi-tenant architecture',
    tags: ['SaaS', 'Multi-tenant', 'Scale'],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
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
            // System Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What I <span className="gradient-text">engineer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core competencies presented as system capabilities, not resume bullet points.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="glass-card p-5 h-full hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex p-2.5 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {capability.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono bg-secondary/50 rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass-card p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years Experience', value: '7+' },
              { label: 'Projects Delivered', value: '40+' },
              { label: 'Industries', value: '5+' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-mono mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

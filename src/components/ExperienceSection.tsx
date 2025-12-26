import { motion } from 'framer-motion';
import { Shield, Zap, Database, Globe, Cpu, Lock, BarChart3, Code2 } from 'lucide-react';

const capabilities = [
  {
    icon: Shield,
    title: 'Authentication Systems',
    description: 'OAuth, JWT, MFA, SSO integration with enterprise-grade security',
    tags: ['Auth0', 'Passport.js', 'RBAC'],
  },
  {
    icon: Zap,
    title: 'REST & GraphQL APIs',
    description: 'High-performance APIs with caching, pagination, and real-time subscriptions',
    tags: ['OpenAPI', 'Apollo', 'tRPC'],
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'Schema design, migrations, indexing, and query optimization',
    tags: ['SQL', 'NoSQL', 'Sharding'],
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Profiling, caching strategies, and sub-100ms response times',
    tags: ['CDN', 'Redis', 'SSR'],
  },
  {
    icon: Globe,
    title: 'Cloud Infrastructure',
    description: 'Auto-scaling, load balancing, and multi-region deployments',
    tags: ['AWS', 'GCP', 'Vercel'],
  },
  {
    icon: Lock,
    title: 'Security Engineering',
    description: 'OWASP compliance, penetration testing, and vulnerability management',
    tags: ['HTTPS', 'CSP', 'WAF'],
  },
  {
    icon: Cpu,
    title: 'System Design',
    description: 'Microservices, event-driven architecture, and distributed systems',
    tags: ['Kafka', 'gRPC', 'DDD'],
  },
  {
    icon: Code2,
    title: 'CI/CD Pipelines',
    description: 'Automated testing, staging environments, and zero-downtime deploys',
    tags: ['GitHub Actions', 'Docker', 'K8s'],
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
              { label: 'Code Reviews', value: '500+' },
              { label: 'Pull Requests', value: '2,000+' },
              { label: 'Lines of Code', value: '1M+' },
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

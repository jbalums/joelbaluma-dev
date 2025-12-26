import { motion } from 'framer-motion';
import { Lightbulb, GitBranch, Server, Layout, Rocket, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Ideation',
    description: 'Understanding the problem, defining requirements, and mapping user needs to technical solutions.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: GitBranch,
    title: 'Architecture',
    description: 'Designing scalable systems with clean separation of concerns and future-proof patterns.',
    color: 'from-primary to-cyan-400',
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Building robust APIs, optimizing databases, and implementing secure authentication.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Layout,
    title: 'Frontend',
    description: 'Crafting responsive interfaces with attention to UX, performance, and accessibility.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'CI/CD pipelines, containerization, monitoring, and zero-downtime deployments.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: CheckCircle,
    title: 'Iteration',
    description: 'Continuous improvement based on metrics, user feedback, and emerging requirements.',
    color: 'from-primary to-purple-500',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
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
            // How I Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Problem → <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I approach every project as a system to be engineered, not just code to be written.
            Here's my process from concept to production.
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
                    <span className="text-xs font-mono text-primary">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <blockquote className="glass-card p-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground italic mb-4">
              "The best code is the code that solves problems so elegantly, 
              it feels like it was always meant to exist."
            </p>
            <cite className="text-muted-foreground font-mono text-sm">— Engineering Philosophy</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

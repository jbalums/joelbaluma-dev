import { motion } from 'framer-motion';

interface TechCategory {
  title: string;
  icon: string;
  items: string[];
  color: string;
  bgGlow: string;
}

const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    icon: '◈',
    color: 'text-cyan-400',
    bgGlow: 'group-hover:shadow-cyan-500/20',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: '⬡',
    color: 'text-emerald-400',
    bgGlow: 'group-hover:shadow-emerald-500/20',
    items: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: '◉',
    color: 'text-purple-400',
    bgGlow: 'group-hover:shadow-purple-500/20',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Prisma'],
  },
  {
    title: 'DevOps',
    icon: '⎔',
    color: 'text-orange-400',
    bgGlow: 'group-hover:shadow-orange-500/20',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
  },
];

export const TechStackSection = () => {
  return (
    <section id="stack" className="relative py-32 overflow-hidden">
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
            // Tech Arsenal
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tools of the <span className="gradient-text">trade</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A carefully curated stack optimized for building production-grade applications.
          </p>
        </motion.div>

        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card p-4 mb-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-sm font-mono text-muted-foreground">system_capabilities.sh</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-green-400">$</span>
            <span className="text-muted-foreground ml-2">cat /skills/* | sort -r</span>
          </div>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl ${category.color}`}>
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills as Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                    }}
                    className={`
                      relative px-3 py-1.5 
                      font-mono text-sm 
                      bg-secondary/50 
                      border border-border/50
                      rounded-lg
                      cursor-default
                      transition-all duration-300
                      hover:border-primary/50
                      hover:bg-secondary
                      hover:shadow-lg
                      ${category.bgGlow}
                      group/tag
                    `}
                  >
                    {/* Glow effect on hover */}
                    <span className={`
                      absolute inset-0 rounded-lg opacity-0 
                      group-hover/tag:opacity-100 
                      transition-opacity duration-300
                      blur-sm -z-10
                      ${category.color.replace('text-', 'bg-').replace('-400', '-500/20')}
                    `} />
                    
                    {/* Prefix dot */}
                    <span className={`
                      inline-block w-1.5 h-1.5 rounded-full mr-2
                      ${category.color.replace('text-', 'bg-')}
                      opacity-60 group-hover/tag:opacity-100
                      transition-opacity duration-300
                    `} />
                    
                    <span className="text-foreground/80 group-hover/tag:text-foreground transition-colors duration-300">
                      {item}
                    </span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">+</span> Always learning: Rust, WebAssembly, Edge Computing
          </p>
        </motion.div>
      </div>
    </section>
  );
};
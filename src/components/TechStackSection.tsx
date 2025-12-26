import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  level: number;
}

interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
  color: string;
}

const techStack: TechCategory[] = [
  {
    title: 'Frontend',
    icon: '◈',
    color: 'from-primary to-cyan-400',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: '⬡',
    color: 'from-green-500 to-emerald-400',
    items: [
      { name: 'Node.js', level: 93 },
      { name: 'Python', level: 88 },
      { name: 'Go', level: 75 },
      { name: 'GraphQL', level: 90 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    title: 'Database',
    icon: '◉',
    color: 'from-purple-500 to-pink-400',
    items: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'Elasticsearch', level: 78 },
      { name: 'Prisma', level: 90 },
    ],
  },
  {
    title: 'DevOps',
    icon: '⎔',
    color: 'from-orange-500 to-red-400',
    items: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
      { name: 'AWS', level: 85 },
      { name: 'CI/CD', level: 92 },
      { name: 'Terraform', level: 75 },
    ],
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
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.icon}
                </span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-sm text-foreground">{item.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{item.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
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

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js / Nuxt.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Sass", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["PHP (OOP, MVC)", "Laravel", "REST APIs", "API Integration", "WebSockets"],
  },
  {
    title: "WordPress",
    skills: ["Custom Themes & Plugins", "CPT & Taxonomies", "ACF", "Performance Optimization", "Security"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Git", "Composer", "NPM", "SSH", "CI/CD"],
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

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="code-line mb-4 block">skills.map()</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-glow bg-card p-6 rounded-lg border border-border"
            >
              <h3 className="font-mono text-sm text-primary mb-4">
                {`// ${category.title}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md font-medium"
                  >
                    {skill}
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

export default Skills;

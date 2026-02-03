import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Freelance",
    period: "Dec 2025 - Present",
    description: [
      "Developed and delivered custom WordPress themes and plugins tailored to client business requirements.",
      "Maintained and enhanced a Warehouse Management System (WMS) supporting accurate inventory tracking and reporting.",
      "Providing ongoing feature development, maintenance, and performance optimization.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Intetics",
    period: "Oct 2024 - Dec 2025",
    description: [
      "Developed and maintained WordPress websites, including custom themes, plugins, and internal tools for form submission management.",
      "Improved website performance by implementing caching, SEO optimization, and performance tuning, increasing site speed by ~60%.",
      "Managed and customized Unbounce landing pages, adding JavaScript enhancements to improve interactivity and conversion performance.",
    ],
  },
  {
    title: "Software Developer",
    company: "Freelance",
    period: "Jul 2023 - Oct 2024",
    description: [
      "Built web and mobile applications for clients across healthcare and public sector industries.",
      "Developed management information systems and clinic-patient online consultation platforms.",
      "Created a mobile application for a Government Rural Health Unit to collect and manage demographic data.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Global OR Australia",
    period: "Jun 2017 - Jul 2023",
    description: [
      "Developed and maintained hospital operating room management systems using React.js, Next.js, and Laravel APIs.",
      "Built frontend interfaces and backend services to support clinical workflows and real-time data handling.",
      "Collaborated with cross-functional teams to deliver stable, production-ready healthcare applications.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="code-line mb-4 block">experience.forEach()</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            7+ years of building production-ready applications across various industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1 mt-2 ring-4 ring-background" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="card-glow bg-card p-6 rounded-lg border border-border">
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

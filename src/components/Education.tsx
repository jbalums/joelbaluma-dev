import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="code-line mb-4 block">education.degree</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">Education</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glow bg-card p-8 rounded-lg border border-border inline-block"
          >
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Holy Name University</h3>
            <p className="text-muted-foreground">
              Bachelor of Science in Information Technology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

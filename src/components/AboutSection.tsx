import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "PostgreSQL", level: 80 },
  { name: "Docker / DevOps", level: 70 },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// sobre</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Quem está por <span className="text-gradient">trás</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-primary">const</span> dev = {"{"}
              </div>
              <div className="pl-6 space-y-1 font-mono text-sm">
                <p><span className="text-primary">nome</span>: <span className="text-foreground">"Seu Nome Completo"</span>,</p>
                <p><span className="text-primary">formação</span>: <span className="text-foreground">"Ciência da Computação"</span>,</p>
                <p><span className="text-primary">graduação</span>: <span className="text-foreground">"2025"</span>,</p>
                <p><span className="text-primary">localização</span>: <span className="text-foreground">"Brasil"</span>,</p>
                <p><span className="text-primary">disponível</span>: <span className="text-primary">true</span>,</p>
              </div>
              <div className="font-mono text-sm text-muted-foreground mt-4">{"}"}</div>

              <p className="text-muted-foreground mt-6 leading-relaxed text-sm">
                Recém-graduado e apaixonado por tecnologia, transformo desafios complexos em soluções 
                digitais elegantes. Busco sempre as melhores práticas e tecnologias mais modernas 
                para entregar resultados que fazem a diferença.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

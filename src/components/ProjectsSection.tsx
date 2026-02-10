import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel admin, pagamentos e gestão de estoque.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Dashboard Analytics",
    description: "Painel de análise de dados em tempo real com gráficos interativos e relatórios.",
    tags: ["Next.js", "Python", "D3.js", "AWS"],
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "App de Delivery",
    description: "Aplicativo mobile de delivery com rastreamento em tempo real e chat integrado.",
    tags: ["React Native", "Firebase", "Maps API"],
    color: "from-primary/20 to-primary/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// projetos</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Trabalhos <span className="text-gradient">recentes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card overflow-hidden card-hover"
            >
              {/* Placeholder image area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="font-mono text-sm text-muted-foreground">preview</span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Github className="w-4 h-4 mr-1" /> Código
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

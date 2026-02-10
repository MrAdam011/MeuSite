import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Sites e aplicações web modernas com React, Next.js e TypeScript.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicativos mobile multiplataforma com React Native e Flutter.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Arquiteturas escaláveis com Node.js, Python e microsserviços.",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "Modelagem e otimização com PostgreSQL, MongoDB e Redis.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Implementação de boas práticas de segurança e LGPD.",
  },
  {
    icon: Zap,
    title: "Consultoria Tech",
    description: "Análise, planejamento e estratégia para seu projeto digital.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// serviços</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Soluções que <span className="text-gradient">impulsionam</span> seu negócio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card p-6 card-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

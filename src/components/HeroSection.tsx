import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-8 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Disponível para novos projetos</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Seu Nome</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light mb-2">
            <span className="text-gradient font-semibold">Desenvolvedor Full Stack</span>
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Transformando ideias em soluções digitais escaláveis. 
            Desenvolvimento web, mobile e consultoria tecnológica.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-base font-semibold px-8"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Iniciar Projeto
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary text-base px-8"
              onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code2 className="w-4 h-4 mr-2" />
              Ver Projetos
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

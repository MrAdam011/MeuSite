import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entrarei em contato em breve.");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2">// contato</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Vamos <span className="text-gradient">conversar</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Tem um projeto em mente? Precisa de ajuda com desenvolvimento? 
              Entre em contato e vamos transformar sua ideia em realidade.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "johnadammax@gmail.com" },
                { icon: Phone, label: "+55 (11) 94808-9514" },
                { icon: MapPin, label: "Campo-Maior, Brasil" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              required
            />
            <Textarea
              placeholder="Descreva seu projeto..."
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[140px]"
              required
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

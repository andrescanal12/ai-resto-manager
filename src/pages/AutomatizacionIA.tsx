import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle, Rocket, Workflow, Zap, Shield, HelpCircle, MessageSquare } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="rounded-xl bg-card text-card-foreground shadow-[var(--shadow-card)] border border-border p-5">
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-lg bg-accent text-foreground"><Icon size={22} /></div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

const StepItem = ({ number, title, desc }: { number: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
      {number}
    </div>
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const AutomatizacionIA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs tracking-wide uppercase text-muted-foreground">Automatización IA</span>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Acelera tus procesos con flujos de trabajo impulsados por IA
              </h1>
              <p className="mt-3 text-muted-foreground">
                Diseñamos, implementamos y operamos automatizaciones a medida para tu negocio: desde atención al cliente hasta operaciones internas, todo con tu stack actual.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button className="bg-primary text-primary-foreground hover:bg-secondary hover:text-foreground">
                  <PlayCircle className="mr-2" size={18} /> Ver demo
                </Button>
                <Button variant="outline" className="border-primary text-foreground">
                  Hablar con un experto
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-foreground" size={18} /> Sin reemplazar tus herramientas
                <CheckCircle2 className="text-foreground" size={18} /> Seguridad y privacidad
              </div>
            </div>
            <div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-glow)] flex items-center justify-center">
                <div className="text-center p-6">
                  <PlayCircle size={56} className="mx-auto text-foreground" />
                  <p className="mt-2 text-muted-foreground">Vista previa de la automatización en acción</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center">¿Qué puedes automatizar con IA?</h2>
          <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
            Casos prácticos que implementamos con nuestros clientes.
          </p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={Workflow} title="Atención al cliente" desc="Bots y asistentes entrenados con tus datos, disponibles 24/7 en web y WhatsApp." />
            <FeatureCard icon={Zap} title="Prospección comercial" desc="Secuencias inteligentes para captar, filtrar y calificar leads automáticamente." />
            <FeatureCard icon={Rocket} title="Operaciones" desc="Automatiza tareas repetitivas: reportes, integraciones, aprobaciones y más." />
            <FeatureCard icon={Shield} title="Cumplimiento" desc="Controles, registros y alertas automatizadas con trazabilidad completa." />
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="container mx-auto px-4 mt-16">
          <div className="rounded-2xl bg-card border border-border p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground text-center">Así trabajamos contigo</h2>
            <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
              Un proceso claro, de punta a punta, para entregar valor desde el primer sprint.
            </p>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StepItem number="1" title="Descubrimiento" desc="Analizamos procesos y herramientas actuales para detectar quick wins." />
              <StepItem number="2" title="Diseño" desc="Definimos flujos, prompts y políticas con foco en resultados y seguridad." />
              <StepItem number="3" title="Implementación" desc="Integramos con tu stack (CRM, ERP, WhatsApp, Slack, APIs) y probamos." />
              <StepItem number="4" title="Operación" desc="Monitoreo, mejora continua y entrenamiento con tus datos." />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center">Preguntas frecuentes</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[{
              q: "¿Necesito cambiar mis herramientas?",
              a: "No. Integramos con lo que ya usas (Google, Microsoft, Slack, WhatsApp, CRM, ERP, etc.)."
            }, {
              q: "¿Dónde se alojan mis datos?",
              a: "Respetamos tu política: opciones en tu nube, nubes europeas o proveedores específicos."
            }, {
              q: "¿Cuánto tardan los proyectos?",
              a: "Los primeros resultados suelen salir entre 2 y 4 semanas, según el alcance."
            }, {
              q: "¿Qué nivel de soporte ofrecen?",
              a: "Desde soporte básico hasta operación gestionada con SLAs."}].map((f, idx) => (
              <div key={idx} className="rounded-xl bg-card border border-border p-5">
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-foreground mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground">{f.q}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="container mx-auto px-4 mt-16 mb-24">
          <div className="rounded-2xl border border-border bg-secondary text-foreground p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">¿Listo para automatizar con IA?</h3>
              <p className="text-muted-foreground mt-1">Agenda una sesión gratuita y descubre oportunidades concretas en tu negocio.</p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-primary text-primary-foreground hover:bg-secondary hover:text-foreground">
                <MessageSquare className="mr-2" size={18} /> Agenda una demo
              </Button>
              <Button variant="outline" className="border-primary text-foreground">Ver casos</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AutomatizacionIA;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle, Rocket, Workflow, Zap, Shield, HelpCircle, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

// Helper components
const FlowDemo = () => {
  return (
    <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="group rounded-xl border border-border bg-background p-4 hover:shadow-[var(--shadow-glow)] transition-all">
          <div className="text-xs text-muted-foreground mb-1">Trigger</div>
          <div className="text-foreground font-semibold">Cliente escribe en WhatsApp</div>
        </div>
        <div className="flex items-center justify-center">
          <svg className="w-16 h-10 text-primary" viewBox="0 0 160 100" fill="none">
            <path d="M5 50 C60 0, 100 100, 155 50" stroke="currentColor" strokeWidth="3" className="animate-pulse" />
          </svg>
        </div>
        <div className="group rounded-xl border border-border bg-background p-4 hover:shadow-[var(--shadow-glow)] transition-all">
          <div className="text-xs text-muted-foreground mb-1">Proceso</div>
          <div className="text-foreground font-semibold">Clasificar intención + consultar stock</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center mt-4">
        <div className="group rounded-xl border border-border bg-background p-4 hover:shadow-[var(--shadow-glow)] transition-all">
          <div className="text-xs text-muted-foreground mb-1">Acción</div>
          <div className="text-foreground font-semibold">Crear reserva en el sistema</div>
        </div>
        <div className="flex items-center justify-center">
          <svg className="w-16 h-10 text-accent" viewBox="0 0 160 100" fill="none">
            <path d="M5 50 C60 0, 100 100, 155 50" stroke="currentColor" strokeWidth="3" className="animate-pulse" />
          </svg>
        </div>
        <div className="group rounded-xl border border-border bg-background p-4 hover:shadow-[var(--shadow-glow)] transition-all">
          <div className="text-xs text-muted-foreground mb-1">Resultado</div>
          <div className="text-foreground font-semibold">Confirmación automática al cliente</div>
        </div>
      </div>
    </div>
  );
};

const LiveStat = ({ label, end, suffix = "" }: { label: string; end: number; suffix?: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const startTime = performance.now();
          const duration = 1200;
          const animate = (now: number) => {
            const t = Math.min(1, (now - startTime) / duration);
            setValue(Math.floor(end * (0.5 - 0.5 * Math.cos(Math.PI * t))));
            if (t < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <div ref={ref} className="rounded-xl border border-border bg-card p-5 text-center shadow-[var(--shadow-card)]">
      <div className="text-3xl font-bold text-primary">{value.toLocaleString()}<span className="text-foreground">{suffix}</span></div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const UseCaseTabs = () => {
  const tabs = [
    { key: "atencion", name: "Atención", desc: "Bots 24/7 entrenados con tus datos", color: "from-primary/20 to-accent/20" },
    { key: "prospeccion", name: "Prospección", desc: "Secuencias para captar y calificar leads", color: "from-accent/20 to-primary/20" },
    { key: "operaciones", name: "Operaciones", desc: "Automatiza reportes, integraciones y aprobaciones", color: "from-primary/15 to-accent/15" },
    { key: "cumplimiento", name: "Cumplimiento", desc: "Alertas y registros con trazabilidad", color: "from-accent/15 to-primary/15" },
  ];
  const [active, setActive] = useState(tabs[0].key);
  return (
    <div className="rounded-2xl border border-border p-6 bg-card">
      <div className="flex flex-wrap gap-2">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setActive(t.key)} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${active===t.key?"bg-primary text-primary-foreground border-primary":"bg-background text-foreground border-border hover:border-primary"}`}>
            {t.name}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-xl overflow-hidden border border-border bg-gradient-to-br p-6 transition-all" >
        {tabs.map(t => (
          <div key={t.key} className={`${active===t.key?"opacity-100 translate-y-0":"opacity-0 -translate-y-2 hidden"} transition-all duration-300 bg-gradient-to-br ${t.color} rounded-xl p-6`}>
            <div className="text-lg font-semibold text-foreground mb-2">{t.name}</div>
            <div className="text-muted-foreground">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IntegrationsMarquee = () => {
  const logos = ["/logo.jpg","/images/agente_sonriendo.png","/marketing_digital_futurista.png"]; // placeholders temporales
  return (
    <div className="relative overflow-hidden border border-border rounded-2xl bg-card py-4">
      <div className="flex gap-10 whitespace-nowrap animate-[marquee_18s_linear_infinite] will-change-transform">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="h-10 w-28 flex items-center justify-center opacity-80 hover:opacity-100 transition">
            <img src={src} alt="integration" className="max-h-8 object-contain" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
};

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
                <Button className="relative overflow-hidden text-primary-foreground font-semibold border-2 border-primary hover:border-primary bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-shift hover:brightness-110">
                  <PlayCircle className="mr-2" size={18} /> Ver demo
                </Button>
                <Button variant="outline" className="border-primary text-foreground transition-transform duration-200 hover:scale-[1.03]">
                  Hablar con un experto
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="text-foreground" size={18} /> Sin reemplazar tus herramientas
                <CheckCircle2 className="text-foreground" size={18} /> Seguridad y privacidad
              </div>
            </div>
            <div>
              <FlowDemo />
            </div>
          </div>
        </section>

        {/* Live stats */}
        <section className="container mx-auto px-4 mt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <LiveStat label="Tickets automatizados" end={2480} />
            <LiveStat label="Horas ahorradas" end={730} />
            <LiveStat label="Integraciones activas" end={18} />
            <LiveStat label="Satisfacción" end={99} suffix="%" />
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
          <div className="mt-8">
            <UseCaseTabs />
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
              <div className="opacity-0 translate-y-2 animate-[fadeInUp_0.5s_forwards]" style={{animationDelay:'0.05s'}}><StepItem number="1" title="Descubrimiento" desc="Analizamos procesos y herramientas actuales para detectar quick wins." /></div>
              <div className="opacity-0 translate-y-2 animate-[fadeInUp_0.5s_forwards]" style={{animationDelay:'0.15s'}}><StepItem number="2" title="Diseño" desc="Definimos flujos, prompts y políticas con foco en resultados y seguridad." /></div>
              <div className="opacity-0 translate-y-2 animate-[fadeInUp_0.5s_forwards]" style={{animationDelay:'0.25s'}}><StepItem number="3" title="Implementación" desc="Integramos con tu stack (CRM, ERP, WhatsApp, Slack, APIs) y probamos." /></div>
              <div className="opacity-0 translate-y-2 animate-[fadeInUp_0.5s_forwards]" style={{animationDelay:'0.35s'}}><StepItem number="4" title="Operación" desc="Monitoreo, mejora continua y entrenamiento con tus datos." /></div>
            </div>
            <style>{`@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}`}</style>
          </div>
        </section>

        {/* Integrations */}
        <section className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-bold text-foreground text-center">Integraciones</h2>
          <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">Conectamos con tus herramientas actuales.</p>
          <div className="mt-6">
            <IntegrationsMarquee />
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
          <div className="rounded-2xl border border-border bg-secondary text-foreground p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[var(--shadow-glow)]">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">¿Listo para automatizar con IA?</h3>
              <p className="text-muted-foreground mt-1">Agenda una sesión gratuita y descubre oportunidades concretas en tu negocio.</p>
            </div>
            <div className="flex gap-3">
              <Button className="relative overflow-hidden text-primary-foreground font-semibold border-2 border-primary hover:border-primary bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-shift hover:brightness-110">
                <MessageSquare className="mr-2" size={18} /> Agenda una demo
              </Button>
              <Button variant="outline" className="border-primary text-foreground transition-transform duration-200 hover:scale-[1.03]">Ver casos</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AutomatizacionIA;

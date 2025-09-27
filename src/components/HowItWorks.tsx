import { Settings, Brain, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Settings,
      title: "Configura tu restaurante",
      description: "Conecta nuestro sistema con tu POS, menú y procesos existentes. La integración toma menos de 30 minutos.",
      details: [
        "Importación automática del menú",
        "Conexión con sistemas de pago",
        "Configuración de mesas y zonas",
        "Sincronización de horarios"
      ]
    },
    {
      number: "02",
      icon: Brain,
      title: "IA aprende tu operación",
      description: "Durante los primeros días, nuestra IA observa y aprende los patrones únicos de tu restaurante.",
      details: [
        "Análisis de flujo de clientes",
        "Identificación de horas pico",
        "Patrones de pedidos populares",
        "Optimización de recursos"
      ]
    },
    {
      number: "03",
      icon: Zap,
      title: "IA gestiona en tiempo real",
      description: "Una vez entrenada, la IA toma control de las operaciones diarias, optimizando cada proceso automáticamente.",
      details: [
        "Gestión automática de reservas",
        "Predicción de demanda",
        "Optimización de inventario",
        "Reportes inteligentes"
      ]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cómo funciona en 3 simples pasos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            De la configuración inicial al control total automatizado en menos de una semana
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-border"></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step number and icon */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="bg-card border border-border rounded-xl p-6 text-left space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Timeline de implementación
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Día 1</div>
                <div className="text-sm text-muted-foreground">Configuración inicial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Día 2-4</div>
                <div className="text-sm text-muted-foreground">Aprendizaje de IA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Día 5-7</div>
                <div className="text-sm text-muted-foreground">Optimización automática</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">Día 8+</div>
                <div className="text-sm text-muted-foreground">Control total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
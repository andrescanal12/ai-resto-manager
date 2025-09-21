import { Bot, Zap, TrendingUp, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Gerente de Restaurante IA",
      description: "Agente inteligente que gestiona reservas, pedidos, inventario y atención al cliente 24/7. Tu gerente virtual más eficiente.",
      features: ["Gestión de reservas automática", "Control de inventario en tiempo real", "Optimización de pedidos", "Análisis predictivo"]
    },
    {
      icon: Zap,
      title: "Automatización de Procesos",
      description: "Optimiza workflows y elimina tareas repetitivas con soluciones de IA personalizadas para tu industria.",
      features: ["Automatización de ventas", "Gestión de leads", "Procesos administrativos", "Integración con sistemas"]
    },
    {
      icon: TrendingUp,
      title: "Marketing con IA",
      description: "Campañas inteligentes, segmentación automática y optimización de conversiones usando algoritmos avanzados.",
      features: ["Segmentación inteligente", "Contenido personalizado", "Optimización automática", "Análisis de ROI"]
    },
    {
      icon: Settings,
      title: "Soluciones a Medida",
      description: "Desarrollamos soluciones de IA específicas para las necesidades únicas de tu negocio.",
      features: ["Consultoría especializada", "Desarrollo personalizado", "Integración completa", "Soporte dedicado"]
    }
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluciones de IA que transforman tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde gestión de restaurantes hasta automatización completa, nuestras soluciones de IA se adaptan a tu industria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 group">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas una solución específica para tu negocio?
          </p>
          <button className="bg-primary hover:bg-secondary hover:text-foreground text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-[var(--shadow-glow)] transition-all duration-300 border-2 border-primary hover:border-primary">
            Consulta personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
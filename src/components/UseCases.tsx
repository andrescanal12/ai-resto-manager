import { Clock, Users, Package, TrendingUp } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Clock,
      title: "Gestión de pedidos automatizada",
      description: "El agente IA procesa pedidos en tiempo real, coordina con la cocina y optimiza tiempos de entrega. Reduce errores y mejora la experiencia del cliente.",
      image: "/api/placeholder/600/400",
      stats: ["50% menos errores", "30% más rápido", "100% automatizado"],
      reverse: false
    },
    {
      icon: Users,
      title: "Optimización de turnos de personal",
      description: "Programa automáticamente los turnos basándose en patrones de demanda, disponibilidad del personal y eventos especiales. Maximiza eficiencia y reduce costos laborales.",
      image: "/api/placeholder/600/400",
      stats: ["25% menos sobrecostos", "95% satisfacción staff", "Predicción inteligente"],
      reverse: true
    },
    {
      icon: Package,
      title: "Control de inventario inteligente",
      description: "Monitorea stock en tiempo real, predice necesidades futuras y genera órdenes automáticas. Evita desperdicios y garantiza disponibilidad de ingredientes.",
      image: "/api/placeholder/600/400",
      stats: ["40% menos desperdicio", "Alertas proactivas", "ROI optimizado"],
      reverse: false
    },
    {
      icon: TrendingUp,
      title: "Análisis predictivo de demanda",
      description: "Analiza patrones históricos, clima, eventos locales y tendencias para predecir la demanda. Ayuda a planificar menús, personal e inventario.",
      image: "/api/placeholder/600/400",
      stats: ["85% precisión", "Planificación automática", "Insights accionables"],
      reverse: true
    }
  ];

  return (
    <section id="casos-uso" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Casos de uso reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestra IA transforma cada aspecto de tu restaurante
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${useCase.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${useCase.reverse ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {useCase.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="text-sm font-semibold text-primary">
                          {stat}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${useCase.reverse ? 'lg:col-start-1' : ''}`}>
                  <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <IconComponent className="w-16 h-16 text-primary mx-auto" />
                        <div className="space-y-2">
                          <div className="h-2 bg-primary/30 rounded w-32 mx-auto"></div>
                          <div className="h-2 bg-accent/30 rounded w-24 mx-auto"></div>
                          <div className="h-2 bg-primary/30 rounded w-28 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating indicator */}
                    <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm rounded-lg p-2 border border-primary/30">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
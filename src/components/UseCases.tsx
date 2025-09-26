import { Clock, Users, Package, TrendingUp } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Clock,
      title: "Agente IA Gerente de Restaurante",
      description:
        "Nuestro caso estrella: un agente inteligente que gestiona reservas, inventario y pedidos en tiempo real. Transformó completamente las operaciones de 'Sabores del Puerto'.",
      image: "/images/agente_sonriendo.png",
      stats: ["+30% eficiencia operativa", "-20% errores inventario", "24/7 disponibilidad"],
      reverse: false,
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital con IA",
      description:
        "Automatización completa del marketing digital para 'TechSolutions Inc'. Segmentación inteligente, campañas personalizadas y optimización automática de conversiones.",
      image: "/api/placeholder/600/400",
      stats: ["+150% leads generados", "+85% tasa conversión", "-40% costo adquisición"],
      reverse: true,
    },
    {
      icon: Users,
      title: "Atención al Cliente Automatizada",
      description:
        "Implementación de chatbot inteligente para 'RetailPlus'. Atiende consultas 24/7, procesa devoluciones y deriva casos complejos al equipo humano cuando es necesario.",
      image: "/api/placeholder/600/400",
      stats: ["95% consultas resueltas", "-60% tiempo respuesta", "24/7 disponibilidad"],
      reverse: false,
    },
    {
      icon: Package,
      title: "Automatización de Procesos Empresariales",
      description:
        "Transformación digital completa para 'LogisticPro': automatización de facturación, gestión de inventario y seguimiento de entregas con IA predictiva.",
      image: "/api/placeholder/600/400",
      stats: ["-70% tiempo procesos", "+99% precisión datos", "ROI 300%"],
      reverse: true,
    },
  ];

  return (
    <section id="casos-exito" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Casos de Éxito</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias reales de transformación con nuestras soluciones de IA
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${useCase.reverse ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`space-y-6 ${useCase.reverse ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{useCase.title}</h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{useCase.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {useCase.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-card border border-border rounded-lg p-4 text-center">
                        <div className="text-sm font-semibold text-primary">{stat}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${useCase.reverse ? "lg:col-start-1" : ""}`}>
                  <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border">
                    {useCase.image ? (
                      <div
                        className={`${index === 0 ? "w-[570.5px] h-[320.03px]" : "aspect-video"} rounded-xl overflow-hidden border border-border mx-auto`}
                      >
                        <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div
                        className={`${index === 0 ? "w-[570.5px] h-[320.03px]" : "aspect-video"} bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto`}
                      >
                        <div className="text-center space-y-4">
                          <IconComponent className="w-16 h-16 text-primary mx-auto" />
                          <div className="space-y-2">
                            <div className="h-2 bg-primary/30 rounded w-32 mx-auto"></div>
                            <div className="h-2 bg-accent/30 rounded w-24 mx-auto"></div>
                            <div className="h-2 bg-primary/30 rounded w-28 mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    )}
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
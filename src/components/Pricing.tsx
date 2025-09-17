import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      period: "por siempre",
      description: "Perfecto para restaurantes pequeños que quieren probar la IA",
      icon: Star,
      features: [
        "Hasta 50 pedidos por mes",
        "Gestión básica de reservas",
        "Soporte por email",
        "Dashboard básico",
        "1 usuario"
      ],
      limitations: [
        "Sin análisis predictivo",
        "Sin integraciones avanzadas"
      ],
      popular: false,
      cta: "Empezar gratis"
    },
    {
      name: "Pro",
      price: "99",
      period: "por mes",
      description: "Ideal para restaurantes establecidos que buscan optimizar operaciones",
      icon: Zap,
      features: [
        "Pedidos ilimitados",
        "Gestión completa de inventario",
        "Análisis predictivo básico",
        "Programación automática de turnos",
        "Hasta 5 usuarios",
        "Soporte prioritario",
        "Integraciones con POS"
      ],
      limitations: [],
      popular: true,
      cta: "Probar 14 días gratis"
    },
    {
      name: "Restaurante Plus",
      price: "199",
      period: "por mes",
      description: "Para restaurantes grandes con múltiples áreas y necesidades complejas",
      icon: Crown,
      features: [
        "Todo lo de Pro +",
        "Análisis predictivo avanzado",
        "Gestión multi-ubicación",
        "IA personalizada",
        "Usuarios ilimitados",
        "Soporte 24/7",
        "Consultoría mensual",
        "API personalizada"
      ],
      limitations: [],
      popular: false,
      cta: "Contactar ventas"
    },
    {
      name: "Corporativo",
      price: "Personalizado",
      period: "según necesidades",
      description: "Solución empresarial para cadenas y franquicias",
      icon: Crown,
      features: [
        "Todo lo de Restaurante Plus +",
        "Desarrollo personalizado",
        "Integración empresarial",
        "Gerente de cuenta dedicado",
        "SLA garantizado",
        "Capacitación on-site",
        "Reportes ejecutivos"
      ],
      limitations: [],
      popular: false,
      cta: "Hablar con experto"
    }
  ];

  return (
    <section id="precios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Planes que se adaptan a tu restaurante
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Desde restaurantes pequeños hasta grandes cadenas, tenemos la solución perfecta
          </p>
          
          {/* Guarantee badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Garantía de satisfacción 30 días</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index} 
                className={`relative bg-card border rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 ${
                  plan.popular ? 'border-primary scale-105' : 'border-border'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-3">
                    {plan.price === "Personalizado" ? (
                      <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-sm text-muted-foreground">$</span>
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start space-x-3 opacity-50">
                      <div className="w-4 h-4 border border-muted-foreground rounded-full mt-0.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-accent text-primary-foreground shadow-[var(--shadow-glow)]' 
                      : 'bg-secondary hover:bg-muted text-foreground border border-border'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Todos los planes incluyen migración gratuita y configuración inicial
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Sin contratos a largo plazo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Actualizaciones incluidas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
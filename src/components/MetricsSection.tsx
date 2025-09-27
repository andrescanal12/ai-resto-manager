const MetricsSection = () => {
  const metrics = [
    {
      value: "30%",
      label: "menos costos operativos",
      description: "Reducción promedio en gastos de gestión"
    },
    {
      value: "99%",
      label: "precisión en reservas",
      description: "Gestión automática sin errores humanos"
    },
    {
      value: "3x",
      label: "más productividad en gestión",
      description: "Optimización de procesos administrativos"
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nuestros clientes experimentan mejoras significativas desde el primer día
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="relative mx-auto mb-6">
                {/* Circular progress background */}
                <div className="w-48 h-48 rounded-full border-4 border-border relative overflow-hidden mx-auto">
                  {/* Gradient background */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                        {metric.value}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[var(--shadow-glow)]"></div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
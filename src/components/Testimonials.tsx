import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Propietario de La Mesa Redonda",
      image: "/api/placeholder/80/80",
      content: "Desde que implementamos AI Restaurant Manager, nuestros costos operativos se redujeron 35%. El sistema maneja reservas y pedidos sin errores, y mi equipo puede enfocarse en la calidad del servicio.",
      rating: 5
    },
    {
      name: "María Fernández",
      role: "Chef Ejecutiva de Sabores del Mar",
      image: "/api/placeholder/80/80",
      content: "La gestión de inventario es increíble. La IA predice exactamente qué ingredientes necesitamos y cuándo pedirlos. Hemos eliminado casi todo el desperdicio de comida.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Gerente de Bistro Central",
      image: "/api/placeholder/80/80",
      content: "El análisis predictivo nos ayuda a prepararnos para días ocupados. Sabemos exactamente cuánto personal necesitamos y qué platos serán más populares. Es como tener una bola de cristal.",
      rating: 5
    },
    {
      name: "Ana Torres",
      role: "Directora de Cadena Gourmet Express",
      image: "/api/placeholder/80/80",
      content: "Administrar 15 ubicaciones era un caos antes de la IA. Ahora tengo visibilidad completa y control centralizado. La eficiencia mejoró en todas las sucursales simultáneamente.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Historias reales de transformación en la industria gastronómica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary mb-6" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para unirte a más de 500 restaurantes exitosos?
          </p>
          <button className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-[var(--shadow-glow)] transition-all duration-300">
            Empezar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
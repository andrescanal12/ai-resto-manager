import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo se integra con mi sistema actual de POS?",
      answer: "Nuestro sistema se conecta fácilmente con los principales sistemas POS del mercado como Toast, Square, Revel, y muchos otros. La integración se realiza mediante APIs seguras y toma menos de 30 minutos. No necesitas cambiar tu hardware existente."
    },
    {
      question: "¿Qué pasa si mi restaurante tiene menús muy específicos o complejos?",
      answer: "La IA se adapta a cualquier tipo de menú, desde restaurantes de comida rápida hasta alta cocina. Puede manejar modificaciones especiales, alergenos, combinaciones personalizadas y menús estacionales. Mientras más complejo sea tu menú, más valor agregado obtienes."
    },
    {
      question: "¿Necesito capacitar a mi personal para usar el sistema?",
      answer: "Prácticamente no. El sistema funciona en segundo plano y se integra con los procesos que tu equipo ya conoce. Ofrecemos una capacitación básica de 2 horas para que tu personal aproveche al máximo las funcionalidades avanzadas."
    },
    {
      question: "¿Qué sucede si hay problemas técnicos durante el servicio?",
      answer: "Tenemos redundancias múltiples y respaldo 24/7. Si hay algún problema, el sistema automáticamente cambia a modo manual sin interrumpir el servicio. Nuestro soporte técnico está disponible las 24 horas para resolver cualquier incidencia en minutos."
    },
    {
      question: "¿La IA puede manejar eventos especiales o días festivos?",
      answer: "Absolutamente. La IA aprende de patrones históricos y puede ser configurada manualmente para eventos especiales. Puede ajustar automáticamente la programación de personal, inventario y menús especiales para días festivos, eventos locales o promociones."
    },
    {
      question: "¿Cómo protegen los datos de mi restaurante y clientes?",
      answer: "Utilizamos encriptación de nivel bancario (AES-256) y cumplimos con todas las regulaciones de privacidad. Los datos se almacenan en servidores certificados SOC 2 y nunca se comparten con terceros. Tu información está completamente segura."
    },
    {
      question: "¿Puedo cancelar el servicio en cualquier momento?",
      answer: "Sí, no hay contratos a largo plazo. Puedes cancelar en cualquier momento con 30 días de anticipación. También ofrecemos garantía de satisfacción de 30 días - si no estás completamente satisfecho, te devolvemos tu dinero."
    },
    {
      question: "¿Funciona para restaurantes pequeños o solo para cadenas grandes?",
      answer: "Funciona perfectamente para cualquier tamaño. Tenemos clientes desde cafeterías familiares hasta cadenas de 100+ ubicaciones. El plan Gratis es ideal para restaurantes pequeños que quieren probar la tecnología sin costo."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre AI Restaurant Manager
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-xl shadow-sm hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/30 rounded-xl transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-border pt-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              ¿No encuentras la respuesta que buscas?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Hablar con un experto
              </button>
              <button className="border border-border hover:bg-secondary text-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                Ver documentación
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
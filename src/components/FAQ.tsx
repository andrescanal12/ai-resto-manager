import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Qué tipo de negocios pueden usar las soluciones de The Manager IA?",
      answer: "Nuestras soluciones de IA están diseñadas para una amplia gama de negocios: restaurantes, retail, servicios profesionales, e-commerce, y más. Cada solución se personaliza según las necesidades específicas de tu industria."
    },
    {
      question: "¿Cómo funciona el Agente IA Gerente de Restaurante?",
      answer: "Es un agente inteligente que opera 24/7 gestionando reservas, optimizando inventario, coordinando pedidos y analizando patrones de demanda. Se integra con tu sistema POS existente y aprende los patrones únicos de tu restaurante para maximizar la eficiencia."
    },
    {
      question: "¿Necesito conocimientos técnicos para implementar las soluciones?",
      answer: "No. Nuestro equipo se encarga de toda la implementación técnica. Tu único trabajo es proporcionar acceso a tus sistemas existentes. Ofrecemos capacitación completa para que tu equipo aproveche al máximo la IA."
    },
    {
      question: "¿Qué garantías ofrecen sobre el rendimiento de la IA?",
      answer: "Garantizamos mejoras medibles en eficiencia operativa del 25% mínimo en los primeros 90 días, o devolvemos tu inversión. Además, ofrecemos SLA de 99.9% de disponibilidad y soporte técnico 24/7."
    },
    {
      question: "¿Cómo se personalizan las soluciones para mi negocio específico?",
      answer: "Iniciamos con una consultoría detallada para entender tus procesos únicos. Luego configuramos y entrenamos la IA específicamente para tu negocio. El proceso incluye pruebas piloto y ajustes hasta lograr la optimización perfecta."
    },
    {
      question: "¿Qué medidas de seguridad protegen mis datos empresariales?",
      answer: "Utilizamos encriptación AES-256, cumplimos con GDPR y SOC 2, y nunca compartimos datos con terceros. Todos los datos se procesan en servidores certificados y con backup automático. Tu información está completamente protegida."
    },
    {
      question: "¿Puedo escalar o cambiar de plan según crezca mi negocio?",
      answer: "Absolutamente. Nuestros planes están diseñados para crecer contigo. Puedes actualizar o reducir tu plan en cualquier momento. También ofrecemos soluciones empresariales personalizadas para negocios con necesidades específicas."
    },
    {
      question: "¿Ofrecen soporte en español y en qué horarios?",
      answer: "Sí, ofrecemos soporte completo en español las 24 horas, los 7 días de la semana. Nuestro equipo incluye especialistas locales que entienden el mercado latinoamericano y pueden brindar soporte culturalmente relevante."
    }
  ];

  return (
    <section id="faqs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respuestas a las dudas más comunes sobre The Manager IA
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
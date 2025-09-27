import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">AI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AI Restaurant</h1>
                <p className="text-sm text-muted-foreground -mt-1">Manager</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformamos restaurantes con inteligencia artificial que optimiza cada aspecto de tu negocio gastronómico.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Navegación</h3>
            <ul className="space-y-4">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Cómo Funciona", href: "#como-funciona" },
                { name: "Beneficios", href: "#beneficios" },
                { name: "Casos de Uso", href: "#casos-uso" },
                { name: "Testimonios", href: "#testimonios" },
                { name: "Precios", href: "#precios" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Recursos</h3>
            <ul className="space-y-4">
              {[
                "Centro de ayuda",
                "Documentación API",
                "Casos de estudio",
                "Blog",
                "Webinars",
                "Comunidad"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:hola@airestaurantmanager.com" className="text-foreground hover:text-primary">
                    hola@airestaurantmanager.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Teléfono</div>
                  <a href="tel:+1234567890" className="text-foreground hover:text-primary">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-card rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Oficina</div>
                  <div className="text-foreground">
                    Miami, FL, Estados Unidos
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <div className="mt-6">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.306"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-12 mt-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Mantente actualizado
            </h3>
            <p className="text-muted-foreground mb-6">
              Recibe las últimas novedades sobre IA para restaurantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} AI Restaurant Manager. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Términos de servicio
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
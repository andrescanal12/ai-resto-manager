import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Casos de Éxito", href: "#casos-exito" },
    { name: "Planes", href: "#planes" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">The Manager</h1>
              <p className="text-sm text-muted-foreground -mt-1">IA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Inicio */}
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Inicio
            </Link>
            {/* Automatización IA */}
            <Link
              to="/automatizacion-ia"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Automatización IA
            </Link>
            {/* Rest of items excluding Inicio */}
            {navItems
              .filter((item) => item.name !== "Inicio")
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-primary hover:bg-secondary hover:text-foreground text-primary-foreground font-semibold border-2 border-primary hover:border-primary">
              Agenda una Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {/* Inicio */}
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              {/* Automatización IA */}
              <Link
                to="/automatizacion-ia"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Automatización IA
              </Link>
              {/* Rest of items excluding Inicio */}
              {navItems
                .filter((item) => item.name !== "Inicio")
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              <Button className="bg-primary hover:bg-accent text-primary-foreground font-semibold w-full mt-4">
                Probar Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
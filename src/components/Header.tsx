import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Cómo Funciona", href: "#como-funciona" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Casos de Uso", href: "#casos-uso" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AI Restaurant</h1>
              <p className="text-sm text-muted-foreground -mt-1">Manager</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
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
            <Button className="bg-primary hover:bg-accent text-primary-foreground font-semibold">
              Probar Gratis
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
              {navItems.map((item) => (
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
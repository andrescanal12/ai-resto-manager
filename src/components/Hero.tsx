import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Tu Gerente de Restaurante{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  en Inteligencia
                </span>{" "}
                Artificial
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Automatiza reservas, pedidos, inventario y atención al cliente con IA. 
                Soluciones inteligentes para negocios modernos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-secondary hover:text-foreground text-primary-foreground font-semibold text-lg px-8 py-6 shadow-[var(--shadow-glow)] border-2 border-primary hover:border-primary"
              >
                Agenda una Demo
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted text-foreground font-semibold text-lg px-8 py-6"
              >
                <Play className="mr-2" size={20} />
                Ver en Acción
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Negocios</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Automatización</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Soporte</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-card to-secondary rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <span className="text-2xl font-bold text-primary-foreground">M</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-primary/30 rounded w-32 mx-auto"></div>
                    <div className="h-3 bg-accent/30 rounded w-24 mx-auto"></div>
                    <div className="h-3 bg-primary/30 rounded w-20 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg p-3 shadow-lg border border-border">
              <div className="text-xs text-muted-foreground">Pedidos procesados</div>
              <div className="text-lg font-bold text-primary">1,247</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-3 shadow-lg border border-border">
              <div className="text-xs text-muted-foreground">Eficiencia</div>
              <div className="text-lg font-bold text-accent">+30%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
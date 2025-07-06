
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center medical-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hospital
                <span className="block text-white/90">Independencia</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                Atención médica de calidad con tecnología de vanguardia y un equipo humano comprometido con tu bienestar
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-white/80 text-sm">Años de experiencia</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-white/80 text-sm">Especialidades</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-white/80 text-sm">Pacientes atendidos</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-primary">
                Agendar Cita
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Conocer Más
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12" />
                  </div>
                  <p className="text-lg">Imagen Hero</p>
                  <p className="text-sm">Espacio para imagen principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

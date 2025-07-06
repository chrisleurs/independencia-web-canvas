
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesDestacadas from '@/components/sections/EspecialidadesDestacadas';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>
      <HeroSection />
      
      {/* Preview de Especialidades */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contamos con más de 30 especialidades médicas para cuidar tu salud integral
            </p>
          </div>
          
          <EspecialidadesDestacadas />
          
          <div className="text-center mt-12">
            <Link to="/especialidades">
              <Button size="lg" className="group">
                Ver Todas las Especialidades
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview de Servicios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Servicios Médicos Integrales
              </h2>
              <p className="text-lg text-muted-foreground">
                Desde consulta externa hasta cirugías complejas, ofrecemos servicios médicos completos con tecnología de vanguardia.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-hospital-primary rounded-full"></div>
                  <span className="text-sm font-medium">Urgencias 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-hospital-primary rounded-full"></div>
                  <span className="text-sm font-medium">Hospitalización</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-hospital-primary rounded-full"></div>
                  <span className="text-sm font-medium">Cirugía</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-hospital-primary rounded-full"></div>
                  <span className="text-sm font-medium">Laboratorio</span>
                </div>
              </div>
              
              <Link to="/servicios">
                <Button size="lg" variant="outline" className="group">
                  Conocer Todos los Servicios
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-hospital-primary/10 to-hospital-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-hospital-primary/20 rounded-lg"></div>
                  </div>
                  <p className="text-lg font-medium">Servicios Médicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Rápido */}
      <section className="section-padding bg-hospital-primary text-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas Atención Médica?</h2>
            <p className="text-xl mb-8 opacity-90">Contáctanos ahora para agendar tu cita</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>(238) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Urgencias 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Tehuacán, Puebla</span>
              </div>
            </div>
            
            <Link to="/contacto">
              <Button size="lg" variant="secondary" className="group">
                Información Completa de Contacto
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;


import React from 'react';
import { MapPin, Clock, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Mapa = () => {
  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/hTAwPFdqpNrfHyoQA', '_blank');
  };

  return (
    <section id="ubicacion" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos encontramos en una ubicación estratégica y de fácil acceso para brindarte la mejor atención médica
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Mapa Interactivo</p>
                <p className="text-sm">Hospital Independencia</p>
              </div>
            </div>
            
            {/* Map Controls Overlay */}
            <div className="absolute top-4 right-4 space-y-2">
              <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                +
              </Button>
              <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                -
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-muted-foreground text-sm">
                      Boulevard Revolución Mexicana 1604<br />
                      Col. San Lorenzo Teotipilco<br />
                      Tehuacán, Puebla, México
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">Tel</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfonos</h4>
                    <p className="text-muted-foreground text-sm">
                      Hospital: 238 382 4819<br />
                      Urgencias: 238 382 4819
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horarios</h4>
                    <p className="text-muted-foreground text-sm">
                      Consulta Externa: 7:00 - 21:00<br />
                      Urgencias: 24 horas, 365 días
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Estacionamiento</h4>
                    <p className="text-muted-foreground text-sm">
                      Estacionamiento gratuito<br />
                      Acceso para personas con discapacidad
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4">
              <Button 
                className="w-full"
                onClick={handleMapClick}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver en Mapa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;

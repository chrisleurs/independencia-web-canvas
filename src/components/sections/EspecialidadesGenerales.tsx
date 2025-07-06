
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EspecialidadesGenerales = () => {
  const especialidades = [
    'Medicina Interna',
    'Cirugía General',
    'Ginecología',
    'Traumatología',
    'Dermatología',
    'Psiquiatría',
    'Urología',
    'Oncología',
    'Endocrinología',
    'Gastroenterología',
    'Neumología',
    'Reumatología',
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todas Nuestras Especialidades
              </h2>
              <p className="text-lg text-muted-foreground">
                Ofrecemos un amplio rango de especialidades médicas para cubrir todas tus necesidades de salud con la más alta calidad profesional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {especialidades.map((especialidad, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{especialidad}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="group">
                Ver Todas las Especialidades
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg"></div>
                </div>
                <p className="text-lg font-medium">Imagen Especialidades</p>
                <p className="text-sm">Espacio para imagen de especialidades</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesGenerales;

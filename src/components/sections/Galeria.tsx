
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Galeria = () => {
  const imagenes = [
    {
      titulo: 'Recepción Principal',
      descripcion: 'Área de recepción y bienvenida',
    },
    {
      titulo: 'Habitaciones',
      descripcion: 'Habitaciones privadas equipadas',
    },
    {
      titulo: 'Quirófanos',
      descripcion: 'Quirófanos con tecnología avanzada',
    },
    {
      titulo: 'Sala de Espera',
      descripcion: 'Espacios cómodos para familiares',
    },
    {
      titulo: 'Laboratorio',
      descripcion: 'Equipos de análisis clínicos',
    },
    {
      titulo: 'Área de Urgencias',
      descripcion: 'Atención de emergencias 24/7',
    },
  ];

  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestras modernas instalaciones diseñadas para brindar comodidad y la mejor atención médica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((imagen, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-center text-muted-foreground">
                  <div className="w-16 h-16 mx-auto mb-3 bg-slate-200 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-slate-300 rounded"></div>
                  </div>
                  <p className="font-medium">{imagen.titulo}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <h3 className="font-semibold text-lg mb-2">{imagen.titulo}</h3>
                  <p className="text-sm mb-4">{imagen.descripcion}</p>
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver más
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Galería Completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Galeria;

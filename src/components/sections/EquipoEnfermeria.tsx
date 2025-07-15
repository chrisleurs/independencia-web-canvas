
import React from 'react';
import { Card } from '@/components/ui/card';

const EquipoEnfermeria = () => {
  const equipoEnfermeria = [
    {
      nombre: 'Enfermera María González',
      puesto: 'Jefa de Enfermería',
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Carmen López',
      puesto: 'Enfermera de Urgencias',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermero Carlos Ruiz',
      puesto: 'Enfermero de Quirófano',
      foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Ana Martín',
      puesto: 'Enfermera de Pediatría',
      foto: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermero Luis Herrera',
      puesto: 'Enfermero de UCI',
      foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Elena Torres',
      puesto: 'Enfermera de Cardiología',
      foto: 'https://images.unsplash.com/photo-1594824804732-ca8fe90d6c5f?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Rosa Jiménez',
      puesto: 'Enfermera de Maternidad',
      foto: 'https://images.unsplash.com/photo-1584467735871-8e4904344f8f?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermero Pedro Vega',
      puesto: 'Enfermero de Rehabilitación',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hospital-title mb-4">
            Equipo de Enfermería
          </h2>
          <p className="text-lg text-hospital-gray max-w-2xl mx-auto">
            Nuestro equipo de enfermería altamente capacitado brinda atención personalizada y profesional las 24 horas del día
          </p>
        </div>

        {/* Grid del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {equipoEnfermeria.map((enfermero, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl bg-white">
              <div className="relative">
                {/* Foto */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={enfermero.foto}
                    alt={enfermero.nombre}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                {/* Información */}
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-hospital-title mb-2">
                    {enfermero.nombre}
                  </h3>
                  <p className="text-hospital-secondary font-medium text-sm">
                    {enfermero.puesto}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Elemento decorativo */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hospital-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default EquipoEnfermeria;

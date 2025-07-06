
import React from 'react';
import { Heart, Brain, Eye, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const EspecialidadesDestacadas = () => {
  const especialidades = [
    {
      icon: Heart,
      titulo: 'Cardiología',
      descripcion: 'Especialidad destacada en el cuidado del corazón',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Brain,
      titulo: 'Neurología',
      descripcion: 'Atención especializada del sistema nervioso',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Eye,
      titulo: 'Oftalmología',
      descripcion: 'Cuidado integral de la salud ocular',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Baby,
      titulo: 'Pediatría',
      descripcion: 'Atención especializada para los más pequeños',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section id="especialidades-destacadas" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Especialidades Destacadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con las mejores especialidades médicas y profesionales altamente calificados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {especialidades.map((especialidad, index) => {
            const Icon = especialidad.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${especialidad.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${especialidad.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{especialidad.titulo}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {especialidad.descripcion}
                  </p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Ver más
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesDestacadas;

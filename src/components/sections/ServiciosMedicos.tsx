
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Stethoscope, Ambulance, FlaskConical, Scan } from 'lucide-react';

const ServiciosMedicos = () => {
  const servicios = [
    {
      icon: Stethoscope,
      titulo: 'Consulta Externa',
      descripcion: 'Atención ambulatoria con especialistas',
      items: ['Citas programadas', 'Consultas de urgencia', 'Seguimiento médico'],
    },
    {
      icon: Ambulance,
      titulo: 'Urgencias 24/7',
      descripcion: 'Atención de emergencias las 24 horas',
      items: ['Sala de emergencias', 'Unidad de trauma', 'Cuidados intensivos'],
    },
    {
      icon: FlaskConical,
      titulo: 'Laboratorio',
      descripcion: 'Análisis clínicos y diagnósticos',
      items: ['Análisis de sangre', 'Microbiología', 'Patología'],
    },
    {
      icon: Scan,
      titulo: 'Imagenología',
      descripción: 'Estudios de imagen de alta precisión',
      items: ['Rayos X', 'Tomografía', 'Resonancia magnética'],
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios Médicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos con tecnología de vanguardia y atención personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{servicio.titulo}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {servicio.descripcion}
                  </p>
                  
                  <ul className="space-y-1">
                    {servicio.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg"></div>
            </div>
            <h3 className="font-semibold mb-2">Hospitalización</h3>
            <p className="text-sm text-muted-foreground">Habitaciones privadas y compartidas con todos los servicios</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg"></div>
            </div>
            <h3 className="font-semibold mb-2">Cirugía</h3>
            <p className="text-sm text-muted-foreground">Quirófanos equipados con tecnología de última generación</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg"></div>
            </div>
            <h3 className="font-semibold mb-2">Rehabilitación</h3>
            <p className="text-sm text-muted-foreground">Programas de fisioterapia y rehabilitación integral</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosMedicos;

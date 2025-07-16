
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Clock, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const EquipoEnfermeria = () => {
  const equipoEnfermeria = [
    {
      nombre: 'Enfermera María González',
      puesto: 'Jefa de Enfermería',
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Administración y Gestión de Enfermería',
      experiencia: '15 años de experiencia'
    },
    {
      nombre: 'Enfermera Carmen López',
      puesto: 'Enfermera de Urgencias',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Medicina de Emergencias',
      experiencia: '12 años de experiencia'
    },
    {
      nombre: 'Enfermero Carlos Ruiz',
      puesto: 'Enfermero de Quirófano',
      foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Enfermería Quirúrgica',
      experiencia: '10 años de experiencia'
    },
    {
      nombre: 'Enfermera Ana Martín',
      puesto: 'Enfermera de Pediatría',
      foto: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Enfermería Pediátrica',
      experiencia: '8 años de experiencia'
    },
    {
      nombre: 'Enfermero Luis Herrera',
      puesto: 'Enfermero de UCI',
      foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Cuidados Intensivos',
      experiencia: '14 años de experiencia'
    },
    {
      nombre: 'Enfermera Elena Torres',
      puesto: 'Enfermera de Cardiología',
      foto: 'https://images.unsplash.com/photo-1594824804732-ca8fe90d6c5f?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Enfermería Cardiovascular',
      experiencia: '11 años de experiencia'
    },
    {
      nombre: 'Enfermera Rosa Jiménez',
      puesto: 'Enfermera de Maternidad',
      foto: 'https://images.unsplash.com/photo-1584467735871-8e4904344f8f?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Enfermería Obstétrica',
      experiencia: '9 años de experiencia'
    },
    {
      nombre: 'Enfermero Pedro Vega',
      puesto: 'Enfermero de Rehabilitación',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      especialidad: 'Rehabilitación y Fisioterapia',
      experiencia: '7 años de experiencia'
    }
  ];

  const valores = [
    {
      icon: Heart,
      titulo: 'Atención Humanizada',
      descripcion: 'Cuidado integral centrado en el paciente y su familia',
    },
    {
      icon: Clock,
      titulo: 'Disponibilidad 24/7',
      descripcion: 'Atención de enfermería especializada las 24 horas',
    },
    {
      icon: Shield,
      titulo: 'Protocolos de Seguridad',
      descripcion: 'Estrictos protocolos para garantizar la seguridad del paciente',
    },
    {
      icon: Award,
      titulo: 'Formación Continua',
      descripcion: 'Actualización constante en técnicas y procedimientos',
    },
  ];

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Equipo de Enfermería
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nuestro equipo de enfermería altamente capacitado brinda atención personalizada y profesional las 24 horas del día
            </p>
          </div>
        </section>

        {/* Valores del equipo */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-hospital-primary mb-4">
                Nuestros Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo diario en el cuidado de nuestros pacientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-hospital-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-hospital-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{valor.titulo}</h3>
                    <p className="text-muted-foreground text-sm">{valor.descripcion}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grid del equipo */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-hospital-primary mb-4">
                Conoce a Nuestro Equipo
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profesionales comprometidos con la excelencia en el cuidado de la salud
              </p>
            </div>

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
                      <p className="text-hospital-secondary font-medium text-sm mb-2">
                        {enfermero.puesto}
                      </p>
                      <p className="text-muted-foreground text-xs mb-1">
                        {enfermero.especialidad}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {enfermero.experiencia}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <div className="bg-white p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
                <h2 className="text-2xl font-bold mb-4">¿Necesitas atención especializada?</h2>
                <p className="text-muted-foreground mb-6">
                  Nuestro equipo de enfermería trabaja en conjunto con nuestros médicos especialistas para brindarte la mejor atención integral.
                </p>
                <div className="space-x-4">
                  <Link to="/equipo/doctores">
                    <Button size="lg" className="mr-4">
                      Ver Doctores
                    </Button>
                  </Link>
                  <Link to="/contacto">
                    <Button size="lg" variant="outline">
                      Contactar Hospital
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EquipoEnfermeria;


import React from 'react';
import { Award, Users, Shield, Clock } from 'lucide-react';

const SobreHospital = () => {
  const valores = [
    {
      icon: Award,
      titulo: 'Excelencia Médica',
      descripcion: 'Compromiso con los más altos estándares de calidad',
    },
    {
      icon: Users,
      titulo: 'Equipo Humano',
      descripcion: 'Profesionales comprometidos con tu bienestar',
    },
    {
      icon: Shield,
      titulo: 'Seguridad',
      descripcion: 'Protocolos de seguridad de clase mundial',
    },
    {
      icon: Clock,
      titulo: 'Disponibilidad',
      descripcion: 'Atención las 24 horas, los 365 días del año',
    },
  ];

  return (
    <section id="sobre-nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg"></div>
                </div>
                <p className="text-lg font-medium">Imagen del Hospital</p>
                <p className="text-sm">Espacio para imagen institucional</p>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre Hospital Independencia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Desde hace más de 25 años, Hospital Independencia ha sido un referente en atención médica privada, comprometido con brindar servicios de salud de la más alta calidad.
                </p>
                <p>
                  Nuestro enfoque integral combina tecnología de vanguardia, instalaciones modernas y un equipo médico altamente especializado para ofrecer atención personalizada a cada paciente.
                </p>
                <p>
                  Contamos con certificaciones internacionales que avalan nuestro compromiso con la excelencia y la seguridad del paciente.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-2 gap-6">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{valor.titulo}</h3>
                      <p className="text-sm text-muted-foreground">{valor.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreHospital;

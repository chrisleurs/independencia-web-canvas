
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
                <div className="text-3xl font-bold text-primary mb-1">40+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hospital-primary">
                Un legado de esperanza, tecnología y excelencia médica
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Desde 1983, Hospital Independencia ha sido más que una institución médica: ha sido un faro de esperanza para miles de familias en Tehuacán y la región. Fundado por el Dr. Cleo de la Peña Tello con la visión de brindar cuidados intensivos con dignidad y humanidad, nuestro hospital nació como una clínica especializada y ha evolucionado hasta convertirse en un centro de alta especialidad reconocido por su calidad y compromiso con la vida.
                </p>
                
                <p className="leading-relaxed">
                  A lo largo de las décadas, hemos crecido junto con los avances de la medicina. En 2010 dimos paso a nuestra Clínica de Alta Especialidad (CAE), fortalecida con quirófanos de vanguardia, tecnología de última generación y personal altamente capacitado. Más tarde, incorporamos áreas estratégicas como Rayos X, tomografía integral y ventilación mecánica, ampliando nuestras capacidades para atender a pacientes críticos con eficiencia y cuidado.
                </p>
                
                <p className="leading-relaxed">
                  En 2018, nuestro trabajo fue reconocido oficialmente cuando la Unidad de Cuidados Intensivos fue nombrada "Clínica Modelo" por COFEPRIS, gracias a nuestro enfoque especializado en embarazos de alto riesgo. Y durante la pandemia, nos transformamos en la única clínica privada de Tehuacán dedicada a atender pacientes con COVID-19, reafirmando nuestro compromiso con la salud pública en los momentos más desafiantes.
                </p>
                
                <p className="leading-relaxed">
                  Hoy, con una mirada puesta en el futuro, seguimos siendo un hospital de puertas abiertas, tecnología avanzada y atención humana. Nuestro compromiso es claro: cuidar de ti y de los tuyos con profesionalismo, compasión y excelencia.
                </p>
              </div>
              
              {/* Frase destacada */}
              <div className="mt-8 p-6 bg-hospital-primary/5 border-l-4 border-hospital-primary rounded-r-lg">
                <p className="text-xl font-semibold text-hospital-primary italic">
                  "Hospital Independencia: más de 40 años escribiendo historias de amor por la salud."
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


import React from 'react';
import Layout from '@/components/Layout';
import Galeria from '@/components/sections/Galeria';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Shield, Clock } from 'lucide-react';

const Nosotros = () => {
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
    <Layout>
      <div className="pt-20">
        {/* Header Section */}
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Más de 40 años de experiencia brindando atención médica de calidad con el compromiso humano que tu familia merece
            </p>
          </div>
        </section>
        
        {/* Main Content Section - Clean Layout */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            {/* Main Title */}
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hospital-primary mb-8">
                Un legado de esperanza, tecnología y excelencia médica
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8 mb-16">
              <p className="text-xl leading-relaxed">
                Desde 1983, Hospital Independencia ha sido más que una institución médica: ha sido un faro de esperanza para miles de familias en Tehuacán y la región. Fundado por el Dr. Cleo de la Peña Tello con la visión de brindar cuidados intensivos con dignidad y humanidad, nuestro hospital nació como una clínica especializada y ha evolucionado hasta convertirse en un centro de alta especialidad reconocido por su calidad y compromiso con la vida.
              </p>
              
              <p className="text-lg leading-relaxed">
                A lo largo de las décadas, hemos crecido junto con los avances de la medicina. En 2010 dimos paso a nuestra Clínica de Alta Especialidad (CAE), fortalecida con quirófanos de vanguardia, tecnología de última generación y personal altamente capacitado. Más tarde, incorporamos áreas estratégicas como Rayos X, tomografía integral y ventilación mecánica, ampliando nuestras capacidades para atender a pacientes críticos con eficiencia y cuidado.
              </p>
              
              <p className="text-lg leading-relaxed">
                En 2018, nuestro trabajo fue reconocido oficialmente cuando la Unidad de Cuidados Intensivos fue nombrada "Clínica Modelo" por COFEPRIS, gracias a nuestro enfoque especializado en embarazos de alto riesgo. Y durante la pandemia, nos transformamos en la única clínica privada de Tehuacán dedicada a atender pacientes con COVID-19, reafirmando nuestro compromiso con la salud pública en los momentos más desafiantes.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoy, con una mirada puesta en el futuro, seguimos siendo un hospital de puertas abiertas, tecnología avanzada y atención humana. Nuestro compromiso es claro: cuidar de ti y de los tuyos con profesionalismo, compasión y excelencia.
              </p>
            </div>
          </div>
        </section>

        {/* Galería integrada después del texto */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-hospital-primary mb-4">
                Nuestras Instalaciones
              </h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Conoce las modernas instalaciones que respaldan nuestro compromiso con la excelencia médica
              </p>
            </div>
            
            {/* Gallery Component Content Integrated */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                {
                  titulo: 'Recepción Principal',
                  descripcion: 'Área de recepción y bienvenida',
                  imagen: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center'
                },
                {
                  titulo: 'Habitaciones Privadas',
                  descripcion: 'Habitaciones equipadas con tecnología moderna',
                  imagen: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop&crop=center'
                },
                {
                  titulo: 'Quirófanos',
                  descripcion: 'Salas de cirugía con equipamiento avanzado',
                  imagen: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&crop=center'
                },
                {
                  titulo: 'Equipo Médico',
                  descripcion: 'Profesionales de la salud en acción',
                  imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&crop=center'
                },
                {
                  titulo: 'Laboratorio Clínico',
                  descripcion: 'Equipos de análisis y diagnóstico',
                  imagen: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center'
                },
                {
                  titulo: 'Sala de Espera',
                  descripcion: 'Espacios cómodos para pacientes y familiares',
                  imagen: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=400&fit=crop&crop=center'
                }
              ].map((imagen, index) => (
                <div key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                  <div className="relative group">
                    <img
                      src={imagen.imagen}
                      alt={imagen.titulo}
                      className="w-full h-56 xl:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="font-semibold text-lg mb-2 text-white">{imagen.titulo}</h4>
                        <p className="text-sm text-white/90">{imagen.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlighted Quote - Después de la galería */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-hospital-primary/5 to-hospital-secondary/5 border-l-4 border-hospital-primary rounded-r-2xl">
                <blockquote className="text-2xl md:text-3xl font-bold text-hospital-primary italic leading-tight">
                  "Hospital Independencia: más de 40 años escribiendo historias de amor por la salud."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-hospital-primary mb-4">
                Nuestros Valores
              </h3>
              <p className="text-lg text-gray-600">
                Los principios que guían nuestro trabajo diario
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-hospital-primary/10 rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-hospital-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-hospital-primary mb-2">{valor.titulo}</h4>
                      <p className="text-gray-600 leading-relaxed">{valor.descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Nursing Team Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hospital-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary">
                    Equipo de Enfermería
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Nuestro equipo de enfermería es el corazón del cuidado hospitalario, brindando atención personalizada y profesional las 24 horas del día.
                  </p>
                  
                  <p className="leading-relaxed">
                    Contamos con enfermeras y enfermeros altamente capacitados en diferentes especialidades: urgencias, quirófano, UCI, pediatría, cardiología, maternidad y rehabilitación.
                  </p>
                  
                  <p className="leading-relaxed">
                    Su compromiso con la excelencia y el trato humanizado hace la diferencia en la experiencia de cada paciente y su familia.
                  </p>
                </div>

                <Link to="/equipo/enfermeria">
                  <Button size="lg" className="mt-8">
                    <Users className="w-5 h-5 mr-2" />
                    Conocer Equipo de Enfermería
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-hospital-primary/5 to-hospital-secondary/10 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=450&fit=crop&crop=center"
                    alt="Equipo de Enfermería del Hospital Independencia"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-hospital-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Atención de enfermería</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Nosotros;

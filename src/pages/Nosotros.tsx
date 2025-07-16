
import React from 'react';
import Layout from '@/components/Layout';
import SobreHospital from '@/components/sections/SobreHospital';
import Galeria from '@/components/sections/Galeria';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';

const Nosotros = () => {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Más de 25 años de experiencia brindando atención médica de calidad con el compromiso humano que tu familia merece
            </p>
          </div>
        </section>
        
        <SobreHospital />
        
        {/* Nueva sección de Equipo de Enfermería */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contenido */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-hospital-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary">
                    Equipo de Enfermería
                  </h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Nuestro equipo de enfermería es el corazón del cuidado hospitalario, brindando atención personalizada y profesional las 24 horas del día.
                  </p>
                  
                  <p>
                    Contamos con enfermeras y enfermeros altamente capacitados en diferentes especialidades: urgencias, quirófano, UCI, pediatría, cardiología, maternidad y rehabilitación.
                  </p>
                  
                  <p>
                    Su compromiso con la excelencia y el trato humanizado hace la diferencia en la experiencia de cada paciente y su familia.
                  </p>
                </div>

                <Link to="/equipo/enfermeria">
                  <Button size="lg" className="mt-6">
                    <Users className="w-5 h-5 mr-2" />
                    Conocer Equipo de Enfermería
                  </Button>
                </Link>
              </div>

              {/* Imagen */}
              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-hospital-primary/5 to-hospital-secondary/10 rounded-2xl overflow-hidden">
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
        
        <Galeria />
      </div>
    </Layout>
  );
};

export default Nosotros;

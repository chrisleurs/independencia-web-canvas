
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SobreHospitalResumen = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen institucional */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=450&fit=crop&crop=center"
                alt="Fachada del Hospital Independencia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary">
              Sobre el Hospital
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Desde 1983, el Dr. Cleo de la Peña Tello fundó en Tehuacán la primera Clínica de Unidad de Cuidados Intensivos, con la visión de ofrecer atención médica especializada y de calidad.
              </p>
              
              <p>
                A lo largo de los años, esta clínica evolucionó hasta convertirse en el Hospital Independencia: un centro de alta especialidad, reconocido por Cofepris y por su compromiso durante la pandemia de COVID‑19.
              </p>
              
              <p>
                Hoy, seguimos siendo un referente de excelencia, compromiso y humanismo, con visión de futuro.
              </p>
            </div>

            <Link to="/nosotros">
              <Button size="lg" className="mt-6">
                Conoce nuestra historia completa
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreHospitalResumen;

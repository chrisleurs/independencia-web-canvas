
import React from 'react';
import Layout from '@/components/Layout';
import SobreHospital from '@/components/sections/SobreHospital';
import Galeria from '@/components/sections/Galeria';

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
        <Galeria />
      </div>
    </Layout>
  );
};

export default Nosotros;

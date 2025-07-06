
import React from 'react';
import Layout from '@/components/Layout';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';

const Servicios = () => {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios Médicos
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ofrecemos servicios médicos integrales con tecnología de vanguardia y atención personalizada las 24 horas del día
            </p>
          </div>
        </section>
        
        <ServiciosMedicos />
      </div>
    </Layout>
  );
};

export default Servicios;

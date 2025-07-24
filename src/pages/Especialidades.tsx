
import React from 'react';
import Layout from '@/components/Layout';
import EspecialidadesCompletasSupabase from '@/components/sections/EspecialidadesCompletasSupabase';
import EspecialidadesAuditoria from '@/components/sections/EspecialidadesAuditoria';

const Especialidades = () => {
  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Especialidades Médicas
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Contamos con más de 19 especialidades médicas y un equipo de profesionales altamente calificados para brindar la mejor atención a tu salud
            </p>
          </div>
        </section>
        
        {/* Componente de Auditoría - Temporal */}
        <EspecialidadesAuditoria />
        
        <EspecialidadesCompletasSupabase />
      </div>
    </Layout>
  );
};

export default Especialidades;

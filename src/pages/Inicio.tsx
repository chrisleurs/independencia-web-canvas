
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesMedicasSupabase from '@/components/sections/EspecialidadesMedicasSupabase';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import Galeria from '@/components/sections/Galeria';
import ContactoHomepage from '@/components/sections/ContactoHomepage';
import EspecialidadesAuditoria from '@/components/sections/EspecialidadesAuditoria';

const Inicio = () => {
  return (
    <Layout>
      {/* Auditoría temporal - remover después */}
      <div className="pt-20">
        <EspecialidadesAuditoria />
      </div>
      
      {/* Contenido original comentado para la auditoría */}
      {/* 
      <HeroSection />
      <EspecialidadesMedicasSupabase />
      <ServiciosMedicos />
      <SobreHospitalResumen />
      <Galeria />
      <ContactoHomepage />
      */}
    </Layout>
  );
};

export default Inicio;

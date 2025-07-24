
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import EspecialidadesMedicasSupabase from '@/components/sections/EspecialidadesMedicasSupabase';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import ContactoHomepage from '@/components/sections/ContactoHomepage';
import SistemaLimpiezaVerificacion from '@/components/sections/SistemaLimpiezaVerificacion';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiciosMedicos />
      <EspecialidadesMedicasSupabase />
      <SobreHospitalResumen />
      <ContactoHomepage />
      <SistemaLimpiezaVerificacion />
    </Layout>
  );
};

export default Index;

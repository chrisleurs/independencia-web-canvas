
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesMedicasSupabase from '@/components/sections/EspecialidadesMedicasSupabase';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import EstudiosMedicos from '@/components/sections/EstudiosMedicos';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import ContactoHomepage from '@/components/sections/ContactoHomepage';
import SistemaLimpiezaVerificacion from '@/components/sections/SistemaLimpiezaVerificacion';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <EspecialidadesMedicasSupabase />
      <ServiciosMedicos />
      <EstudiosMedicos />
      <SobreHospitalResumen />
      <ContactoHomepage />
      <SistemaLimpiezaVerificacion />
    </Layout>
  );
};

export default Index;

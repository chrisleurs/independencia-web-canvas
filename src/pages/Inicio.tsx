
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import EspecialidadesMedicas from '@/components/sections/EspecialidadesMedicas';

const Inicio = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiciosMedicos />
      <EspecialidadesMedicas />
    </Layout>
  );
};

export default Inicio;

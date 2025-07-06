
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';

const Inicio = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiciosMedicos />
    </Layout>
  );
};

export default Inicio;

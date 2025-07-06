
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import EspecialidadesMedicas from '@/components/sections/EspecialidadesMedicas';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import Galeria from '@/components/sections/Galeria';

const Inicio = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiciosMedicos />
      <EspecialidadesMedicas />
      <SobreHospitalResumen />
      <Galeria />
    </Layout>
  );
};

export default Inicio;

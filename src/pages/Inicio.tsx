
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesMedicas from '@/components/sections/EspecialidadesMedicas';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import Galeria from '@/components/sections/Galeria';
import ContactoHomepage from '@/components/sections/ContactoHomepage';

const Inicio = () => {
  return (
    <Layout>
      <HeroSection />
      <EspecialidadesMedicas />
      <ServiciosMedicos />
      <SobreHospitalResumen />
      <Galeria />
      <ContactoHomepage />
    </Layout>
  );
};

export default Inicio;


import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesMedicasNew from '@/components/sections/EspecialidadesMedicasNew';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import ContactoHomepage from '@/components/sections/ContactoHomepage';

const Inicio = () => {
  return (
    <Layout>
      <HeroSection />
      <EspecialidadesMedicasNew />
      <SobreHospitalResumen />
      <ServiciosMedicos />
      <ContactoHomepage />
    </Layout>
  );
};

export default Inicio;

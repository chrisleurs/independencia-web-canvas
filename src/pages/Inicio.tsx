
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import EspecialidadesMedicasSupabase from '@/components/sections/EspecialidadesMedicasSupabase';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import FotografiasIntermedia from '@/components/sections/FotografiasIntermedia';
import ContactoHomepage from '@/components/sections/ContactoHomepage';
import Galeria from '@/components/sections/Galeria';
import DataVerificationTest from '@/components/sections/DataVerificationTest';

const Inicio = () => {
  return (
    <Layout>
      <HeroSection />
      <SobreHospitalResumen />
      <EspecialidadesMedicasSupabase />
      <ServiciosMedicos />
      <FotografiasIntermedia />
      <DataVerificationTest />
      <Galeria />
      <ContactoHomepage />
    </Layout>
  );
};

export default Inicio;

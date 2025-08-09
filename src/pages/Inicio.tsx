
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesMedicasSupabase from '@/components/sections/EspecialidadesMedicasSupabase';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import EstudiosMedicos from '@/components/sections/EstudiosMedicos';
import SobreHospitalResumen from '@/components/sections/SobreHospitalResumen';
import Galeria from '@/components/sections/Galeria';
import ContactoHomepage from '@/components/sections/ContactoHomepage';
import EspecialidadesVerificacion from '@/components/sections/EspecialidadesVerificacion';
import DoctorEspecialidadesVerificacion from '@/components/sections/DoctorEspecialidadesVerificacion';

const Inicio = () => {
  return (
    <Layout>
      <DoctorEspecialidadesVerificacion />
      <EspecialidadesVerificacion />
      <HeroSection />
      <EspecialidadesMedicasSupabase />
      <ServiciosMedicos />
      <EstudiosMedicos />
      <SobreHospitalResumen />
      <Galeria />
      <ContactoHomepage />
    </Layout>
  );
};

export default Inicio;

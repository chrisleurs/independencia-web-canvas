
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import EspecialidadesDestacadas from '@/components/sections/EspecialidadesDestacadas';
import EspecialidadesGenerales from '@/components/sections/EspecialidadesGenerales';
import SobreHospital from '@/components/sections/SobreHospital';
import ServiciosMedicos from '@/components/sections/ServiciosMedicos';
import Galeria from '@/components/sections/Galeria';
import Mapa from '@/components/sections/Mapa';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div className="section-divider"></div>
        <EspecialidadesDestacadas />
        
        <div className="section-divider"></div>
        <EspecialidadesGenerales />
        
        <div className="section-divider"></div>
        <SobreHospital />
        
        <div className="section-divider"></div>
        <ServiciosMedicos />
        
        <div className="section-divider"></div>
        <Galeria />
        
        <div className="section-divider"></div>
        <Mapa />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

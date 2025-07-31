
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Stethoscope, Heart, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import DoctoresGrid from '@/components/sections/DoctoresGrid';
import EquipoEnfermeria from '@/components/sections/EquipoEnfermeria';

const Equipo = () => {
  const [activeTab, setActiveTab] = useState<'doctores' | 'enfermeria'>('doctores');

  return (
    <Layout>
      <div className="pt-16 sm:pt-18 md:pt-20">
        {/* Hero Section - Responsive */}
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Nuestro Equipo Médico
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4">
              Conoce a nuestro equipo médico y de enfermería altamente calificado, comprometido con brindar la mejor atención a nuestros pacientes
            </p>
          </div>
        </section>

        {/* Tabs Navigation - Mobile-first */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            {/* Toggle Buttons - Responsive design */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="bg-white rounded-xl p-2 shadow-lg w-full max-w-md">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('doctores')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold transition-all duration-300 min-h-[48px] text-sm sm:text-base ${
                      activeTab === 'doctores'
                        ? 'bg-hospital-primary text-white shadow-md transform scale-105'
                        : 'text-hospital-primary hover:bg-hospital-primary/10'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="truncate">Doctores</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('enfermeria')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold transition-all duration-300 ml-2 min-h-[48px] text-sm sm:text-base ${
                      activeTab === 'enfermeria'
                        ? 'bg-hospital-primary text-white shadow-md transform scale-105'
                        : 'text-hospital-primary hover:bg-hospital-primary/10'
                    }`}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="truncate">Enfermería</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'doctores' && (
              <div>
                {/* Header - Responsive */}
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-hospital-primary mb-4">
                    Equipo Médico
                  </h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg px-4">
                    Contamos con 43 médicos especialistas altamente calificados y comprometidos con brindar la mejor atención médica
                  </p>
                </div>

                {/* Doctores Grid Component */}
                <DoctoresGrid />

                {/* CTA Section - Mobile optimized */}
                <div className="text-center mt-12 sm:mt-16">
                  <div className="bg-white p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">¿Buscas una especialidad específica?</h3>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                      Contamos con más de 19 especialidades médicas. Conoce todas nuestras áreas de atención médica especializada.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/especialidades">
                        <Button size="lg" className="w-full sm:w-auto min-h-[48px]">
                          Ver Especialidades
                        </Button>
                      </Link>
                      <Link to="/contacto">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[48px]">
                          <Phone className="w-5 h-5 mr-2" />
                          <span className="hidden sm:inline">Contactar: </span>(238) 382-4819
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'enfermeria' && <EquipoEnfermeria />}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Equipo;

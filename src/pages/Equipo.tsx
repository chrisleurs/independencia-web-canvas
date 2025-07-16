
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Users, Stethoscope, Heart, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllDoctors } from '@/data/especialidades';

const Equipo = () => {
  const [activeTab, setActiveTab] = useState<'doctores' | 'enfermeria'>('doctores');
  const doctores = getAllDoctors();

  const equipoEnfermeria = [
    {
      nombre: 'Enfermera María González',
      puesto: 'Jefa de Enfermería',
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Carmen López',
      puesto: 'Enfermera de Urgencias',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermero Carlos Ruiz',
      puesto: 'Enfermero de Quirófano',
      foto: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Ana Martín',
      puesto: 'Enfermera de Pediatría',
      foto: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermero Luis Herrera',
      puesto: 'Enfermero de UCI',
      foto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Elena Torres',
      puesto: 'Enfermera de Cardiología',
      foto: 'https://images.unsplash.com/photo-1594824804732-ca8fe90d6c5f?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermera Rosa Jiménez',
      puesto: 'Enfermera de Maternidad',
      foto: 'https://images.unsplash.com/photo-1584467735871-8e4904344f8f?w=400&h=400&fit=crop&crop=face'
    },
    {
      nombre: 'Enfermero Pedro Vega',
      puesto: 'Enfermero de Rehabilitación',
      foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const handleWhatsAppContact = (doctor: any) => {
    if (doctor.whatsapp) {
      const phoneNumber = `52${doctor.whatsapp}`;
      const message = encodeURIComponent(`Hola ${doctor.nombre}, me gustaría agendar una cita. ¿Cuál es su disponibilidad?`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleCallHospital = (doctor: any) => {
    if (doctor.telefonoHospital) {
      window.open(`tel:+52${doctor.telefonoHospital}`, '_self');
    }
  };

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Conoce a nuestro equipo médico y de enfermería altamente calificado, comprometido con brindar la mejor atención
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <button
                  onClick={() => setActiveTab('doctores')}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === 'doctores'
                      ? 'bg-hospital-primary text-white shadow-md'
                      : 'text-hospital-primary hover:bg-hospital-primary/10'
                  }`}
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Doctores
                </button>
                <button
                  onClick={() => setActiveTab('enfermeria')}
                  className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all ml-2 ${
                    activeTab === 'enfermeria'
                      ? 'bg-hospital-primary text-white shadow-md'
                      : 'text-hospital-primary hover:bg-hospital-primary/10'
                  }`}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Enfermería
                </button>
              </div>
            </div>

            {/* Doctores Tab */}
            {activeTab === 'doctores' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-hospital-primary mb-4">Equipo Médico</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Médicos especialistas con años de experiencia y formación de prestigio
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {doctores.map((doctor) => (
                    <div key={doctor.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="w-32 h-32 bg-gradient-to-br from-hospital-primary to-hospital-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                        {doctor.foto ? (
                          <img 
                            src={doctor.foto} 
                            alt={doctor.nombre}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          getInitials(doctor.nombre)
                        )}
                      </div>
                      
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold mb-2">{doctor.nombre}</h3>
                        <p className="text-hospital-primary font-medium mb-2">{doctor.titulo}</p>
                        <p className="text-muted-foreground text-sm mb-3">{doctor.experiencia}</p>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        {doctor.whatsapp && (
                          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span>WhatsApp: {doctor.whatsapp}</span>
                          </div>
                        )}
                        {doctor.telefonoHospital && (
                          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 text-hospital-primary" />
                            <span>Hospital: {doctor.telefonoHospital}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        {doctor.hasDetailedProfile && (
                          <Link to={`/doctores/${doctor.slug}`}>
                            <Button 
                              size="sm" 
                              className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white mb-2"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Ver Perfil Completo
                            </Button>
                          </Link>
                        )}
                        
                        {doctor.whatsapp && (
                          <Button 
                            size="sm" 
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => handleWhatsAppContact(doctor)}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp
                          </Button>
                        )}
                        
                        {doctor.telefonoHospital && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => handleCallHospital(doctor)}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Llamar Hospital
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link to="/equipo/doctores">
                    <Button size="lg" className="bg-hospital-primary hover:bg-hospital-primary/90">
                      Ver Todos los Doctores
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Enfermería Tab */}
            {activeTab === 'enfermeria' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-hospital-primary mb-4">Equipo de Enfermería</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Personal de enfermería altamente capacitado que brinda atención personalizada las 24 horas
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {equipoEnfermeria.map((enfermero, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="aspect-square overflow-hidden rounded-xl mb-4">
                        <img
                          src={enfermero.foto}
                          alt={enfermero.nombre}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-semibold text-lg text-hospital-title mb-2">
                          {enfermero.nombre}
                        </h3>
                        <p className="text-hospital-secondary font-medium text-sm">
                          {enfermero.puesto}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link to="/equipo/enfermeria">
                    <Button size="lg" className="bg-hospital-primary hover:bg-hospital-primary/90">
                      Ver Equipo Completo de Enfermería
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Equipo;

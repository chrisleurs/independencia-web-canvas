import React from 'react';
import Layout from '@/components/Layout';
import { useDoctores } from '@/hooks/useDoctores';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, User, MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const EquipoDoctoresMejorado = () => {
  const { data: doctores, isLoading, error } = useDoctores();

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-hospital-primary mx-auto mb-4"></div>
            <p className="text-lg">Cargando doctores...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-red-500">Error al cargar los doctores.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const handleWhatsAppContact = (whatsapp: string, nombre: string) => {
    const phoneNumber = `52${whatsapp.replace(/\s/g, '')}`;
    const message = encodeURIComponent(`Hola, ${nombre}. Me gustaría agendar una cita.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-hospital-primary mx-auto mb-4"></div>
            <p className="text-lg">Cargando doctores...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="pt-16 md:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-red-500">Error al cargar los doctores.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const doctoresConPerfil = doctores?.filter(doctor => doctor.has_detailed_profile) || [];

  return (
    <Layout>
      <div className="pt-16 md:pt-20 min-h-screen bg-white">
        {/* Encabezado de la página */}
        <section className="bg-hospital-light py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
              Nuestro Equipo de Doctores
            </h1>
            <p className="text-xl text-hospital-gray">
              Conoce a nuestros profesionales de la salud altamente capacitados y comprometidos con tu bienestar.
            </p>
          </div>
        </section>

        {/* Equipo Médico */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
                Nuestro Equipo Médico
              </h2>
              <p className="text-xl text-hospital-gray max-w-3xl mx-auto">
                Profesionales altamente capacitados comprometidos con tu bienestar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctores?.map((doctor) => (
                <Card key={doctor.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-hospital-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                        {doctor.foto ? (
                          <img 
                            src={doctor.foto} 
                            alt={doctor.nombre}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-8 h-8 text-hospital-primary" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-hospital-primary group-hover:text-hospital-secondary transition-colors">
                          {doctor.nombre}
                        </CardTitle>
                        <p className="text-hospital-gray font-medium">
                          {doctor.titulo}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {doctor.experiencia && (
                      <p className="text-hospital-gray text-sm">
                        {doctor.experiencia}
                      </p>
                    )}

                    {doctor.has_detailed_profile && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Perfil Completo
                      </Badge>
                    )}

                    <div className="flex flex-col gap-2">
                      {doctor.has_detailed_profile && (
                        <Link to={`/doctores/${doctor.slug}`}>
                          <Button 
                            variant="outline" 
                            className="w-full border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
                          >
                            Ver Perfil Completo
                          </Button>
                        </Link>
                      )}
                      
                      {doctor.whatsapp && (
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleWhatsAppContact(doctor.whatsapp!, doctor.nombre)}
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contactar
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EquipoDoctoresMejorado;

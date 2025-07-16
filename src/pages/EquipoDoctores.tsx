
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { User, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllDoctors } from '@/data/especialidades';
import { useDoctores } from '@/hooks/useDoctores';

const EquipoDoctores = () => {
  // Try to get doctors from Supabase first, fallback to local data
  const { data: doctoresSupabase, isLoading, error } = useDoctores();
  const doctoresLocal = getAllDoctors();
  
  // Use Supabase data if available, otherwise use local data
  const doctores = doctoresSupabase && doctoresSupabase.length > 0 
    ? doctoresSupabase.map(doc => ({
        id: doc.id,
        slug: doc.slug,
        nombre: doc.nombre,
        titulo: doc.titulo,
        experiencia: doc.experiencia || '',
        foto: doc.foto,
        whatsapp: doc.whatsapp,
        telefonoHospital: '238 382 4819', // Default hospital phone
        hasDetailedProfile: doc.has_detailed_profile
      }))
    : doctoresLocal;

  const handleWhatsAppContact = (doctor: any) => {
    if (doctor.whatsapp) {
      const phoneNumber = `52${doctor.whatsapp.replace(/\s/g, '')}`;
      const message = encodeURIComponent(`Hola ${doctor.nombre}, me gustaría agendar una cita. ¿Cuál es su disponibilidad?`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleCallHospital = (doctor: any) => {
    if (doctor.telefonoHospital) {
      window.open(`tel:+52${doctor.telefonoHospital.replace(/\s/g, '')}`, '_self');
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

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-hospital-primary mx-auto mb-4"></div>
            <p className="text-lg">Cargando equipo médico...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Doctores
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Contamos con un equipo médico de {doctores.length} especialistas altamente calificados y comprometidos con brindar la mejor atención a nuestros pacientes
            </p>
            {doctoresSupabase && doctoresSupabase.length > 0 && (
              <p className="text-sm opacity-75 mt-2">
                ✅ Datos actualizados desde nuestra base de datos
              </p>
            )}
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctores.map((doctor) => (
                <div key={doctor.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                  {/* Foto del doctor */}
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
            
            <div className="text-center mt-12">
              <div className="bg-slate-50 p-8 rounded-2xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">¿Buscas una especialidad específica?</h2>
                <p className="text-muted-foreground mb-6">
                  Contamos con más de 19 especialidades médicas distribuidas entre nuestros {doctores.length} especialistas. Contacta con nosotros para conocer la disponibilidad.
                </p>
                <Link to="/especialidades">
                  <Button size="lg" className="mr-4">
                    Ver Especialidades
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar: (238) 382-4819
                </Button>
              </div>
            </div>

            {error && (
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                <p className="text-yellow-800">
                  ⚠️ Mostrando datos locales. Para ver los datos más actualizados, ejecuta la migración a Supabase.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EquipoDoctores;

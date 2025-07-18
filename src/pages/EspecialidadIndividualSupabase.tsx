import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { User, ExternalLink, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useEspecialidadBySlug } from '@/hooks/useEspecialidades';
import { useDoctoresByEspecialidad } from '@/hooks/useDoctores';
import { getIconComponent } from '@/utils/iconMapping';

const EspecialidadIndividualSupabase = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/especialidades" replace />;
  }

  const { data: especialidad, isLoading: especialidadLoading, error: especialidadError } = useEspecialidadBySlug(slug);
  const { data: doctores, isLoading: doctoresLoading } = useDoctoresByEspecialidad(especialidad?.id || '');

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const handleWhatsAppContact = (whatsapp: string, doctorName: string) => {
    const phoneNumber = whatsapp.replace(/\s/g, '');
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctorName}. ¿Podrían ayudarme?`);
    const whatsappUrl = `https://wa.me/52${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (especialidadLoading) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-hospital-primary mx-auto mb-4"></div>
            <p className="text-lg">Cargando especialidad...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (especialidadError || !especialidad) {
    return <Navigate to="/especialidades" replace />;
  }

  const IconComponent = getIconComponent(especialidad.icon_name);

  return (
    <Layout>
      <div className="pt-20">
        {/* Breadcrumb */}
        <section className="bg-hospital-light py-2">
          <div className="container-custom">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/especialidades">Especialidades</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{especialidad.titulo}</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header de la especialidad */}
        <section className="section-padding bg-gradient-to-br from-hospital-primary to-hospital-secondary text-white">
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-8">
              <Link
                to="/especialidades"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Volver a especialidades
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                      {especialidad.titulo}
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl text-white/90 mb-8">
                  {especialidad.descripcion_detallada || especialidad.descripcion}
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <IconComponent className="w-32 h-32 text-white/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        {especialidad.servicios && especialidad.servicios.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-12 text-hospital-primary">
                Servicios que Ofrecemos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {especialidad.servicios.map((servicio, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-hospital-light rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-hospital-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-hospital-primary mb-1">
                        {servicio}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Doctores especialistas */}
        {doctoresLoading && (
          <section className="section-padding bg-hospital-light">
            <div className="container-custom text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-hospital-primary mx-auto mb-4"></div>
              <p className="text-lg">Cargando doctores especialistas...</p>
            </div>
          </section>
        )}

        {doctores && doctores.length > 0 && (
          <section className="section-padding bg-hospital-light">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-12 text-hospital-primary">
                Nuestros Especialistas
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctores.map((doctor) => (
                  <Card key={doctor.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      {/* Foto del doctor */}
                      <div className="w-24 h-24 bg-gradient-to-br from-hospital-primary to-hospital-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold overflow-hidden">
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
                        <h3 className="text-lg font-bold mb-2">{doctor.nombre}</h3>
                        <p className="text-hospital-primary font-medium mb-2">{doctor.titulo}</p>
                        <p className="text-muted-foreground text-sm mb-3">{doctor.experiencia}</p>
                      </div>
                      
                      {/* Información de contacto como texto */}
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        {doctor.whatsapp && (
                          <div className="flex items-center justify-center space-x-2">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span>WhatsApp: {doctor.whatsapp}</span>
                          </div>
                        )}
                        {doctor.telefono_hospital && (
                          <div className="flex items-center justify-center space-x-2">
                            <Phone className="w-4 h-4 text-hospital-primary" />
                            <span>Hospital: {doctor.telefono_hospital}</span>
                          </div>
                        )}
                        {doctor.horario_detallado && (
                          <div className="text-center">
                            <span>Horarios: {doctor.horario_detallado}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Botones de acción */}
                      <div className="space-y-2">
                        {/* Solo botón de perfil completo si está disponible */}
                        {doctor.has_detailed_profile && (
                          <Link to={`/doctores/${doctor.slug}`}>
                            <Button 
                              size="sm" 
                              className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Ver Perfil Completo
                            </Button>
                          </Link>
                        )}
                        
                        {/* Botón de WhatsApp siempre disponible */}
                        {doctor.whatsapp && (
                          <Button 
                            size="sm" 
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => handleWhatsAppContact(doctor.whatsapp!, doctor.nombre)}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contactar por WhatsApp
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas Atención en {especialidad.titulo}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros para agendar tu cita médica
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-hospital-primary hover:bg-white/90"
                onClick={() => window.open('https://wa.me/522381234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20médica', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-hospital-primary"
                onClick={() => window.open('tel:+522383824819', '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar: (238) 382-4819
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EspecialidadIndividualSupabase;
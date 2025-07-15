
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useEspecialidadBySlug } from '@/hooks/useEspecialidades';
import { useDoctoresByEspecialidad } from '@/hooks/useDoctores';
import { getIconComponent } from '@/utils/iconMapping';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { ArrowLeft, Phone, Calendar, CheckCircle, User, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

const EspecialidadIndividualNew = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: especialidad, isLoading, error } = useEspecialidadBySlug(slug || '');
  const { data: doctores, isLoading: loadingDoctores } = useDoctoresByEspecialidad(especialidad?.id || '');

  if (!slug) {
    return <Navigate to="/especialidades" replace />;
  }

  if (error) {
    return <Navigate to="/especialidades" replace />;
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-16 md:pt-20">
          <section className="bg-hospital-light py-4">
            <div className="container-custom">
              <Skeleton className="h-6 w-64" />
            </div>
          </section>
          <section className="section-padding bg-gradient-to-br from-hospital-primary to-hospital-secondary text-white">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Skeleton className="h-16 w-80 mb-6 bg-white/20" />
                  <Skeleton className="h-24 w-full mb-8 bg-white/20" />
                  <div className="flex gap-4">
                    <Skeleton className="h-12 w-40 bg-white/20" />
                    <Skeleton className="h-12 w-40 bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  if (!especialidad) {
    return <Navigate to="/especialidades" replace />;
  }

  const Icon = getIconComponent(especialidad.icon_name);

  const handleWhatsAppBooking = (doctor: any) => {
    const phoneNumber = doctor.whatsapp ? `52${doctor.whatsapp}` : '522381234567';
    const doctorName = doctor.nombre;
    const message = encodeURIComponent(`Hola, me gustaría agendar una cita con ${doctorName} en ${especialidad.titulo}. ¿Podrían ayudarme con la disponibilidad?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="pt-16 md:pt-20">
        {/* Breadcrumb */}
        <section className="bg-hospital-light py-4">
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
                <ArrowLeft className="w-5 h-5" />
                Volver a especialidades
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
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

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-hospital-accent hover:bg-hospital-accent/90 text-white">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Cita
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-hospital-primary"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Icon className="w-32 h-32 text-white/30" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        {especialidad.servicios && especialidad.servicios.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
                  Servicios que Ofrecemos
                </h2>
                <p className="text-lg text-hospital-gray max-w-2xl mx-auto">
                  Conoce todos los servicios disponibles en nuestra especialidad de {especialidad.titulo.toLowerCase()}
                </p>
              </div>

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

        {/* Doctores */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
                Nuestros Especialistas
              </h2>
              <p className="text-lg text-hospital-gray max-w-2xl mx-auto">
                Conoce a nuestro equipo de profesionales altamente calificados
              </p>
            </div>

            {loadingDoctores ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader className="text-center pb-4">
                      <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                      <Skeleton className="h-6 w-32 mx-auto mb-2" />
                      <Skeleton className="h-4 w-40 mx-auto" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-16 w-full mb-4" />
                      <Skeleton className="h-10 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : doctores && doctores.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctores.map((doctor) => (
                  <Card 
                    key={doctor.id} 
                    className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-24 h-24 mx-auto mb-4 bg-hospital-primary/10 rounded-full flex items-center justify-center group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300 overflow-hidden">
                        {doctor.foto ? (
                          <img 
                            src={doctor.foto} 
                            alt={doctor.nombre}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <User className="w-12 h-12 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <CardTitle className="text-xl text-hospital-primary flex items-center justify-center gap-2">
                        {doctor.nombre}
                        {doctor.has_detailed_profile && <ExternalLink className="w-4 h-4 opacity-60" />}
                      </CardTitle>
                      <p className="text-hospital-secondary font-medium">{doctor.titulo}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-hospital-gray">
                          <CheckCircle className="w-4 h-4 text-hospital-accent" />
                          {doctor.experiencia}
                        </div>
                        
                        {doctor.certificaciones && doctor.certificaciones.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-hospital-primary">Certificaciones:</p>
                            <div className="space-y-1">
                              {doctor.certificaciones.slice(0, 2).map((cert, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-hospital-gray">
                                  <CheckCircle className="w-3 h-3 text-hospital-accent" />
                                  {cert}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col gap-2 mt-4">
                          {doctor.has_detailed_profile && (
                            <Link to={`/doctores/${doctor.slug}`}>
                              <Button 
                                className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white" 
                                size="sm"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Ver Perfil Completo
                              </Button>
                            </Link>
                          )}
                          
                          <Button 
                            className="w-full bg-green-600 hover:bg-green-700 text-white" 
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleWhatsAppBooking(doctor);
                            }}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Agendar por WhatsApp
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-hospital-gray">No hay doctores disponibles para esta especialidad</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitas Atención en {especialidad.titulo}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agenda tu cita con nuestros especialistas y recibe la mejor atención médica
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-hospital-accent hover:bg-hospital-accent/90 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Cita Online
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-hospital-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar: (01) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EspecialidadIndividualNew;

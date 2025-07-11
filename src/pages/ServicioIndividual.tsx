
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { getServicioBySlug } from '@/data/servicios';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Phone, Clock, CheckCircle, Users, ArrowLeft, Stethoscope } from 'lucide-react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';

const ServicioIndividual = () => {
  const { slug } = useParams<{ slug: string }>();
  const servicio = slug ? getServicioBySlug(slug) : undefined;

  if (!servicio) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
            <p className="text-muted-foreground mb-8">El servicio que buscas no existe.</p>
            <Link to="/servicios">
              <Button>Volver a Servicios</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = servicio.icon;

  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent(`Hola, necesito información sobre ${servicio.titulo}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+522381234567', '_self');
  };

  return (
    <Layout>
      <div className="pt-20">
        {/* Breadcrumbs */}
        <section className="section-padding bg-slate-50">
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
                    <Link to="/servicios">Servicios</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{servicio.titulo}</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Link to="/servicios" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Servicios
                </Link>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      {servicio.titulo}
                    </h1>
                  </div>
                </div>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  {servicio.descripcionCorta}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultar por WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={handleCallClick}
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-hospital-primary"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </Button>
                </div>

                <div className="flex items-center text-white/80 pt-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{servicio.horarios}</span>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <Icon className="w-24 h-24 mx-auto mb-4" />
                      <p className="text-lg font-semibold">{servicio.titulo}</p>
                      <p className="text-sm">Imagen del Servicio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Información Detallada */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Descripción */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Descripción del Servicio</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {servicio.descripcionCompleta}
                  </p>
                </div>

                {/* Qué Incluye */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">¿Qué incluye nuestro servicio?</h3>
                  <div className="space-y-3">
                    {servicio.incluye.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-hospital-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Beneficios y Tecnología */}
              <div className="space-y-8">
                {/* Beneficios */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">Beneficios para el Paciente</h3>
                    <div className="space-y-3">
                      {servicio.beneficios.map((beneficio, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-hospital-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Tecnología */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">Tecnología Utilizada</h3>
                    <div className="space-y-3">
                      {servicio.tecnologia.map((tech, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-hospital-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requisitos (si existen) */}
        {servicio.requisitos && servicio.requisitos.length > 0 && (
          <section className="section-padding bg-slate-50">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Preparación y Requisitos</h2>
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Stethoscope className="w-5 h-5 mr-2 text-hospital-primary" />
                          Requisitos Necesarios
                        </h3>
                        <div className="space-y-3">
                          {servicio.requisitos.map((requisito, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-hospital-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{requisito}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-hospital-primary" />
                          Horarios de Atención
                        </h3>
                        <p className="text-muted-foreground">{servicio.horarios}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Especialistas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Especialistas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contamos con médicos altamente calificados y especializados en este servicio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicio.doctoresEspecialistas.map((doctor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-hospital-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-hospital-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{doctor}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Especialista en {servicio.titulo}
                    </p>
                    <Link to="/doctores">
                      <Button variant="outline" size="sm">
                        Ver Perfil
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Necesitas este servicio?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Nuestro equipo está listo para brindarte la mejor atención. Contáctanos para más información o para agendar tu cita.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
                
                <Button 
                  onClick={handleCallClick}
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-hospital-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar Ahora
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center text-white/80 text-sm mt-6">
                <span className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (238) 123-4567
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {servicio.horarios}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicioIndividual;

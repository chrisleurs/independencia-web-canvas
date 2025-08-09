
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
import { ArrowLeft, Clock, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { estudios } from '@/data/estudios';

const EstudioDetalle = () => {
  const { slug } = useParams();
  const estudio = estudios.find(e => e.slug === slug);

  if (!estudio) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-hospital-primary mb-4">Estudio no encontrado</h1>
          <Link to="/estudios">
            <Button>Volver a Estudios</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = estudio.icon;

  const handleWhatsAppBooking = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent(estudio.whatsappMessage || `Hola, me gustaría agendar ${estudio.titulo}. ¿Cuál es la disponibilidad?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const WhatsAppIcon = () => (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
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
                  <Link to="/estudios">Estudios</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{estudio.titulo}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Header del Estudio - FONDO AZUL */}
      <section className="section-padding bg-gradient-to-br from-hospital-primary to-hospital-secondary text-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/estudios"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Estudios
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {estudio.titulo}
                  </h1>
                  <span className="text-xl text-white/90 bg-white/20 px-3 py-1 rounded-full text-sm uppercase tracking-wide">
                    {estudio.categoria}
                  </span>
                </div>
              </div>
              
              <p className="text-xl text-white/90 mb-8">
                {estudio.descripcionDetallada}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppBooking}
                  size="lg" 
                  className="bg-whatsapp hover:bg-whatsapp text-white font-semibold"
                >
                  <WhatsAppIcon />
                  <span className="ml-2">Agendar por WhatsApp</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-hospital-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar: 238 382 4819
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

      {/* Información del Estudio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Información General */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-hospital-primary">
                  <Clock className="w-6 h-6" />
                  Información General
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-hospital-primary">Duración:</span>
                    <p className="text-hospital-gray">{estudio.duracion}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-hospital-primary">Disponibilidad:</span>
                    <p className="text-hospital-gray">{estudio.disponibilidad}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium text-hospital-primary">Categoría:</span>
                    <p className="text-hospital-gray capitalize">{estudio.categoria}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preparación */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-hospital-primary">
                  <CheckCircle className="w-6 h-6" />
                  Preparación Requerida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {estudio.preparacion.map((prep, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-hospital-accent flex-shrink-0 mt-1" />
                    <span className="text-hospital-gray text-sm">{prep}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Beneficios */}
            <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-hospital-primary">
                  <CheckCircle className="w-6 h-6" />
                  Beneficios del Estudio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {estudio.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-hospital-accent flex-shrink-0 mt-1" />
                    <span className="text-hospital-gray text-sm">{beneficio}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final - FONDO AZUL */}
      <section className="section-padding bg-hospital-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Realizarte este Estudio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda tu cita ahora y obtén resultados confiables con tecnología de vanguardia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppBooking}
              size="lg" 
              className="bg-whatsapp text-white hover:bg-whatsapp font-semibold px-8 py-4"
            >
              <WhatsAppIcon />
              <span className="ml-3">Agendar {estudio.titulo}</span>
            </Button>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <span className="text-lg font-bold mr-3">📞</span>
              <span className="text-white font-medium">Tel: 238 382 4819</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstudioDetalle;

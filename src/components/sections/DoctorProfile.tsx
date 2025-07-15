import React from 'react';
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
import { ArrowLeft, Phone, CheckCircle, User, MessageCircle, GraduationCap, Award, Clock, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Doctor } from '@/data/especialidades';

interface DoctorProfileProps {
  doctor: Doctor;
}

const DoctorProfile = ({ doctor }: DoctorProfileProps) => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = doctor.whatsapp ? `52${doctor.whatsapp}` : '522381234567';
    const message = encodeURIComponent(`Hola Dr./Dra. ${doctor.nombre.split(' ').slice(-2).join(' ')}, me gustaría agendar una consulta. ¿Cuál es su disponibilidad?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallDoctor = () => {
    if (doctor.whatsapp) {
      window.open(`tel:+52${doctor.whatsapp}`, '_self');
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

  const getEspecialidadSlug = (especialidad: string) => {
    const slugMap: { [key: string]: string } = {
      'Medicina General': 'medicina-general',
      'Ginecología': 'ginecologia',
      'Obstetricia': 'ginecologia',
      'Diabetes Mellitus': 'medicina-general',
      'Hipertensión Arterial': 'medicina-general',
      'Cirugía Menor': 'cirugia-general-especializada',
      'Medicina de Urgencias': 'urgenciologia',
      'Medicina Familiar': 'medicina-general',
      'Atención Primaria': 'medicina-general',
      'Atención Materno Infantil': 'ginecologia'
    };
    return slugMap[especialidad] || 'medicina-general';
  };

  return (
    <div className="min-h-screen bg-white">
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
                  <Link to="/doctores">Doctores</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{doctor.nombre}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Header del doctor */}
      <section className="section-padding bg-gradient-to-br from-hospital-primary to-hospital-secondary text-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/doctores"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Doctores
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  {doctor.foto ? (
                    <img 
                      src={doctor.foto} 
                      alt={doctor.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-hospital-primary to-hospital-secondary rounded-full flex items-center justify-center text-white text-lg font-bold">
                      {getInitials(doctor.nombre)}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {doctor.nombre}
                  </h1>
                  <p className="text-xl text-white/90">
                    {doctor.titulo}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-white/90 mb-2">
                {doctor.experiencia}
              </p>
              
              {doctor.formacion && (
                <p className="text-lg text-white/80 mb-4">
                  {doctor.formacion}
                </p>
              )}

              {doctor.mision && (
                <p className="text-md text-white/80 mb-8 italic">
                  "{doctor.mision}"
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={handleWhatsAppBooking}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar por WhatsApp
                </Button>
                {doctor.whatsapp && (
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-hospital-primary"
                    onClick={handleCallDoctor}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm overflow-hidden">
                {doctor.foto ? (
                  <img 
                    src={doctor.foto} 
                    alt={doctor.nombre}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <User className="w-32 h-32 text-white/30" />
                )}
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Información profesional */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Especialidades */}
            {doctor.especialidades && doctor.especialidades.length > 0 && (
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-hospital-primary">
                    <Stethoscope className="w-6 h-6" />
                    Especialidades
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {doctor.especialidades.map((especialidad, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                      <Link 
                        to={`/especialidades/${getEspecialidadSlug(especialidad)}`}
                        className="text-hospital-gray hover:text-hospital-primary transition-colors hover:underline"
                      >
                        {especialidad}
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Formación */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-hospital-primary">
                  <GraduationCap className="w-6 h-6" />
                  Formación Académica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {doctor.formacion && (
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                    <span className="text-hospital-gray">{doctor.formacion}</span>
                  </div>
                )}
                {doctor.certificaciones.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                    <span className="text-hospital-gray">{cert}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Horarios */}
            {doctor.horarios && (
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-hospital-primary">
                    <Clock className="w-6 h-6" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                    <span className="text-hospital-gray">{doctor.horarios}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reconocimientos */}
            {doctor.reconocimientos && doctor.reconocimientos.length > 0 && (
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-hospital-primary">
                    <Award className="w-6 h-6" />
                    Reconocimientos y Membresías
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {doctor.reconocimientos.map((reconocimiento, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                      <span className="text-hospital-gray">{reconocimiento}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-hospital-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Agenda tu Cita con {doctor.nombre.split(' ')[1]}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contacta directamente para agendar tu consulta médica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleWhatsAppBooking}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>
            {doctor.whatsapp && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-hospital-primary"
                onClick={handleCallDoctor}
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar: {doctor.whatsapp}
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;

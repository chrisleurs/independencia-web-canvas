
import React from 'react';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { Doctor } from '@/data/especialidades';
import DoctorHeader from './doctor-profile/DoctorHeader';
import ProfessionalInfoCards from './doctor-profile/ProfessionalInfoCards';
import DoctorCTA from './doctor-profile/DoctorCTA';

interface DoctorProfileEnhancedProps {
  doctor: Doctor;
}

const DoctorProfileEnhanced = ({ doctor }: DoctorProfileEnhancedProps) => {
  const handleWhatsAppBooking = () => {
    const phoneNumber = doctor.whatsapp ? `52${doctor.whatsapp.replace(/\s/g, '').replace(/[()]/g, '')}` : '522381234567';
    const doctorFirstName = doctor.nombre.split(' ').slice(0, 2).join(' ');
    const message = encodeURIComponent(`Hola ${doctorFirstName}, me gustaría agendar una consulta. ¿Cuál es su disponibilidad?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallDoctor = () => {
    if (doctor.whatsapp) {
      const cleanPhone = doctor.whatsapp.replace(/\s/g, '').replace(/[()]/g, '');
      window.open(`tel:+52${cleanPhone}`, '_self');
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
      'Ginecología y Obstetricia': 'ginecologia',
      'Obstetricia': 'ginecologia',
      'Anestesiología': 'anestesiologia',
      'Anestesiólogo': 'anestesiologia',
      'Diabetes Mellitus': 'medicina-general',
      'Hipertensión Arterial': 'medicina-general',
      'Cirugía Menor': 'cirugia-general-especializada',
      'Cirugía General': 'cirugia-general-especializada',
      'Medicina de Urgencias': 'urgenciologia',
      'Urgencias Médico Quirúrgicas': 'urgenciologia',
      'Medicina Familiar': 'medicina-general',
      'Atención Primaria': 'medicina-general',
      'Atención Materno Infantil': 'ginecologia',
      'Cirugía Plástica': 'cirugia-plastica',
      'Cirugía Estética': 'cirugia-plastica',
      'Cirugía Reconstructiva': 'cirugia-plastica',
      'Enfermedades Crónico-degenerativas': 'medicina-general',
      'Medicina Crítica': 'medicina-critica',
      'Terapia Intensiva': 'medicina-critica',
      'Cardineumología': 'cardiologia',
      'Pediatría': 'pediatria',
      'Neonatología': 'pediatria',
      'Traumatología': 'traumatologia-ortopedia',
      'Ortopedia': 'traumatologia-ortopedia',
      'Cirugía Articular': 'traumatologia-ortopedia',
      'Neurología': 'neurologia',
      'Neurofisiología': 'neurologia',
      'Nutrición': 'nutricion',
      'Gastroenterología': 'gastroenterologia',
      'Nefrología': 'nefrologia',
      'Urología': 'urologia',
      'Dermatología': 'dermatologia',
      'Oncología': 'oncologia',
      'Cirugía Oncológica': 'oncologia',
      'Coloproctología': 'gastroenterologia',
      'Cirugía Cardiovascular': 'cardiologia',
      'Cirugía Torácica': 'neumologia'
    };
    return slugMap[especialidad] || 'medicina-general';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-hospital-light py-2">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList className="items-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="flex items-center">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/doctores" className="flex items-center">Doctores</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage className="flex items-center">{doctor.nombre}</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Header del doctor */}
      <DoctorHeader 
        doctor={doctor}
        onWhatsAppBooking={handleWhatsAppBooking}
        onCallDoctor={handleCallDoctor}
        getInitials={getInitials}
      />

      {/* Información profesional */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ProfessionalInfoCards 
            doctor={doctor}
            getEspecialidadSlug={getEspecialidadSlug}
          />
        </div>
      </section>

      {/* CTA Final */}
      <DoctorCTA 
        doctor={doctor}
        onWhatsAppBooking={handleWhatsAppBooking}
        onCallDoctor={handleCallDoctor}
      />
    </div>
  );
};

export default DoctorProfileEnhanced;

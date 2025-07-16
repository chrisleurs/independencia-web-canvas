
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  Stethoscope, 
  Activity, 
  Scissors, 
  GraduationCap, 
  Clock, 
  Award, 
  Phone,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Doctor {
  id: string;
  nombre: string;
  titulo: string;
  especialidades?: string[];
  servicios?: string[];
  areasAtencion?: string[];
  procedimientos?: string[];
  formacion?: string;
  certificaciones?: string[];
  horarios?: string;
  horarioDetallado?: string;
  reconocimientos?: string[];
  whatsapp?: string;
  telefonoHospital?: string;
  telefonosAdicionales?: string[];
  contactoTitulos?: {
    whatsapp?: string;
    hospital?: string;
    adicionales?: string[];
  };
}

interface ProfessionalInfoCardsProps {
  doctor: Doctor;
  getEspecialidadSlug: (especialidad: string) => string;
}

const ProfessionalInfoCards = ({ doctor, getEspecialidadSlug }: ProfessionalInfoCardsProps) => {
  return (
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

      {/* Servicios/Áreas de Atención */}
      {((doctor.servicios && doctor.servicios.length > 0) || (doctor.areasAtencion && doctor.areasAtencion.length > 0)) && (
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-hospital-primary">
              <Heart className="w-6 h-6" />
              Áreas de Atención
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {(doctor.areasAtencion || doctor.servicios || []).map((area, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                <span className="text-hospital-gray">{area}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Procedimientos */}
      {doctor.procedimientos && doctor.procedimientos.length > 0 && (
        <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-hospital-primary">
              <Scissors className="w-6 h-6" />
              Procedimientos Quirúrgicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {doctor.procedimientos.map((procedimiento, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                  <span className="text-hospital-gray">{procedimiento}</span>
                </div>
              ))}
            </div>
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
          {doctor.certificaciones && doctor.certificaciones.length > 0 && (
            doctor.certificaciones.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                <span className="text-hospital-gray">{cert}</span>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Horarios */}
      {(doctor.horarios || doctor.horarioDetallado) && (
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-hospital-primary">
              <Clock className="w-6 h-6" />
              Horarios de Atención
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {doctor.horarioDetallado ? (
              <div className="space-y-2">
                {doctor.horarioDetallado.split('|').map((horario, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                    <span className="text-hospital-gray">{horario.trim()}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                <span className="text-hospital-gray">{doctor.horarios}</span>
              </div>
            )}
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

      {/* Información de Contacto */}
      {(doctor.whatsapp || doctor.telefonoHospital || (doctor.telefonosAdicionales && doctor.telefonosAdicionales.length > 0)) && (
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-hospital-primary">
              <Phone className="w-6 h-6" />
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {doctor.whatsapp && (
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-hospital-gray font-medium">
                    {doctor.contactoTitulos?.whatsapp || 'WhatsApp'}
                  </span>
                  <span className="text-hospital-gray">{doctor.whatsapp}</span>
                </div>
              </div>
            )}
            {doctor.telefonoHospital && (
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-hospital-gray font-medium">
                    {doctor.contactoTitulos?.hospital || 'Hospital'}
                  </span>
                  <span className="text-hospital-gray">{doctor.telefonoHospital}</span>
                </div>
              </div>
            )}
            {doctor.telefonosAdicionales && doctor.telefonosAdicionales.length > 0 && doctor.telefonosAdicionales.map((telefono, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-hospital-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-hospital-gray font-medium">
                    {doctor.contactoTitulos?.adicionales?.[index] || `Contacto Adicional ${index + 1}`}
                  </span>
                  <span className="text-hospital-gray">{telefono}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProfessionalInfoCards;

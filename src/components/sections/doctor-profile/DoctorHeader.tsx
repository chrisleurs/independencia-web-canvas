
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, MessageCircle, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Doctor } from '@/data/especialidades';

interface DoctorHeaderProps {
  doctor: Doctor;
  onWhatsAppBooking: () => void;
  onCallDoctor: () => void;
  getInitials: (nombre: string) => string;
}

const DoctorHeader = ({ doctor, onWhatsAppBooking, onCallDoctor, getInitials }: DoctorHeaderProps) => {
  return (
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
                onClick={onWhatsAppBooking}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar por WhatsApp
              </Button>
              {doctor.whatsapp && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-hospital-primary"
                  onClick={onCallDoctor}
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
  );
};

export default DoctorHeader;

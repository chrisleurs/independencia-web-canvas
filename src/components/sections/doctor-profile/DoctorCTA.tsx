
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { Doctor } from '@/data/especialidades';

interface DoctorCTAProps {
  doctor: Doctor;
  onWhatsAppBooking: () => void;
  onCallDoctor: () => void;
}

const DoctorCTA = ({ doctor, onWhatsAppBooking, onCallDoctor }: DoctorCTAProps) => {
  const whatsappTitle = doctor.contactoTitulos?.whatsapp || 'WhatsApp';
  
  return (
    <section className="section-padding bg-hospital-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Agenda tu Cita con {doctor.nombre.split(' ')[1]}
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Contacta directamente para agendar tu consulta médica profesional
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-hospital-primary hover:bg-white/95 font-semibold text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            onClick={onWhatsAppBooking}
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Contactar por {whatsappTitle}
          </Button>
          {doctor.whatsapp && (
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-hospital-primary font-semibold text-lg px-10 py-6 transition-all duration-300 hover:-translate-y-1"
              onClick={onCallDoctor}
            >
              <Phone className="w-5 h-5 mr-3" />
              Llamar: {doctor.whatsapp}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorCTA;

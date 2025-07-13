
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
  return (
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
            onClick={onWhatsAppBooking}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contactar por WhatsApp
          </Button>
          {doctor.whatsapp && (
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-hospital-primary"
              onClick={onCallDoctor}
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar: {doctor.whatsapp}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorCTA;

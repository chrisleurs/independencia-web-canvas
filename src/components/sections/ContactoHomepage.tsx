
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

const ContactoHomepage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre los servicios del Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+522381234567', '_self');
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/hTAwPFdqpNrfHyoQA', '_blank');
  };

  return (
    <section className="section-padding bg-hospital-blue-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-hospital-title mb-6">
                Contáctanos
              </h2>
              <p className="text-lg text-hospital-gray mb-8">
                Estamos aquí para atenderte. Contáctanos para agendar tu cita o resolver cualquier duda sobre nuestros servicios médicos.
              </p>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hospital-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-hospital-title">Teléfono</h3>
                  <p className="text-hospital-gray">(238) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hospital-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-hospital-title">WhatsApp</h3>
                  <p className="text-hospital-gray">Disponible 24/7</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hospital-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-hospital-title">Dirección</h3>
                  <p className="text-hospital-gray">Tehuacán, Puebla</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-hospital-title">Urgencias</h3>
                  <p className="text-hospital-gray">24 horas, 365 días</p>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción centrados y responsivos */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-hospital-title mb-6 text-center">
                ¿Cómo prefieres contactarnos?
              </h3>
              
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos por WhatsApp
                </Button>
                
                <Button 
                  onClick={handleCallClick}
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </Button>
                
                <Button 
                  onClick={handleMapClick}
                  size="lg" 
                  variant="secondary"
                  className="w-full bg-hospital-secondary hover:bg-hospital-secondary/90 text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] flex items-center justify-center gap-3"
                >
                  <MapPin className="w-5 h-5" />
                  Ver en Mapa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoHomepage;

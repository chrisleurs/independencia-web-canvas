
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Mail } from 'lucide-react';

const ContactoHomepage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre los servicios del Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/hTAwPFdqpNrfHyoQA', '_blank');
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
                  <span className="text-white font-bold text-lg">Tel</span>
                </div>
                <div>
                  <h3 className="font-semibold text-hospital-title">Teléfono</h3>
                  <p className="text-hospital-gray">Hospital: 238 382 4819</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-whatsapp rounded-lg flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon />
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
            <div className="bg-white contact-card-mobile rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-hospital-title mb-6 text-center">
                ¿Cómo prefieres contactarnos?
              </h3>
              
              <div className="contact-buttons-mobile">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="contact-button-mobile bg-whatsapp hover:bg-whatsapp text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <WhatsAppIcon />
                  Contáctanos por WhatsApp
                </Button>
                
                <Button 
                  onClick={handleMapClick}
                  size="lg" 
                  variant="secondary"
                  className="contact-button-mobile bg-hospital-secondary hover:bg-hospital-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
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

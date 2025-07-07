
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const ContactoHomepage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log('Formulario enviado');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener información del Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario o visítanos en nuestras instalaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Columna izquierda - Formulario */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-hospital-primary mb-2">
                  Nombre completo
                </label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-hospital-primary mb-2">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-hospital-primary mb-2">
                  Teléfono
                </label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="(238) 123-4567"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-hospital-primary mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={4}
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold py-3"
                size="lg"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>

          {/* Columna derecha - Mapa y contacto */}
          <div className="space-y-8">
            {/* Mapa */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-hospital-primary/10 to-hospital-secondary/10 flex items-center justify-center">
                <div className="text-center text-hospital-primary">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-semibold text-lg mb-2">Hospital Independencia</p>
                  <p className="text-sm text-muted-foreground">
                    Av. Independencia 1234<br />
                    Centro, Tehuacán, Puebla
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-hospital-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-hospital-primary mb-1">Dirección</p>
                    <p className="text-muted-foreground text-sm">
                      Av. Independencia 1234, Centro<br />
                      Tehuacán, Puebla, México
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-hospital-primary mb-4">Contacto directo</h3>
              <p className="text-muted-foreground mb-6">
                También puedes contactarnos por WhatsApp o llamada directa para atención inmediata.
              </p>
              
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-hospital-accent hover:bg-hospital-accent/90 text-white"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                
                <Button
                  onClick={() => window.open('tel:+522381234567', '_self')}
                  variant="outline"
                  className="w-full border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
                  size="lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar ahora
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

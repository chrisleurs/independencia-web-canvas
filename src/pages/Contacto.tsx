
import React from 'react';
import Layout from '@/components/Layout';
import Mapa from '@/components/sections/Mapa';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contacto = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría agendar una cita en Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+522381234567', '_self');
  };

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos para agendar tu cita o resolver cualquier duda
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Información de Contacto */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-hospital-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                        <p className="text-muted-foreground mb-2">(238) 123-4567</p>
                        <Button onClick={handleCallClick} size="sm">
                          Llamar Ahora
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-hospital-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                        <p className="text-muted-foreground mb-2">Atención inmediata por WhatsApp</p>
                        <Button onClick={handleWhatsAppClick} size="sm" className="bg-hospital-accent hover:bg-hospital-accent/90">
                          Contactar por WhatsApp
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-hospital-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email</h3>
                        <p className="text-muted-foreground">info@hospitalindependencia.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-hospital-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                        <p className="text-muted-foreground">
                          Av. Principal 123<br />
                          Colonia Centro<br />
                          Tehuacán, Puebla
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-hospital-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p><strong>Urgencias:</strong> 24 horas, 365 días</p>
                          <p><strong>Consulta Externa:</strong> 7:00 - 21:00</p>
                          <p><strong>Laboratorio:</strong> 6:00 - 20:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <div className="bg-slate-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-primary focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-primary focus:border-transparent"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-primary focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Especialidad de Interés</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-primary focus:border-transparent">
                      <option>Selecciona una especialidad</option>
                      <option>Cardiología</option>
                      <option>Neurología</option>
                      <option>Pediatría</option>
                      <option>Ginecología</option>
                      <option>Otra especialidad</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-primary focus:border-transparent"
                      placeholder="Describe tu consulta o solicitud de cita"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Mapa />
      </div>
    </Layout>
  );
};

export default Contacto;

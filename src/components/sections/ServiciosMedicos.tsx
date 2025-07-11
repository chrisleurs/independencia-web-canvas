
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { getAllServicios } from '@/data/servicios';

const ServiciosMedicos = () => {
  const servicios = getAllServicios();

  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener información sobre los servicios del Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicios" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hospital-primary">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos especializados con tecnología de vanguardia y atención personalizada las 24 horas del día
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {servicios.slice(0, 6).map((servicio) => {
            const Icon = servicio.icon;
            return (
              <Link
                key={servicio.id}
                to={`/servicios/${servicio.slug}`}
                className="block"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white cursor-pointer h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-hospital-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-hospital-primary group-hover:text-hospital-secondary transition-colors duration-300">
                      {servicio.titulo}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {servicio.descripcionCorta}
                    </p>
                    
                    <div className="text-hospital-accent font-medium text-sm group-hover:text-hospital-primary transition-colors duration-300">
                      Ver más detalles →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Contáctanos por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiciosMedicos;

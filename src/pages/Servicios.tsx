
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getAllServicios } from '@/data/servicios';

const Servicios = () => {
  const servicios = getAllServicios();

  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener información sobre los servicios del Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios Médicos
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ofrecemos servicios médicos integrales con tecnología de vanguardia y atención personalizada las 24 horas del día
            </p>
          </div>
        </section>
        
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hospital-primary">
                Todos Nuestros Servicios
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Conoce en detalle cada uno de nuestros servicios especializados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {servicios.map((servicio) => {
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
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {servicio.descripcionCorta}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {servicio.horarios}
                          </span>
                          <div className="text-hospital-accent font-medium text-sm group-hover:text-hospital-primary transition-colors duration-300 flex items-center">
                            Ver detalles
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
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
      </div>
    </Layout>
  );
};

export default Servicios;

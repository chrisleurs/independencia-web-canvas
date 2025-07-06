
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Wind, Ambulance, Utensils, Baby, MessageCircle } from 'lucide-react';

const ServiciosMedicos = () => {
  const servicios = [
    {
      icon: Heart,
      titulo: 'Terapia Intensiva / Pacientes Críticos',
      descripcion: 'Atención especializada 24/7 con tecnología avanzada.',
    },
    {
      icon: Wind,
      titulo: 'Atención Respiratoria',
      descripcion: 'Soporte pulmonar y tratamiento integral de enfermedades respiratorias.',
    },
    {
      icon: Heart,
      titulo: 'Atención Cardiaca',
      descripcion: 'Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología moderna.',
    },
    {
      icon: Ambulance,
      titulo: 'Ayuda de Emergencia / Urgencias 24/7',
      descripcion: 'Atención inmediata con ambulancias disponibles todos los días.',
    },
    {
      icon: Utensils,
      titulo: 'Atención Nutricional Personalizada',
      descripcion: 'Planes nutricionales diseñados para cada paciente para apoyar la recuperación.',
    },
    {
      icon: Baby,
      titulo: 'Ginecología',
      descripcion: 'Cuidado ginecológico y obstétrico integral para todas las etapas de la mujer.',
    },
  ];

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
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-hospital-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-hospital-primary group-hover:text-hospital-secondary transition-colors duration-300">
                    {servicio.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </CardContent>
              </Card>
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

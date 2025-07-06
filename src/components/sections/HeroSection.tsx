import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Users, Phone, MessageCircle, MapPin } from 'lucide-react';

const HeroSection = () => {
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
    <section id="hero" className="min-h-screen flex items-center hospital-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-60 right-1/3 w-16 h-16 border border-white/15 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                Tehuacán, Puebla
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Hospital
                <span className="block text-hospital-secondary">Independencia</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
                Más de 25 años brindando atención médica de calidad con tecnología de vanguardia y el compromiso humano que tu familia merece
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-12 h-12 bg-hospital-secondary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">25+</div>
                  <div className="text-white/80 text-sm">Años de experiencia</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-12 h-12 bg-hospital-secondary/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">30+</div>
                  <div className="text-white/80 text-sm">Especialidades</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="w-12 h-12 bg-hospital-secondary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">50K+</div>
                  <div className="text-white/80 text-sm">Pacientes atendidos</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <Button 
                onClick={handleCallClick}
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-hospital-primary font-semibold text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-white/80">
              <span className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" />
                (238) 123-4567
              </span>
              <span className="flex items-center text-sm">
                <span className="w-2 h-2 bg-hospital-accent rounded-full mr-2"></span>
                Urgencias 24/7
              </span>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12" />
                  </div>
                  <p className="text-lg font-semibold">Imagen Principal</p>
                  <p className="text-sm">Hospital Independencia</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-hospital-secondary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-hospital-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

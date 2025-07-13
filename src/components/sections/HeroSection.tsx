
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
      {/* Background Pattern - More Subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-40 h-40 border border-white/10 rounded-full"></div>
        <div className="absolute top-60 right-24 w-28 h-28 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-48 left-28 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-80 right-1/3 w-20 h-20 border border-white/8 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-white/8 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium border border-white/10">
                <MapPin className="w-4 h-4 mr-3" />
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

            {/* Stats - Enhanced Spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12">
              <div className="flex items-center space-x-6 bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">25+</div>
                  <div className="text-white/80 text-sm">Años de experiencia</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">30+</div>
                  <div className="text-white/80 text-sm">Especialidades</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold font-heading">50K+</div>
                  <div className="text-white/80 text-sm">Pacientes atendidos</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Professional Blue Focus */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="bg-white text-hospital-primary hover:bg-white/95 font-semibold text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Agendar por WhatsApp
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
              <Button 
                onClick={handleCallClick}
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-hospital-primary font-semibold text-lg px-10 py-6 transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-3" />
                Llamar Ahora
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 text-white/80">
              <span className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3" />
                (238) 123-4567
              </span>
              <span className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Urgencias 24/7
              </span>
            </div>
          </div>

          {/* Hero Image Placeholder - Enhanced */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full h-[500px] bg-white/5 rounded-3xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <div className="w-28 h-28 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                    <Heart className="w-14 h-14" />
                  </div>
                  <p className="text-xl font-semibold">Imagen Principal</p>
                  <p className="text-sm">Hospital Independencia</p>
                </div>
              </div>
              
              {/* Floating Elements - More Subtle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

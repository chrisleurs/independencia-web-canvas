
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

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/hTAwPFdqpNrfHyoQA', '_blank');
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Mobile-first approach */}
          <div className="text-white space-y-8 lg:space-y-12 text-center lg:text-left">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center bg-white/8 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium border border-white/10">
                <MapPin className="w-4 h-4 mr-2 sm:mr-3" />
                Tehuacán, Puebla
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Hospital
                <span className="block text-hospital-secondary">Independencia</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Más de 25 años brindando atención médica de calidad con tecnología de vanguardia y el compromiso humano que tu familia merece
              </p>
            </div>

            {/* Stats - Mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 lg:py-12">
              <div className="flex items-center space-x-4 sm:space-x-6 bg-white/8 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-heading">25+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Años de experiencia</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6 bg-white/8 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-heading">30+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Especialidades</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6 bg-white/8 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 sm:col-span-1 col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-heading">50K+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Pacientes atendidos</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="bg-white text-hospital-primary hover:bg-white/95 font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Agendar por WhatsApp
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              
              <Button 
                onClick={handleMapClick}
                size="lg" 
                className="bg-hospital-secondary text-white hover:bg-hospital-secondary/90 font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] w-full sm:w-auto"
              >
                <MapPin className="w-5 h-5 mr-3" />
                Ver en Mapa
              </Button>
            </div>

            {/* Contact Info - Improved layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 text-white/90 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm font-medium">(238) 123-4567</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium">Urgencias 24/7</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder - Hidden on mobile, visible on lg+ */}
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

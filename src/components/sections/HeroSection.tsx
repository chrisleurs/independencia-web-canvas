
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Users, MapPin } from 'lucide-react';

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
    <>
      <section id="hero" className="min-h-screen flex items-center bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content - Mobile-first approach */}
            <div className="text-gray-900 space-y-8 lg:space-y-12 text-center lg:text-left">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-2 sm:mr-3 text-gray-500" />
                  <span className="text-gray-600">Tehuacán, Puebla</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-black">
                  Hospital
                  <span className="block text-hospital-primary">Independencia</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  Más de 25 años brindando atención médica de calidad con tecnología de vanguardia y el compromiso humano que tu familia merece
                </p>
              </div>

              {/* Stats - Medical professional design */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 lg:py-12">
                <div className="flex items-center space-x-4 sm:space-x-6 bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-hospital-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-hospital-primary">25+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Años de experiencia</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 sm:space-x-6 bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-hospital-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-hospital-primary">30+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Especialidades</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 sm:space-x-6 bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-1 col-span-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-hospital-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-hospital-primary">50K+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Pacientes atendidos</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons - Medical professional styling */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="bg-whatsapp text-white hover:bg-whatsapp/90 font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] w-full sm:w-auto"
                >
                  <WhatsAppIcon />
                  <span className="ml-3">Agendar por WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
                
                <Button 
                  onClick={handleMapClick}
                  size="lg" 
                  variant="outline"
                  className="border-2 border-hospital-primary text-hospital-primary bg-white hover:bg-hospital-primary hover:text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] w-full sm:w-auto"
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  Ver en Mapa
                </Button>
              </div>

              {/* Contact Info - Clean medical design */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 justify-center lg:justify-start">
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
                  <span className="text-lg mr-3">📞</span>
                  <span className="text-sm font-medium text-gray-700">Hospital: 238 382 4819</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-green-50 border border-green-200 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700">Urgencias 24/7</span>
                </div>
              </div>
            </div>

            {/* Hero Image Placeholder - Clean medical design */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-[500px] bg-gray-50 border-2 border-gray-100 rounded-3xl flex items-center justify-center shadow-sm">
                  <div className="text-center text-gray-400">
                    <div className="w-28 h-28 mx-auto mb-6 bg-hospital-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-14 h-14 text-hospital-primary" />
                    </div>
                    <p className="text-xl font-semibold text-gray-600">Imagen Principal</p>
                    <p className="text-sm text-gray-500">Hospital Independencia</p>
                  </div>
                </div>
                
                {/* Floating Elements - Subtle medical accents */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-hospital-primary/5 border border-hospital-primary/10 rounded-full animate-float"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-hospital-secondary/5 border border-hospital-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegant Shadow Divider - Medical Design */}
      <div 
        className="w-full bg-white relative"
        style={{ 
          height: '30px',
          boxShadow: '0 -10px 25px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* Additional subtle gradient for enhanced medical aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/20 to-transparent"></div>
      </div>
    </>
  );
};

export default HeroSection;

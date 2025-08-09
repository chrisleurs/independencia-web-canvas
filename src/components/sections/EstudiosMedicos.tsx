
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { estudios } from '@/data/estudios';

const EstudiosMedicos = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener información sobre los estudios médicos disponibles en Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
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
    <section className="section-padding bg-hospital-primary text-white">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Estudios Médicos
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tecnología de vanguardia para estudios de laboratorio, imagenología y diagnóstico especializado con resultados precisos y confiables
          </p>
          
          <div className="flex justify-between items-center mb-8">
            <div></div>
            <Link to="/estudios" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 font-semibold">
              Ver todos los estudios
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Grid de Estudios - CARDS BLANCAS sobre fondo azul */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {estudios.slice(0, 8).map((estudio) => {
            const Icon = estudio.icon;
            return (
              <Link
                key={estudio.id}
                to={`/estudios/${estudio.slug}`}
                className="block"
              >
                <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl cursor-pointer h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Ícono */}
                    <div className="w-14 h-14 bg-hospital-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Categoría */}
                    <div className="mb-3">
                      <span className="text-xs font-medium text-hospital-secondary bg-hospital-secondary/10 px-2 py-1 rounded-full uppercase tracking-wide">
                        {estudio.categoria}
                      </span>
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-lg font-semibold text-hospital-primary group-hover:text-hospital-secondary transition-colors duration-300 mb-3 flex-grow">
                      {estudio.titulo}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-hospital-gray text-sm leading-relaxed mb-4 line-clamp-2">
                      {estudio.descripcion}
                    </p>
                    
                    {/* Info adicional */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-xs text-hospital-gray mb-2">
                        <span>⏱️ {estudio.duracion}</span>
                        <span>📅 Disponible</span>
                      </div>
                      
                      <div className="text-xs text-hospital-primary font-medium group-hover:text-hospital-secondary transition-colors duration-300">
                        Ver detalles →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA Section - Botones centrados */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-whatsapp text-white hover:bg-whatsapp font-semibold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <WhatsAppIcon />
              <span className="ml-3">Agendar Estudio por WhatsApp</span>
            </Button>
            
            <Link to="/estudios">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-hospital-primary font-semibold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Ver Todos los Estudios
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          {/* Información adicional */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-lg mr-2">📞</span>
              <span className="text-white/90 font-medium">Tel: 238 382 4819</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <span className="text-lg mr-2">🕐</span>
              <span className="text-white/90 font-medium">Disponible 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstudiosMedicos;

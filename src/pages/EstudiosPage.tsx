
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { estudios } from '@/data/estudios';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

const EstudiosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEstudios = estudios.filter(estudio =>
    estudio.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estudio.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-hospital-light py-4">
        <div className="container-custom">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Estudios</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section - FONDO AZUL */}
      <section className="section-padding bg-hospital-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Estudios Médicos
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Contamos con tecnología de vanguardia para realizar estudios de laboratorio, imagenología y diagnóstico especializado con la más alta precisión
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-whatsapp text-white hover:bg-whatsapp font-semibold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <WhatsAppIcon />
              <span className="ml-3">Agendar Estudio por WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Búsqueda */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hospital-gray w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar estudio médico..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-base border-2 border-hospital-light focus:border-hospital-secondary transition-colors"
              />
            </div>
            
            <div className="text-center mt-4">
              <p className="text-hospital-gray">
                {filteredEstudios.length === 0 
                  ? 'No se encontraron estudios' 
                  : `${filteredEstudios.length} estudio${filteredEstudios.length > 1 ? 's' : ''} disponible${filteredEstudios.length > 1 ? 's' : ''}`
                }
              </p>
            </div>
          </div>

          {/* Grid de Estudios - CARDS BLANCAS */}
          {filteredEstudios.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEstudios.map((estudio) => {
                const Icon = estudio.icon;
                return (
                  <Link
                    key={estudio.id}
                    to={`/estudios/${estudio.slug}`}
                    className="block"
                  >
                    <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl cursor-pointer h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Ícono y Categoría */}
                        <div className="w-16 h-16 bg-hospital-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        
                        {/* Categoría */}
                        <div className="mb-2">
                          <span className="text-xs font-medium text-hospital-secondary bg-hospital-secondary/10 px-2 py-1 rounded-full uppercase tracking-wide">
                            {estudio.categoria}
                          </span>
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-lg font-semibold text-hospital-primary group-hover:text-hospital-secondary transition-colors duration-300 mb-3 flex-grow">
                          {estudio.titulo}
                        </h3>
                        
                        {/* Descripción */}
                        <p className="text-hospital-gray text-sm leading-relaxed mb-4 line-clamp-3">
                          {estudio.descripcion}
                        </p>
                        
                        {/* Info adicional */}
                        <div className="mt-auto space-y-2">
                          <div className="flex items-center justify-between text-xs text-hospital-gray">
                            <span>⏱️ {estudio.duracion}</span>
                            <span>📅 {estudio.disponibilidad.split(':')[0]}</span>
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
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-hospital-light rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-hospital-gray" />
              </div>
              <h3 className="text-xl font-semibold text-hospital-primary mb-2">
                No se encontraron estudios
              </h3>
              <p className="text-hospital-gray mb-6">
                Intenta con otros términos de búsqueda
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-hospital-accent hover:text-hospital-accent/80 font-semibold transition-colors"
              >
                Ver todos los estudios
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Final - FONDO AZUL */}
      <section className="section-padding bg-hospital-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas Realizarte un Estudio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agenda tu cita y obtén resultados confiables con la mejor tecnología médica
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg" 
              className="bg-whatsapp text-white hover:bg-whatsapp font-semibold px-8 py-4"
            >
              <WhatsAppIcon />
              <span className="ml-3">Contactar por WhatsApp</span>
            </Button>
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              <span className="text-lg font-bold mr-3">📞</span>
              <span className="text-white font-medium">Tel: 238 382 4819</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstudiosPage;

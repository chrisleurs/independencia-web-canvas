
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MapPin, Clock } from 'lucide-react';

const Restaurante = () => {
  const imagenes = [
    {
      titulo: 'Platos Balanceados',
      descripcion: 'Comidas nutritivas preparadas por profesionales',
      imagen: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Comedor Principal',
      descripcion: 'Espacios cómodos para pacientes y familiares',
      imagen: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Personal Profesional',
      descripcion: 'Chefs especializados en nutrición hospitalaria',
      imagen: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Área de Servicio',
      descripcion: 'Buffet con opciones variadas y saludables',
      imagen: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Menús Especializados',
      descripcion: 'Dietas adaptadas a necesidades médicas',
      imagen: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Ambiente Familiar',
      descripcion: 'Espacio acogedor para compartir en familia',
      imagen: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop&crop=center'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
            Restaurante
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos comidas saludables y balanceadas, preparadas por profesionales especializados en nutrición hospitalaria. 
            Disponible para pacientes, familiares y personal médico, brindando una experiencia gastronómica de calidad en un ambiente acogedor.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {imagenes.map((imagen, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative group">
                      <img
                        src={imagen.imagen}
                        alt={imagen.titulo}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">{imagen.titulo}</h3>
                          <p className="text-sm opacity-90">{imagen.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {imagenes.map((imagen, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div className="relative group">
                <img
                  src={imagen.imagen}
                  alt={imagen.titulo}
                  className="w-full h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{imagen.titulo}</h3>
                    <p className="text-sm opacity-90">{imagen.descripcion}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Location Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-hospital-primary mb-6 text-center">
            Ubicación del Restaurante
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="relative">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Mapa del Hospital</p>
                  <p className="text-xs">Ubicación exacta del restaurante</p>
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-hospital-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-primary mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Planta Baja, Avenida Independencia 1234<br />
                    Tehuacán, Puebla, México
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-hospital-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-hospital-primary mb-1">Horarios de Servicio</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Desayuno: 7:00 - 10:00 hrs</p>
                    <p>Comida: 13:00 - 16:00 hrs</p>
                    <p>Cena: 19:00 - 21:00 hrs</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-hospital-primary hover:bg-hospital-primary/90">
                  Ver el menú completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurante;

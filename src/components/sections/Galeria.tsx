
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Galeria = () => {
  const imagenes = [
    {
      titulo: 'Recepción Principal',
      descripcion: 'Área de recepción y bienvenida',
      imagen: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Habitaciones Privadas',
      descripcion: 'Habitaciones equipadas con tecnología moderna',
      imagen: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Quirófanos',
      descripcion: 'Salas de cirugía con equipamiento avanzado',
      imagen: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Equipo Médico',
      descripcion: 'Profesionales de la salud en acción',
      imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Laboratorio Clínico',
      descripcion: 'Equipos de análisis y diagnóstico',
      imagen: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center'
    },
    {
      titulo: 'Sala de Espera',
      descripcion: 'Espacios cómodos para pacientes y familiares',
      imagen: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=600&h=400&fit=crop&crop=center'
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-hospital-primary mb-4">
            Galería
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Conoce nuestras modernas instalaciones y el ambiente profesional que caracteriza al Hospital Independencia
          </p>
        </div>

        {/* Mobile and Tablet Carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {imagenes.map((imagen, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative group">
                      <img
                        src={imagen.imagen}
                        alt={imagen.titulo}
                        className="w-full h-56 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-base sm:text-lg mb-1">{imagen.titulo}</h3>
                          <p className="text-sm opacity-90">{imagen.descripcion}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-12 w-12 bg-white/90 hover:bg-white shadow-lg" />
            <CarouselNext className="right-2 h-12 w-12 bg-white/90 hover:bg-white shadow-lg" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {imagenes.map((imagen, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
              <div className="relative group">
                <img
                  src={imagen.imagen}
                  alt={imagen.titulo}
                  className="w-full h-64 xl:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-semibold text-lg mb-2 text-white">{imagen.titulo}</h3>
                    <p className="text-sm text-white/90">{imagen.descripcion}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;

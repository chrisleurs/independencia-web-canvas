
import React from 'react';
import { Card } from '@/components/ui/card';

const FotografiasIntermedia = () => {
  const imagenes = [
    {
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
      alt: 'Equipo médico moderno',
      titulo: 'Tecnología Avanzada'
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
      alt: 'Profesionales de la salud',
      titulo: 'Equipo Profesional'
    },
    {
      src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop&crop=center',
      alt: 'Instalaciones hospitalarias',
      titulo: 'Instalaciones Modernas'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
      alt: 'Atención personalizada',
      titulo: 'Atención Personalizada'
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Grid para desktop - 2x2 */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {imagenes.map((imagen, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl">
              <div className="relative">
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="w-full h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {imagen.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Grid para tablet */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4">
          {imagenes.slice(0, 4).map((imagen, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
              <div className="relative">
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-base">
                      {imagen.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Grid para móvil - una columna */}
        <div className="grid sm:hidden grid-cols-1 gap-4">
          {imagenes.slice(0, 3).map((imagen, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg rounded-xl">
              <div className="relative">
                <img
                  src={imagen.src}
                  alt={imagen.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-base">
                      {imagen.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Elemento decorativo central */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hospital-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FotografiasIntermedia;

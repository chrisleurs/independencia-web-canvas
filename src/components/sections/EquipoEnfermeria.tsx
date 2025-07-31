
import React from 'react';

const EquipoEnfermeria = () => {
  const equipoEnfermeria = [
    { nombre: 'Yeeni Avendaño', foto: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Ana Isabel Flores', foto: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Carlos García', foto: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Teresa Díaz', foto: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Ana Lleli Flores', foto: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Irais López', foto: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Jazmín Mexicano', foto: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face' },
    { nombre: 'Valeria Portela', foto: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face' }
  ];

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-hospital-primary mb-4">
          Equipo de Enfermería
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg px-4">
          Personal especializado en cuidados de enfermería profesional
        </p>
      </div>

      {/* Grid del equipo - Responsive optimizado */}
      <div className="grid-responsive-nursing">
        {equipoEnfermeria.map((enfermero, index) => (
          <div key={index} className="text-center">
            {/* Foto o círculo con iniciales - tamaño responsive */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 lg:mb-5 overflow-hidden border-2 sm:border-3 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              {enfermero.foto ? (
                <img
                  src={enfermero.foto}
                  alt={enfermero.nombre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-hospital-primary to-hospital-secondary flex items-center justify-center text-white text-sm sm:text-lg lg:text-xl font-bold">
                  {getInitials(enfermero.nombre)}
                </div>
              )}
            </div>
            
            {/* Nombre centrado - responsive text */}
            <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-hospital-title leading-tight px-2">
              {enfermero.nombre}
            </h3>
          </div>
        ))}
      </div>

      {/* Elemento decorativo */}
      <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-hospital-primary to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default EquipoEnfermeria;

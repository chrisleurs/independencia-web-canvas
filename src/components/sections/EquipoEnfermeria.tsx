
import React from 'react';

const EquipoEnfermeria = () => {
  const equipoEnfermeria = [
    { nombre: 'Yeeni Avendaño', foto: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
    { nombre: 'Ana Isabel Flores', foto: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952' },
    { nombre: 'Carlos García', foto: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e' },
    { nombre: 'Teresa Díaz', foto: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b' },
    { nombre: 'Ana Lleli Flores', foto: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c' },
    { nombre: 'Irais López', foto: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158' },
    { nombre: 'Jazmín Mexicano', foto: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952' },
    { nombre: 'Valeria Portela', foto: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e' }
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
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-hospital-primary mb-4">
          Equipo de Enfermería
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Personal especializado en cuidados de enfermería profesional
        </p>
      </div>

      {/* Grid del equipo - Cards con fotos más grandes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
        {equipoEnfermeria.map((enfermero, index) => (
          <div key={index} className="text-center">
            {/* Foto o círculo con iniciales - tamaño aumentado */}
            <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full mx-auto mb-5 overflow-hidden border-3 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              {enfermero.foto ? (
                <img
                  src={enfermero.foto}
                  alt={enfermero.nombre}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-hospital-primary to-hospital-secondary flex items-center justify-center text-white text-xl font-bold">
                  {getInitials(enfermero.nombre)}
                </div>
              )}
            </div>
            
            {/* Nombre centrado */}
            <h3 className="font-semibold text-lg text-hospital-title">
              {enfermero.nombre}
            </h3>
          </div>
        ))}
      </div>

      {/* Elemento decorativo */}
      <div className="flex justify-center mt-16 lg:mt-20">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hospital-primary to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default EquipoEnfermeria;

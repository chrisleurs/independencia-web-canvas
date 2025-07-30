
import React from 'react';

const EquipoEnfermeria = () => {
  const equipoEnfermeria = [
    { nombre: 'Yeeni Avendaño', foto: null },
    { nombre: 'Ana Isabel Flores', foto: null },
    { nombre: 'Carlos García', foto: null },
    { nombre: 'Teresa Díaz', foto: null },
    { nombre: 'Ana Lleli Flores', foto: null },
    { nombre: 'Irais López', foto: null },
    { nombre: 'Jazmín Mexicano', foto: null },
    { nombre: 'Valeria Portela', foto: null }
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

      {/* Grid del equipo - Cards con fotos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {equipoEnfermeria.map((enfermero, index) => (
          <div key={index} className="text-center">
            {/* Foto o círculo con iniciales */}
            <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              {enfermero.foto ? (
                <img
                  src={enfermero.foto}
                  alt={enfermero.nombre}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-hospital-primary to-hospital-secondary flex items-center justify-center text-white text-lg font-bold">
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
      <div className="flex justify-center mt-12 lg:mt-16">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hospital-primary to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default EquipoEnfermeria;

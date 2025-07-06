
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { getAllEspecialidades } from '@/data/especialidades';

const EspecialidadesMedicas = () => {
  const especialidades = getAllEspecialidades();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hospital-primary">
            Nuestras Especialidades
          </h2>
          <Link to="/especialidades" className="text-hospital-accent hover:text-hospital-accent/80 transition-colors flex items-center gap-2 font-semibold">
            Ver todas
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {especialidades.slice(0, 12).map((especialidad) => {
            const Icon = especialidad.icon;
            return (
              <Link
                key={especialidad.id}
                to={`/especialidades/${especialidad.slug}`}
                className="block"
              >
                <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl cursor-pointer">
                  <CardContent className="p-0 h-48 relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-hospital-light to-white"></div>
                    
                    {/* Icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 bg-hospital-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-center text-sm font-semibold text-hospital-primary group-hover:text-hospital-secondary transition-colors duration-300 leading-tight">
                        {especialidad.titulo}
                      </h3>
                    </div>

                    {/* Overlay con descripción en hover */}
                    <div className="absolute inset-0 bg-hospital-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <div className="text-center">
                        <Icon className="w-8 h-8 text-white mx-auto mb-3" />
                        <h4 className="text-white font-semibold text-sm mb-3">
                          {especialidad.titulo}
                        </h4>
                        <p className="text-white/90 text-xs leading-relaxed mb-3">
                          {especialidad.descripcion}
                        </p>
                        <div className="text-xs text-white/80 font-medium">
                          Ver detalles →
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesMedicas;

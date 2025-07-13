import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { especialidades } from '@/data/especialidades';

const EspecialidadesCompletas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEspecialidades = especialidades.filter(especialidad =>
    especialidad.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Búsqueda */}
        <div className="mb-12">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hospital-gray w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar especialidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-base border-2 border-hospital-light focus:border-hospital-secondary transition-colors"
            />
          </div>
          
          {/* Contador de resultados */}
          <div className="text-center mt-4">
            <p className="text-hospital-gray">
              {filteredEspecialidades.length === 0 
                ? 'No se encontraron especialidades' 
                : `${filteredEspecialidades.length} especialidad${filteredEspecialidades.length > 1 ? 'es' : ''} encontrada${filteredEspecialidades.length > 1 ? 's' : ''}`
              }
            </p>
          </div>
        </div>

        {/* Grid de especialidades */}
        {filteredEspecialidades.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEspecialidades.map((especialidad) => {
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
        ) : (
          /* Estado sin resultados */
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-hospital-light rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-hospital-gray" />
            </div>
            <h3 className="text-xl font-semibold text-hospital-primary mb-2">
              No se encontraron especialidades
            </h3>
            <p className="text-hospital-gray mb-6">
              Intenta con otros términos de búsqueda
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-hospital-accent hover:text-hospital-accent/80 font-semibold transition-colors"
            >
              Ver todas las especialidades
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EspecialidadesCompletas;

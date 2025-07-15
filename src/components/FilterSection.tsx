
import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useEspecialidadesConDoctores, EspecialidadConDoctores } from '@/hooks/useEspecialidadesConDoctores';

interface FilterSectionProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedEspecialidades: string[];
  onEspecialidadToggle: (especialidadId: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  searchTerm,
  onSearchChange,
  selectedEspecialidades,
  onEspecialidadToggle,
  onClearFilters,
  hasActiveFilters
}) => {
  const { data: especialidades, isLoading } = useEspecialidadesConDoctores();

  const isEspecialidadSelected = (especialidadId: string) => 
    selectedEspecialidades.includes(especialidadId);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-hospital-primary" />
        <h3 className="text-lg font-semibold text-gray-900">Filtrar Doctores</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="ml-auto text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4 mr-1" />
            Limpiar filtros
          </Button>
        )}
      </div>

      {/* Search by name */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Buscar por nombre del doctor..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-gray-300 focus:border-hospital-primary focus:ring-hospital-primary"
          />
        </div>
      </div>

      {/* Filter by specialty */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-3">Filtrar por especialidad:</p>
        {isLoading ? (
          <div className="flex gap-2">
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-24"></div>
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full animate-pulse w-28"></div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {especialidades?.map((especialidad) => (
              <Badge
                key={especialidad.id}
                variant={isEspecialidadSelected(especialidad.id) ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  isEspecialidadSelected(especialidad.id)
                    ? "bg-hospital-primary hover:bg-hospital-primary/90 text-white"
                    : "border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white"
                }`}
                onClick={() => onEspecialidadToggle(especialidad.id)}
              >
                {especialidad.titulo}
                {isEspecialidadSelected(especialidad.id) && (
                  <X className="w-3 h-3 ml-1" />
                )}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;

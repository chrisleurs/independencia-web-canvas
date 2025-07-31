
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { MessageCircle, ExternalLink, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDoctores } from '@/hooks/useDoctores';

const DoctoresGrid = () => {
  const { data: doctores, isLoading, error } = useDoctores();
  const [filtroEspecialidad, setFiltroEspecialidad] = useState<string>('todas');
  const [busqueda, setBusqueda] = useState('');

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const handleWhatsAppContact = (whatsapp: string, nombre: string) => {
    if (!whatsapp) return;
    const phoneNumber = `52${whatsapp.replace(/\s/g, '').replace(/[()]/g, '').replace(/\+52/g, '')}`;
    const doctorFirstName = nombre.split(' ').slice(0, 2).join(' ');
    const message = encodeURIComponent(`Hola ${doctorFirstName}, me gustaría agendar una consulta. ¿Cuál es su disponibilidad?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const especialidadesUnicas = useMemo(() => {
    if (!doctores) return [];
    const especialidades = Array.from(
      new Set(doctores.map(doctor => doctor.titulo))
    ).sort();
    return especialidades;
  }, [doctores]);

  const doctoresFiltrados = useMemo(() => {
    if (!doctores) return [];
    
    let filtrados = [...doctores];

    if (filtroEspecialidad !== 'todas') {
      filtrados = filtrados.filter(doctor => 
        doctor.titulo.toLowerCase().includes(filtroEspecialidad.toLowerCase())
      );
    }

    if (busqueda) {
      filtrados = filtrados.filter(doctor =>
        doctor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        doctor.titulo.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    return filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [doctores, filtroEspecialidad, busqueda]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        {/* Filtros skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full sm:w-60" />
        </div>
        {/* Grid skeleton - responsive */}
        <div className="grid-responsive-doctors">
          {Array.from({ length: 9 }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-full flex-shrink-0" />
                  <div className="space-y-2 min-w-0 flex-1">
                    <Skeleton className="h-5 w-full max-w-32" />
                    <Skeleton className="h-4 w-full max-w-40" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <div className="space-y-2 pt-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4 text-sm sm:text-base">Error al cargar los doctores</p>
        <Button onClick={() => window.location.reload()}>
          Reintentar
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filtros y búsqueda - Mobile-first responsive */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar por nombre o especialidad..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="pl-10 min-h-[48px] text-base"
          />
        </div>
        <Select value={filtroEspecialidad} onValueChange={setFiltroEspecialidad}>
          <SelectTrigger className="w-full sm:w-60 min-h-[48px] text-base">
            <SelectValue placeholder="Filtrar por especialidad" />
          </SelectTrigger>
          <SelectContent className="bg-white border shadow-lg z-50">
            <SelectItem value="todas">Todas las especialidades</SelectItem>
            {especialidadesUnicas.map((especialidad) => (
              <SelectItem key={especialidad} value={especialidad}>
                {especialidad}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Contador */}
      <div className="text-center mb-6">
        <p className="text-muted-foreground text-sm sm:text-base">
          Mostrando {doctoresFiltrados.length} de {doctores?.length || 0} doctores
        </p>
      </div>

      {/* Grid de doctores - Responsive optimizado */}
      <div className="grid-responsive-doctors">
        {doctoresFiltrados.map((doctor) => (
          <Card key={doctor.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4">
                {/* Círculo con iniciales o foto */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-hospital-primary to-hospital-secondary rounded-full flex items-center justify-center text-white text-sm sm:text-lg font-bold overflow-hidden flex-shrink-0">
                  {doctor.foto ? (
                    <img 
                      src={doctor.foto} 
                      alt={doctor.nombre}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    getInitials(doctor.nombre)
                  )}
                </div>
                
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-hospital-primary group-hover:text-hospital-secondary transition-colors line-clamp-2 leading-tight">
                    {doctor.nombre}
                  </h3>
                  <p className="text-hospital-gray font-medium text-xs sm:text-sm line-clamp-2 leading-tight mt-1">
                    {doctor.titulo}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col flex-1 justify-between space-y-4 card-content-mobile">
              {/* Descripción */}
              <div className="flex-1">
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {doctor.experiencia || doctor.formacion_detallada || `Especialista en ${doctor.titulo.toLowerCase()} del Hospital Independencia. Comprometido con brindar atención médica de calidad y calidez humana.`}
                </p>
              </div>

              {/* Botones - Stack vertical en móvil */}
              <div className="space-y-2 pt-2">
                {/* Botón Ver Perfil / Información Próximamente */}
                {doctor.has_detailed_profile ? (
                  <Link to={`/doctores/${doctor.slug}`} className="block">
                    <Button 
                      size="sm" 
                      className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white min-h-[44px] text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Ver Perfil Completo</span>
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="sm" 
                    className="w-full bg-gray-300 text-gray-500 cursor-not-allowed min-h-[44px] text-xs sm:text-sm"
                    disabled
                  >
                    <User className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Información Próximamente</span>
                  </Button>
                )}
                
                {/* Botón WhatsApp */}
                {doctor.whatsapp ? (
                  <Button 
                    size="sm" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white min-h-[44px] text-xs sm:text-sm"
                    onClick={() => handleWhatsAppContact(doctor.whatsapp!, doctor.nombre)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Contactar WhatsApp</span>
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    className="w-full bg-gray-300 text-gray-500 cursor-not-allowed min-h-[44px] text-xs sm:text-sm"
                    disabled
                  >
                    <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="truncate">WhatsApp No Disponible</span>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {doctoresFiltrados.length === 0 && (
        <div className="text-center py-12 px-4">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            No se encontraron doctores que coincidan con los filtros seleccionados.
          </p>
          <Button 
            onClick={() => {
              setBusqueda('');
              setFiltroEspecialidad('todas');
            }}
            className="min-h-[44px]"
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default DoctoresGrid;

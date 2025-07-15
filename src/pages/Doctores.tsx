
import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import FilterSection from '@/components/FilterSection';
import { Button } from '@/components/ui/button';
import { User, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDoctores } from '@/hooks/useDoctores';
import { useDoctoresByEspecialidad } from '@/hooks/useDoctores';

const Doctores = () => {
  const { data: doctores, isLoading, error } = useDoctores();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEspecialidades, setSelectedEspecialidades] = useState<string[]>([]);

  // Get doctors filtered by selected especialidades
  const doctoresFiltradosPorEspecialidad = useMemo(() => {
    if (!doctores || selectedEspecialidades.length === 0) {
      return doctores || [];
    }

    // For now, we'll implement a simple filter. 
    // In a real implementation, you'd need to join with doctor_especialidades table
    return doctores.filter(doctor => {
      // This is a placeholder - you'd need to implement the actual relationship query
      // For now, we'll return all doctors when especialidades are selected
      return true;
    });
  }, [doctores, selectedEspecialidades]);

  // Apply search filter
  const doctoresFiltrados = useMemo(() => {
    let filtered = doctoresFiltradosPorEspecialidad;

    if (searchTerm.trim()) {
      filtered = filtered.filter(doctor =>
        doctor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [doctoresFiltradosPorEspecialidad, searchTerm]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleEspecialidadToggle = (especialidadId: string) => {
    setSelectedEspecialidades(prev => 
      prev.includes(especialidadId)
        ? prev.filter(id => id !== especialidadId)
        : [...prev, especialidadId]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedEspecialidades([]);
  };

  const hasActiveFilters = searchTerm.trim() !== '' || selectedEspecialidades.length > 0;

  const handleWhatsAppContact = (doctor: any) => {
    if (doctor.whatsapp) {
      const phoneNumber = `52${doctor.whatsapp}`;
      const message = encodeURIComponent(`Hola ${doctor.nombre}, me gustaría agendar una cita. ¿Cuál es su disponibilidad?`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleCallHospital = (doctor: any) => {
    if (doctor.telefonoHospital) {
      window.open(`tel:+52${doctor.telefonoHospital}`, '_self');
    }
  };

  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  if (error) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Error al cargar los doctores</h2>
            <p className="text-gray-600">Por favor, intenta recargar la página.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Doctores
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Contamos con un equipo médico altamente calificado y comprometido con brindar la mejor atención a nuestros pacientes
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Filter Section */}
            <FilterSection
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              selectedEspecialidades={selectedEspecialidades}
              onEspecialidadToggle={handleEspecialidadToggle}
              onClearFilters={handleClearFilters}
              hasActiveFilters={hasActiveFilters}
            />

            {/* Loading State */}
            {isLoading && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Doctors Grid */}
            {!isLoading && (
              <>
                {doctoresFiltrados.length === 0 && hasActiveFilters && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <User className="w-16 h-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No se encontraron doctores
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Intenta ajustar los filtros de búsqueda para encontrar lo que buscas.
                    </p>
                    <Button onClick={handleClearFilters} variant="outline">
                      Limpiar filtros
                    </Button>
                  </div>
                )}

                {doctoresFiltrados.length > 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctoresFiltrados.map((doctor) => (
                      <div key={doctor.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                        {/* Foto del doctor */}
                        <div className="w-32 h-32 bg-gradient-to-br from-hospital-primary to-hospital-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                          {doctor.foto ? (
                            <img 
                              src={doctor.foto} 
                              alt={doctor.nombre}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            getInitials(doctor.nombre)
                          )}
                        </div>
                        
                        <div className="text-center mb-4">
                          <h3 className="text-xl font-bold mb-2">{doctor.nombre}</h3>
                          <p className="text-hospital-primary font-medium mb-2">{doctor.titulo}</p>
                          {doctor.experiencia && (
                            <p className="text-muted-foreground text-sm mb-3">{doctor.experiencia}</p>
                          )}
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          {doctor.whatsapp && (
                            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                              <MessageCircle className="w-4 h-4 text-green-600" />
                              <span>WhatsApp: {doctor.whatsapp}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          {doctor.has_detailed_profile && (
                            <Link to={`/doctores/${doctor.slug}`}>
                              <Button 
                                size="sm" 
                                className="w-full bg-hospital-primary hover:bg-hospital-primary/90 text-white mb-2"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Ver Perfil Completo
                              </Button>
                            </Link>
                          )}
                          
                          {doctor.whatsapp && (
                            <Button 
                              size="sm" 
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                              onClick={() => handleWhatsAppContact(doctor)}
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              WhatsApp
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            
            <div className="text-center mt-12">
              <div className="bg-slate-50 p-8 rounded-2xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">¿Buscas una especialidad específica?</h2>
                <p className="text-muted-foreground mb-6">
                  Contamos con más de 18 especialidades médicas. Contacta con nosotros para conocer la disponibilidad de nuestros especialistas.
                </p>
                <Link to="/especialidades">
                  <Button size="lg" className="mr-4">
                    Ver Especialidades
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar: (238) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Doctores;

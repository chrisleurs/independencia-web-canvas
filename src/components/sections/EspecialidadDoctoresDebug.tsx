
import React from 'react';
import { useEspecialidadBySlug } from '@/hooks/useEspecialidades';
import { useDoctoresByEspecialidad } from '@/hooks/useDoctores';

interface EspecialidadDoctoresDebugProps {
  slug: string;
}

const EspecialidadDoctoresDebug = ({ slug }: EspecialidadDoctoresDebugProps) => {
  const { data: especialidad, isLoading: especialidadLoading } = useEspecialidadBySlug(slug);
  const { data: doctores, isLoading: doctoresLoading } = useDoctoresByEspecialidad(especialidad?.id || '');

  React.useEffect(() => {
    console.log('🔍 DEBUG - Especialidad Debug Component');
    console.log('Slug:', slug);
    console.log('Especialidad loading:', especialidadLoading);
    console.log('Especialidad data:', especialidad);
    console.log('Doctores loading:', doctoresLoading);
    console.log('Doctores data:', doctores);
  }, [slug, especialidad, doctores, especialidadLoading, doctoresLoading]);

  if (especialidadLoading) {
    return <div>Loading especialidad...</div>;
  }

  if (!especialidad) {
    return <div>No especialidad found</div>;
  }

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
      <h3 className="font-bold text-lg mb-2">DEBUG: {especialidad.titulo}</h3>
      <p><strong>Especialidad ID:</strong> {especialidad.id}</p>
      <p><strong>Slug:</strong> {slug}</p>
      
      {doctoresLoading ? (
        <p>Loading doctores...</p>
      ) : (
        <div>
          <p><strong>Doctores encontrados:</strong> {doctores?.length || 0}</p>
          {doctores && doctores.length > 0 && (
            <ul className="mt-2">
              {doctores.map(doctor => (
                <li key={doctor.id} className="ml-4">
                  • {doctor.nombre} - {doctor.titulo}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default EspecialidadDoctoresDebug;

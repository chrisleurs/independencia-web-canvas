
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface EspecialidadConDoctores {
  id: string;
  titulo: string;
  slug: string;
}

export const useEspecialidadesConDoctores = () => {
  return useQuery({
    queryKey: ['especialidades-con-doctores'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctor_especialidades')
        .select(`
          especialidad_id,
          especialidades (
            id,
            titulo,
            slug
          )
        `);
      
      if (error) throw error;
      
      // Extract unique specialties
      const especialidades = data
        .map(item => item.especialidades)
        .filter((especialidad, index, self) => 
          especialidad && self.findIndex(e => e?.id === especialidad.id) === index
        ) as EspecialidadConDoctores[];
      
      return especialidades.sort((a, b) => a.titulo.localeCompare(b.titulo));
    },
  });
};

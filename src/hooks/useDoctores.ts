
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface DoctorDB {
  id: string;
  nombre: string;
  slug: string;
  titulo: string;
  experiencia?: string;
  foto?: string;
  whatsapp?: string;
  certificaciones: string[] | null;
  has_detailed_profile: boolean;
  biografia?: string;
  educacion: string[] | null;
  logros: string[] | null;
  horarios_atencion?: string;
  ubicacion_consultorio?: string;
  // New fields from migration
  mision?: string;
  telefono_hospital?: string;
  telefonos_adicionales: string[] | null;
  areas_atencion: string[] | null;
  horario_detallado?: string;
  reconocimientos: string[] | null;
  formacion_detallada?: string;
  created_at: string;
  updated_at: string;
}

export const useDoctores = () => {
  return useQuery({
    queryKey: ['doctores'],
    queryFn: async () => {
      console.log('Fetching doctores from Supabase...');
      const { data, error } = await supabase
        .from('doctores')
        .select('*')
        .order('nombre');
      
      if (error) {
        console.error('Error fetching doctores:', error);
        throw error;
      }
      
      console.log(`Fetched ${data?.length || 0} doctores from Supabase`);
      return data as DoctorDB[];
    },
  });
};

export const useDoctorBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['doctor', slug],
    queryFn: async () => {
      console.log(`Fetching doctor with slug: ${slug}`);
      const { data, error } = await supabase
        .from('doctores')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('Error fetching doctor:', error);
        throw error;
      }
      
      console.log('Fetched doctor:', data?.nombre);
      return data as DoctorDB;
    },
    enabled: !!slug,
  });
};

export const useDoctoresByEspecialidad = (especialidadId: string) => {
  return useQuery({
    queryKey: ['doctores-especialidad', especialidadId],
    queryFn: async () => {
      console.log(`Fetching doctores for especialidad: ${especialidadId}`);
      const { data, error } = await supabase
        .from('doctor_especialidades')
        .select(`
          doctor_id,
          doctores (*)
        `)
        .eq('especialidad_id', especialidadId);
      
      if (error) {
        console.error('Error fetching doctores by especialidad:', error);
        throw error;
      }
      
      const doctores = data.map(item => item.doctores).filter(Boolean) as DoctorDB[];
      console.log(`Found ${doctores.length} doctores for especialidad ${especialidadId}`);
      return doctores;
    },
    enabled: !!especialidadId,
  });
};

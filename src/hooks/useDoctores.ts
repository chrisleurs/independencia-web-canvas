
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
  created_at: string;
  updated_at: string;
}

export const useDoctores = () => {
  return useQuery({
    queryKey: ['doctores'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctores')
        .select('*')
        .order('nombre');
      
      if (error) throw error;
      return data as DoctorDB[];
    },
  });
};

export const useDoctorBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['doctor', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctores')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data as DoctorDB;
    },
    enabled: !!slug,
  });
};

export const useDoctoresByEspecialidad = (especialidadId: string) => {
  return useQuery({
    queryKey: ['doctores-especialidad', especialidadId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('doctor_especialidades')
        .select(`
          doctor_id,
          doctores (*)
        `)
        .eq('especialidad_id', especialidadId);
      
      if (error) throw error;
      return data.map(item => item.doctores).filter(Boolean) as DoctorDB[];
    },
    enabled: !!especialidadId,
  });
};

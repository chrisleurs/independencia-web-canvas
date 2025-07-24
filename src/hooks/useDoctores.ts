
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
      const { data, error } = await supabase
        .from('doctores')
        .select('*')
        .order('nombre');
      
      if (error) {
        throw error;
      }
      
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
      
      if (error) {
        throw error;
      }
      
      return data as DoctorDB;
    },
    enabled: !!slug,
  });
};

export const useDoctoresByEspecialidad = (especialidadId: string) => {
  return useQuery({
    queryKey: ['doctores-especialidad', especialidadId],
    queryFn: async () => {
      if (!especialidadId) {
        return [];
      }
      
      const { data, error } = await supabase
        .from('doctor_especialidades')
        .select(`
          doctor_id,
          especialidad_id,
          doctores (
            id,
            nombre,
            slug,
            titulo,
            experiencia,
            foto,
            whatsapp,
            certificaciones,
            has_detailed_profile,
            biografia,
            educacion,
            logros,
            horarios_atencion,
            ubicacion_consultorio,
            mision,
            telefono_hospital,
            telefonos_adicionales,
            areas_atencion,
            horario_detallado,
            reconocimientos,
            formacion_detallada,
            created_at,
            updated_at
          )
        `)
        .eq('especialidad_id', especialidadId);
      
      if (error) {
        throw error;
      }
      
      const doctores = data
        ?.map(item => item.doctores)
        .filter(Boolean) as DoctorDB[];
      
      return doctores || [];
    },
    enabled: !!especialidadId,
  });
};

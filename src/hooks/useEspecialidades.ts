
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface EspecialidadDB {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  descripcion_detallada?: string;
  icon_name: string;
  servicios: string[] | null;
  created_at: string;
  updated_at: string;
}

export const useEspecialidades = () => {
  return useQuery({
    queryKey: ['especialidades'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('especialidades')
        .select('*')
        .order('titulo');
      
      if (error) throw error;
      return data as EspecialidadDB[];
    },
  });
};

export const useEspecialidadBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['especialidad', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('especialidades')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data as EspecialidadDB;
    },
    enabled: !!slug,
  });
};

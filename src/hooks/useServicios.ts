
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ServicioDB {
  id: string;
  titulo: string;
  slug: string;
  descripcion_corta: string;
  descripcion_completa: string;
  incluye: string[] | null;
  tecnologia: string[] | null;
  beneficios: string[] | null;
  requisitos: string[] | null;
  horarios: string;
  icon_name: string;
  imagen?: string;
  created_at: string;
  updated_at: string;
}

export const useServicios = () => {
  return useQuery({
    queryKey: ['servicios'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('servicios')
        .select('*')
        .order('titulo');
      
      if (error) throw error;
      return data as ServicioDB[];
    },
  });
};

export const useServicioBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['servicio', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('servicios')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data as ServicioDB;
    },
    enabled: !!slug,
  });
};

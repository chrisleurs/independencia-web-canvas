
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
      console.log('🔍 useEspecialidades: Fetching especialidades from Supabase...');
      const { data, error } = await supabase
        .from('especialidades')
        .select('*')
        .order('titulo');
      
      if (error) {
        console.error('❌ useEspecialidades: Error fetching especialidades:', error);
        throw error;
      }
      
      console.log(`✅ useEspecialidades: Fetched ${data?.length || 0} especialidades from Supabase`);
      console.log('📊 useEspecialidades: Sample data:', data?.slice(0, 2));
      return data as EspecialidadDB[];
    },
  });
};

export const useEspecialidadBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['especialidad', slug],
    queryFn: async () => {
      console.log(`🔍 useEspecialidadBySlug: Fetching especialidad with slug: ${slug}`);
      const { data, error } = await supabase
        .from('especialidades')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error('❌ useEspecialidadBySlug: Error fetching especialidad:', error);
        throw error;
      }
      
      console.log('✅ useEspecialidadBySlug: Fetched especialidad:', data?.titulo);
      console.log('📊 useEspecialidadBySlug: Especialidad data:', data);
      return data as EspecialidadDB;
    },
    enabled: !!slug,
  });
};

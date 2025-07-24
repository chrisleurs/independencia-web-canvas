
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
      
      console.log('✅ Doctores cargados exitosamente');
      console.log(`✅ Total doctores: ${data?.length || 0}`);
      
      const doctoresConPerfil = data?.filter(d => d.has_detailed_profile) || [];
      console.log(`✅ Doctores con perfil detallado: ${doctoresConPerfil.length}`);
      
      // Log específico para los nuevos doctores de Ginecología y Anestesiología
      const nuevosGinecologiaAnestesia = [
        'Dra. Edith Jazmín Calvo Santana',
        'Dra. Nayeli del Rayo Sánchez Garibay',
        'Dr. Moisés Héctor Sánchez Pérez',
        'Dra. Luz María Gil Sandoval',
        'Dra. Marianela Orellan Gorocica',
        'Dr. Christian Misael Galicia Castelán',
        'Dra. María Teresa Carrera Balderas'
      ];
      
      console.log('🔍 VERIFICANDO NUEVOS DOCTORES GINECOLOGÍA Y ANESTESIOLOGÍA:');
      nuevosGinecologiaAnestesia.forEach(nombre => {
        const doctor = data?.find(d => d.nombre === nombre);
        if (doctor && doctor.has_detailed_profile) {
          console.log(`✅ ${nombre} - Perfil detallado ACTIVO`);
          console.log(`   - Especialidad: ${doctor.titulo}`);
          console.log(`   - Slug: ${doctor.slug}`);
          console.log(`   - WhatsApp: ${doctor.whatsapp || 'No disponible'}`);
          console.log(`   - Áreas de atención: ${doctor.areas_atencion?.length || 0}`);
          console.log(`   - Misión: ${doctor.mision ? '✅' : '❌'}`);
        } else {
          console.log(`❌ ${nombre} - Perfil no encontrado o inactivo`);
        }
      });
      
      // Log del total acumulado
      console.log(`🎯 TOTAL ACUMULADO: ${doctoresConPerfil.length} doctores con páginas individuales completas`);
      
      return data as DoctorDB[];
    },
  });
};

export const useDoctorBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['doctor', slug],
    queryFn: async () => {
      console.log(`🔍 Buscando doctor con slug: ${slug}`);
      
      const { data, error } = await supabase
        .from('doctores')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) {
        console.error(`❌ Error al buscar doctor ${slug}:`, error);
        throw error;
      }
      
      console.log(`✅ Doctor encontrado: ${data.nombre}`);
      console.log(`✅ Perfil detallado: ${data.has_detailed_profile}`);
      console.log(`✅ Especialidad: ${data.titulo}`);
      console.log(`✅ Áreas de atención: ${data.areas_atencion?.length || 0}`);
      
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

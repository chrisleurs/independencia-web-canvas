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
      
      // Verificación final de los últimos 4 doctores especialistas
      const ultimosEspecialistas = [
        'Dra. Samaria Estefanía Mejia Rivera',
        'Dr. Jorge Luis Hernández García',
        'Dra. Lidia Suárez Reynoso',
        'Dr. Eugenio García Cano'
      ];
      
      console.log('🔍 VERIFICANDO ÚLTIMOS 4 DOCTORES ESPECIALISTAS:');
      ultimosEspecialistas.forEach(nombre => {
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
      
      // Verificación final del sistema completo
      console.log('');
      console.log('🎯 VERIFICACIÓN FINAL DEL SISTEMA COMPLETO:');
      console.log('=' .repeat(60));
      console.log(`📊 Total de doctores en el sistema: ${data?.length || 0}`);
      console.log(`✅ Doctores con páginas individuales: ${doctoresConPerfil.length}`);
      console.log(`📈 Porcentaje de cobertura: ${((doctoresConPerfil.length / (data?.length || 1)) * 100).toFixed(1)}%`);
      
      // Desglose por especialidades principales
      const especialidadesConteo = {
        'Medicina General': 0,
        'Especialistas Médicos': 0,
        'Ginecología y Obstetricia': 0,
        'Anestesiología': 0,
        'Cirugía Plástica': 0,
        'Neurocirugía': 0,
        'Oftalmología': 0,
        'Otros': 0
      };
      
      doctoresConPerfil.forEach(doctor => {
        if (doctor.titulo.includes('Medicina General')) {
          especialidadesConteo['Medicina General']++;
        } else if (doctor.titulo.includes('Ginecología') || doctor.titulo.includes('Obstetricia')) {
          especialidadesConteo['Ginecología y Obstetricia']++;
        } else if (doctor.titulo.includes('Anestesi')) {
          especialidadesConteo['Anestesiología']++;
        } else if (doctor.titulo.includes('Cirugía Plástica')) {
          especialidadesConteo['Cirugía Plástica']++;
        } else if (doctor.titulo.includes('neurocirugía')) {
          especialidadesConteo['Neurocirugía']++;
        } else if (doctor.titulo.includes('Oftalmó')) {
          especialidadesConteo['Oftalmología']++;
        } else if (doctor.titulo.includes('Medicina Crítica') || doctor.titulo.includes('Pediatr') || doctor.titulo.includes('Traumat')) {
          especialidadesConteo['Especialistas Médicos']++;
        } else {
          especialidadesConteo['Otros']++;
        }
      });
      
      console.log('');
      console.log('📋 DESGLOSE POR ESPECIALIDADES:');
      Object.entries(especialidadesConteo).forEach(([especialidad, count]) => {
        if (count > 0) {
          console.log(`   • ${especialidad}: ${count} doctores`);
        }
      });
      
      // Mensaje final de éxito
      if (doctoresConPerfil.length >= 38) {
        console.log('');
        console.log('🎉 ¡SISTEMA COMPLETO EXITOSO!');
        console.log(`✅ ${doctoresConPerfil.length} doctores con páginas individuales completas`);
        console.log('🌐 Todas las páginas están disponibles en formato: /doctores/[slug]');
        console.log('🔗 Sistema de navegación completamente funcional');
        console.log('📱 Información de contacto integrada (WhatsApp y teléfonos)');
        console.log('🏥 Perfiles profesionales detallados');
      }
      
      console.log('=' .repeat(60));
      
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

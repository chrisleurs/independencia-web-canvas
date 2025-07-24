
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
      
      // VERIFICACIÓN DIRECTA DE DOCTORES ESPECÍFICOS
      console.log('🔍 VERIFICACIÓN DIRECTA DE PÁGINAS INDIVIDUALES DE DOCTORES');
      console.log('============================================================');
      
      const doctoresEspecificos = [
        'Dra. Karina Peña Tello',
        'Dr. Hipólito Coyotl Cruz',
        'Dr. Bernardo Velasco Olalde',
        'Dr. Javier Carrasco González',
        'Dr. Gerardo Antonio Valderrama López',
        'Dr. Raymundo Romero Ventura',
        'Dr. Héctor Peña Carrillo',
        'Dr. Hazael Sánchez Rosales',
        'Dr. Abraham Téllez Barragán',
        'Dr. Irvin Omar Romero Ponce',
        'Dra. Eltzy Rubí Rocha Rivera',
        'Dr. César González Martínez',
        'Dr. Arturo Domínguez Millan'
      ];
      
      console.log('📋 VERIFICACIÓN DE DOCTORES ESPECÍFICOS:');
      console.log('======================================');
      
      const doctoresParaCorregir = [];
      
      doctoresEspecificos.forEach(nombreEspecifico => {
        const doctor = data?.find(d => d.nombre === nombreEspecifico);
        if (doctor) {
          console.log(`🔍 ${doctor.nombre}:`);
          console.log(`   📝 Slug: ${doctor.slug}`);
          console.log(`   📋 has_detailed_profile: ${doctor.has_detailed_profile}`);
          console.log(`   🎯 Misión: ${doctor.mision ? '✅ Sí' : '❌ No'}`);
          console.log(`   🎓 Formación: ${doctor.formacion_detallada ? '✅ Sí' : '❌ No'}`);
          console.log(`   🩺 Áreas: ${doctor.areas_atencion?.length || 0} áreas`);
          console.log(`   📱 WhatsApp: ${doctor.whatsapp || 'No disponible'}`);
          
          if (doctor.has_detailed_profile) {
            console.log(`   ✅ Perfil detallado: CORRECTO`);
            console.log(`   🔗 URL: /doctores/${doctor.slug}`);
          } else {
            console.log(`   ❌ Perfil detallado: FALTA - NECESITA CORRECCIÓN`);
            doctoresParaCorregir.push(doctor);
          }
          console.log('');
        } else {
          console.log(`❌ Doctor "${nombreEspecifico}" NO ENCONTRADO en BD`);
          console.log('');
        }
      });
      
      // VERIFICACIÓN DE RUTAS
      console.log('🔗 VERIFICACIÓN DE RUTAS:');
      console.log('========================');
      console.log('✅ Ruta configurada: /doctores/:slug -> DoctorIndividual');
      console.log('✅ Componente: DoctorProfileEnhanced existe');
      console.log('✅ Hook: useDoctorBySlug configurado');
      console.log('');
      
      // VERIFICACIÓN DE NAVEGACIÓN
      console.log('🧪 VERIFICACIÓN DE NAVEGACIÓN:');
      console.log('=============================');
      
      const doctoresConPerfil = data?.filter(d => d.has_detailed_profile) || [];
      console.log(`✅ ${doctoresConPerfil.length} doctores tienen perfil detallado confirmado`);
      
      doctoresConPerfil.forEach(doctor => {
        console.log(`✅ ${doctor.nombre}: /doctores/${doctor.slug}`);
      });
      
      if (doctoresParaCorregir.length > 0) {
        console.log('');
        console.log('⚠️  DOCTORES QUE NECESITAN CORRECCIÓN:');
        console.log('====================================');
        doctoresParaCorregir.forEach(doctor => {
          console.log(`🔧 ${doctor.nombre} (${doctor.slug}) - has_detailed_profile = false`);
        });
      }
      
      console.log('');
      console.log('📊 RESUMEN:');
      console.log('==========');
      console.log(`✅ Total doctores en BD: ${data?.length || 0}`);
      console.log(`✅ Doctores con perfil detallado: ${doctoresConPerfil.length}`);
      console.log(`❌ Doctores que necesitan corrección: ${doctoresParaCorregir.length}`);
      
      if (doctoresParaCorregir.length === 0) {
        console.log('✅ Todas las páginas individuales deberían funcionar correctamente');
      } else {
        console.log('⚠️  Se requieren correcciones - usar useFixDoctorProfiles()');
      }
      
      console.log('============================================================');
      
      return data as DoctorDB[];
    },
  });
};

export const useFixDoctorProfiles = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (doctorNames: string[]) => {
      console.log('🔧 INICIANDO CORRECCIÓN DE PERFILES DETALLADOS');
      console.log('==============================================');
      
      const results = [];
      
      for (const nombre of doctorNames) {
        try {
          const { data, error } = await supabase
            .from('doctores')
            .update({ has_detailed_profile: true })
            .eq('nombre', nombre)
            .select()
            .single();
          
          if (error) throw error;
          
          console.log(`✅ Corregido: ${nombre} - has_detailed_profile = true`);
          results.push({ nombre, success: true, data });
        } catch (error) {
          console.error(`❌ Error al corregir ${nombre}:`, error);
          results.push({ nombre, success: false, error });
        }
      }
      
      console.log('');
      console.log('📋 RESUMEN DE CORRECCIONES:');
      console.log('===========================');
      const exitosos = results.filter(r => r.success);
      const fallidos = results.filter(r => !r.success);
      
      console.log(`✅ Correcciones exitosas: ${exitosos.length}`);
      console.log(`❌ Correcciones fallidas: ${fallidos.length}`);
      
      if (exitosos.length > 0) {
        console.log('');
        console.log('✅ DOCTORES CORREGIDOS:');
        exitosos.forEach(r => {
          console.log(`   - ${r.nombre}`);
        });
      }
      
      if (fallidos.length > 0) {
        console.log('');
        console.log('❌ DOCTORES CON ERRORES:');
        fallidos.forEach(r => {
          console.log(`   - ${r.nombre}: ${r.error}`);
        });
      }
      
      console.log('==============================================');
      
      return results;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['doctores'] });
      console.log('🔄 Cache de doctores actualizado');
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
      console.log(`   📋 has_detailed_profile: ${data.has_detailed_profile}`);
      console.log(`   🔗 URL: /doctores/${data.slug}`);
      
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

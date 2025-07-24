
import React, { useEffect } from 'react';
import { useDoctores } from '@/hooks/useDoctores';

const DoctorDetailedProfileDiagnostic = () => {
  const { data: doctores, isLoading, error } = useDoctores();

  useEffect(() => {
    if (!isLoading && doctores) {
      console.log('🔍 DIAGNÓSTICO DE PERFILES DETALLADOS');
      console.log('=====================================');
      
      // Filtrar doctores con perfiles detallados
      const doctoresConPerfilDetallado = doctores.filter(doctor => doctor.has_detailed_profile);
      const doctoresSinPerfilDetallado = doctores.filter(doctor => !doctor.has_detailed_profile);
      
      console.log(`📊 RESUMEN GENERAL:`);
      console.log(`   Total doctores: ${doctores.length}`);
      console.log(`   Con perfil detallado: ${doctoresConPerfilDetallado.length}`);
      console.log(`   Sin perfil detallado: ${doctoresSinPerfilDetallado.length}`);
      console.log('');
      
      // Mostrar doctores CON perfil detallado
      if (doctoresConPerfilDetallado.length > 0) {
        console.log('✅ DOCTORES CON PERFIL DETALLADO:');
        doctoresConPerfilDetallado.forEach((doctor, index) => {
          console.log(`${index + 1}. ${doctor.nombre}`);
          console.log(`   📝 Slug: ${doctor.slug}`);
          console.log(`   🔗 URL: /doctores/${doctor.slug}`);
          console.log(`   📋 Título: ${doctor.titulo}`);
          console.log(`   📱 WhatsApp: ${doctor.whatsapp || 'No disponible'}`);
          console.log(`   🩺 Áreas: ${doctor.areas_atencion?.length || 0} áreas`);
          console.log(`   🎓 Formación: ${doctor.formacion_detallada ? '✅' : '❌'}`);
          console.log(`   🎯 Misión: ${doctor.mision ? '✅' : '❌'}`);
          console.log('');
        });
      }
      
      // Mostrar doctores SIN perfil detallado
      if (doctoresSinPerfilDetallado.length > 0) {
        console.log('❌ DOCTORES SIN PERFIL DETALLADO:');
        doctoresSinPerfilDetallado.forEach((doctor, index) => {
          console.log(`${index + 1}. ${doctor.nombre}`);
          console.log(`   📝 Slug: ${doctor.slug}`);
          console.log(`   📋 Título: ${doctor.titulo}`);
          console.log(`   📱 WhatsApp: ${doctor.whatsapp || 'No disponible'}`);
          console.log('');
        });
      }
      
      // Análisis específico de especialidades
      console.log('🏥 ANÁLISIS POR ESPECIALIDADES:');
      console.log('================================');
      
      // Medicina Crítica - Terapia Intensiva
      const medicoCriticos = doctoresConPerfilDetallado.filter(doctor => 
        doctor.titulo.toLowerCase().includes('medicina crítica') || 
        doctor.titulo.toLowerCase().includes('terapia intensiva')
      );
      
      console.log(`🫀 Medicina Crítica - Terapia Intensiva:`);
      console.log(`   Doctores con perfil: ${medicoCriticos.length}`);
      medicoCriticos.forEach(doctor => {
        console.log(`   - ${doctor.nombre} (${doctor.slug})`);
      });
      console.log('');
      
      // Pediatría
      const pediatras = doctoresConPerfilDetallado.filter(doctor => 
        doctor.titulo.toLowerCase().includes('pediatr') || 
        doctor.titulo.toLowerCase().includes('neonat')
      );
      
      console.log(`👶 Pediatría:`);
      console.log(`   Doctores con perfil: ${pediatras.length}`);
      pediatras.forEach(doctor => {
        console.log(`   - ${doctor.nombre} (${doctor.slug})`);
      });
      console.log('');
      
      // Traumatología
      const traumatologos = doctoresConPerfilDetallado.filter(doctor => 
        doctor.titulo.toLowerCase().includes('traumat') || 
        doctor.titulo.toLowerCase().includes('ortoped')
      );
      
      console.log(`🦴 Traumatología y Ortopedia:`);
      console.log(`   Doctores con perfil: ${traumatologos.length}`);
      traumatologos.forEach(doctor => {
        console.log(`   - ${doctor.nombre} (${doctor.slug})`);
      });
      console.log('');
      
      // Medicina General
      const medicosGenerales = doctoresConPerfilDetallado.filter(doctor => 
        doctor.titulo.toLowerCase().includes('medicina general') || 
        doctor.titulo.toLowerCase().includes('médico general')
      );
      
      console.log(`🩺 Medicina General:`);
      console.log(`   Doctores con perfil: ${medicosGenerales.length}`);
      medicosGenerales.forEach(doctor => {
        console.log(`   - ${doctor.nombre} (${doctor.slug})`);
      });
      console.log('');
      
      // Verificación de rutas
      console.log('🔗 VERIFICACIÓN DE RUTAS:');
      console.log('========================');
      doctoresConPerfilDetallado.forEach(doctor => {
        console.log(`✅ ${doctor.nombre}: /doctores/${doctor.slug}`);
      });
      
      console.log('');
      console.log('🎯 RECOMENDACIONES:');
      console.log('==================');
      console.log('1. Verificar que el botón "Ver Perfil Completo" aparezca solo para doctores con has_detailed_profile = true');
      console.log('2. Asegurar que las rutas /doctores/:slug estén configuradas correctamente');
      console.log('3. Revisar que la lógica de filtrado en las páginas de especialidades funcione');
      console.log('4. Confirmar que todos los doctores especialistas tengan has_detailed_profile = true');
      console.log('=====================================');
    }
  }, [doctores, isLoading]);

  if (error) {
    console.error('❌ Error al cargar doctores:', error);
  }

  return null;
};

export default DoctorDetailedProfileDiagnostic;

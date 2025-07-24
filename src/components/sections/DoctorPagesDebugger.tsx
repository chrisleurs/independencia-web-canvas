
import React, { useEffect } from 'react';
import { useDoctores } from '@/hooks/useDoctores';
import { useNavigate } from 'react-router-dom';

const DoctorPagesDebugger = () => {
  const { data: doctores, isLoading, error } = useDoctores();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && doctores) {
      console.log('🔍 DIAGNÓSTICO COMPLETO DE PÁGINAS INDIVIDUALES DE DOCTORES');
      console.log('============================================================');
      
      // FASE 1: VERIFICAR ACTUALIZACIONES EN BD
      console.log('📊 FASE 1: VERIFICACIÓN DE BASE DE DATOS');
      console.log('=========================================');
      
      const doctoresConPerfilDetallado = doctores.filter(doctor => doctor.has_detailed_profile);
      const doctoresSinPerfilDetallado = doctores.filter(doctor => !doctor.has_detailed_profile);
      
      console.log(`✅ Total doctores en BD: ${doctores.length}`);
      console.log(`✅ Doctores con perfil detallado: ${doctoresConPerfilDetallado.length}`);
      console.log(`❌ Doctores sin perfil detallado: ${doctoresSinPerfilDetallado.length}`);
      console.log('');
      
      // Mostrar doctores con perfil detallado
      console.log('📋 DOCTORES CON PERFIL DETALLADO (has_detailed_profile = true):');
      doctoresConPerfilDetallado.forEach((doctor, index) => {
        console.log(`${index + 1}. ${doctor.nombre}`);
        console.log(`   📝 Slug: ${doctor.slug}`);
        console.log(`   🔗 URL esperada: /doctores/${doctor.slug}`);
        console.log(`   📱 WhatsApp: ${doctor.whatsapp || 'No disponible'}`);
        console.log(`   🎓 Formación: ${doctor.formacion_detallada ? '✅ Sí' : '❌ No'}`);
        console.log(`   🎯 Misión: ${doctor.mision ? '✅ Sí' : '❌ No'}`);
        console.log(`   🩺 Áreas: ${doctor.areas_atencion?.length || 0} áreas`);
        console.log('');
      });
      
      // FASE 2: VERIFICAR RUTAS ESPECÍFICAS
      console.log('🔗 FASE 2: VERIFICACIÓN DE RUTAS ESPECÍFICAS');
      console.log('============================================');
      
      const rutasEspecificas = [
        'dra-karina-pena-tello',
        'dr-hipolito-coyotl-cruz',
        'dr-hector-pena-carrillo',
        'dr-abraham-tellez-barragan',
        'dr-hazael-sanchez-rosales',
        'dr-irvin-omar-romero-ponce',
        'dra-eltzy-rubi-rocha-rivera',
        'dr-cesar-gonzalez-martinez',
        'dr-arturo-dominguez-millan'
      ];
      
      rutasEspecificas.forEach(slug => {
        const doctor = doctores.find(d => d.slug === slug);
        if (doctor) {
          console.log(`✅ Ruta encontrada: /doctores/${slug}`);
          console.log(`   📋 Nombre: ${doctor.nombre}`);
          console.log(`   🔍 Perfil detallado: ${doctor.has_detailed_profile ? '✅ SÍ' : '❌ NO'}`);
          
          if (!doctor.has_detailed_profile) {
            console.log(`   ⚠️  PROBLEMA: Doctor existe pero has_detailed_profile = false`);
          }
        } else {
          console.log(`❌ Ruta NO encontrada: /doctores/${slug}`);
          console.log(`   ⚠️  PROBLEMA: Doctor no existe en BD o slug incorrecto`);
        }
        console.log('');
      });
      
      // FASE 3: PROBAR NAVEGACIÓN (simulación)
      console.log('🧪 FASE 3: SIMULACIÓN DE NAVEGACIÓN');
      console.log('==================================');
      
      doctoresConPerfilDetallado.forEach(doctor => {
        const urlCompleta = `/doctores/${doctor.slug}`;
        console.log(`🔍 Probando navegación a: ${urlCompleta}`);
        console.log(`   📝 Doctor: ${doctor.nombre}`);
        console.log(`   🔗 Slug: ${doctor.slug}`);
        console.log(`   ✅ Debería funcionar: has_detailed_profile = ${doctor.has_detailed_profile}`);
        console.log('');
      });
      
      // FASE 4: REPORTE Y CORRECCIONES
      console.log('📋 FASE 4: REPORTE FINAL Y CORRECCIONES');
      console.log('======================================');
      
      // Verificar doctores que deberían tener perfil detallado
      const doctoresQueDeberianTenerPerfil = doctores.filter(doctor => 
        rutasEspecificas.includes(doctor.slug) && !doctor.has_detailed_profile
      );
      
      if (doctoresQueDeberianTenerPerfil.length > 0) {
        console.log(`⚠️  PROBLEMA ENCONTRADO: ${doctoresQueDeberianTenerPerfil.length} doctores sin perfil detallado`);
        doctoresQueDeberianTenerPerfil.forEach(doctor => {
          console.log(`   - ${doctor.nombre} (${doctor.slug})`);
        });
        console.log('');
        console.log('🔧 CORRECCIÓN NECESARIA: Actualizar has_detailed_profile = true para estos doctores');
      } else {
        console.log('✅ Todos los doctores especializados tienen perfil detallado correctamente');
      }
      
      // Verificar slugs faltantes
      const slugsEncontrados = doctores.map(d => d.slug);
      const slugsFaltantes = rutasEspecificas.filter(slug => !slugsEncontrados.includes(slug));
      
      if (slugsFaltantes.length > 0) {
        console.log(`⚠️  PROBLEMA ENCONTRADO: ${slugsFaltantes.length} slugs no encontrados en BD`);
        slugsFaltantes.forEach(slug => {
          console.log(`   - ${slug}`);
        });
        console.log('');
        console.log('🔧 CORRECCIÓN NECESARIA: Crear doctores con estos slugs en BD');
      } else {
        console.log('✅ Todos los slugs esperados están presentes en BD');
      }
      
      // Resumen final
      console.log('');
      console.log('📊 RESUMEN FINAL:');
      console.log('================');
      console.log(`✅ ${doctoresConPerfilDetallado.length} doctores tienen perfil detallado confirmado`);
      console.log(`✅ ${rutasEspecificas.length - slugsFaltantes.length} de ${rutasEspecificas.length} rutas esperadas funcionan`);
      
      if (doctoresQueDeberianTenerPerfil.length === 0 && slugsFaltantes.length === 0) {
        console.log('✅ Todas las rutas deberían funcionar correctamente');
        console.log('');
        console.log('🎯 PRÓXIMOS PASOS:');
        console.log('1. Verificar que React Router esté configurado correctamente');
        console.log('2. Comprobar que los botones "Ver Perfil Completo" aparezcan en las tarjetas');
        console.log('3. Asegurar que la navegación funcione sin errores 404');
      } else {
        console.log('❌ Se encontraron problemas que requieren corrección');
      }
      
      console.log('============================================================');
      
      // Verificar React Router configuración
      console.log('⚙️  VERIFICACIÓN DE REACT ROUTER:');
      console.log('Ruta configurada en App.tsx: /doctores/:slug -> DoctorIndividual');
      console.log('Componente esperado: DoctorIndividual.tsx');
      console.log('Hook usado: useDoctorBySlug(slug)');
      console.log('');
      
      // Verificar ejemplos específicos
      console.log('🔍 VERIFICACIÓN ESPECÍFICA DE DOCTORES ACTUALIZADOS:');
      const doctoresActualizados = [
        'dr-hector-pena-carrillo',
        'dr-hazael-sanchez-rosales', 
        'dr-abraham-tellez-barragan',
        'dr-irvin-omar-romero-ponce',
        'dra-eltzy-rubi-rocha-rivera',
        'dr-cesar-gonzalez-martinez',
        'dr-arturo-dominguez-millan'
      ];
      
      doctoresActualizados.forEach(slug => {
        const doctor = doctores.find(d => d.slug === slug);
        if (doctor && doctor.has_detailed_profile) {
          console.log(`✅ ${doctor.nombre} - Perfil completo disponible`);
        } else if (doctor && !doctor.has_detailed_profile) {
          console.log(`❌ ${doctor.nombre} - Perfil existe pero has_detailed_profile = false`);
        } else {
          console.log(`❌ ${slug} - No encontrado en BD`);
        }
      });
    }
  }, [doctores, isLoading, navigate]);

  if (error) {
    console.error('❌ Error al cargar doctores:', error);
  }

  return null;
};

export default DoctorPagesDebugger;

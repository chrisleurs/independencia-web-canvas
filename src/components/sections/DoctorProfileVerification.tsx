
import React, { useEffect } from 'react';
import { useDoctores } from '@/hooks/useDoctores';

const DoctorProfileVerification = () => {
  const { data: doctores, isLoading } = useDoctores();

  useEffect(() => {
    if (!isLoading && doctores) {
      console.log('🏥 VERIFICACIÓN DE PERFILES DETALLADOS DE MEDICINA GENERAL');
      console.log('=' .repeat(60));

      const doctoresTargetSlugs = [
        'dra-karina-pena-tello',
        'dr-hipolito-coyotl-cruz', 
        'dr-bernardo-velasco-olalde',
        'dr-javier-carrasco-gonzalez',
        'dr-gerardo-antonio-valderrama-lopez',
        'dr-raymundo-romero-ventura'
      ];

      const doctoresTarget = doctores.filter(doc => doctoresTargetSlugs.includes(doc.slug));
      
      console.log(`📋 Verificando ${doctoresTargetSlugs.length} doctores de Medicina General:`);
      console.log('');

      doctoresTarget.forEach((doctor, index) => {
        console.log(`${index + 1}. ${doctor.nombre}`);
        console.log(`   📝 Slug: ${doctor.slug}`);
        console.log(`   👨‍⚕️ Título: ${doctor.titulo}`);
        console.log(`   📱 WhatsApp: ${doctor.whatsapp || 'N/A'}`);
        console.log(`   🏥 Teléfono Hospital: ${doctor.telefono_hospital || 'N/A'}`);
        console.log(`   📞 Teléfonos Adicionales: ${doctor.telefonos_adicionales?.length || 0}`);
        console.log(`   🎓 Formación: ${doctor.formacion_detallada ? '✅' : '❌'}`);
        console.log(`   🩺 Áreas de Atención: ${doctor.areas_atencion?.length || 0} áreas`);
        console.log(`   🎯 Misión: ${doctor.mision ? '✅' : '❌'}`);
        console.log(`   🏆 Reconocimientos: ${doctor.reconocimientos?.length || 0}`);
        console.log(`   📜 Certificaciones: ${doctor.certificaciones?.length || 0}`);
        console.log(`   ⏰ Horario Detallado: ${doctor.horario_detallado ? '✅' : '❌'}`);
        console.log(`   📋 Perfil Detallado: ${doctor.has_detailed_profile ? '✅ SÍ' : '❌ NO'}`);
        console.log(`   🔗 URL: /doctores/${doctor.slug}`);
        console.log('');
      });

      const perfilesCompletos = doctoresTarget.filter(doc => doc.has_detailed_profile);
      const conWhatsApp = doctoresTarget.filter(doc => doc.whatsapp);
      const conFormacion = doctoresTarget.filter(doc => doc.formacion_detallada);
      const conAreas = doctoresTarget.filter(doc => doc.areas_atencion?.length > 0);

      console.log('📊 RESUMEN DE ACTUALIZACIÓN:');
      console.log(`✅ Doctores con perfil detallado: ${perfilesCompletos.length}/6`);
      console.log(`📱 Doctores con WhatsApp: ${conWhatsApp.length}/6`);
      console.log(`🎓 Doctores con formación detallada: ${conFormacion.length}/6`);
      console.log(`🩺 Doctores con áreas de atención: ${conAreas.length}/6`);

      if (perfilesCompletos.length === 6) {
        console.log('');
        console.log('🎉 ¡ÉXITO TOTAL! Los 6 doctores de Medicina General tienen perfiles detallados');
        console.log('🌐 URLs disponibles:');
        perfilesCompletos.forEach(doc => {
          console.log(`   - https://hospital.com/doctores/${doc.slug}`);
        });
      } else {
        console.log('');
        console.log('⚠️ PENDIENTE: Algunos doctores no tienen perfil detallado activado');
      }

      console.log('=' .repeat(60));
    }
  }, [doctores, isLoading]);

  return null;
};

export default DoctorProfileVerification;

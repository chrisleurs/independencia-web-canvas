
import React, { useEffect } from 'react';
import { useDoctores } from '@/hooks/useDoctores';

const DoctorSpecialistsVerification = () => {
  const { data: doctores, isLoading } = useDoctores();

  useEffect(() => {
    if (!isLoading && doctores) {
      console.log('🏥 VERIFICACIÓN DE PERFILES DETALLADOS DE DOCTORES ESPECIALISTAS');
      console.log('=' .repeat(80));

      const doctoresSpecialistSlugs = [
        'dr-hector-pena-carrillo',
        'dr-hazael-sanchez-rosales',
        'dr-abraham-tellez-barragan',
        'dr-irvin-omar-romero-ponce',
        'dra-eltzy-rubi-rocha-rivera',
        'dr-cesar-gonzalez-martinez',
        'dr-arturo-dominguez-millan'
      ];

      const doctoresSpecialists = doctores.filter(doc => doctoresSpecialistSlugs.includes(doc.slug));
      
      console.log(`📋 Verificando ${doctoresSpecialistSlugs.length} doctores especialistas:`);
      console.log('');

      doctoresSpecialists.forEach((doctor, index) => {
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

      const perfilesCompletos = doctoresSpecialists.filter(doc => doc.has_detailed_profile);
      const conWhatsApp = doctoresSpecialists.filter(doc => doc.whatsapp);
      const conFormacion = doctoresSpecialists.filter(doc => doc.formacion_detallada);
      const conAreas = doctoresSpecialists.filter(doc => doc.areas_atencion?.length > 0);
      const conMision = doctoresSpecialists.filter(doc => doc.mision);
      const conReconocimientos = doctoresSpecialists.filter(doc => doc.reconocimientos?.length > 0);

      console.log('📊 RESUMEN DE ACTUALIZACIÓN DE ESPECIALISTAS:');
      console.log(`✅ Doctores con perfil detallado: ${perfilesCompletos.length}/7`);
      console.log(`📱 Doctores con WhatsApp: ${conWhatsApp.length}/7`);
      console.log(`🎓 Doctores con formación detallada: ${conFormacion.length}/7`);
      console.log(`🩺 Doctores con áreas de atención: ${conAreas.length}/7`);
      console.log(`🎯 Doctores con misión: ${conMision.length}/7`);
      console.log(`🏆 Doctores con reconocimientos: ${conReconocimientos.length}/7`);

      console.log('');
      console.log('🔍 DETALLES POR ESPECIALIDAD:');
      
      // Agrupar por especialidades principales
      const especialidadesMap = {
        'Cardineumología / Medicina Crítica': ['dr-hector-pena-carrillo'],
        'Medicina Crítica / Terapia Intensiva': ['dr-hazael-sanchez-rosales'],
        'Pediatría / Neonatología': ['dr-abraham-tellez-barragan', 'dr-irvin-omar-romero-ponce', 'dra-eltzy-rubi-rocha-rivera'],
        'Traumatología y Ortopedia': ['dr-cesar-gonzalez-martinez', 'dr-arturo-dominguez-millan']
      };

      Object.entries(especialidadesMap).forEach(([especialidad, slugs]) => {
        console.log(`\n🏥 ${especialidad}:`);
        slugs.forEach(slug => {
          const doctor = doctoresSpecialists.find(d => d.slug === slug);
          if (doctor) {
            console.log(`   • ${doctor.nombre} - ${doctor.has_detailed_profile ? '✅' : '❌'} Perfil`);
          }
        });
      });

      if (perfilesCompletos.length === 7) {
        console.log('');
        console.log('🎉 ¡ÉXITO TOTAL! Los 7 doctores especialistas tienen perfiles detallados');
        console.log('🌐 URLs disponibles:');
        perfilesCompletos.forEach(doc => {
          console.log(`   - https://hospital.com/doctores/${doc.slug}`);
        });
      } else {
        console.log('');
        console.log('⚠️ PENDIENTE: Algunos doctores especialistas no tienen perfil detallado activado');
      }

      // Verificar contactos personalizados
      console.log('');
      console.log('📞 TÍTULOS DE CONTACTO PERSONALIZADOS:');
      doctoresSpecialists.forEach(doctor => {
        if (doctor.telefonos_adicionales?.length > 0) {
          console.log(`${doctor.nombre}:`);
          doctor.telefonos_adicionales.forEach((tel, index) => {
            if (tel.includes('2383829648')) {
              console.log(`   - ${tel}: "Hospital Independencia - Urgencias"`);
            } else if (tel.includes('236 3812945')) {
              console.log(`   - ${tel}: "Consultorio Privado"`);
            } else if (tel.includes('238 249 3811')) {
              console.log(`   - ${tel}: "Urgencias Médicas"`);
            } else {
              console.log(`   - ${tel}: "Contacto Adicional ${index + 1}"`);
            }
          });
        }
      });

      console.log('=' .repeat(80));
    }
  }, [doctores, isLoading]);

  return null;
};

export default DoctorSpecialistsVerification;

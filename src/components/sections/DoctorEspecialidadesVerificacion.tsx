
import React, { useEffect } from 'react';
import { useDoctores, useDoctoresByEspecialidad } from '@/hooks/useDoctores';
import { useEspecialidades } from '@/hooks/useEspecialidades';

const DoctorEspecialidadesVerificacion = () => {
  const { data: doctores, isLoading: loadingDoctores } = useDoctores();
  const { data: especialidades, isLoading: loadingEspecialidades } = useEspecialidades();

  // Hooks para verificar doctores por especialidad específica
  const { data: doctoresMedicinaGeneral } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Medicina General')?.id || ''
  );
  const { data: doctoresCardiologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Cardiología')?.id || ''
  );
  const { data: doctoresTraumatologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Traumatología y Ortopedia')?.id || ''
  );
  const { data: doctoresGinecologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Ginecología y Obstetricia')?.id || ''
  );
  const { data: doctoresPediatria } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Pediatría')?.id || ''
  );
  const { data: doctoresTerapiaIntensiva } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Medicina Crítica - Terapia Intensiva')?.id || ''
  );
  const { data: doctoresUrgenciologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Urgenciología')?.id || ''
  );
  const { data: doctoresNeurologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Neurología')?.id || ''
  );
  const { data: doctoresNutricion } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Nutrición')?.id || ''
  );
  const { data: doctoresCardineumologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Cardineumología')?.id || ''
  );
  const { data: doctoresAnestesiologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Anestesiología')?.id || ''
  );
  const { data: doctoresCirugiaPlastica } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.titulo === 'Cirugía Plástica')?.id || ''
  );

  useEffect(() => {
    if (loadingDoctores || loadingEspecialidades) return;

    console.log('🔍 VERIFICACIÓN DE ASIGNACIONES DOCTOR-ESPECIALIDAD');
    console.log('='.repeat(60));

    if (doctores && especialidades) {
      console.log(`📊 Total doctores: ${doctores.length}`);
      console.log(`📊 Total especialidades: ${especialidades.length}`);
      console.log('');

      // Verificar asignaciones por especialidad
      const verificaciones = [
        { 
          especialidad: 'Medicina General', 
          doctores: doctoresMedicinaGeneral,
          esperados: ['Dr. Bernardo Velasco Olalde', 'Dr. Raymundo Romero Ventura', 'Dra. Karina Peña Tello', 'Dr. Hipólito Coyotl Cruz', 'Dr. Emilio Gerardo Montoro Hidalgo', 'Dr. Javier Carrasco González', 'Dr. Gerardo Antonio Valderrama López', 'Dr. Héctor López Aparicio']
        },
        { 
          especialidad: 'Cardiología', 
          doctores: doctoresCardiologia,
          esperados: ['Dr. Carlos Mendoza Rivera']
        },
        { 
          especialidad: 'Traumatología y Ortopedia', 
          doctores: doctoresTraumatologia,
          esperados: ['Dr. Roberto Jiménez Castro', 'Dr. César González Martínez', 'Dr. Arturo Domínguez Millán']
        },
        { 
          especialidad: 'Ginecología y Obstetricia', 
          doctores: doctoresGinecologia,
          esperados: ['Dra. Ana Sofía Herrera', 'Dra. Edith Jazmín Calvo Santana', 'Dra. Nayeli del Rayo Sánchez Garibay', 'Dr. Rubén Julián Nacer', 'Dr. Moisés Héctor Sánchez Pérez', 'Dra. Luz María Gil Sandoval']
        },
        { 
          especialidad: 'Pediatría', 
          doctores: doctoresPediatria,
          esperados: ['Dr. Abraham Téllez Segura', 'Dr. Irvin Omar Paredes Ponce', 'Dr. Elzy Rubí Rucha Rivera', 'Dr. Alberto Delgado Medina']
        },
        { 
          especialidad: 'Medicina Crítica - Terapia Intensiva', 
          doctores: doctoresTerapiaIntensiva,
          esperados: ['Dr. Héctor Peña Carrillo', 'Dr. Hazael Sánchez Rosales']
        },
        { 
          especialidad: 'Urgenciología', 
          doctores: doctoresUrgenciologia,
          esperados: ['Dra. Silvia Huerta Damián', 'Dr. Porfirio Agam Cruz']
        },
        { 
          especialidad: 'Neurología', 
          doctores: doctoresNeurologia,
          esperados: ['Dr. Jorge Alberto Aguirre']
        },
        { 
          especialidad: 'Nutrición', 
          doctores: doctoresNutricion,
          esperados: ['L.N.C. Carlos Escobar Olivares']
        },
        { 
          especialidad: 'Cardineumología', 
          doctores: doctoresCardineumologia,
          esperados: ['Dr. Héctor Peña Carrillo']
        },
        { 
          especialidad: 'Anestesiología', 
          doctores: doctoresAnestesiologia,
          esperados: ['Dr. Héctor Peña Carrillo', 'Dra. Marianela Orellan Gorgonio', 'Dr. Christian Misael Galicia Castelán', 'Dra. María Teresa Carrera Balderas']
        },
        { 
          especialidad: 'Cirugía Plástica', 
          doctores: doctoresCirugiaPlastica,
          esperados: ['Dr. Eugenio García Cano', 'Dr. Jaime Araoz Arroyo', 'Dra. Samaria Estefanía Mejía Rivera']
        }
      ];

      let totalAsignacionesVerificadas = 0;
      let totalAsignacionesExitosas = 0;

      verificaciones.forEach(({ especialidad, doctores: doctoresEncontrados, esperados }) => {
        console.log(`🏥 ${especialidad}:`);
        
        if (doctoresEncontrados) {
          console.log(`   📋 Doctores encontrados: ${doctoresEncontrados.length}`);
          
          esperados.forEach(nombreEsperado => {
            const doctorEncontrado = doctoresEncontrados.find(d => d.nombre === nombreEsperado);
            if (doctorEncontrado) {
              console.log(`   ✅ ${nombreEsperado} - Asignado correctamente`);
              totalAsignacionesExitosas++;
            } else {
              console.log(`   ❌ ${nombreEsperado} - NO asignado`);
            }
            totalAsignacionesVerificadas++;
          });
        } else {
          console.log(`   ⏳ Cargando doctores de ${especialidad}...`);
        }
        console.log('');
      });

      // Verificar doctores con múltiples especialidades
      console.log('🔄 VERIFICACIÓN DE DOCTORES CON MÚLTIPLES ESPECIALIDADES:');
      console.log('');
      
      // Dr. Héctor Peña Carrillo debe estar en 3 especialidades
      const doctorMultiespecialidad = 'Dr. Héctor Peña Carrillo';
      let especialidadesAsignadas = 0;
      
      if (doctoresTerapiaIntensiva?.find(d => d.nombre === doctorMultiespecialidad)) {
        console.log(`✅ ${doctorMultiespecialidad} asignado a Medicina Crítica - Terapia Intensiva`);
        especialidadesAsignadas++;
      }
      
      if (doctoresCardineumologia?.find(d => d.nombre === doctorMultiespecialidad)) {
        console.log(`✅ ${doctorMultiespecialidad} asignado a Cardineumología`);
        especialidadesAsignadas++;
      }
      
      if (doctoresAnestesiologia?.find(d => d.nombre === doctorMultiespecialidad)) {
        console.log(`✅ ${doctorMultiespecialidad} asignado a Anestesiología`);
        especialidadesAsignadas++;
      }

      console.log(`📊 ${doctorMultiespecialidad} está en ${especialidadesAsignadas} especialidades (esperado: 3)`);
      console.log('');

      // Resumen final
      console.log('📈 RESUMEN FINAL:');
      console.log(`✅ ${totalAsignacionesExitosas} de ${totalAsignacionesVerificadas} asignaciones verificadas exitosamente`);
      console.log(`📊 Porcentaje de éxito: ${((totalAsignacionesExitosas / totalAsignacionesVerificadas) * 100).toFixed(1)}%`);
      
      if (totalAsignacionesExitosas === totalAsignacionesVerificadas) {
        console.log('🎉 ¡TODAS LAS ASIGNACIONES SE REALIZARON CORRECTAMENTE!');
      } else {
        console.log('⚠️ Algunas asignaciones no se pudieron verificar completamente');
      }
    }
  }, [
    doctores, 
    especialidades, 
    loadingDoctores, 
    loadingEspecialidades,
    doctoresMedicinaGeneral,
    doctoresCardiologia,
    doctoresTraumatologia,
    doctoresGinecologia,
    doctoresPediatria,
    doctoresTerapiaIntensiva,
    doctoresUrgenciologia,
    doctoresNeurologia,
    doctoresNutricion,
    doctoresCardineumologia,
    doctoresAnestesiologia,
    doctoresCirugiaPlastica
  ]);

  // Componente invisible - solo para verificación
  return null;
};

export default DoctorEspecialidadesVerificacion;

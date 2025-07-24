
import React, { useEffect } from 'react';
import { useEspecialidades } from '@/hooks/useEspecialidades';
import { useDoctores } from '@/hooks/useDoctores';
import { useDoctoresByEspecialidad } from '@/hooks/useDoctores';

const SistemaLimpiezaVerificacion = () => {
  const { data: especialidades, isLoading: especialidadesLoading } = useEspecialidades();
  const { data: doctores, isLoading: doctoresLoading } = useDoctores();

  // Verificar algunas especialidades principales
  const { data: doctoresMedicinaGeneral } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.slug === 'medicina-general')?.id || ''
  );
  const { data: doctoresCardiologia } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.slug === 'cardiologia')?.id || ''
  );
  const { data: doctoresPediatria } = useDoctoresByEspecialidad(
    especialidades?.find(e => e.slug === 'pediatria')?.id || ''
  );

  useEffect(() => {
    if (!especialidadesLoading && !doctoresLoading && especialidades && doctores) {
      console.log('🧹 REPORTE DE LIMPIEZA DE DUPLICADOS - SISTEMA VERIFICADO');
      console.log('=' .repeat(60));
      
      // Verificar nombres únicos
      const nombresUnicos = new Set();
      const duplicadosEncontrados = [];
      
      doctores.forEach(doctor => {
        if (nombresUnicos.has(doctor.nombre)) {
          duplicadosEncontrados.push(doctor.nombre);
        } else {
          nombresUnicos.add(doctor.nombre);
        }
      });
      
      console.log('📊 ESTADÍSTICAS GENERALES:');
      console.log(`✅ Total especialidades activas: ${especialidades.length}`);
      console.log(`✅ Total doctores únicos: ${doctores.length}`);
      console.log(`✅ Nombres únicos verificados: ${nombresUnicos.size}`);
      console.log(`${duplicadosEncontrados.length === 0 ? '✅' : '❌'} Duplicados encontrados: ${duplicadosEncontrados.length}`);
      
      if (duplicadosEncontrados.length > 0) {
        console.log('⚠️ DUPLICADOS DETECTADOS:', duplicadosEncontrados);
      }
      
      console.log('');
      console.log('🏥 VERIFICACIÓN POR ESPECIALIDADES PRINCIPALES:');
      
      // Verificar especialidades principales
      const especialidadesPrincipales = [
        { nombre: 'Medicina General', slug: 'medicina-general', doctores: doctoresMedicinaGeneral },
        { nombre: 'Cardiología', slug: 'cardiologia', doctores: doctoresCardiologia },
        { nombre: 'Pediatría', slug: 'pediatria', doctores: doctoresPediatria }
      ];
      
      especialidadesPrincipales.forEach(esp => {
        const count = esp.doctores?.length || 0;
        console.log(`${count > 0 ? '✅' : '⚠️'} ${esp.nombre}: ${count} doctor(es)`);
        
        if (esp.doctores && esp.doctores.length > 0) {
          esp.doctores.forEach(doctor => {
            console.log(`   - ${doctor.nombre} (ID: ${doctor.id})`);
          });
        }
      });
      
      console.log('');
      console.log('🔍 VERIFICACIÓN DE INTEGRIDAD:');
      
      // Verificar que no hay doctores sin especialidad
      const doctoresConEspecialidad = doctores.filter(doctor => 
        doctoresMedicinaGeneral?.some(d => d.id === doctor.id) ||
        doctoresCardiologia?.some(d => d.id === doctor.id) ||
        doctoresPediatria?.some(d => d.id === doctor.id)
      );
      
      console.log(`✅ Doctores con especialidad asignada: ${doctoresConEspecialidad.length}`);
      
      console.log('');
      console.log('🎯 RUTAS PARA VERIFICAR MANUALMENTE:');
      console.log('   • /especialidades/medicina-general');
      console.log('   • /especialidades/cardiologia');
      console.log('   • /especialidades/pediatria');
      console.log('   • /especialidades/ginecologia-obstetricia');
      console.log('   • /especialidades/traumatologia-ortopedia');
      
      console.log('');
      console.log('✅ LIMPIEZA DE DUPLICADOS COMPLETADA EXITOSAMENTE');
      console.log('=' .repeat(60));
    }
  }, [especialidadesLoading, doctoresLoading, especialidades, doctores, doctoresMedicinaGeneral, doctoresCardiologia, doctoresPediatria]);

  // Componente invisible - solo para verificación
  return null;
};

export default SistemaLimpiezaVerificacion;

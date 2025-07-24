
import React, { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useDoctoresByEspecialidad } from '@/hooks/useDoctores';
import { useEspecialidades } from '@/hooks/useEspecialidades';

const VerificacionDuplicados = () => {
  const { data: especialidades } = useEspecialidades();
  const medicinaGeneralId = especialidades?.find(e => e.slug === 'medicina-general')?.id;
  const { data: doctoresMedicinaGeneral } = useDoctoresByEspecialidad(medicinaGeneralId || '');

  useEffect(() => {
    const verificarDuplicados = async () => {
      console.log('🔍 VERIFICACIÓN POST-ELIMINACIÓN DE DUPLICADOS');
      console.log('=' .repeat(50));

      // Verificar duplicados en toda la base de datos
      const { data: todosDoctores, error } = await supabase
        .from('doctores')
        .select('*')
        .order('nombre');

      if (error) {
        console.error('❌ Error al obtener doctores:', error);
        return;
      }

      if (!todosDoctores) {
        console.error('❌ No se pudieron obtener los doctores');
        return;
      }

      // Agrupar por nombre para detectar duplicados
      const gruposPorNombre: { [key: string]: any[] } = {};
      todosDoctores.forEach(doctor => {
        if (!gruposPorNombre[doctor.nombre]) {
          gruposPorNombre[doctor.nombre] = [];
        }
        gruposPorNombre[doctor.nombre].push(doctor);
      });

      // Verificar duplicados
      const duplicadosEncontrados: { nombre: string; cantidad: number; doctores: any[] }[] = [];
      Object.entries(gruposPorNombre).forEach(([nombre, doctores]) => {
        if (doctores.length > 1) {
          duplicadosEncontrados.push({ nombre, cantidad: doctores.length, doctores });
        }
      });

      console.log('📊 RESULTADOS DE VERIFICACIÓN:');
      console.log(`✅ Total doctores en sistema: ${todosDoctores.length}`);
      console.log(`${duplicadosEncontrados.length === 0 ? '✅' : '❌'} Duplicados encontrados: ${duplicadosEncontrados.length}`);

      if (duplicadosEncontrados.length > 0) {
        console.log('⚠️ DUPLICADOS RESTANTES:');
        duplicadosEncontrados.forEach(dup => {
          console.log(`  - ${dup.nombre}: ${dup.cantidad} copias`);
          dup.doctores.forEach(doc => {
            console.log(`    ID: ${doc.id}, Creado: ${doc.created_at}`);
          });
        });
      } else {
        console.log('🎉 EXCELENTE: No se encontraron duplicados en el sistema');
      }

      // Verificación específica para Dra. Karina Peña Tello
      const karinaRegistros = gruposPorNombre['Dra. Karina Peña Tello'] || [];
      console.log('');
      console.log('🎯 VERIFICACIÓN ESPECÍFICA - Dra. Karina Peña Tello:');
      console.log(`${karinaRegistros.length === 1 ? '✅' : '❌'} Registros encontrados: ${karinaRegistros.length}`);
      
      if (karinaRegistros.length === 1) {
        console.log('✅ ÉXITO: Dra. Karina Peña Tello aparece SOLO 1 VEZ');
        console.log(`   ID: ${karinaRegistros[0].id}`);
        console.log(`   Slug: ${karinaRegistros[0].slug}`);
        console.log(`   Creado: ${karinaRegistros[0].created_at}`);
      } else if (karinaRegistros.length > 1) {
        console.log('❌ ERROR: Dra. Karina Peña Tello TODAVÍA DUPLICADA');
        karinaRegistros.forEach((reg, index) => {
          console.log(`   Registro ${index + 1}: ID ${reg.id}, Creado: ${reg.created_at}`);
        });
      } else {
        console.log('⚠️ ADVERTENCIA: Dra. Karina Peña Tello NO ENCONTRADA');
      }

      // Verificar en Medicina General específicamente
      if (doctoresMedicinaGeneral) {
        const karinaEnMedicinaGeneral = doctoresMedicinaGeneral.filter(d => d.nombre === 'Dra. Karina Peña Tello');
        console.log('');
        console.log('🏥 VERIFICACIÓN EN MEDICINA GENERAL:');
        console.log(`${karinaEnMedicinaGeneral.length === 1 ? '✅' : '❌'} Dra. Karina en Medicina General: ${karinaEnMedicinaGeneral.length} registro(s)`);
        
        if (karinaEnMedicinaGeneral.length === 1) {
          console.log('✅ PERFECTO: Dra. Karina aparece SOLO 1 VEZ en Medicina General');
          console.log(`   ID: ${karinaEnMedicinaGeneral[0].id}`);
          console.log(`   Slug: ${karinaEnMedicinaGeneral[0].slug}`);
        } else if (karinaEnMedicinaGeneral.length > 1) {
          console.log('❌ PROBLEMA: Dra. Karina TODAVÍA aparece múltiples veces en Medicina General');
          karinaEnMedicinaGeneral.forEach((doc, index) => {
            console.log(`   Registro ${index + 1}: ID ${doc.id}`);
          });
        } else {
          console.log('⚠️ Dra. Karina NO encontrada en Medicina General');
        }
      }

      console.log('');
      console.log('🔄 ESTADO ACTUAL DEL SISTEMA:');
      console.log(`📊 Total doctores únicos: ${Object.keys(gruposPorNombre).length}`);
      console.log(`📊 Total registros en BD: ${todosDoctores.length}`);
      console.log(`🧹 Duplicados eliminados: ${duplicadosEncontrados.length === 0 ? 'SÍ' : 'NO'}`);
      
      if (duplicadosEncontrados.length === 0) {
        console.log('');
        console.log('🎉 MISIÓN CUMPLIDA: DUPLICADOS ELIMINADOS EXITOSAMENTE');
      }
      
      console.log('=' .repeat(50));
    };

    if (doctoresMedicinaGeneral && especialidades) {
      verificarDuplicados();
    }
  }, [doctoresMedicinaGeneral, medicinaGeneralId, especialidades]);

  // Componente invisible - solo para verificación
  return null;
};

export default VerificacionDuplicados;

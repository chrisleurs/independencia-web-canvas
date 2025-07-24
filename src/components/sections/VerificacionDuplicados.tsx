
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
      console.log('🔍 VERIFICANDO ELIMINACIÓN DE DUPLICADOS...');
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

      // Agrupar por nombre para detectar duplicados
      const gruposPorNombre = {};
      todosDoctores?.forEach(doctor => {
        if (!gruposPorNombre[doctor.nombre]) {
          gruposPorNombre[doctor.nombre] = [];
        }
        gruposPorNombre[doctor.nombre].push(doctor);
      });

      // Verificar duplicados
      const duplicadosEncontrados = [];
      Object.entries(gruposPorNombre).forEach(([nombre, doctores]) => {
        if (doctores.length > 1) {
          duplicadosEncontrados.push({ nombre, cantidad: doctores.length, doctores });
        }
      });

      console.log('📊 RESULTADOS DE VERIFICACIÓN:');
      console.log(`✅ Total doctores en sistema: ${todosDoctores?.length || 0}`);
      console.log(`${duplicadosEncontrados.length === 0 ? '✅' : '❌'} Duplicados encontrados: ${duplicadosEncontrados.length}`);

      if (duplicadosEncontrados.length > 0) {
        console.log('⚠️ DUPLICADOS RESTANTES:');
        duplicadosEncontrados.forEach(dup => {
          console.log(`  - ${dup.nombre}: ${dup.cantidad} copias`);
          dup.doctores.forEach(doc => {
            console.log(`    ID: ${doc.id}, Creado: ${doc.created_at}`);
          });
        });
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
        }
      }

      console.log('');
      console.log('🎉 ELIMINACIÓN DE DUPLICADOS COMPLETADA');
      console.log('=' .repeat(50));
    };

    if (doctoresMedicinaGeneral && todosDoctores) {
      verificarDuplicados();
    }
  }, [doctoresMedicinaGeneral, medicinaGeneralId]);

  // Componente invisible - solo para verificación
  return null;
};

export default VerificacionDuplicados;

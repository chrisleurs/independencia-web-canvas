
import React, { useEffect } from 'react';
import { useEspecialidades } from '@/hooks/useEspecialidades';

const EspecialidadesVerificacion = () => {
  const { data: especialidades, isLoading, error } = useEspecialidades();

  useEffect(() => {
    if (especialidades) {
      console.log('🎯 VERIFICACIÓN DE ESPECIALIDADES:');
      console.log(`📊 Total de especialidades encontradas: ${especialidades.length}`);
      
      // Verificar especialidades existentes (las 5 originales)
      const especialidadesOriginales = [
        'medicina-general',
        'cardiologia', 
        'pediatria',
        'ginecologia-obstetricia',
        'traumatologia-ortopedia'
      ];
      
      console.log('✅ ESPECIALIDADES ORIGINALES:');
      especialidadesOriginales.forEach(slug => {
        const encontrada = especialidades.find(esp => esp.slug === slug);
        if (encontrada) {
          console.log(`✅ ${encontrada.titulo} (${slug})`);
        } else {
          console.log(`❌ ${slug} - NO ENCONTRADA`);
        }
      });
      
      // Verificar especialidades nuevas (las 15 creadas)
      const especialidadesNuevas = [
        'medicina-critica-terapia-intensiva',
        'urgenciologia',
        'neurologia',
        'nutricion',
        'cardineumologia',
        'gastroenterologia',
        'nefrologia',
        'neumologia',
        'cirugia-general-especializada',
        'urologia',
        'dermatologia',
        'anestesiologia',
        'cirugia-plastica',
        'neurocirugia',
        'oftalmologia-pediatrico'
      ];
      
      console.log('🆕 ESPECIALIDADES NUEVAS:');
      let nuevasEncontradas = 0;
      especialidadesNuevas.forEach(slug => {
        const encontrada = especialidades.find(esp => esp.slug === slug);
        if (encontrada) {
          console.log(`✅ ${encontrada.titulo} (${slug})`);
          nuevasEncontradas++;
        } else {
          console.log(`❌ ${slug} - NO ENCONTRADA`);
        }
      });
      
      console.log(`📈 RESUMEN: ${nuevasEncontradas} de 15 especialidades nuevas creadas exitosamente`);
      console.log(`🎯 TOTAL FINAL: ${especialidades.length} especialidades (esperado: 20)`);
      
      if (especialidades.length === 20) {
        console.log('🎉 ¡ÉXITO! Todas las especialidades están funcionando correctamente.');
      } else {
        console.log('⚠️ Número de especialidades no coincide con lo esperado.');
      }
    }
    
    if (error) {
      console.error('❌ Error cargando especialidades:', error);
    }
  }, [especialidades, error]);

  // Componente invisible - solo para verificación
  return null;
};

export default EspecialidadesVerificacion;

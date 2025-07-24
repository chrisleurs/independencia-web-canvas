
import React, { useEffect } from 'react';
import { useDoctores, useFixDoctorProfiles } from '@/hooks/useDoctores';

const DoctorProfileVerificationFix = () => {
  const { data: doctores, isLoading } = useDoctores();
  const fixProfiles = useFixDoctorProfiles();

  useEffect(() => {
    if (!isLoading && doctores) {
      // Lista de doctores que deberían tener perfil detallado
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

      // Encontrar doctores que necesitan corrección
      const doctoresParaCorregir = doctoresEspecificos.filter(nombreEspecifico => {
        const doctor = doctores.find(d => d.nombre === nombreEspecifico);
        return doctor && !doctor.has_detailed_profile;
      });

      // Si hay doctores para corregir, aplicar corrección automáticamente
      if (doctoresParaCorregir.length > 0) {
        console.log('🔧 APLICANDO CORRECCIÓN AUTOMÁTICA...');
        fixProfiles.mutate(doctoresParaCorregir);
      }
    }
  }, [doctores, isLoading, fixProfiles]);

  return null;
};

export default DoctorProfileVerificationFix;

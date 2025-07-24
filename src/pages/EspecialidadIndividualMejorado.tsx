
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import EspecialidadDetalleMejorado from '@/components/sections/EspecialidadDetalleMejorado';
import DoctorDetailedProfileDiagnostic from '@/components/sections/DoctorDetailedProfileDiagnostic';
import { getEspecialidadBySlug } from '@/data/especialidades';

const EspecialidadIndividualMejorado = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/especialidades" replace />;
  }

  const especialidad = getEspecialidadBySlug(slug);

  if (!especialidad) {
    return <Navigate to="/especialidades" replace />;
  }

  return (
    <Layout>
      <DoctorDetailedProfileDiagnostic />
      <div className="pt-16 md:pt-20">
        <EspecialidadDetalleMejorado especialidad={especialidad} />
      </div>
    </Layout>
  );
};

export default EspecialidadIndividualMejorado;

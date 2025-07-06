
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import EspecialidadDetalle from '@/components/sections/EspecialidadDetalle';
import { getEspecialidadBySlug } from '@/data/especialidades';

const EspecialidadIndividual = () => {
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
      <div className="pt-16 md:pt-20">
        <EspecialidadDetalle especialidad={especialidad} />
      </div>
    </Layout>
  );
};

export default EspecialidadIndividual;

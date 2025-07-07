
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import DoctorProfile from '@/components/sections/DoctorProfile';
import { getDoctorBySlug } from '@/data/especialidades';

const DoctorIndividual = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/especialidades" replace />;
  }

  const doctor = getDoctorBySlug(slug);

  if (!doctor || !doctor.hasDetailedProfile) {
    return <Navigate to="/especialidades/medicina-general" replace />;
  }

  return (
    <Layout>
      <div className="pt-16 md:pt-20">
        <DoctorProfile doctor={doctor} />
      </div>
    </Layout>
  );
};

export default DoctorIndividual;

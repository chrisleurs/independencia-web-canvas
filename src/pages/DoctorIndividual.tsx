
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import DoctorProfileEnhanced from '@/components/sections/DoctorProfileEnhanced';
import { useDoctorBySlug } from '@/hooks/useDoctores';

const DoctorIndividual = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/doctores" replace />;
  }

  const { data: doctor, isLoading, error } = useDoctorBySlug(slug);

  if (isLoading) {
    return (
      <Layout>
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-hospital-primary mx-auto mb-4"></div>
            <p className="text-lg">Cargando perfil del doctor...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !doctor) {
    console.error('❌ Error al cargar doctor:', error);
    return <Navigate to="/doctores" replace />;
  }

  if (!doctor.has_detailed_profile) {
    console.warn(`⚠️ Doctor ${doctor.nombre} no tiene perfil detallado habilitado`);
    return <Navigate to="/doctores" replace />;
  }

  // Transform Supabase doctor data to match the expected format
  const transformedDoctor = {
    id: doctor.id,
    slug: doctor.slug,
    nombre: doctor.nombre,
    titulo: doctor.titulo,
    experiencia: doctor.experiencia || '',
    foto: doctor.foto,
    whatsapp: doctor.whatsapp,
    telefonoHospital: doctor.telefono_hospital,
    telefonosAdicionales: doctor.telefonos_adicionales || [],
    mision: doctor.mision,
    formacion: doctor.formacion_detallada,
    especialidades: [], // Se puede agregar lógica para obtener especialidades relacionadas
    servicios: doctor.areas_atencion || [],
    areasAtencion: doctor.areas_atencion || [],
    certificaciones: doctor.certificaciones || [],
    horarios: doctor.horarios_atencion,
    horarioDetallado: doctor.horario_detallado,
    reconocimientos: doctor.reconocimientos || [],
    hasDetailedProfile: doctor.has_detailed_profile,
    contactoTitulos: {
      whatsapp: doctor.whatsapp ? 'WhatsApp Personal' : 'WhatsApp',
      hospital: 'Hospital Independencia',
      adicionales: doctor.telefonos_adicionales?.map((tel, index) => {
        // Títulos personalizados mejorados para los nuevos doctores
        if (tel.includes('2383829648')) return 'Hospital Independencia - Urgencias';
        if (tel.includes('2383825027')) return 'Consultorio Gastroenterología';
        
        // Títulos basados en especialidad
        if (doctor.titulo.includes('Urgencias')) return 'Urgencias Médicas';
        if (doctor.titulo.includes('Neurólogo')) return 'Consulta Neurológica';
        if (doctor.titulo.includes('Nutriólogo')) return 'Consulta Nutricional';
        if (doctor.titulo.includes('Gastroenterología')) return 'Consulta Gastroenterología';
        if (doctor.titulo.includes('Nefrología')) return 'Consulta Nefrología';
        if (doctor.titulo.includes('Cirujano')) return 'Cirugía Especializada';
        
        return `Contacto Adicional ${index + 1}`;
      })
    }
  };

  console.log(`✅ Renderizando página individual para: ${doctor.nombre}`);
  console.log(`✅ Especialidad: ${doctor.titulo}`);
  console.log(`✅ Áreas de atención: ${doctor.areas_atencion?.length || 0}`);

  return (
    <Layout>
      <div className="pt-16 md:pt-20">
        <DoctorProfileEnhanced doctor={transformedDoctor} />
      </div>
    </Layout>
  );
};

export default DoctorIndividual;

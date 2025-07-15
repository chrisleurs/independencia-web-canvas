
import { supabase } from '@/integrations/supabase/client';
import { especialidades, doctores, servicios } from '@/data/especialidades';
import { servicios as serviciosData } from '@/data/servicios';

export const migrateEspecialidades = async () => {
  console.log('Migrando especialidades...');
  
  for (const especialidad of especialidades) {
    const { error } = await supabase
      .from('especialidades')
      .upsert({
        titulo: especialidad.titulo,
        slug: especialidad.slug,
        descripcion: especialidad.descripcion,
        descripcion_detallada: especialidad.descripcionDetallada,
        icon_name: especialidad.icon.name,
        servicios: especialidad.servicios,
      }, {
        onConflict: 'slug'
      });
    
    if (error) {
      console.error('Error migrando especialidad:', especialidad.titulo, error);
    } else {
      console.log('Especialidad migrada:', especialidad.titulo);
    }
  }
};

export const migrateDoctores = async () => {
  console.log('Migrando doctores...');
  
  for (const doctor of doctores) {
    const { error } = await supabase
      .from('doctores')
      .upsert({
        nombre: doctor.nombre,
        slug: doctor.slug,
        titulo: doctor.titulo,
        experiencia: doctor.experiencia,
        foto: doctor.foto,
        whatsapp: doctor.whatsapp,
        certificaciones: doctor.certificaciones || [],
        has_detailed_profile: doctor.hasDetailedProfile,
        biografia: doctor.mision,
        educacion: doctor.formacion ? [doctor.formacion] : [],
        logros: doctor.reconocimientos || [],
        horarios_atencion: doctor.horarios,
      }, {
        onConflict: 'slug'
      });
    
    if (error) {
      console.error('Error migrando doctor:', doctor.nombre, error);
    } else {
      console.log('Doctor migrado:', doctor.nombre);
    }
  }
};

export const migrateServicios = async () => {
  console.log('Migrando servicios...');
  
  for (const servicio of serviciosData) {
    const { error } = await supabase
      .from('servicios')
      .upsert({
        titulo: servicio.titulo,
        slug: servicio.slug,
        descripcion_corta: servicio.descripcionCorta,
        descripcion_completa: servicio.descripcionCompleta,
        incluye: servicio.incluye,
        tecnologia: servicio.tecnologia,
        beneficios: servicio.beneficios,
        requisitos: servicio.requisitos,
        horarios: servicio.horarios,
        icon_name: servicio.icon.name,
        imagen: servicio.imagen,
      }, {
        onConflict: 'slug'
      });
    
    if (error) {
      console.error('Error migrando servicio:', servicio.titulo, error);
    } else {
      console.log('Servicio migrado:', servicio.titulo);
    }
  }
};

export const migrateAllData = async () => {
  try {
    await migrateEspecialidades();
    await migrateDoctores();
    await migrateServicios();
    console.log('Migración completada exitosamente');
  } catch (error) {
    console.error('Error en la migración:', error);
  }
};

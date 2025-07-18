-- Limpiar datos existentes
DELETE FROM public.doctor_especialidades;
DELETE FROM public.doctores;
DELETE FROM public.especialidades;

-- Insertar especialidades completas
INSERT INTO public.especialidades (titulo, slug, descripcion, descripcion_detallada, icon_name, servicios) VALUES
('Medicina General', 'medicina-general', 'Atención integral para toda la familia. Diagnóstico y tratamiento de enfermedades comunes.', 'Brindamos atención médica integral para toda la familia, con diagnóstico y tratamiento de enfermedades comunes, medicina preventiva y seguimiento de pacientes crónicos.', 'Stethoscope', ARRAY['Consulta médica general', 'Medicina preventiva', 'Control de enfermedades crónicas', 'Diagnóstico temprano', 'Seguimiento de pacientes', 'Certificados médicos']),

('Cardiología', 'cardiologia', 'Diagnóstico y tratamiento de enfermedades del corazón y sistema cardiovascular.', 'Especialistas en el diagnóstico, tratamiento y prevención de enfermedades del corazón y del sistema cardiovascular. Ofrecemos atención integral para pacientes con problemas cardíacos.', 'Heart', ARRAY['Electrocardiograma', 'Ecocardiograma', 'Prueba de esfuerzo', 'Holter', 'Consulta cardiológica']),

('Pediatría', 'pediatria', 'Atención médica integral para bebés, niños y adolescentes.', 'Cuidado médico especializado para pacientes desde el nacimiento hasta los 18 años, incluyendo prevención, diagnóstico y tratamiento.', 'Baby', ARRAY['Control del niño sano', 'Vacunación', 'Consulta pediátrica', 'Manejo de infecciones', 'Evaluación del crecimiento']),

('Ginecología y Obstetricia', 'ginecologia-obstetricia', 'Atención integral de la salud femenina, embarazo y parto.', 'Especialistas en salud reproductiva femenina, control prenatal, atención del parto y tratamiento de patologías ginecológicas.', 'Users', ARRAY['Control prenatal', 'Ultrasonido obstétrico', 'Papanicolaou', 'Consulta ginecológica', 'Planificación familiar']),

('Traumatología y Ortopedia', 'traumatologia-ortopedia', 'Tratamiento de lesiones y enfermedades del sistema musculoesquelético.', 'Diagnóstico y tratamiento de fracturas, lesiones deportivas, enfermedades de huesos, articulaciones y músculos.', 'Bone', ARRAY['Radiografías', 'Tratamiento de fracturas', 'Cirugía ortopédica', 'Rehabilitación', 'Consulta traumatológica']);

-- Insertar doctores completos
INSERT INTO public.doctores (
  nombre, slug, titulo, experiencia, whatsapp, telefono_hospital, telefonos_adicionales,
  mision, areas_atencion, formacion_detallada, reconocimientos, horario_detallado,
  has_detailed_profile, biografia, educacion, logros, certificaciones
) VALUES 
-- Doctores de Medicina General con perfiles completos
(
  'Dra. Karina Peña Tello',
  'dra-karina-pena-tello',
  'Médico General',
  'Médico general en consulta y urgencias del Hospital Independencia. Formada por la Universidad Autónoma de Puebla.',
  '238 1338026',
  '238 382 4819',
  ARRAY['238 1338026'],
  'Médico general especializada en consulta y urgencias, comprometida con brindar atención médica de calidad.',
  ARRAY['Consulta general', 'Medicina de urgencias', 'Atención primaria', 'Medicina familiar'],
  'Egresada por la Universidad Autónoma de Puebla como Médico Cirujano y Partero.',
  ARRAY['Colaboración en el IMSS (Pre internado Rotario de Pregrado)', 'Escuela de Educación Especial para niños discapacitados (SEP)', 'Terapia de Rehabilitación, Terapia de Lenguaje y Coordinadora de CRIÉ', '9 años en Farmacias Similares (Consulta General)', '6 años en Farmacias de Apoyo (Consulta General)'],
  'Consulta general y urgencias disponibles',
  true,
  'Médico general con amplia experiencia en atención primaria y medicina de urgencias.',
  ARRAY['Médico Cirujano y Partero - Universidad Autónoma de Puebla'],
  ARRAY['9 años de experiencia en consulta general', '6 años en farmacias de apoyo'],
  ARRAY['Médico Cirujano y Partero certificado']
),
(
  'Dr. Bernardo Velasco Olalde',
  'dr-bernardo-velasco-olalde',
  'Médico General',
  'Médico general con atención humanista, especializado en enfermedades crónicas y medicina de la obesidad.',
  '2381022504',
  '238 382 4819',
  ARRAY['2383829648'],
  'Soy el Dr. Velasco mi misión es tener una atención médica de primer contacto con trato humanista para mis pacientes.',
  ARRAY['Diabetes Mellitus', 'Hipertensión Arterial', 'Mujeres embarazadas', 'Infecciones respiratorias en niños y adultos', 'Medicina de la obesidad'],
  'Egresado de la B.U.A.P.',
  ARRAY['Miembro de la Academia Mexicana para el estudio de la obesidad'],
  '09:00 a 21:00 hrs',
  true,
  'Médico general especializado en medicina de la obesidad y enfermedades crónico-degenerativas.',
  ARRAY['Médico Cirujano y Partero - B.U.A.P.'],
  ARRAY['Especialización en medicina de la obesidad'],
  ARRAY['Miembro de la Academia Mexicana para el estudio de la obesidad']
),
(
  'Dr. Raymundo Romero Ventura',
  'dr-raymundo-romero-ventura',
  'Médico General',
  'Médico general con más de 35 años de experiencia en atención primaria.',
  '238 130 0097',
  '238 382 4819',
  ARRAY['2383829648'],
  'Médico general con desarrollo profesional y académico en atención primaria con más de 35 años de experiencia.',
  ARRAY['Atención primaria', 'Medicina familiar', 'Promoción de la salud', 'Recuperación y rehabilitación'],
  'Médico Cirujano y Partero egresado en 1984 por la Benemérita Universidad Autónoma del Estado de Puebla.',
  ARRAY['Miembro activo de la Asociación Médica de Ajalpan y su Región A.C.', 'Miembro del Colegio de Médicos Cirujanos del Estado de Puebla A.C.'],
  'Lunes a Sábado de 10:00 – 14:00 y 16:00 – 20:00',
  true,
  'Médico general con más de 35 años de experiencia en atención primaria y medicina familiar.',
  ARRAY['Médico Cirujano y Partero - BUAP (1984)'],
  ARRAY['35+ años de experiencia en atención primaria'],
  ARRAY['Colegio de Médicos Cirujanos del Estado de Puebla A.C.']
),

-- Doctores de otras especialidades (perfiles básicos)
(
  'Dr. Carlos Mendoza Rivera',
  'dr-carlos-mendoza-rivera',
  'Cardiólogo',
  'Especialista en cardiología con 15 años de experiencia.',
  '238 123 4567',
  '238 382 4819',
  ARRAY['238 123 4567'],
  NULL,
  ARRAY['Cardiología general', 'Ecocardiografía'],
  NULL,
  NULL,
  'Lunes a Viernes de 8:00 a 16:00',
  false,
  NULL,
  NULL,
  NULL,
  NULL
),
(
  'Dra. María González López',
  'dra-maria-gonzalez-lopez',
  'Pediatra',
  'Pediatra especializada en el cuidado integral de niños.',
  '238 234 5678',
  '238 382 4819',
  ARRAY['238 234 5678'],
  NULL,
  ARRAY['Pediatría general', 'Vacunación'],
  NULL,
  NULL,
  'Lunes a Sábado de 9:00 a 17:00',
  false,
  NULL,
  NULL,
  NULL,
  NULL
),
(
  'Dra. Ana Sofía Herrera',
  'dra-ana-sofia-herrera',
  'Ginecóloga',
  'Especialista en ginecología y obstetricia.',
  '238 345 6789',
  '238 382 4819',
  ARRAY['238 345 6789'],
  NULL,
  ARRAY['Ginecología', 'Obstetricia'],
  NULL,
  NULL,
  'Martes a Sábado de 10:00 a 18:00',
  false,
  NULL,
  NULL,
  NULL,
  NULL
),
(
  'Dr. Roberto Jiménez Castro',
  'dr-roberto-jimenez-castro',
  'Traumatólogo',
  'Especialista en traumatología y ortopedia.',
  '238 456 7890',
  '238 382 4819',
  ARRAY['238 456 7890'],
  NULL,
  ARRAY['Traumatología', 'Ortopedia'],
  NULL,
  NULL,
  'Lunes a Viernes de 7:00 a 15:00',
  false,
  NULL,
  NULL,
  NULL,
  NULL
);

-- Relacionar doctores con especialidades
INSERT INTO public.doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM public.doctores d, public.especialidades e
WHERE (d.slug = 'dra-karina-pena-tello' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-bernardo-velasco-olalde' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-raymundo-romero-ventura' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-carlos-mendoza-rivera' AND e.slug = 'cardiologia')
   OR (d.slug = 'dra-maria-gonzalez-lopez' AND e.slug = 'pediatria')
   OR (d.slug = 'dra-ana-sofia-herrera' AND e.slug = 'ginecologia-obstetricia')
   OR (d.slug = 'dr-roberto-jimenez-castro' AND e.slug = 'traumatologia-ortopedia');
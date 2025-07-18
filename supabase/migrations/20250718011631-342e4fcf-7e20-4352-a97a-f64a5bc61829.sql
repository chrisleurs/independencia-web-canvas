
-- Primero, limpiar datos existentes para evitar conflictos
DELETE FROM public.doctor_especialidades;
DELETE FROM public.doctores;
DELETE FROM public.especialidades;

-- Insertar todas las especialidades con información completa
INSERT INTO public.especialidades (titulo, slug, descripcion, descripcion_detallada, icon_name, servicios) VALUES
-- Especialidades principales
('Cardiología', 'cardiologia', 'Diagnóstico y tratamiento de enfermedades del corazón y sistema cardiovascular.', 'Especialistas en el diagnóstico, tratamiento y prevención de enfermedades del corazón y del sistema cardiovascular. Ofrecemos atención integral para pacientes con problemas cardíacos.', 'Heart', ARRAY['Electrocardiograma', 'Ecocardiograma', 'Prueba de esfuerzo', 'Holter', 'Consulta cardiológica']),

('Neurología', 'neurologia', 'Atención especializada en trastornos del sistema nervioso central y periférico.', 'Diagnóstico y tratamiento de enfermedades del sistema nervioso, incluyendo cerebro, médula espinal y nervios periféricos.', 'Brain', ARRAY['Electroencefalograma', 'Consulta neurológica', 'Tratamiento de epilepsia', 'Manejo de migraña', 'Evaluación de trastornos del movimiento']),

('Pediatría', 'pediatria', 'Atención médica integral para bebés, niños y adolescentes.', 'Cuidado médico especializado para pacientes desde el nacimiento hasta los 18 años, incluyendo prevención, diagnóstico y tratamiento.', 'Baby', ARRAY['Control del niño sano', 'Vacunación', 'Consulta pediátrica', 'Manejo de infecciones', 'Evaluación del crecimiento']),

('Ginecología y Obstetricia', 'ginecologia-obstetricia', 'Atención integral de la salud femenina, embarazo y parto.', 'Especialistas en salud reproductiva femenina, control prenatal, atención del parto y tratamiento de patologías ginecológicas.', 'Users', ARRAY['Control prenatal', 'Ultrasonido obstétrico', 'Papanicolaou', 'Consulta ginecológica', 'Planificación familiar']),

('Traumatología y Ortopedia', 'traumatologia-ortopedia', 'Tratamiento de lesiones y enfermedades del sistema musculoesquelético.', 'Diagnóstico y tratamiento de fracturas, lesiones deportivas, enfermedades de huesos, articulaciones y músculos.', 'Bone', ARRAY['Radiografías', 'Tratamiento de fracturas', 'Cirugía ortopédica', 'Rehabilitación', 'Consulta traumatológica']),

('Medicina General', 'medicina-general', 'Atención integral para toda la familia. Diagnóstico y tratamiento de enfermedades comunes.', 'Brindamos atención médica integral para toda la familia, con diagnóstico y tratamiento de enfermedades comunes, medicina preventiva y seguimiento de pacientes crónicos.', 'Stethoscope', ARRAY['Consulta médica general', 'Medicina preventiva', 'Control de enfermedades crónicas', 'Diagnóstico temprano', 'Seguimiento de pacientes', 'Certificados médicos']),

('Dermatología', 'dermatologia', 'Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.', 'Atención especializada en patologías dermatológicas, desde problemas comunes hasta condiciones complejas de la piel.', 'Sparkles', ARRAY['Consulta dermatológica', 'Dermatoscopia', 'Tratamiento de acné', 'Manejo de psoriasis', 'Cirugía dermatológica menor']),

('Oftalmología', 'oftalmologia', 'Cuidado integral de la salud visual y tratamiento de enfermedades oculares.', 'Diagnóstico y tratamiento de enfermedades del ojo, corrección de defectos visuales y cirugías oftalmológicas.', 'Eye', ARRAY['Examen de la vista', 'Cirugía de cataratas', 'Tratamiento de glaucoma', 'Consulta oftalmológica', 'Fondo de ojo']),

('Otorrinolaringología', 'otorrinolaringologia', 'Tratamiento de enfermedades del oído, nariz y garganta.', 'Especialistas en el diagnóstico y tratamiento de patologías de oído, nariz, garganta y estructuras relacionadas.', 'Ear', ARRAY['Audiometría', 'Endoscopia nasal', 'Cirugía de amígdalas', 'Tratamiento de sinusitis', 'Consulta ORL']),

('Psiquiatría', 'psiquiatria', 'Diagnóstico y tratamiento de trastornos mentales y emocionales.', 'Atención especializada en salud mental, incluyendo diagnóstico, tratamiento farmacológico y psicoterapia.', 'Brain', ARRAY['Consulta psiquiátrica', 'Evaluación psicológica', 'Tratamiento de depresión', 'Manejo de ansiedad', 'Terapia farmacológica']),

('Urología', 'urologia', 'Tratamiento de enfermedades del sistema genitourinario.', 'Diagnóstico y tratamiento de patologías del aparato urinario y reproductor masculino.', 'Droplets', ARRAY['Consulta urológica', 'Ecografía prostática', 'Cistoscopia', 'Tratamiento de cálculos', 'Cirugía urológica']),

('Endocrinología', 'endocrinologia', 'Tratamiento de trastornos hormonales y metabólicos.', 'Especialistas en el diagnóstico y tratamiento de enfermedades del sistema endocrino y trastornos metabólicos.', 'Activity', ARRAY['Control de diabetes', 'Manejo de tiroides', 'Tratamiento de obesidad', 'Consulta endocrinológica', 'Densitometría ósea']);

-- Insertar doctores con información completa
INSERT INTO public.doctores (
  nombre, slug, titulo, experiencia, whatsapp, telefono_hospital, telefonos_adicionales,
  mision, areas_atencion, formacion_detallada, reconocimientos, horario_detallado,
  has_detailed_profile, created_at, updated_at
) VALUES 
-- Doctores de Medicina General (con perfiles detallados)
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
  true
),
(
  'Dr. Hipólito Coyotl Cruz',
  'dr-hipolito-coyotl-cruz',
  'Médico General',
  'Médico general del Hospital Independencia. Formado por la Universidad Autónoma de Puebla.',
  '236 1024599',
  '238 382 4819',
  ARRAY['236 1024599', '236 3812945'],
  'Consulta general para atender a pacientes con calidad.',
  ARRAY['Consulta general', 'Atención primaria', 'Medicina familiar'],
  'Egresado por la Universidad Autónoma de Puebla como Médico, Cirujano y Partero.',
  ARRAY['Médico Cirujano y Partero certificado'],
  'Consulta general disponible',
  true
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
  true
),
(
  'Dr. Javier Carrasco González',
  'dr-javier-carrasco-gonzalez',
  'Médico General',
  'Médico general comprometido con brindar atención médica integral de calidad con humanismo y profesionalismo.',
  '2381902659',
  '238 382 4819',
  ARRAY['2383829648'],
  'Soy el Dr. Javier Carrasco, mi misión es Brindar una atención médica integral de calidad con humanismo y profesionalismo para mejorar la salud de las personas que lo necesiten.',
  ARRAY['Enfermedades generales', 'Enfermedades crónico degenerativas', 'Medicina familiar'],
  'Licenciatura en Médico Cirujano y Partero.',
  ARRAY['Actualizaciones en medicina de urgencias'],
  'Consulta general disponible',
  true
),
(
  'Dr. Gerardo Antonio Valderrama López',
  'dr-gerardo-valderrama-lopez',
  'Médico General',
  'Médico general especializado en medicina familiar, urgencias y enfermedades crónico-degenerativas.',
  '2381117877',
  '238 382 4819',
  ARRAY['238 249 3811', '2383829648'],
  'Soy el Dr. Valderrama, mi misión es otorgar atención médica de calidad integral para el bienestar de nuestros pacientes.',
  ARRAY['Atención médica primaria de Urgencias', 'Medicina Familiar', 'Enfermedades crónico-degenerativas'],
  'Licenciatura en Médico Cirujano y Partero BUAP. Maestría en Administración de Instituciones de Salud.',
  ARRAY['Adscrito al Servicio de Urgencias Médicas ISSSTE'],
  'Lunes a Viernes de 10 a 14 hrs, Sábados 10 a 14 hrs. Urgencias: 24/7',
  true
),
(
  'Dr. Raymundo Romero Ventura',
  'dr-raymundo-romero-ventura',
  'Médico General',
  'Médico general con más de 35 años de experiencia en atención primaria, especializado en promoción, recuperación y rehabilitación de la salud.',
  '238 130 0097',
  '238 382 4819',
  ARRAY['2383829648'],
  'Médico general con desarrollo profesional y académico en atención primaria con más de 35 años de experiencia laborando en la Ciudad de Ajalpan, Puebla. Capacitado para resolver los principales problemas concernientes a la promoción, recuperación y rehabilitación de la salud, tanto individual como familiar.',
  ARRAY['Atención primaria', 'Medicina familiar', 'Promoción de la salud', 'Recuperación y rehabilitación'],
  'Médico Cirujano y Partero egresado en 1984 por la Benemérita Universidad Autónoma del Estado de Puebla.',
  ARRAY['Miembro activo de la Asociación Médica de Ajalpan y su Región A.C.', 'Miembro del Colegio de Médicos Cirujanos del Estado de Puebla A.C.', 'Recertificación en 2020 por el Colegio de Médicos Cirujanos del Estado de Puebla A.C. COMECEP', 'Miembro del Colegio Médico de México A.C. FENACOME'],
  'Lunes a Sábado de 10:00 – 14:00 y 16:00 – 20:00',
  true
),

-- Doctores de Cardiología (con perfiles básicos)
(
  'Dr. Carlos Mendoza Rivera',
  'dr-carlos-mendoza-rivera',
  'Cardiólogo',
  'Especialista en cardiología con 15 años de experiencia en el tratamiento de enfermedades cardiovasculares.',
  '238 123 4567',
  '238 382 4819',
  ARRAY['238 123 4567'],
  NULL,
  ARRAY['Cardiología general', 'Ecocardiografía', 'Electrocardiografía'],
  NULL,
  NULL,
  'Lunes a Viernes de 8:00 a 16:00',
  false
),

-- Doctores de Pediatría (con perfiles básicos)
(
  'Dra. María González López',
  'dra-maria-gonzalez-lopez',
  'Pediatra',
  'Pediatra especializada en el cuidado integral de niños y adolescentes.',
  '238 234 5678',
  '238 382 4819',
  ARRAY['238 234 5678'],
  NULL,
  ARRAY['Pediatría general', 'Vacunación', 'Control del niño sano'],
  NULL,
  NULL,
  'Lunes a Sábado de 9:00 a 17:00',
  false
),

-- Doctores de Ginecología (con perfiles básicos)
(
  'Dra. Ana Sofía Herrera',
  'dra-ana-sofia-herrera',
  'Ginecóloga',
  'Especialista en ginecología y obstetricia con amplia experiencia en salud femenina.',
  '238 345 6789',
  '238 382 4819',
  ARRAY['238 345 6789'],
  NULL,
  ARRAY['Ginecología', 'Obstetricia', 'Control prenatal'],
  NULL,
  NULL,
  'Martes a Sábado de 10:00 a 18:00',
  false
),

-- Doctores de Traumatología (con perfiles básicos)
(
  'Dr. Roberto Jiménez Castro',
  'dr-roberto-jimenez-castro',
  'Traumatólogo',
  'Especialista en traumatología y ortopedia, experto en cirugía de huesos y articulaciones.',
  '238 456 7890',
  '238 382 4819',
  ARRAY['238 456 7890'],
  NULL,
  ARRAY['Traumatología', 'Ortopedia', 'Cirugía ortopédica'],
  NULL,
  NULL,
  'Lunes a Viernes de 7:00 a 15:00',
  false
);

-- Relacionar doctores con especialidades
INSERT INTO public.doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM public.doctores d, public.especialidades e
WHERE (d.slug = 'dra-karina-pena-tello' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-hipolito-coyotl-cruz' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-bernardo-velasco-olalde' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-javier-carrasco-gonzalez' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-gerardo-valderrama-lopez' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-raymundo-romero-ventura' AND e.slug = 'medicina-general')
   OR (d.slug = 'dr-carlos-mendoza-rivera' AND e.slug = 'cardiologia')
   OR (d.slug = 'dra-maria-gonzalez-lopez' AND e.slug = 'pediatria')
   OR (d.slug = 'dra-ana-sofia-herrera' AND e.slug = 'ginecologia-obstetricia')
   OR (d.slug = 'dr-roberto-jimenez-castro' AND e.slug = 'traumatologia-ortopedia');

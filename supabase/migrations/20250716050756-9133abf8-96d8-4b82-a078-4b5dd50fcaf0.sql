
-- Agregar campos faltantes a la tabla doctores para información completa
ALTER TABLE public.doctores 
ADD COLUMN mision TEXT,
ADD COLUMN telefono_hospital TEXT,
ADD COLUMN telefonos_adicionales TEXT[],
ADD COLUMN areas_atencion TEXT[],
ADD COLUMN horario_detallado TEXT,
ADD COLUMN reconocimientos TEXT[],
ADD COLUMN formacion_detallada TEXT;

-- Insertar doctores de Medicina General con información completa
INSERT INTO public.doctores (
  nombre, slug, titulo, experiencia, whatsapp, telefono_hospital, telefonos_adicionales,
  mision, areas_atencion, formacion_detallada, reconocimientos, horario_detallado,
  has_detailed_profile, created_at, updated_at
) VALUES 
(
  'Dra. Karina Peña Tello',
  'dra-karina-pena-tello',
  'Médico General',
  'Médico general en consulta y urgencias del Hospital Independencia. Formada por la Universidad Autónoma de Puebla.',
  '238 1338026',
  '238 382 4819',
  ARRAY['238 1338026'],
  'Médico general especializada en consulta y urgencias, comprometida con brindar atención médica de calidad.',
  ARRAY[
    'Consulta general',
    'Medicina de urgencias',
    'Atención primaria',
    'Medicina familiar'
  ],
  'Egresada por la Universidad Autónoma de Puebla como Médico Cirujano y Partero.',
  ARRAY[
    'Colaboración en el IMSS (Pre internado Rotario de Pregrado)',
    'Escuela de Educación Especial para niños discapacitados (SEP)',
    'Terapia de Rehabilitación, Terapia de Lenguaje y Coordinadora de CRIÉ',
    '9 años en Farmacias Similares (Consulta General)',
    '6 años en Farmacias de Apoyo (Consulta General)'
  ],
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
  ARRAY[
    'Consulta general',
    'Atención primaria',
    'Medicina familiar'
  ],
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
  ARRAY[
    'Diabetes Mellitus',
    'Hipertensión Arterial',
    'Mujeres embarazadas',
    'Infecciones respiratorias en niños y adultos',
    'Medicina de la obesidad'
  ],
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
  ARRAY[
    'Enfermedades generales',
    'Enfermedades crónico degenerativas',
    'Medicina familiar'
  ],
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
  ARRAY[
    'Atención médica primaria de Urgencias',
    'Medicina Familiar',
    'Enfermedades crónico-degenerativas'
  ],
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
  ARRAY[
    'Atención primaria',
    'Medicina familiar',
    'Promoción de la salud',
    'Recuperación y rehabilitación'
  ],
  'Médico Cirujano y Partero egresado en 1984 por la Benemérita Universidad Autónoma del Estado de Puebla.',
  ARRAY[
    'Miembro activo de la Asociación Médica de Ajalpan y su Región A.C.',
    'Miembro del Colegio de Médicos Cirujanos del Estado de Puebla A.C.',
    'Recertificación en 2020 por el Colegio de Médicos Cirujanos del Estado de Puebla A.C. COMECEP',
    'Miembro del Colegio Médico de México A.C. FENACOME'
  ],
  'Lunes a Sábado de 10:00 – 14:00 y 16:00 – 20:00',
  true
);

-- Crear relaciones con especialidades para los doctores de Medicina General
INSERT INTO public.especialidades (titulo, slug, descripcion, descripcion_detallada, icon_name, servicios)
VALUES (
  'Medicina General',
  'medicina-general',
  'Atención integral para toda la familia. Diagnóstico y tratamiento de enfermedades comunes.',
  'Brindamos atención médica integral para toda la familia, con diagnóstico y tratamiento de enfermedades comunes, medicina preventiva y seguimiento de pacientes crónicos.',
  'Stethoscope',
  ARRAY[
    'Consulta médica general',
    'Medicina preventiva',
    'Control de enfermedades crónicas',
    'Diagnóstico temprano',
    'Seguimiento de pacientes',
    'Certificados médicos'
  ]
) ON CONFLICT (slug) DO UPDATE SET
  titulo = EXCLUDED.titulo,
  descripcion = EXCLUDED.descripcion,
  descripcion_detallada = EXCLUDED.descripcion_detallada,
  icon_name = EXCLUDED.icon_name,
  servicios = EXCLUDED.servicios;

-- Relacionar todos los doctores de medicina general con la especialidad
INSERT INTO public.doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM public.doctores d, public.especialidades e
WHERE d.slug IN (
  'dra-karina-pena-tello',
  'dr-hipolito-coyotl-cruz',
  'dr-bernardo-velasco-olalde',
  'dr-javier-carrasco-gonzalez',
  'dr-gerardo-valderrama-lopez',
  'dr-raymundo-romero-ventura'
) AND e.slug = 'medicina-general'
ON CONFLICT (doctor_id, especialidad_id) DO NOTHING;

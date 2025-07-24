
-- Actualizar Dra. Karina Peña Tello
UPDATE doctores 
SET 
  titulo = 'Médico General',
  experiencia = 'Médico general en consulta y urgencias del Hospital Independencia. Formada por la Universidad Autónoma de Puebla.',
  whatsapp = '238 1338026',
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Universidad Autónoma de Puebla',
  areas_atencion = ARRAY['Consulta general', 'Medicina de urgencias', 'Atención primaria'],
  horario_detallado = 'Consulta general y urgencias disponibles',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dra-karina-pena-tello';

-- Actualizar Dr. Hipólito Coyotl Cruz
UPDATE doctores 
SET 
  titulo = 'Médico General',
  experiencia = 'Médico general formado por la Universidad Autónoma de Puebla',
  whatsapp = '236 1024599',
  telefonos_adicionales = ARRAY['236 3812945'],
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Egresado por la Universidad Autónoma de Puebla como Médico, Cirujano y Partero',
  areas_atencion = ARRAY['Consulta general', 'Atención integral'],
  mision = 'Consulta general para atender a pacientes con calidad',
  horario_detallado = 'Lunes a Viernes de 8:00 a 16:00',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-hipolito-coyotl-cruz';

-- Actualizar Dr. Bernardo Velasco Olalde
UPDATE doctores 
SET 
  titulo = 'Médico General',
  experiencia = 'Médico general con atención humanista, especializado en enfermedades crónicas',
  whatsapp = '2381022504',
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Egresado de la B.U.A.P.',
  areas_atencion = ARRAY['Diabetes Mellitus', 'Hipertensión Arterial', 'Mujeres embarazadas', 'Infecciones respiratorias en niños y adultos'],
  mision = 'Tener una atención médica de primer contacto con trato humanista para mis pacientes',
  reconocimientos = ARRAY['Miembro de la Academia Mexicana para el estudio de la obesidad'],
  horario_detallado = '09:00 a 21:00 hrs',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-bernardo-velasco-olalde';

-- Actualizar Dr. Javier Carrasco González
UPDATE doctores 
SET 
  titulo = 'Médico General',
  experiencia = 'Médico general con experiencia en medicina familiar',
  whatsapp = '2381902659',
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Licenciatura en Médico Cirujano y Partero',
  areas_atencion = ARRAY['Enfermedades generales', 'Enfermedades crónico degenerativas'],
  mision = 'Brindar una atención médica integral de calidad con humanismo y profesionalismo para mejorar la salud de las personas que lo necesiten',
  reconocimientos = ARRAY['Actualizaciones en medicina de urgencias'],
  horario_detallado = 'Lunes a Viernes de 8:00 a 16:00',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-javier-carrasco-gonzalez';

-- Actualizar Dr. Gerardo Antonio Valderrama López
UPDATE doctores 
SET 
  titulo = 'Médico General',
  experiencia = 'Especialista en medicina general y medicina familiar',
  whatsapp = '2381117877',
  telefonos_adicionales = ARRAY['238 249 3811'],
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Licenciatura en Médico Cirujano y Partero BUAP, Maestría en Administración de Instituciones de Salud',
  areas_atencion = ARRAY['Atención médica primaria de Urgencias', 'Medicina Familiar', 'Cronicodegenrativos'],
  mision = 'Otorgar atención médica de calidad integral para el bienestar de nuestros pacientes',
  reconocimientos = ARRAY['Adscrito al Servicio de Urgencias Médicas ISSSTE'],
  horario_detallado = 'Lunes a Viernes de 10 a 14 hrs, Sábados 10 a 14 hrs, Urgencias 24/7',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-gerardo-antonio-valderrama-lopez';

-- Actualizar Dr. Raymundo Romero Ventura
UPDATE doctores 
SET 
  titulo = 'Médico General',
  experiencia = 'Médico general con más de 35 años de experiencia',
  whatsapp = '238 130 0097',
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Médico Cirujano y Partero egresado en 1984 por la Benemérita Universidad Autónoma del Estado de Puebla',
  areas_atencion = ARRAY['Medicina general', 'Medicina preventiva'],
  certificaciones = ARRAY['Con recertificación en 2020 por el Colegio de Médicos Cirujanos del Estado de Puebla A.C.', 'COMECEP y del Colegio Médico de México A.C. FENACOME'],
  horario_detallado = 'Lunes a Sábado de 10:00 – 14:00 y 16:00 – 20:00',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-raymundo-romero-ventura';

-- Verificar que todos los doctores fueron actualizados correctamente
SELECT 
  nombre, 
  slug, 
  titulo, 
  has_detailed_profile,
  CASE 
    WHEN whatsapp IS NOT NULL THEN '✅ WhatsApp'
    ELSE '❌ Sin WhatsApp'
  END as whatsapp_status,
  CASE 
    WHEN formacion_detallada IS NOT NULL THEN '✅ Formación'
    ELSE '❌ Sin Formación'
  END as formacion_status,
  CASE 
    WHEN areas_atencion IS NOT NULL THEN '✅ Áreas'
    ELSE '❌ Sin Áreas'
  END as areas_status
FROM doctores 
WHERE slug IN (
  'dra-karina-pena-tello',
  'dr-hipolito-coyotl-cruz',
  'dr-bernardo-velasco-olalde',
  'dr-javier-carrasco-gonzalez',
  'dr-gerardo-antonio-valderrama-lopez',
  'dr-raymundo-romero-ventura'
)
ORDER BY nombre;

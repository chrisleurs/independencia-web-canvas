
-- Actualizar Dr. Héctor Peña Carrillo
UPDATE doctores 
SET 
  titulo = 'Cardineumólogo / Medicina Crítica / Anestesiólogo',
  experiencia = 'Especialista en medicina crítica, cardineumología y anestesiología',
  whatsapp = '238 1119392',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  formacion_detallada = 'UPAEP - UAA - UNAM - Universidad Católica de Chile',
  areas_atencion = ARRAY['Pacientes muy graves', 'Neumonías', 'Diabéticos Descompensados', 'Hipertensión Arterial Descompensada', 'Hipertensión Pulmonar', 'Tromboembolia Pulmonar', 'Enfermedad Pulmonar Obstructiva Crónica (EPOC)', 'Infecciones Severas', 'Cuidados Anestésicos y Post Quirúrgicos Avanzados', 'Medicina Interna', 'Medicina Crítica', 'Terapia Intensiva', 'Broncoscopia'],
  reconocimientos = ARRAY['Fellow of American College of Chest', 'Fellow of American Association for Bronchology', 'Sociedad Mexicana de Medicina Crítica', 'Colegio Mexicano de Anestesiología', 'Sociedad Mexicana de Neumología y Cirugía de Tórax', 'Sociedad de Circulación e Hipertensión Arterial Pulmonar AC', 'Más de 40 Publicaciones Nacionales e Internacionales'],
  horario_detallado = 'Disponible para consultas y emergencias',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-hector-pena-carrillo';

-- Actualizar Dr. Hazael Sánchez Rosales
UPDATE doctores 
SET 
  titulo = 'Medicina Crítica / Terapia Intensiva',
  experiencia = 'Especialista en medicina crítica y cuidados intensivos',
  whatsapp = '2381367962',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  formacion_detallada = 'Especialista en Medicina de Urgencias IPN, Especialista en Medicina Crítica UNAM',
  areas_atencion = ARRAY['Infarto de corazón', 'Infarto y hemorragia cerebral', 'Complicaciones agudas de diabetes mellitus', 'Tromboembolia pulmonar', 'Trombosis venosa profunda', 'Pacientes con ventilación artificial', 'Complicaciones de insuficiencia renal crónica', 'Traumatismo craneoencefálico'],
  mision = 'Tratar a pacientes graves con complicaciones derivadas de descompensaciones metabólicas o complicaciones post-quirúrgicas así como de estados patológicos crónicos',
  reconocimientos = ARRAY['Mérito académico UNAM', 'Reconocimiento Labor COVID UNAM'],
  horario_detallado = 'Disponible para urgencias y terapia intensiva',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-hazael-sanchez-rosales';

-- Actualizar Dr. Abraham Téllez Barragán
UPDATE doctores 
SET 
  titulo = 'Pediatra / Neonatología',
  experiencia = 'Especialista en pediatría y neonatología',
  whatsapp = '238 168 0976',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  formacion_detallada = 'La Facultad de Medicina en la Universidad Regional de Sureste de Oaxaca, Posgrado en Pediatría en el Hospital del Niño Poblano, Pediatra Certificado por el Consejo Mexicano de Certificación en Pediatría, Certificado en Reanimación Neonatal y Pediátrica Avanzada, Pediatra Prolactancia',
  areas_atencion = ARRAY['Asesoría Prenatal', 'Vacunas', 'Atención del Recién Nacido Sano y Enfermo', 'Asesorías de Lactancia Materna', 'Asesorías en Alimentación Complementaria', 'Consulta de Niño Sano y de Urgencia'],
  mision = 'Es evaluar a los pacientes en la etapa más importante del ser humano, la infancia. Asesorando a los Papás desde la concepción al nacimiento y adolescencia de una forma Integral',
  horario_detallado = 'Consultas pediátricas y neonatológicas',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-abraham-tellez-barragan';

-- Actualizar Dr. Irvin Omar Romero Ponce
UPDATE doctores 
SET 
  titulo = 'Pediatra / Neonatología',
  experiencia = 'Pediatra especialista en neonatología',
  whatsapp = '222 5079022',
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Médico Pediatra en la Universidad Popular Autónoma del Estado de Puebla, UPAEP',
  areas_atencion = ARRAY['Medicina en la Universidad Popular Autónoma del Estado de Puebla, UPAEP', 'Internado en el Hospital de la Margarita IMSS', 'Servicio Social Santiago Miahuatlán', 'Especialidad en Pediatría Hospital Juárez de México', 'Certificado por el Consejo Mexicano', 'Diplomas en cursos de terapia intensiva, urgencias pediátricas, BLS, ACLS, PALS y RENEO'],
  horario_detallado = 'Consultas pediátricas especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-irvin-omar-romero-ponce';

-- Actualizar Dra. Eltzy Rubí Rocha Rivera
UPDATE doctores 
SET 
  titulo = 'Médico Neonatóloga Pediatra',
  experiencia = 'Especialista en pediatría y cuidados neonatales',
  whatsapp = '238 1478768',
  telefono_hospital = '238 382 4819',
  formacion_detallada = 'Benemérita Universidad Autónoma de Puebla',
  areas_atencion = ARRAY['Realiza rotación en Hospital de la paz España en la subespecialidad', 'La Facultad de Medicina en pediatría en la Benemérita Universidad Autónoma de Puebla', 'La Facultad de Medicina en neonatología en la Benemérita Universidad Autónoma de Puebla'],
  horario_detallado = 'Atención neonatal y pediátrica',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dra-eltzy-rubi-rocha-rivera';

-- Actualizar Dr. César González Martínez
UPDATE doctores 
SET 
  titulo = 'Traumatología y Ortopedia',
  experiencia = 'Especialista en traumatología y ortopedia',
  whatsapp = '8180865876',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  formacion_detallada = 'Médico cirujano y partero por la Universidad Autónoma de Nuevo León, Posgrado en Traumatología y Ortopedia por la Benemérita Universidad Autónoma de Puebla',
  areas_atencion = ARRAY['Esguinces', 'Luxaciones', 'Fracturas', 'Artrosis', 'Pacientes con patología del sistema músculo esquelético'],
  mision = 'Prevenir, diagnosticar y tratar enfermedades y lesiones relacionadas con el sistema músculo esquelético',
  horario_detallado = '12:00 a 14:00 y 17:30 a 19:30',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-cesar-gonzalez-martinez';

-- Actualizar Dr. Arturo Domínguez Millan
UPDATE doctores 
SET 
  titulo = 'Alta Especialidad en Cirugía Articular',
  experiencia = 'Traumatólogo ortopedista con amplia experiencia',
  whatsapp = '222 1133552',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  formacion_detallada = 'Hospital General de México Traumatología y Ortopedia, Certificado por el Consejo Mexicano de Ortopedia y Traumatología A. C.',
  areas_atencion = ARRAY['Cirugía articular especializada'],
  mision = 'Tratar a mis pacientes con un trato especializado y cordial, con alta calidad humana, con alto espíritu de servicio y con genuino compromiso en el fomento de la salud',
  horario_detallado = 'L-M-V: 8:00hr a 12:00hr, M-J: 10:00hr a 12:00hr y 15:00hr a 20:00 hr, Urgencias 24 hrs',
  has_detailed_profile = true,
  updated_at = now()
WHERE slug = 'dr-arturo-dominguez-millan';

-- Verificar que todos los doctores especialistas fueron actualizados correctamente
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
  END as areas_status,
  CASE 
    WHEN mision IS NOT NULL THEN '✅ Misión'
    ELSE '❌ Sin Misión'
  END as mision_status
FROM doctores 
WHERE slug IN (
  'dr-hector-pena-carrillo',
  'dr-hazael-sanchez-rosales',
  'dr-abraham-tellez-barragan',
  'dr-irvin-omar-romero-ponce',
  'dra-eltzy-rubi-rocha-rivera',
  'dr-cesar-gonzalez-martinez',
  'dr-arturo-dominguez-millan'
)
ORDER BY nombre;


-- Actualizar Dra. Samaria Estefanía Mejia Rivera
UPDATE doctores 
SET 
  titulo = 'Cirugía Plástica, Estética y Reconstructiva',
  slug = 'dra-samaria-estefania-mejia-rivera',
  whatsapp = '238 213 0011',
  telefono_hospital = '238 382 4819',
  experiencia = 'Especialista en cirugía plástica y estética',
  formacion_detallada = 'Especialista en Cirugía Plástica, Estética y Reconstructiva del Hospital Independencia. Formada por BUAP, UNAM y Hospital General de México ''Dr. Eduardo Liceaga''',
  areas_atencion = ARRAY['Rejuvenecimiento/estiramiento facial (facelift)', 'Rejuvenecimiento de cuello (necklift)', 'Lipofilling facial (injerto graso)', 'Cirugía de párpados', 'Levantamiento/acortamiento de labio superior (lip lift)', 'Aumento de busto', 'Levantamiento de busto con o sin implantes', 'Explicación mamaria (retiro de implantes de busto)', 'Liposucción 360 con aumento graso de glúteo', 'Mommy makeover', 'Lipoabdominoplastia', 'Liposucción de brazos', 'Braquioplastia'],
  reconocimientos = ARRAY['Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva', 'Asociación Mexicana de Cirugía Plástica, Estética y Reconstructiva', 'International Society of Aesthetic Plastic Surgery'],
  horario_detallado = 'Consultas de cirugía plástica y estética',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Samaria Estefanía Mejia Rivera';

-- Actualizar Dr. Jorge Luis Hernández García
UPDATE doctores 
SET 
  titulo = 'Médico cirujano y partero especialista en neurocirugía',
  slug = 'dr-jorge-luis-hernandez-garcia',
  whatsapp = '238 1380375',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['238 4080222'],
  experiencia = 'Especialista en neurocirugía',
  formacion_detallada = 'Médico especialista en enfermedades y cirugías del cerebro y medula espinal del Hospital Independencia. Egresado del Centro Médico Nacional Siglo XXI',
  areas_atencion = ARRAY['Cirugías del cerebro y médula espinal', 'Enfermedades neurológicas que requieren cirugía'],
  reconocimientos = ARRAY['Certificado por el Consejo Mexicano de Cirugía Neurológica con No. 832', 'Miembro activo: Asociación Mexicana de Cirugía de Columna y Sociedad Mexicana de Cirugía Neurológica', 'Colegio Nacional de Neurocirugía'],
  certificaciones = ARRAY['C.E. 5114385', 'C.P. 3239700'],
  horario_detallado = 'Consultas y cirugías neurológicas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Jorge Luis Hernández García';

-- Actualizar Dra. Lidia Suárez Reynoso
UPDATE doctores 
SET 
  titulo = 'Oftalmólogo pediátrico',
  slug = 'dra-lidia-suarez-reynoso',
  whatsapp = '+52 238 389 3254',
  telefono_hospital = '238 382 4819',
  experiencia = 'Especialista en oftalmología con alta especialidad en oftalmología pediátrica cuenta con más de 11 años de experiencia',
  formacion_detallada = 'Egresado de la Benemérita Universidad Autónoma de Puebla 2008, Universidad Nacional Autónoma de México – Centro Médico Nacional Siglo XXI 2011, Universidad Nacional Autónoma de México- Hospital de Pediatría de Centro Médico Nacional Siglo XXI 2018',
  areas_atencion = ARRAY['Agudeza visual, segmento anterior, fondo de ojo, valoración estrabológica, y realiza una refracción bajo cicloplejía', 'Valoraciones de glaucoma congénito y seguimiento de pequeños con alguna patología que impida su correcta comunicación verbal con el mundo', 'Adaptación de lentes de contacto (Miopía, Hipermetropía y Astigmatismo)', 'Atención de retinopatía del prematuro', 'Consulta de primera vez', 'Consulta de Urgencia', 'Gresela de estrabismo', 'Detección de cataratas', 'Detección de Glaucoma', 'Graduación de lentes para niños', 'Lavado de vías lagrimales', 'Medición de lentes', 'Ojo de puntos lagrimales', 'Ojo Seco', 'Post quirúrgico (Primer día)', 'Pruebas para detección de estrabismo', 'Sondaje lagrimal', 'Tamiz oftalmológico neonatal', 'Tratamiento para conjuntivitis', 'Valoración de chalazión'],
  mision = 'La consulta incluye una valoración extensa y detallada del paciente oftalmológico pediátrico',
  certificaciones = ARRAY['No. de cédula: 7513680'],
  horario_detallado = 'Consultas oftalmológicas pediátricas especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Lidia Suárez Reynoso';

-- Actualizar Dr. Eugenio García Cano
UPDATE doctores 
SET 
  titulo = 'Cirugía Plástica, Estética y Reconstructiva',
  slug = 'dr-eugenio-garcia-cano',
  whatsapp = '222 174 6989',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en cirugía plástica, estética y reconstructiva con formación en cirugía cráneo facial',
  formacion_detallada = 'Medicina general UPAEP, Cirugía general IMSS SAN JOSE PUEBLA, Cirugía Plástica, estética y reconstructiva ISSEMYM, Cirugía cráneo facial ISSEMYM',
  areas_atencion = ARRAY['Inconformidades estética en cualquier parte del cuerpo', 'Reconstrucción secundario a defectos de nacimiento o accidentes'],
  mision = 'Ofrecer la mejor atención médica y un trato digno a mis pacientes',
  reconocimientos = ARRAY['Múltiples artículos publicados en revistas nacionales e internacionales'],
  horario_detallado = 'Consultas de cirugía plástica y reconstructiva',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Eugenio García Cano';


-- Actualizar Dra. Edith Jazmín Calvo Santana
UPDATE doctores 
SET 
  titulo = 'Ginecología y Obstetricia',
  slug = 'dra-edith-jazmin-calvo-santana',
  whatsapp = '238 1097480',
  telefono_hospital = '238 382 4819',
  experiencia = 'Médico ginecóloga y obstetra formada por la Benemérita Universidad Autónoma de Puebla',
  formacion_detallada = 'Médico General por Benemérita Universidad Autónoma de Puebla, Universidad Veracruzana, IMSS -Especialidad',
  areas_atencion = ARRAY['Ginecología general', 'Obstetricia', 'Salud reproductiva femenina'],
  horario_detallado = 'Consultas ginecológicas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Edith Jazmín Calvo Santana';

-- Actualizar Dra. Nayeli del Rayo Sánchez Garibay
UPDATE doctores 
SET 
  titulo = 'Ginecología y Obstetricia',
  slug = 'dra-nayeli-del-rayo-sanchez-garibay',
  whatsapp = '2383836766',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2381186688', '2383829648'],
  experiencia = 'Ginecóloga y obstetra avalada y certificada por el Consejo Mexicano de Ginecología y Obstetricia',
  formacion_detallada = 'Médica cirujana y partera por Benemérita Universidad Autónoma de Puebla, Especialidad en ginecología y obstetricia por IMSS UMAE CMN ''La Raza'' Hospital Gineco-Obstétrico #3 Víctor Manuel Espinosa de los Reyes Sánchez CdMx, Avalada y certificada por el Consejo Mexicano de Ginecología y Obstetricia',
  areas_atencion = ARRAY['Ginecología y obstetricia de formación con la misión de cuidar y acompañar a la mujer en cada etapa de su vida'],
  certificaciones = ARRAY['Cédula profesional: 9710930', 'Cédula especialidad:13254509', 'Consejo mexicano de ginecología y obstetricia: 12739'],
  horario_detallado = 'Consultas ginecológicas especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Nayeli del Rayo Sánchez Garibay';

-- Actualizar Dr. Moisés Héctor Sánchez Pérez
UPDATE doctores 
SET 
  titulo = 'Ginecología y Obstetricia',
  slug = 'dr-moises-hector-sanchez-perez',
  whatsapp = '238 3836766',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2381037216', '2383829648'],
  experiencia = 'Ginecólogo y obstetra con más de 30 años de experiencia en el cuidado y salud de la mujer',
  formacion_detallada = 'Médico cirujano y partero por Universidad Autónoma de Puebla, Especialidad en ginecología y obstetricia por IMSS Hospital General Regional # 36 ''San Alejandro'' Puebla, Pue, Avalado y certificado por el Consejo Mexicano de Ginecología y Obstetricia, Miembro Federado del colegio de Gineco-Obstetricia de Tehuacán, A. C.',
  areas_atencion = ARRAY['Ginecología y obstetricia con más de 30 años de experiencia en el cuidado y salud de la mujer en cada etapa de su vida, con la firme convicción de dar atención de calidad y calides para todas mis pacientes'],
  certificaciones = ARRAY['Cédula profesional:1115539', 'Cédula especialidad :4713396', 'Consejo mexicano de ginecología y obstetricia : 5733'],
  horario_detallado = 'Consultas ginecológicas con amplia experiencia',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Moisés Héctor Sánchez Pérez';

-- Actualizar Dra. Luz María Gil Sandoval
UPDATE doctores 
SET 
  titulo = 'Ginecología y Obstetricia',
  slug = 'dra-luz-maria-gil-sandoval',
  whatsapp = '2226801445',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383692614', '2383829648'],
  experiencia = 'Ginecóloga y obstetra certificada por el Consejo Mexicano de Ginecología y Obstetricia 2023-2027',
  formacion_detallada = 'Médica Cirujana y Partera egresada por Benemérita Universidad Autónoma de Puebla. Cédula Profesional 6192116, Ginecología y Obstetricia egresada de Secretaría de Salud del Estado de Puebla Ced. Espe. 10535653, Diplomado en Colposcopia en el Instituto Nacional de Cancerología, Diplomado en Ultrasonido Ginecológico y Obstétrico avalado por la Universidad La Salle',
  areas_atencion = ARRAY['Ginecología y obstetricia de formación con la misión de brindar atención médica integral en todo su ciclo vital desde la pubertad hasta la climaterio y menopausia, embarazo y fecía de problemas ginecológicos y obstétricos, pertenemos y del climaterio'],
  reconocimientos = ARRAY['Recertificación por el Consejo Mexicano de Ginecología y Obstetricia 2023 - 2027'],
  certificaciones = ARRAY['Consejo mexicano de ginecología y obstetricia : 5733'],
  horario_detallado = 'Consultas ginecológicas certificadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Luz María Gil Sandoval';

-- Actualizar Dra. Marianela Orellan Gorocica
UPDATE doctores 
SET 
  titulo = 'Anestesiólogo',
  slug = 'dra-marianela-orellan-gorocica',
  whatsapp = '2383946057',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en anestesiología con formación en anestesiología regional',
  formacion_detallada = 'Facultad de Medicina de la Benemérita Universidad Autónoma de Puebla Especialidad de Anestesiología, CMN Manuel Ávila Camacho Diplomado en Anestesiología Regional, Universidad de Monterrey',
  areas_atencion = ARRAY['La anestesiología es la rama de la medicina dedicada al alivio del dolor y al total cuidado del paciente antes, durante y después de un acto quirúrgico. Es una de las especialidades de la medicina más importantes que se practica en los últimos años. Es así que hoy se operan pacientes con edades extremas de la vida, con múltiples enfermedades asociadas y bajo anestesia balanceada. Los anestesiólogos administramos diferentes tipos de anestesia: desde la vigilancia del paciente despierto en diversos grados de sedación, sin anestesia o con anestesia local, hasta la realización de variados tipos de bloqueos nerviosos, bloqueos neuroaxiales, o anestesia general finalizando endovenosa total o una mezcla de técnicas que involucra la vía oral, endovenosa o inhalatoria. La actividad de la práctica de la anestesia durante algunos de estos procedimientos en el entorno del pabellón quirúrgico, especialmente a procedimientos radiológicos, hemodinámicos, oncológicos, endoscópicos y dentales'],
  reconocimientos = ARRAY['Miembro de la Sociedad Mexicana de Anestesiología en Ginecología y Obstétrica'],
  mision = 'Proporcionar a los pacientes un ambiente libre de dolor, ansiedad adecuado y seguro; y administrar, si fuera necesario, los procedimientos a sus pacientes brinda una alternativa sin complicaciones de anestesia en un ambiente de atención sanitaria segura, equitativa y personalizada, con eficiencia y orientada a la excelencia. Nuestra mayor responsabilidad es brindar la máxima seguridad a cada paciente.',
  horario_detallado = 'Anestesia para procedimientos quirúrgicos',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Marianela Orellan Gorocica';

-- Actualizar Dr. Christian Misael Galicia Castelán
UPDATE doctores 
SET 
  titulo = 'Anestesiólogo',
  slug = 'dr-christian-misael-galicia-castelan',
  whatsapp = '222 6620402',
  telefono_hospital = '238 382 4819',
  experiencia = 'Médico Anestesiólogo certificado por el Colegio de Anestesiología de la Universidad de Monterrey',
  formacion_detallada = 'Médico Cirujano Egresado de la Universidad Popular Autónoma del Estado de Puebla, Certificación de soporte vital básico (BLS) por la American Heart Association (AHA), Certificación de soporte vital cardiovascular avanzado (ACLS) por la American Heart Association (AHA)',
  areas_atencion = ARRAY['Anestesia general', 'Anestesia regional', 'Control del dolor', 'Soporte vital avanzado'],
  horario_detallado = 'Anestesia para cirugías especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Christian Misael Galicia Castelán';

-- Actualizar Dra. María Teresa Carrera Balderas
UPDATE doctores 
SET 
  titulo = 'Anestesiólogo',
  slug = 'dra-maria-teresa-carrera-balderas',
  whatsapp = '2381235220',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en anestesiología con enfoque en control del dolor',
  formacion_detallada = 'Benemérita Universidad Autónoma de Puebla',
  areas_atencion = ARRAY['Quirúrgicos y control del dolor'],
  mision = 'Contribuir a la actividad quirúrgica y al control del dolor en sus diferentes vertientes y a la aplicación en condiciones de confort y seguridad de diferentes técnicas diagnóstico-terapéuticas',
  reconocimientos = ARRAY['Miembro de la sociedad mexicana de anestesiología en ginecología y obstétrica'],
  horario_detallado = 'Anestesia y manejo del dolor',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. María Teresa Carrera Balderas';

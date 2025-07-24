
-- Actualizar Dr. Porfirio Apam Cruz
UPDATE doctores 
SET 
  titulo = 'Urgencias Médico Quirúrgicas',
  slug = 'dr-porfirio-apam-cruz',
  whatsapp = '2381178593',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en urgencias médicas',
  formacion_detallada = 'Médico Especialista en Urgencias Médico Quirúrgicas por el Instituto politécnico nacional, Hospital ISSSTE Adolfo López Mateos, Diplomado en ultrasonido diagnóstico por la UNAM FES Zaragoza, Maestría en ciencias forenses y periciales por la Universidad mesoamericana Médico : Acls Atls Mip Also Acceso vasculares, Adscrito al área de urgencias de el hospital general de zona número 15 de Tehuacán Puebla',
  areas_atencion = ARRAY['Biomédica', 'Atención urgencias'],
  mision = 'Otorgar a mis pacientes medicina ética, pronta, efectiva y vanguardista con el fin de satisfacer el alto estándar que la actualidad emergente como médicos nos demanda',
  horario_detallado = '8-13 hrs lunes a sábado',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Porfirio Apam Cruz';

-- Actualizar Dr. Jorge Alberto Almanza Islas
UPDATE doctores 
SET 
  titulo = 'Neurólogo y Neurofisiólogo',
  slug = 'dr-jorge-alberto-almanza-islas',
  whatsapp = '55 2980 6563',
  telefono_hospital = '238 382 4819',
  experiencia = 'Especialista en neurología y neurofisiología',
  formacion_detallada = 'Egresado de la Facultad de Medicina de Veracruz',
  areas_atencion = ARRAY['Trabajo como Especialista en el Instituto Mexicano del Seguro Social durante 13 años', 'Especialidad en Neurofisiología', 'Especialidad en Neurología', 'Realizó diferentes estudios fisiológicos'],
  horario_detallado = 'Consultas neurológicas especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Jorge Alberto Almanza Islas';

-- Actualizar Dra. Silvia Huerta Damian
UPDATE doctores 
SET 
  titulo = 'Médico General de Urgencias y Consulta Familiar Privada',
  slug = 'dra-silvia-huerta-damian',
  whatsapp = '2383882225',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Médica profesional del área de urgencias del hospital general de Tehuacán con más de 22 años de experiencia y capacidad para la atención de pacientes en urgencias médicas y consultas familiares presenciales y a distancia',
  formacion_detallada = 'Grado en Maestría, Universidad EIU, Puebla, Maestría en Administración de Instituciones de Salud, Grado en Medicina, Benemérita Universidad Autónoma de Puebla, Puebla, Formación académica de estudios universitarios, internado y servicio social de la carrera de Médico Cirujano y Partero, Diplomado, BUAP Puebla, Diplomado en Colposcopia y Cáncer en la mujer, Diplomado, Instituto Nacional Médica Continua A.C. Puebla, Diplomado, BUAP Puebla, Diplomado en urgencias en Pediatría, Diplomado en Farmacología Médica y Terapéutica, Congresos, Cursos, Múltiples, Tehuacán, Puebla, Guadalajara',
  areas_atencion = ARRAY['Urgencias médicas desde hace más de 10 años', 'Atención de pacientes en general de urgencias en el consultorio privado', 'Médico docente en universidades de Tehuacán: UVG UEMEX CUT UNID ATENEO ICT sección preparatoria', 'Tehuacán: Médico de Urgencias y consulta general, Hospital Municipal, Tehuacán'],
  mision = 'Atender con profesionalismo y excelente atención de salud integral a mis pacientes',
  horario_detallado = 'Urgencias y consulta familiar',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Silvia Huerta Damian';

-- Actualizar L.N.C. Carlos Escobar Olivier
UPDATE doctores 
SET 
  titulo = 'Nutriólogo clínico – Técnico auxiliar en lactancia materna',
  slug = 'lnc-carlos-escobar-olivier',
  whatsapp = '2381306208',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Licenciado en Nutrición Clínica',
  formacion_detallada = 'Centro Universitario Milenium, Certificado por: Federación Nacional de Nutrición y Ciencia - UAEM',
  areas_atencion = ARRAY['Paciente crítico', 'Desnutrición severa', 'Diabetes', 'Hipertensión', 'Inmunodepresión', 'Desnutrición', 'Obesidad y sobrepeso', 'Embarazo y lactancia materna', 'Aplicación de nutrición enteral y parenteral', 'Enfermedad renal crónica', 'Enfermedades gastrointestinales', 'Enfermedades pulmonares', 'Enfermedades ginecológicas'],
  mision = 'Resaltar la importancia de la nutrición en su uso clínico y hospitalario para la mejora del paciente a través de un tratamiento nutricional que implique la correcta elección de nutrientes y cantidades de estos, necesarios para tratar la patología y/o enfermedad nutricional de cada paciente',
  horario_detallado = 'Consultas nutricionales especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'L.N.C. Carlos Escobar Olivier';

-- Actualizar Dr. Virgilio Marroquín Jiménez
UPDATE doctores 
SET 
  titulo = 'Gastroenterología y Endoscopia',
  slug = 'dr-virgilio-marroquin-jimenez',
  whatsapp = '2381122126',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383825027', '2383829648'],
  experiencia = 'Especialista en gastroenterología',
  formacion_detallada = 'Egresado del Hospital de Especialidades, Centro Médico Nacional La Raza de la CDMX',
  areas_atencion = ARRAY['Enfermedades del esófago, estómago, hígado, páncreas, vesícula e intestinos'],
  reconocimientos = ARRAY['Miembro de la Asociación Mexicana de Gastroenterología', 'Miembro de la Asociación Mexicana de Endoscopia Gastrointestinal'],
  mision = 'Proporcionar una atención médica especializada en el diagnóstico y tratamiento de las enfermedades digestivas. Con enfoque en la excelencia clínica, utilizando tecnología avanzada y tratamientos personalizados para mejorar la salud digestiva y el bienestar general',
  horario_detallado = 'Lunes a viernes de 11 a 14 hrs y 16 a 19 hrs',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Virgilio Marroquín Jiménez';

-- Actualizar Dra. Yadira Tehuacanero Tecua
UPDATE doctores 
SET 
  titulo = 'Nefrología y Trasplante Renal',
  slug = 'dra-yadira-tehuacanero-tecua',
  whatsapp = '236 100 5844',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en nefrología',
  areas_atencion = ARRAY['HTA y daño vascular', 'Hematuria (sangre en la orina), proteinuria (proteínas en la orina)', 'Infecciones de orina', 'Enfermedades que producen cálculos en el riñón', 'Enfermedades que producen inflamación en el riñón (Nefritis)', 'Enfermedades en otros órganos, en la inmunidad y tratamientos que afectan a los riñones', 'Tratamiento de las consecuencias de la función renal alterada: anemia, falta de bicarbonato, aumento del fósforo', 'Seguimiento de la Insuficiencia Renal Crónica en consulta (ERCA)', 'Tratamiento de diálisis: Hemodiálisis y Diálisis peritoneal', 'Seguimiento de la Insuficiencia Renal Crónica en consulta (ERCA)', 'Tratamiento de diálisis: Hemodiálisis y Diálisis peritoneal', 'Atención previa, inmediata y posterior del Trasplante renal', 'Biopsia Renal para el diagnóstico de las enfermedades renales', 'Realización de accesos en venas para realizar hemodiálisis (catéteres)', 'Técnicas especiales de depuración de la sangre: plasmaféresis, granuloaféresis, leucocitaféresis, LDL aféresis etc'],
  mision = 'Nefróloga especialista en enfermedades renales y vías urinarias que brinda atención médica integral de las enfermedades de los riñones y las vías urinarias para que cada paciente en especial sea bien preparado y se le va a dar el tratamiento adecuado',
  horario_detallado = 'Consultas de nefrología especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Yadira Tehuacanero Tecua';

-- Actualizar Dr. Benito Vargas Ábrego
UPDATE doctores 
SET 
  titulo = 'Cirujano Cardiovascular y Torácico',
  slug = 'dr-benito-vargas-abrego',
  whatsapp = '5519485538',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en neumología',
  formacion_detallada = 'Médico General, Cirujano Cardiotorácico (Cirugía Torácica No Cardiaca en Adultos), Certificado por en Consejo Nacional de Cirugía del Tórax',
  areas_atencion = ARRAY['Diagnóstico, tratamiento y paliación a pacientes que sufren de enfermedades respiratorias que requieren Cirugía'],
  reconocimientos = ARRAY['Ex Jefe de la División de Cirugía de Tórax de la Sociedad Mexicana de Neumología y Cirugía de Tórax', 'Actual Tesorero de la Sociedad Mexicana de Cirujanos Torácicos Generales', 'Jefe de Cirugía de Tórax del Hospital General de México Dr. Eduardo Liceaga'],
  mision = 'Ofrecer diagnóstico, tratamiento y paliación a pacientes que sufren de enfermedades respiratorias que requieren Cirugía',
  horario_detallado = 'Consultas especializadas en cirugía torácica',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Benito Vargas Ábrego';

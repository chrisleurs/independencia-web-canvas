
-- Actualizar Dr. Omar Marroquín Herrera
UPDATE doctores 
SET 
  titulo = 'Ortopedista, Traumatólogo y Cirujano de Columna',
  slug = 'dr-omar-marroquin-herrera',
  whatsapp = '2381104740',
  telefono_hospital = '238 382 4819',
  experiencia = 'Especialista en cirugía general',
  formacion_detallada = 'Benemérita Universidad Autónoma de Puebla (Médico general), Universidad Autónoma de Querétaro (Especialidad en Traumatología y Ortopedia), Hospital Universitario Fundación Santa Fé de Bogotá (Sub especialidad Cirugía de columna en adultos), Instituto Roosevelt (Subespecialidad Cirugía de columna pediátrica), Clínica Porto Azul, Barranquilla (Cirugía endoscópica y mínima invasión de columna vertebral), Hospital Español de Mendoza, Argentina (Cirugía de mínima invasión de columna vertebral), Universidad Caxias Do Sul, Brasil (Patologías de la columna vertebral: Prevención, Manejo y Diagnóstico)',
  areas_atencion = ARRAY['Cirugía de Ortopedia y Traumatología con Subespecialidad en Cirugía de Columna vertebral de adultos y niños', 'Adiestramiento especial en cirugía de mínima invasión endoscópica de Columna', 'Estudios realizados en Colombia y Argentina'],
  mision = 'Especialista en Cirugía de Ortopedia y Traumatología con Subespecialidad en Cirugía de Columna vertebral de adultos y niños',
  horario_detallado = 'Consultas especializadas en traumatología',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Omar Marroquín Herrera';

-- Actualizar Dr. José Luis Hernández Aguilar
UPDATE doctores 
SET 
  titulo = 'Cirugía General',
  slug = 'dr-jose-luis-hernandez-aguilar',
  whatsapp = '238 1106342',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2381278192', '2383829648'],
  experiencia = 'Cirujano general con amplia experiencia',
  formacion_detallada = 'Egresado de la BUAP como médico general, Especialidad en cirugía General CMN MAC IMSS Puebla',
  areas_atencion = ARRAY['Hernias', 'Cálculos vesiculares', 'Apéndice', 'Tumores de partes blandas', 'Tumores del tubo digestivo', 'Lesiones por trauma en tórax y abdomen'],
  mision = 'Brindar atención médica excepcional a mis pacientes, especializándome en el tratamiento y resolución de enfermedades que requieren tratamiento quirúrgico. Mi compromiso es ofrecer cuidados de alta calidad, utilizando técnicas avanzadas y un enfoque humano para lograr la sanidad y el bienestar de cada paciente que confía en mi experiencia médica',
  reconocimientos = ARRAY['Participante de cirugías extramuros IMSS Oaxaca y de cirugías extramuros del sector salud Puebla'],
  horario_detallado = 'Cirugías y consultas generales',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. José Luis Hernández Aguilar';

-- Actualizar Dr. Miguel Parra Flores
UPDATE doctores 
SET 
  titulo = 'Cirugía General',
  slug = 'dr-miguel-parra-flores',
  whatsapp = '2225360991',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en cirugía general',
  formacion_detallada = 'Egresado de la UNAM',
  areas_atencion = ARRAY['Atención médica especializada y personalizada a mis pacientes autorizándoles un excelente servicio médico que requieren cirugía, como pie diabético, várices, hernias, apéndice, vesícula y condiciones del sistema digestivo'],
  mision = 'Proporcionar una atención médica especializada y personalizada a mis pacientes autorizándoles un excelente servicio médico que requieren cirugía. Mi objetivo es mejorar la calidad de vida de mis pacientes mediante procedimientos quirúrgicos seguros y efectivos, brindando un cuidado integral y personalizado que promueva la recuperación y bienestar general',
  reconocimientos = ARRAY['Aprobado por el consejo de Cirugía'],
  horario_detallado = 'Consultas y cirugías especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Miguel Parra Flores';

-- Actualizar Dr. Quintín Héctor González Contreras
UPDATE doctores 
SET 
  titulo = 'Especialista en Cirugía General, Cirugía gastrointestinal y Coloproctología',
  slug = 'dr-quintin-hector-gonzalez-contreras',
  whatsapp = '238 168 0976',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Cirujano general especializado',
  formacion_detallada = 'Egresó como Médico Cirujano de la Universidad Autónoma de México (UNAM) para posteriormente realizar la Especialidad en Cirugía General en el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán',
  areas_atencion = ARRAY['Hemorroides', 'Cirugía del Cáncer de Colon y Recto', 'Cirugía de la Hernia Inguinal', 'Cirugía de la Hernia Umbilical', 'Cirugía Laparoscópica', 'Cirugía Hemorroides'],
  reconocimientos = ARRAY['Miembro, Sociedad Médica del Instituto Nacional de Nutrición y Ciencias Médicas Salvador Zubirán', 'Miembro, Phi Beta Delta International Honor Society for Scholar Nu Chapter', 'Socio Activo y Fundador, Colegio Mexicano de Especialista en Coloproctología', 'Miembro, International Society of University Colon and Rectal Surgeons', 'Miembro, American Society of Colon and Rectal Surgeons', 'Socio, Sociedad Médica del Hospital Ángeles del Pedregal', 'Socio, Asociación Mexicana de Cirugía Endoscópica AC', 'Socio Activo, Asociación Mexicana de Cirugía General', 'Socio Adscrito, Sociedad Mexicana de Coloproctología', 'Miembro, Asociación Mexicana de Gastroenterología', 'Miembro, Sociedad Médica del Hospital ABC', 'Miembro, Academia Nacional de Medicina', 'Miembro, Academia Mexicana de Cirugía', 'Socio Activo, Sociedad Médica de Medica Sur', 'Miembro, Comité Científico, Asociación Mexicana de Cirugía Endoscópica', 'Miembro, Sociedad Médica HMG', 'Miembro, Sociedad Mexicana de Cirugía del Aparato Digestivo', 'Miembro, Fellow American College of Surgeons'],
  horario_detallado = 'Cirugía especializada y consultas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Quintín Héctor González Contreras';

-- Actualizar Dr. Jaime Oscar Romero Salas
UPDATE doctores 
SET 
  titulo = 'Cirugía Oncológica, Cirugía Oncoplástica de Mama, Cirugía General y Laparoscópica',
  slug = 'dr-jaime-oscar-romero-salas',
  whatsapp = null,
  telefono_hospital = '238 382 4819',
  experiencia = 'Reconocido cirujano oncólogo con amplia experiencia para tratar el cáncer con calidad y eficacia',
  formacion_detallada = 'Certificado por el Consejo Mexicano de Oncología No. 1303 2018-2023, Especialidad en Cirugía General y laparoscopia, Hospital Agustín O''Horan, Subespecialidad en Cirugía Oncológica, Centro Médico Nacional 20 de noviembre, Posgrado en Cirugía Oncoplastica de mama, Complejo Hospitalario, Universitario A Coruña, Hospital Avente y Lago de A Coruña, España, Actualmente adscrito en Instituto de Enfermedades de la Mama, FUCAM, D.F.',
  areas_atencion = ARRAY['Abdomen agudo', 'Cáncer de tiroides', 'Cáncer del colon', 'Cambios precancerosos del cuello uterino', 'Cáncer colorrectal', 'Cáncer de cabeza y cuello', 'Cáncer del cuello uterino', 'Cáncer de ovarios', 'Cáncer de mama', 'Cáncer de piel', 'Cáncer de próstata'],
  mision = 'Reconocido cirujano oncólogo con amplia experiencia para tratar el cáncer con calidad y eficacia. Me distingue mi conducta ética y profesional; con flexibilidad y empatía para ayudar a resolver las posibles limitantes de acceso o adherencia al tratamiento oncológico de mis pacientes',
  horario_detallado = 'Cirugía oncológica especializada',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Jaime Oscar Romero Salas';

-- Actualizar Dr. Tedd Ochoa Vázquez
UPDATE doctores 
SET 
  titulo = 'Urología',
  slug = 'dr-tedd-ochoa-vazquez',
  whatsapp = '(238) 38 20658',
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Urólogo certificado desde 2011 con especialización en trasplante renal',
  formacion_detallada = 'Médico cirujano por la Universidad Autónoma de San Luis Potosí, Certificado por el Consejo Nacional Mexicano de Urología # 797 (vigencia 2011) del servicio de Trasplante renal en Hospital de Especialidades del Centro Médico Nacional ''Gral. de división Manuel Ávila Camacho'' del IMSS, Puebla, Puebla. Adscrito IMSS UME Hospital de Especialidades CMN La Raza. Participación Clínica de Cirugía Reconstructiva de la Uretra. Miembro activo del Colegio Mexicano de Urología, de la Sociedad Americana de Urología, Sociedad Europea de Urología, de la Confederación Americana de Urología, Sociedad de Urología Oncológica del CMN La Raza, Especialidad en Urología en el Hospital de Especialidades del Centro Médico Nacional La Raza del IMSS, Cd. de México',
  areas_atencion = ARRAY['Crecimiento Prostático', 'Litiasis (piedras) en las vías urinarias', 'Disfunción Eréctil', 'Virus del Papiloma humano VPH', 'Cáncer de Próstata', 'Cáncer de Riñón', 'Cáncer de Vejiga'],
  mision = 'Ofrecer una atención integral y de vanguardia en el campo de la urología aplicando el diagnóstico, tratamiento y prevención para mis pacientes. Con pasión y dedicación, mi objetivo es mejorar la calidad de vida de mis pacientes, brindando tratamientos efectivos y personalizados',
  horario_detallado = 'Consultas urológicas especializadas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dr. Tedd Ochoa Vázquez';

-- Actualizar Dra. Irma Villanueva Cortes
UPDATE doctores 
SET 
  titulo = 'Dermatología',
  slug = 'dra-irma-villanueva-cortes',
  whatsapp = null,
  telefono_hospital = '238 382 4819',
  telefonos_adicionales = ARRAY['2383829648'],
  experiencia = 'Especialista en dermatología médica y cosmética, reconocida por varias instituciones de especialistas en el país',
  areas_atencion = ARRAY['Eliminación de lunares', 'Eliminación de verrugas', 'Manchas en la Piel', 'Tratamiento antiacné', 'Carcinoma Basocelular'],
  reconocimientos = ARRAY['Ácido hialurónico', 'Bótox', 'Peeling', 'Depilación láser'],
  mision = 'Especialista en enfermedades de la piel. Es encontrar procedimientos y tratamientos que mejoren la salud y estética de la piel, utilizando la más alta tecnología en diagnósticos y tratamientos dermatológicos disponibles en mis pacientes. Me especializo en algunos tratamientos como las manchas de la piel, el acné',
  horario_detallado = 'Consultas dermatológicas y estéticas',
  has_detailed_profile = true,
  updated_at = now()
WHERE nombre = 'Dra. Irma Villanueva Cortes';

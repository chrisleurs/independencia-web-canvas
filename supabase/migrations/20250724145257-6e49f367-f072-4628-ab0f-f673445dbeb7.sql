
-- FASE 3: CREAR DOCTORES FALTANTES
-- Medicina General (falta Dra. Karina Peña Tello y otros)
INSERT INTO doctores (nombre, titulo, slug, experiencia, whatsapp, telefono_hospital, horario_detallado, has_detailed_profile, areas_atencion) VALUES
('Dra. Karina Peña Tello', 'Especialista en Medicina General', 'karina-pena-tello', 'Especialista en Medicina General con amplia experiencia', '238 123 4567', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina General']),
('Dr. Hipólito Coyotl Cruz', 'Especialista en Medicina General', 'hipolito-coyotl-cruz', 'Especialista en Medicina General con amplia experiencia', '238 123 4568', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina General']),
('Dr. Emilio Gerardo Montoro Hidalgo', 'Especialista en Medicina General', 'emilio-montoro-hidalgo', 'Especialista en Medicina General con amplia experiencia', '238 123 4569', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina General']),
('Dr. Javier Carrasco González', 'Especialista en Medicina General', 'javier-carrasco-gonzalez', 'Especialista en Medicina General con amplia experiencia', '238 123 4570', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina General']),
('Dr. Gerardo Antonio Valderrama López', 'Especialista en Medicina General', 'gerardo-valderrama-lopez', 'Especialista en Medicina General con amplia experiencia', '238 123 4571', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina General']),
('Dr. Héctor López Aparicio', 'Especialista en Medicina General', 'hector-lopez-aparicio', 'Especialista en Medicina General con amplia experiencia', '238 123 4572', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina General']),

-- Medicina Crítica - Terapia Intensiva
('Dr. Héctor Peña Carrillo', 'Especialista en Medicina Crítica', 'hector-pena-carrillo', 'Especialista en Medicina Crítica, Cardineumología y Anestesiología con amplia experiencia', '238 123 4573', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina Crítica - Terapia Intensiva', 'Cardineumología', 'Anestesiología']),
('Dr. Hazael Sánchez Rosales', 'Especialista en Medicina Crítica', 'hazael-sanchez-rosales', 'Especialista en Medicina Crítica - Terapia Intensiva con amplia experiencia', '238 123 4574', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Medicina Crítica - Terapia Intensiva']),

-- Pediatría
('Dr. Abraham Téllez Segura', 'Especialista en Pediatría', 'abraham-tellez-segura', 'Especialista en Pediatría con amplia experiencia', '238 123 4575', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Pediatría']),
('Dr. Irvin Omar Paredes Ponce', 'Especialista en Pediatría', 'irvin-paredes-ponce', 'Especialista en Pediatría con amplia experiencia', '238 123 4576', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Pediatría']),
('Dr. Elzy Rubí Rucha Rivera', 'Especialista en Pediatría', 'elzy-rucha-rivera', 'Especialista en Pediatría con amplia experiencia', '238 123 4577', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Pediatría']),
('Dr. Alberto Delgado Medina', 'Especialista en Pediatría', 'alberto-delgado-medina', 'Especialista en Pediatría con amplia experiencia', '238 123 4578', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Pediatría']),

-- Traumatología y Ortopedia
('Dr. César González Martínez', 'Especialista en Traumatología y Ortopedia', 'cesar-gonzalez-martinez', 'Especialista en Traumatología y Ortopedia con amplia experiencia', '238 123 4579', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Traumatología y Ortopedia']),
('Dr. Arturo Domínguez Millán', 'Especialista en Traumatología y Ortopedia', 'arturo-dominguez-millan', 'Especialista en Traumatología y Ortopedia con amplia experiencia', '238 123 4580', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Traumatología y Ortopedia']),

-- Urgenciología
('Dra. Silvia Huerta Damián', 'Especialista en Urgenciología', 'silvia-huerta-damian', 'Especialista en Urgenciología con amplia experiencia', '238 123 4581', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Urgenciología']),
('Dr. Porfirio Agam Cruz', 'Especialista en Urgenciología', 'porfirio-agam-cruz', 'Especialista en Urgenciología con amplia experiencia', '238 123 4582', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Urgenciología']),

-- Neurología
('Dr. Jorge Alberto Aguirre', 'Especialista en Neurología', 'jorge-aguirre', 'Especialista en Neurología con amplia experiencia', '238 123 4583', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Neurología']),

-- Nutrición
('L.N.C. Carlos Escobar Olivares', 'Licenciado en Nutrición Clínica', 'carlos-escobar-olivares', 'Especialista en Nutrición con amplia experiencia', '238 123 4584', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Nutrición']),

-- Gastroenterología
('Dr. Virgilio Marroquín Jiménez', 'Especialista en Gastroenterología', 'virgilio-marroquin-jimenez', 'Especialista en Gastroenterología con amplia experiencia', '238 123 4585', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Gastroenterología']),

-- Nefrología
('Dra. Yadira Tehuacanero Tecua', 'Especialista en Nefrología', 'yadira-tehuacanero-tecua', 'Especialista en Nefrología con amplia experiencia', '238 123 4586', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Nefrología']),

-- Neumología
('Dr. Benito Vargas Atcacio', 'Especialista en Neumología', 'benito-vargas-atcacio', 'Especialista en Neumología con amplia experiencia', '238 123 4587', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Neumología']),

-- Cirugía General y Especializada
('Dr. Omar Marroquín Herrera', 'Especialista en Cirugía General', 'omar-marroquin-herrera', 'Especialista en Cirugía General y Especializada con amplia experiencia', '238 123 4588', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía General y Especializada']),
('Dr. José Luis Hernández Sosa', 'Especialista en Cirugía General', 'jose-hernandez-sosa', 'Especialista en Cirugía General y Especializada con amplia experiencia', '238 123 4589', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía General y Especializada']),
('Dr. Miguel Parra Flores', 'Especialista en Cirugía General', 'miguel-parra-flores', 'Especialista en Cirugía General y Especializada con amplia experiencia', '238 123 4590', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía General y Especializada']),
('Dr. Quintín Héctor Gogoritos Contreras', 'Especialista en Cirugía General', 'quintin-gogoritos-contreras', 'Especialista en Cirugía General y Especializada con amplia experiencia', '238 123 4591', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía General y Especializada']),
('Dr. Jaime Oscar Romero Sosa', 'Especialista en Cirugía General', 'jaime-romero-sosa', 'Especialista en Cirugía General y Especializada con amplia experiencia', '238 123 4592', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía General y Especializada']),

-- Urología
('Dr. Tedd Ochoa Vázquez', 'Especialista en Urología', 'tedd-ochoa-vazquez', 'Especialista en Urología con amplia experiencia', '238 123 4593', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Urología']),

-- Dermatología
('Dra. Irma Villanueva Cortes', 'Especialista en Dermatología', 'irma-villanueva-cortes', 'Especialista en Dermatología con amplia experiencia', '238 123 4594', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Dermatología']),

-- Ginecología y Obstetricia
('Dra. Edith Jazmín Calvo Santana', 'Especialista en Ginecología y Obstetricia', 'edith-calvo-santana', 'Especialista en Ginecología y Obstetricia con amplia experiencia', '238 123 4595', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Ginecología y Obstetricia']),
('Dra. Nayeli del Rayo Sánchez Garibay', 'Especialista en Ginecología y Obstetricia', 'nayeli-sanchez-garibay', 'Especialista en Ginecología y Obstetricia con amplia experiencia', '238 123 4596', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Ginecología y Obstetricia']),
('Dr. Rubén Julián Nacer', 'Especialista en Ginecología y Obstetricia', 'ruben-julian-nacer', 'Especialista en Ginecología y Obstetricia con amplia experiencia', '238 123 4597', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Ginecología y Obstetricia']),
('Dr. Moisés Héctor Sánchez Pérez', 'Especialista en Ginecología y Obstetricia', 'moises-sanchez-perez', 'Especialista en Ginecología y Obstetricia con amplia experiencia', '238 123 4598', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Ginecología y Obstetricia']),
('Dra. Luz María Gil Sandoval', 'Especialista en Ginecología y Obstetricia', 'luz-gil-sandoval', 'Especialista en Ginecología y Obstetricia con amplia experiencia', '238 123 4599', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Ginecología y Obstetricia']),

-- Anestesiología
('Dra. Marianela Orellan Gorgonio', 'Especialista en Anestesiología', 'marianela-orellan-gorgonio', 'Especialista en Anestesiología con amplia experiencia', '238 123 4600', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Anestesiología']),
('Dr. Christian Misael Galicia Castelán', 'Especialista en Anestesiología', 'christian-galicia-castelan', 'Especialista en Anestesiología con amplia experiencia', '238 123 4601', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Anestesiología']),
('Dra. María Teresa Carrera Balderas', 'Especialista en Anestesiología', 'maria-carrera-balderas', 'Especialista en Anestesiología con amplia experiencia', '238 123 4602', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Anestesiología']),

-- Cirugía Plástica
('Dr. Eugenio García Cano', 'Especialista en Cirugía Plástica', 'eugenio-garcia-cano', 'Especialista en Cirugía Plástica con amplia experiencia', '238 123 4603', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía Plástica']),
('Dr. Jaime Araoz Arroyo', 'Especialista en Cirugía Plástica', 'jaime-araoz-arroyo', 'Especialista en Cirugía Plástica con amplia experiencia', '238 123 4604', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía Plástica']),
('Dra. Samaria Estefanía Mejía Rivera', 'Especialista en Cirugía Plástica', 'samaria-mejia-rivera', 'Especialista en Cirugía Plástica con amplia experiencia', '238 123 4605', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Cirugía Plástica']),

-- Neurocirugía
('Dr. Jorge Luis Hernández García', 'Especialista en Neurocirugía', 'jorge-hernandez-garcia', 'Especialista en Neurocirugía con amplia experiencia', '238 123 4606', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Neurocirugía']),

-- Oftalmología Pediátrico
('Dra. Lidia Suárez Reynoso', 'Especialista en Oftalmología Pediátrica', 'lidia-suarez-reynoso', 'Especialista en Oftalmología Pediátrica con amplia experiencia', '238 123 4607', '238 382 4819', 'Lunes a Viernes de 8:00 a 16:00', false, ARRAY['Oftalmología Pediátrica']);

-- FASE 4: ASIGNAR DOCTORES A ESPECIALIDADES
-- Primero obtenemos los IDs de especialidades y doctores para hacer las asignaciones

-- Medicina General (obtener ID de especialidad)
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('karina-pena-tello', 'hipolito-coyotl-cruz', 'emilio-montoro-hidalgo', 'javier-carrasco-gonzalez', 'gerardo-valderrama-lopez', 'hector-lopez-aparicio')
AND e.slug = 'medicina-general';

-- Medicina Crítica - Terapia Intensiva
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('hector-pena-carrillo', 'hazael-sanchez-rosales')
AND e.slug = 'medicina-critica-terapia-intensiva';

-- Cardineumología (Dr. Héctor Peña Carrillo también)
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'hector-pena-carrillo'
AND e.slug = 'cardineumologia';

-- Anestesiología (Dr. Héctor Peña Carrillo y otros)
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('hector-pena-carrillo', 'marianela-orellan-gorgonio', 'christian-galicia-castelan', 'maria-carrera-balderas')
AND e.slug = 'anestesiologia';

-- Pediatría
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('abraham-tellez-segura', 'irvin-paredes-ponce', 'elzy-rucha-rivera', 'alberto-delgado-medina')
AND e.slug = 'pediatria';

-- Traumatología y Ortopedia
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('cesar-gonzalez-martinez', 'arturo-dominguez-millan')
AND e.slug = 'traumatologia-ortopedia';

-- Urgenciología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('silvia-huerta-damian', 'porfirio-agam-cruz')
AND e.slug = 'urgenciologia';

-- Neurología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'jorge-aguirre'
AND e.slug = 'neurologia';

-- Nutrición
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'carlos-escobar-olivares'
AND e.slug = 'nutricion';

-- Gastroenterología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'virgilio-marroquin-jimenez'
AND e.slug = 'gastroenterologia';

-- Nefrología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'yadira-tehuacanero-tecua'
AND e.slug = 'nefrologia';

-- Neumología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'benito-vargas-atcacio'
AND e.slug = 'neumologia';

-- Cirugía General y Especializada
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('omar-marroquin-herrera', 'jose-hernandez-sosa', 'miguel-parra-flores', 'quintin-gogoritos-contreras', 'jaime-romero-sosa')
AND e.slug = 'cirugia-general-especializada';

-- Urología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'tedd-ochoa-vazquez'
AND e.slug = 'urologia';

-- Dermatología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'irma-villanueva-cortes'
AND e.slug = 'dermatologia';

-- Ginecología y Obstetricia
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('edith-calvo-santana', 'nayeli-sanchez-garibay', 'ruben-julian-nacer', 'moises-sanchez-perez', 'luz-gil-sandoval')
AND e.slug = 'ginecologia-obstetricia';

-- Cirugía Plástica
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug IN ('eugenio-garcia-cano', 'jaime-araoz-arroyo', 'samaria-mejia-rivera')
AND e.slug = 'cirugia-plastica';

-- Neurocirugía
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'jorge-hernandez-garcia'
AND e.slug = 'neurocirugia';

-- Oftalmología Pediátrica
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id
FROM doctores d, especialidades e
WHERE d.slug = 'lidia-suarez-reynoso'
AND e.slug = 'oftalmologia-pediatrica';

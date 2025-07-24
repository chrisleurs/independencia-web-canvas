
-- Insertar relaciones doctor-especialidad usando nombres para encontrar IDs
-- Medicina General
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Bernardo Velasco Olalde' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Raymundo Romero Ventura' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Karina Peña Tello' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Hipólito Coyotl Cruz' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Emilio Gerardo Montoro Hidalgo' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Javier Carrasco González' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Gerardo Antonio Valderrama López' AND e.titulo = 'Medicina General';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Héctor López Aparicio' AND e.titulo = 'Medicina General';

-- Cardiología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Carlos Mendoza Rivera' AND e.titulo = 'Cardiología';

-- Traumatología y Ortopedia
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Roberto Jiménez Castro' AND e.titulo = 'Traumatología y Ortopedia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. César González Martínez' AND e.titulo = 'Traumatología y Ortopedia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Arturo Domínguez Millán' AND e.titulo = 'Traumatología y Ortopedia';

-- Ginecología y Obstetricia
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Ana Sofía Herrera' AND e.titulo = 'Ginecología y Obstetricia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Edith Jazmín Calvo Santana' AND e.titulo = 'Ginecología y Obstetricia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Nayeli del Rayo Sánchez Garibay' AND e.titulo = 'Ginecología y Obstetricia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Rubén Julián Nacer' AND e.titulo = 'Ginecología y Obstetricia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Moisés Héctor Sánchez Pérez' AND e.titulo = 'Ginecología y Obstetricia';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Luz María Gil Sandoval' AND e.titulo = 'Ginecología y Obstetricia';

-- Pediatría
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Abraham Téllez Segura' AND e.titulo = 'Pediatría';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Irvin Omar Paredes Ponce' AND e.titulo = 'Pediatría';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Elzy Rubí Rucha Rivera' AND e.titulo = 'Pediatría';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Alberto Delgado Medina' AND e.titulo = 'Pediatría';

-- Medicina Crítica - Terapia Intensiva
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Héctor Peña Carrillo' AND e.titulo = 'Medicina Crítica - Terapia Intensiva';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Hazael Sánchez Rosales' AND e.titulo = 'Medicina Crítica - Terapia Intensiva';

-- Urgenciología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Silvia Huerta Damián' AND e.titulo = 'Urgenciología';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Porfirio Agam Cruz' AND e.titulo = 'Urgenciología';

-- Neurología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Jorge Alberto Aguirre' AND e.titulo = 'Neurología';

-- Nutrición
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'L.N.C. Carlos Escobar Olivares' AND e.titulo = 'Nutrición';

-- Cardineumología (Dr. Héctor Peña Carrillo - múltiple especialidad)
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Héctor Peña Carrillo' AND e.titulo = 'Cardineumología';

-- Gastroenterología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Virgilio Marroquín Jiménez' AND e.titulo = 'Gastroenterología';

-- Nefrología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Yadira Tehuacanero Tecua' AND e.titulo = 'Nefrología';

-- Neumología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Benito Vargas Atcacio' AND e.titulo = 'Neumología';

-- Cirugía General y Especializada
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Omar Marroquín Herrera' AND e.titulo = 'Cirugía General y Especializada';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. José Luis Hernández Sosa' AND e.titulo = 'Cirugía General y Especializada';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Miguel Parra Flores' AND e.titulo = 'Cirugía General y Especializada';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Quintín Héctor Gogoritos Contreras' AND e.titulo = 'Cirugía General y Especializada';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Jaime Oscar Romero Sosa' AND e.titulo = 'Cirugía General y Especializada';

-- Urología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Tedd Ochoa Vázquez' AND e.titulo = 'Urología';

-- Dermatología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Irma Villanueva Cortes' AND e.titulo = 'Dermatología';

-- Anestesiología
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Héctor Peña Carrillo' AND e.titulo = 'Anestesiología';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Marianela Orellan Gorgonio' AND e.titulo = 'Anestesiología';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Christian Misael Galicia Castelán' AND e.titulo = 'Anestesiología';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. María Teresa Carrera Balderas' AND e.titulo = 'Anestesiología';

-- Cirugía Plástica
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Eugenio García Cano' AND e.titulo = 'Cirugía Plástica';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Jaime Araoz Arroyo' AND e.titulo = 'Cirugía Plástica';

INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Samaria Estefanía Mejía Rivera' AND e.titulo = 'Cirugía Plástica';

-- Neurocirugía
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dr. Jorge Luis Hernández García' AND e.titulo = 'Neurocirugía';

-- Oftalmología Pediátrico
INSERT INTO doctor_especialidades (doctor_id, especialidad_id)
SELECT d.id, e.id 
FROM doctores d, especialidades e 
WHERE d.nombre = 'Dra. Lidia Suárez Reynoso' AND e.titulo = 'Oftalmología Pediátrico';


-- Insertar las 15 especialidades faltantes
INSERT INTO especialidades (titulo, slug, descripcion, descripcion_detallada, icon_name, servicios) VALUES
('Medicina Crítica - Terapia Intensiva', 'medicina-critica-terapia-intensiva', 'Atención especializada para pacientes en estado crítico, cuidados intensivos y soporte vital avanzado.', 'Brindamos atención médica altamente especializada para pacientes que requieren cuidados intensivos, monitoreo continuo y soporte vital avanzado las 24 horas del día.', 'Activity', ARRAY['Cuidados intensivos', 'Soporte vital avanzado', 'Monitoreo continuo', 'Ventilación mecánica']),

('Urgenciología', 'urgenciologia', 'Atención médica inmediata para emergencias y urgencias las 24 horas del día.', 'Servicio de urgencias disponible las 24 horas para atender emergencias médicas, accidentes y situaciones que requieren atención médica inmediata.', 'AlertTriangle', ARRAY['Emergencias 24/7', 'Atención de traumatismos', 'Estabilización de pacientes', 'Primeros auxilios']),

('Neurología', 'neurologia', 'Diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.', 'Especialistas en el diagnóstico y tratamiento de enfermedades neurológicas como epilepsia, migrañas, trastornos del movimiento y enfermedades neurodegenerativas.', 'Brain', ARRAY['Electroencefalograma', 'Tratamiento de migrañas', 'Manejo de epilepsia', 'Trastornos del sueño']),

('Nutrición', 'nutricion', 'Evaluación nutricional, planes alimentarios y tratamiento de trastornos metabólicos.', 'Consultoría nutricional especializada con planes de alimentación personalizados y manejo de trastornos metabólicos.', 'Apple', ARRAY['Evaluación nutricional', 'Planes alimentarios', 'Manejo de diabetes', 'Control de peso']),

('Cardineumología', 'cardineumologia', 'Atención especializada que combina cardiología y neumología para el manejo integral.', 'Especialidad que integra cardiología y neumología para el manejo completo de pacientes con problemas cardiopulmonares.', 'Heart', ARRAY['Ecocardiograma', 'Espirometría', 'Manejo de insuficiencia cardíaca', 'Enfermedades pulmonares']),

('Gastroenterología', 'gastroenterologia', 'Diagnóstico y tratamiento de enfermedades del sistema digestivo.', 'Atención especializada en enfermedades del tracto gastrointestinal, hígado, páncreas y vías biliares.', 'Activity', ARRAY['Endoscopias', 'Colonoscopias', 'Tratamiento de gastritis', 'Manejo de hepatitis']),

('Nefrología', 'nefrologia', 'Especialidad médica que se ocupa del estudio y tratamiento de las enfermedades del riñón.', 'Diagnóstico y tratamiento de enfermedades renales, hipertensión arterial y trastornos electrolíticos.', 'Droplets', ARRAY['Hemodiálisis', 'Manejo de hipertensión', 'Insuficiencia renal', 'Trasplante renal']),

('Neumología', 'neumologia', 'Diagnóstico y tratamiento de enfermedades del sistema respiratorio.', 'Especialistas en enfermedades pulmonares, asma, EPOC, neumonía y otros trastornos respiratorios.', 'Activity', ARRAY['Espirometría', 'Tratamiento de asma', 'Manejo de EPOC', 'Oxigenoterapia']),

('Cirugía General y Especializada', 'cirugia-general-especializada', 'Procedimientos quirúrgicos generales y especializados con tecnología de vanguardia.', 'Realizamos cirugías generales, laparoscópicas y especializadas con técnicas mínimamente invasivas.', 'Scissors', ARRAY['Cirugía laparoscópica', 'Cirugía oncológica', 'Hernia', 'Vesícula biliar']),

('Urología', 'urologia', 'Diagnóstico y tratamiento de enfermedades del sistema genitourinario.', 'Atención especializada en enfermedades de riñones, vejiga, próstata y sistema reproductivo masculino.', 'Droplets', ARRAY['Cirugía de próstata', 'Litotricia', 'Incontinencia urinaria', 'Disfunción eréctil']),

('Dermatología', 'dermatologia', 'Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.', 'Atención dermatológica integral para problemas de la piel, acné, dermatitis y procedimientos estéticos.', 'User', ARRAY['Tratamiento de acné', 'Dermatitis', 'Cáncer de piel', 'Procedimientos estéticos']),

('Anestesiología', 'anestesiologia', 'Manejo del dolor y anestesia para procedimientos quirúrgicos.', 'Especialistas en anestesia general, regional y local para cirugías y manejo del dolor perioperatorio.', 'Zap', ARRAY['Anestesia general', 'Anestesia regional', 'Manejo del dolor', 'Sedación']),

('Cirugía Plástica', 'cirugia-plastica', 'Cirugía reconstructiva y estética con técnicas avanzadas.', 'Procedimientos de cirugía plástica reconstructiva y estética, incluyendo reconstrucción post-trauma.', 'Scissors', ARRAY['Cirugía reconstructiva', 'Procedimientos estéticos', 'Reconstrucción mamaria', 'Cirugía facial']),

('Neurocirugía', 'neurocirugia', 'Cirugía especializada del sistema nervioso central y periférico.', 'Procedimientos quirúrgicos del cerebro, médula espinal y sistema nervioso para tratar tumores y traumatismos.', 'Brain', ARRAY['Cirugía de tumores cerebrales', 'Cirugía de columna', 'Traumatismo craneal', 'Malformaciones vasculares']),

('Oftalmología Pediátrico', 'oftalmologia-pediatrico', 'Cuidado especializado de la salud visual en niños y adolescentes.', 'Diagnóstico y tratamiento de problemas visuales en pediatría, incluyendo estrabismo y errores refractivos.', 'Eye', ARRAY['Exámenes visuales pediátricos', 'Tratamiento de estrabismo', 'Corrección de errores refractivos', 'Cirugía ocular pediátrica']);

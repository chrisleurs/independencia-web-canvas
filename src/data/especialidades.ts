import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Baby, 
  Eye, 
  Bone, 
  Activity, 
  UserCheck, 
  Scissors, 
  AlertTriangle,
  LucideIcon,
  Zap,
  Apple,
  Microscope,
  Wind,
  Droplets
} from 'lucide-react';

export interface Especialidad {
  id: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  descripcionDetallada: string;
  slug: string;
  icon: LucideIcon;
  servicios: string[];
  doctores: Doctor[];
}

export interface Doctor {
  id: string;
  slug: string;
  nombre: string;
  titulo: string;
  foto?: string;
  especialidades: string[];
  areasAtencion?: string[];
  servicios?: string[];
  procedimientos?: string[];
  experiencia: string;
  mision?: string;
  formacion?: string;
  certificaciones?: string[];
  reconocimientos?: string[];
  horarios?: string;
  horarioDetallado?: string;
  telefonoHospital?: string;
  whatsapp?: string;
  telefonosAdicionales?: string[];
  contactoTitulos?: {
    hospital?: string;
    whatsapp?: string;
    adicionales?: string[];
  };
  hasDetailedProfile: boolean;
}

export const doctores: Doctor[] = [
  // Medicina General
  {
    id: 'dra-karina-pena-tello',
    slug: 'dra-karina-pena-tello',
    nombre: 'Dra. Karina Peña Tello',
    titulo: 'Medicina General',
    especialidades: ['Medicina General'],
    experiencia: 'Especialista en medicina general con amplia experiencia en atención primaria',
    hasDetailedProfile: false
  },
  {
    id: 'dr-hipolito-coyotl-cruz',
    slug: 'dr-hipolito-coyotl-cruz',
    nombre: 'Dr. Hipólito Coyotl Cruz',
    titulo: 'Medicina General',
    experiencia: 'Médico general formado por la Universidad Autónoma de Puebla',
    especialidades: ['Medicina General'],
    formacion: 'Egresado por la Universidad Autónoma de Puebla como Médico, Cirujano y Partero.',
    areasAtencion: [
      'Consulta general para atender a pacientes con calidad'
    ],
    whatsapp: '236 1024599',
    contactoTitulos: {
      whatsapp: 'WhatsApp'
    },
    telefonosAdicionales: ['236 3812945'],
    hasDetailedProfile: true
  },
  {
    id: 'dr-emilio-montoro-hidalgo',
    slug: 'dr-emilio-montoro-hidalgo',
    nombre: 'Dr. Emilio Gerardo Montoro Hidalgo',
    titulo: 'Medicina General',
    especialidades: ['Medicina General'],
    experiencia: 'Médico general con experiencia en atención integral de pacientes',
    hasDetailedProfile: false
  },
  {
    id: 'dr-bernardo-velasco-olalde',
    slug: 'dr-bernardo-velasco-olalde',
    nombre: 'Dr. Bernardo Velasco Olalde',
    titulo: 'Medicina General',
    experiencia: 'Médico general con atención humanista, especializado en enfermedades crónicas',
    mision: 'Soy el Dr. Velasco mi misión es tener una atención médica de primer contacto con trato humanista para mis pacientes.',
    especialidades: ['Medicina General', 'Diabetes Mellitus', 'Hipertensión Arterial', 'Medicina de la Obesidad'],
    areasAtencion: [
      'Diabetes Mellitus',
      'Hipertensión Arterial',
      'Mujeres embarazadas',
      'Infecciones respiratorias en niños y adultos'
    ],
    formacion: 'Egresado de la B.U.A.P.',
    reconocimientos: [
      'Miembro de la Academia Mexicana para el estudio de la obesidad'
    ],
    horarios: '09:00 a 21:00 hrs',
    telefonoHospital: '238 382 4819',
    whatsapp: '2381022504',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },
  {
    id: 'dr-javier-carrasco-gonzalez',
    slug: 'dr-javier-carrasco-gonzalez',
    nombre: 'Dr. Javier Carrasco González',
    titulo: 'Medicina General',
    especialidades: ['Medicina General'],
    experiencia: 'Médico general con experiencia en medicina familiar',
    hasDetailedProfile: false
  },
  {
    id: 'dr-gerardo-valderrama-lopez',
    slug: 'dr-gerardo-valderrama-lopez',
    nombre: 'Dr. Gerardo Antonio Valderrama López',
    titulo: 'Medicina General',
    especialidades: ['Medicina General'],
    experiencia: 'Especialista en medicina general y medicina familiar',
    hasDetailedProfile: false
  },
  {
    id: 'dr-hector-lopez-aparicio',
    slug: 'dr-hector-lopez-aparicio',
    nombre: 'Dr. Héctor López Aparicio',
    titulo: 'Medicina General',
    especialidades: ['Medicina General'],
    experiencia: 'Médico general con amplia experiencia en atención primaria',
    hasDetailedProfile: false
  },
  {
    id: 'dr-raymundo-romero-ventura',
    slug: 'dr-raymundo-romero-ventura',
    nombre: 'Dr. Raymundo Romero Ventura',
    titulo: 'Medicina General',
    especialidades: ['Medicina General'],
    experiencia: 'Especialista en medicina general con enfoque en medicina preventiva',
    hasDetailedProfile: false
  },

  // Medicina Crítica / Terapia Intensiva
  {
    id: 'dr-hector-pena-carrillo',
    slug: 'dr-hector-pena-carrillo',
    nombre: 'Dr. Héctor Peña Carrillo',
    titulo: 'Medicina Crítica, Cardioneumología y Anestesiología',
    especialidades: ['Medicina Crítica', 'Cardioneumología', 'Anestesiología'],
    experiencia: 'Especialista en medicina crítica, cardioneumología y anestesiología',
    hasDetailedProfile: false
  },
  {
    id: 'dr-hazael-sanchez-rosales',
    slug: 'dr-hazael-sanchez-rosales',
    nombre: 'Dr. Hazael Sánchez Rosales',
    titulo: 'Medicina Crítica / Terapia Intensiva',
    especialidades: ['Medicina Crítica', 'Terapia Intensiva'],
    experiencia: 'Especialista en medicina crítica y cuidados intensivos',
    hasDetailedProfile: false
  },

  // Pediatría / Neonatología
  {
    id: 'dr-abraham-tellez-barragan',
    slug: 'dr-abraham-tellez-barragan',
    nombre: 'Dr. Abraham Téllez Barragán',
    titulo: 'Pediatría / Neonatología',
    especialidades: ['Pediatría', 'Neonatología'],
    experiencia: 'Especialista en pediatría y neonatología',
    hasDetailedProfile: false
  },
  {
    id: 'dr-irvin-romero-ponce',
    slug: 'dr-irvin-romero-ponce',
    nombre: 'Dr. Irvin Omar Romero Ponce',
    titulo: 'Pediatría / Neonatología',
    especialidades: ['Pediatría', 'Neonatología'],
    experiencia: 'Pediatra especialista en neonatología',
    hasDetailedProfile: false
  },
  {
    id: 'dra-eltzy-rocha-rivera',
    slug: 'dra-eltzy-rocha-rivera',
    nombre: 'Dra. Eltzy Rubí Rocha Rivera',
    titulo: 'Pediatría / Neonatología',
    especialidades: ['Pediatría', 'Neonatología'],
    experiencia: 'Especialista en pediatría y cuidados neonatales',
    hasDetailedProfile: false
  },
  {
    id: 'dr-alberto-delgado-sandoval',
    slug: 'dr-alberto-delgado-sandoval',
    nombre: 'Dr. Alberto Delgado Sandoval',
    titulo: 'Pediatría / Neonatología',
    especialidades: ['Pediatría', 'Neonatología'],
    experiencia: 'Pediatra con especialización en neonatología',
    hasDetailedProfile: false
  },

  // Traumatología y Ortopedia
  {
    id: 'dr-cesar-gonzalez-martinez',
    slug: 'dr-cesar-gonzalez-martinez',
    nombre: 'Dr. Cesar González Martínez',
    titulo: 'Traumatología y Ortopedia',
    especialidades: ['Traumatología', 'Ortopedia'],
    experiencia: 'Especialista en traumatología y ortopedia',
    hasDetailedProfile: false
  },
  {
    id: 'dr-arturo-dominguez-millan',
    slug: 'dr-arturo-dominguez-millan',
    nombre: 'Dr. Arturo Domínguez Millan',
    titulo: 'Traumatología y Ortopedia',
    especialidades: ['Traumatología', 'Ortopedia'],
    experiencia: 'Traumatólogo ortopedista con amplia experiencia',
    hasDetailedProfile: false
  },

  // Urgenciología
  {
    id: 'dra-silvia-huerta-damian',
    slug: 'dra-silvia-huerta-damian',
    nombre: 'Dra. Silvia Huerta Damian',
    titulo: 'Urgenciología',
    especialidades: ['Urgenciología', 'Medicina de Urgencias'],
    experiencia: 'Especialista en medicina de urgencias',
    hasDetailedProfile: false
  },
  {
    id: 'dr-porfirio-apam-cruz',
    slug: 'dr-porfirio-apam-cruz',
    nombre: 'Dr. Porfirio Apam Cruz',
    titulo: 'Urgenciología',
    especialidades: ['Urgenciología', 'Medicina de Urgencias'],
    experiencia: 'Especialista en urgencias médicas',
    hasDetailedProfile: false
  },

  // Neurología
  {
    id: 'dr-jorge-almanza-islas',
    slug: 'dr-jorge-almanza-islas',
    nombre: 'Dr. Jorge Alberto Almanza Islas',
    titulo: 'Neurología',
    especialidades: ['Neurología'],
    experiencia: 'Especialista en neurología',
    hasDetailedProfile: false
  },

  // Nutrición
  {
    id: 'lnc-carlos-escobar-olivier',
    slug: 'lnc-carlos-escobar-olivier',
    nombre: 'L.N.C. Carlos Escobar Olivier',
    titulo: 'Nutrición',
    especialidades: ['Nutrición'],
    experiencia: 'Licenciado en Nutrición Clínica',
    hasDetailedProfile: false
  },

  // Gastroenterología
  {
    id: 'dr-virgilio-marroquin-jimenez',
    slug: 'dr-virgilio-marroquin-jimenez',
    nombre: 'Dr. Virgilio Marroquín Jiménez',
    titulo: 'Gastroenterología',
    especialidades: ['Gastroenterología'],
    experiencia: 'Especialista en gastroenterología',
    hasDetailedProfile: false
  },

  // Nefrología
  {
    id: 'dra-yadira-tehuacanero-tecua',
    slug: 'dra-yadira-tehuacanero-tecua',
    nombre: 'Dra. Yadira Tehuacanero Tecua',
    titulo: 'Nefrología',
    especialidades: ['Nefrología'],
    experiencia: 'Especialista en nefrología',
    hasDetailedProfile: false
  },

  // Neumología
  {
    id: 'dr-benito-vargas-abrego',
    slug: 'dr-benito-vargas-abrego',
    nombre: 'Dr. Benito Vargas Ábrego',
    titulo: 'Neumología',
    especialidades: ['Neumología'],
    experiencia: 'Especialista en neumología',
    hasDetailedProfile: false
  },

  // Cirugía General y Especializada
  {
    id: 'dr-omar-marroquin-herrera',
    slug: 'dr-omar-marroquin-herrera',
    nombre: 'Dr. Omar Marroquín Herrera',
    titulo: 'Cirugía General',
    especialidades: ['Cirugía General'],
    experiencia: 'Especialista en cirugía general',
    hasDetailedProfile: false
  },
  {
    id: 'dr-jose-luis-hernandez-aguilar',
    slug: 'dr-jose-luis-hernandez-aguilar',
    nombre: 'Dr. José Luis Hernández Aguilar',
    titulo: 'Cirugía General',
    especialidades: ['Cirugía General'],
    experiencia: 'Cirujano general con amplia experiencia',
    hasDetailedProfile: false
  },
  {
    id: 'dr-miguel-parra-flores',
    slug: 'dr-miguel-parra-flores',
    nombre: 'Dr. Miguel Parra Flores',
    titulo: 'Cirugía General',
    especialidades: ['Cirugía General'],
    experiencia: 'Especialista en cirugía general',
    hasDetailedProfile: false
  },
  {
    id: 'dr-quintin-gonzalez-contreras',
    slug: 'dr-quintin-gonzalez-contreras',
    nombre: 'Dr. Quintín Héctor González Contreras',
    titulo: 'Cirugía General',
    especialidades: ['Cirugía General'],
    experiencia: 'Cirujano general especializado',
    hasDetailedProfile: false
  },
  {
    id: 'dr-jaime-oscar-romero-salas',
    slug: 'dr-jaime-romero-salas',
    nombre: 'Dr. Jaime Oscar Romero Salas',
    titulo: 'Cirugía Oncológica, Cirugía Oncoplástica de Mama, Cirugía General y Laparoscópica',
    experiencia: 'Reconocido cirujano oncólogo con amplia experiencia para tratar el cáncer con calidad y eficacia',
    mision: 'Soy el Dr. Jaime Oscar Romero Salas, reconocido cirujano oncólogo con amplia experiencia para tratar el cáncer con calidad y eficacia. Me distingue mi conducta ética y profesional; con flexibilidad y empatía para ayudar a resolver las posibles limitantes de acceso o adherencia al tratamiento oncológico de mis pacientes.',
    especialidades: ['Cirugía Oncológica', 'Cirugía Oncoplástica de Mama', 'Cirugía General', 'Cirugía Laparoscópica'],
    areasAtencion: [
      'Abdomen agudo',
      'Cáncer de tiroides',
      'Cáncer del colon',
      'Cambios precancerosos del cuello uterino',
      'Cáncer colorrectal',
      'Cáncer de cabeza y cuello',
      'Cáncer del cuello uterino',
      'Cáncer de los ovarios',
      'Cáncer de mama',
      'Cáncer de piel',
      'Cáncer de próstata'
    ],
    formacion: 'Medicina general UPAEP. Cirugía general IMSS SAN JOSE PUEBLA. Cirugía Plástica, estética y reconstructiva ISSEMYM. Cirugía cráneo facial ISSEMYM',
    certificaciones: [
      'Cédula Profesional: 4332690',
      'Cédula. Esp. 8508300',
      'Cédula Esp. 8630589',
      'Certificado por el Consejo Mexicano de Oncología No. 1303 2018-2023',
      'Especialidad en Cirugia General y laparoscopia, Hospital Agustin O´Horan',
      'Subespecialidad en Ciruigia Oncológica, Centro Medico Nacional 20 de noviembre',
      'Posgrado en Cirugía Oncoplastica de mama, Complexo Hospitalario Universitario A Coruña. Hospital Avente y Lago de A Coruña, España',
      'Actualmente adscrito en Instututo de Enfermedades de la Mama, FUCAM, D.F.'
    ],
    reconocimientos: [
      'Múltiples artículos publicados en revistas nacionales e internacionales'
    ],
    telefonoHospital: '238 382 4819',
    contactoTitulos: {
      hospital: 'Hospital'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },

  // Urología
  {
    id: 'dr-tedd-ochoa-vazquez',
    slug: 'dr-tedd-ochoa-vazquez',
    nombre: 'Dr. Tedd Ochoa Vázquez',
    titulo: 'Urología',
    experiencia: 'Urólogo certificado desde 2011 con especialización en trasplante renal',
    mision: 'Soy el Dr. Tedd Ochoa, mi misión es ofrecer una atención integral y de vanguardia en el campo de la urología, enfocada en el diagnóstico, tratamiento y prevención para mis pacientes. Con pasión y dedicación, mi objetivo es mejorar la calidad de vida de mis pacientes, brindando tratamientos efectivos y personalizados.',
    especialidades: ['Urología', 'Trasplante Renal'],
    areasAtencion: [
      'Crecimiento Prostático',
      'Litiasis (piedras) en las vías urinarias',
      'Disfunción Eréctil',
      'Virus del Papiloma humano VPH',
      'Cáncer de Próstata',
      'Cáncer de Riñón',
      'Cáncer de Vejiga'
    ],
    formacion: 'Médico Cirujano por la Universidad Autónoma de San Luis Potosí. Especialidad en Urología en el Hospital de Especialidades del Centro Médico Nacional La Raza del IMSS, Cd. de México.',
    certificaciones: [
      'Certificado por el Consejo Nacional Mexicano de Urología # 797',
      'Urólogo desde 2011 del servicio de Trasplante renal en Hospital de Especialidades del Centro Médico Nacional "Gral. de división Manuel Ávila Camacho" del IMSS, Puebla',
      'Adscrito desde 2011 del servicio de urología del Hospital Regional del ISSSTE, Puebla'
    ],
    reconocimientos: [
      'Miembro activo del Colegio Mexicano de Urología',
      'Miembro de la Sociedad Americana de Urología',
      'Miembro de la Sociedad Europea de Urología',
      'Miembro de la Asociación Nacional de urólogos egresados de la Raza'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '(238) 38 20658',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },

  // Dermatología
  {
    id: 'dra-irma-villanueva-cortes',
    slug: 'dra-irma-villanueva-cortes',
    nombre: 'Dra. Irma Villanueva Cortes',
    titulo: 'Dermatología',
    experiencia: 'Especialista en dermatología médica y cosmética, reconocida por varias instituciones de especialistas en el país',
    mision: 'Soy la Dra. Irma Villanueva Cortes, especialista en dermatología médica y cosmética, reconocida por varias instituciones de especialistas en el país. Mi misión es encontrar procedimientos y tratamientos que mejoren la salud y estética de la piel, con la mejor tecnología y equipo de última tecnología que ayude a potencializar los resultados en mis pacientes. Me especializo en algunos tratamientos como las manchas de la piel, el acné.',
    especialidades: ['Dermatología', 'Medicina Estética'],
    areasAtencion: [
      'Eliminación de lunares',
      'Eliminación de verrugas',
      'Manchas en la Piel',
      'Tratamiento antiacné',
      'Carcinoma Basocelular',
      'Medicina estética'
    ],
    servicios: [
      'Ácido hialurónico',
      'Bótox',
      'Peeling',
      'Depilación láser'
    ],
    telefonoHospital: '238 382 4819',
    contactoTitulos: {
      hospital: 'Hospital'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },

  // Ginecología y Obstetricia
  {
    id: 'dra-edith-calvo-santana',
    slug: 'dra-edith-calvo-santana',
    nombre: 'Dra. Edith Jazmín Calvo Santana',
    titulo: 'Ginecología y Obstetricia',
    experiencia: 'Médico ginecóloga y obstetra formada por la Benemérita Universidad Autónoma de Puebla',
    especialidades: ['Ginecología', 'Obstetricia'],
    formacion: 'Médico General por Benemérita Universidad Autónoma de Puebla. Universidad Veracruzana.',
    certificaciones: [
      'IMSS -Especialidad'
    ],
    whatsapp: '238 1097480',
    contactoTitulos: {
      whatsapp: 'WhatsApp'
    },
    hasDetailedProfile: true
  },
  {
    id: 'dra-nayeli-sanchez-garibay',
    slug: 'dra-nayeli-sanchez-garibay',
    nombre: 'Dra. Nayeli del Rayo Sánchez Garibay',
    titulo: 'Ginecología y Obstetricia',
    experiencia: 'Ginecóloga y obstetra avalada y certificada por el Consejo Mexicano de Ginecología y Obstetricia',
    mision: 'Soy la Dra. Nayeli Sánchez, ginecóloga y obstetra de formación con la misión de cuidar y acompañar a la mujer en cada etapa de su vida.',
    especialidades: ['Ginecología', 'Obstetricia'],
    formacion: 'Médica cirujana y partera por Benemérita Universidad Autónoma de Puebla. Especialidad en ginecología y obstetricia por IMSS UMAE CMN "La Raza" Hospital Gineco-Obstetricia #3 Víctor Manuel Espinosa de los Reyes Sánchez CdMx.',
    certificaciones: [
      'Cedula profesional: 9710990',
      'Cedula especialidad: 13254509',
      'Consejo mexicano de ginecología y obstetricia: 12739',
      'Avalada y certificada por el Consejo Mexicano de Ginecología y Obstetricia'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '2383836766',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648', '2381186688'],
    hasDetailedProfile: true
  },
  {
    id: 'dr-ruben-nacer',
    slug: 'dr-ruben-nacer',
    nombre: 'Dr. Rubén Julián Nacer',
    titulo: 'Ginecología y Obstetricia',
    especialidades: ['Ginecología', 'Obstetricia'],
    experiencia: 'Especialista en ginecología y obstetricia',
    hasDetailedProfile: false
  },
  {
    id: 'dr-moises-sanchez-perez',
    slug: 'dr-moises-sanchez-perez',
    nombre: 'Dr. Moisés Héctor Sánchez Pérez',
    titulo: 'Ginecología y Obstetricia',
    experiencia: 'Ginecólogo y obstetra con más de 30 años de experiencia en el cuidado y salud de la mujer',
    mision: 'Soy el Dr. Héctor Sánchez, ginecólogo y obstetra con más de 30 años de experiencia en el cuidado y salud de la mujer en cada etapa de su vida, con la firme convicción de dar atención de calidad y calidez para todas mis pacientes.',
    especialidades: ['Ginecología', 'Obstetricia'],
    formacion: 'Médico cirujano y partero por Universidad Autónoma de Puebla. Especialidad en ginecología y obstetricia por IMSS Hospital General Regional # 36 "San Alejandro" Puebla, Pue.',
    certificaciones: [
      'Cédula profesional: 1115539',
      'Cédula especialidad: 4713396',
      'Consejo mexicano de ginecología y obstetricia: 5733',
      'Avalado y certificado por el Consejo Mexicano de Ginecología y Obstetricia'
    ],
    reconocimientos: [
      'Miembro Federado del colegio de Gineco-Obstetricia de Tehuacán. A. C.'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '238 3836766',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648', '2381037216'],
    hasDetailedProfile: true
  },
  {
    id: 'dra-luz-gil-sandoval',
    slug: 'dra-luz-gil-sandoval',
    nombre: 'Dra. Luz María Gil Sandoval',
    titulo: 'Ginecología y Obstetricia',
    experiencia: 'Ginecóloga y obstetra certificada por el Consejo Mexicano de Ginecología y Obstetricia 2023-2027',
    mision: 'Soy la Dra. Luz María Gil, ginecóloga y obstetra de formación con la misión de brindar atención médica de calidad y calidez a la mujer durante todo su ciclo vital, desde la pubertad hasta la postmenopausia enfocada a resolver problemas de salud reproductiva, perinatal y del climaterio.',
    especialidades: ['Ginecología', 'Obstetricia', 'Colposcopía', 'Ultrasonido Ginecológico y Obstétrico'],
    formacion: 'Médica Cirujana y Partera egresada por Benemérita Universidad Autónoma de Puebla. Ginecología y Obstetricia egresada de Secretaría de Salud del Estado de Puebla.',
    certificaciones: [
      'Cedula Profesional 6192116',
      'Ced. Espe. 10535653',
      'Consejo mexicano de ginecología y obstetricia: 5733',
      'Diplomado en Colposcopía en el Instituto Nacional de Cancerología',
      'Diplomado en Ultrasonido Ginecológico y Obstétrico avalado por la Universidad La Salle'
    ],
    reconocimientos: [
      'Recertificación por el Consejo Mexicano de Ginecología y Obstetricia 2023 - 2027'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '2226801445',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648', '2383892614'],
    hasDetailedProfile: true
  },

  // Anestesiología
  {
    id: 'dra-marianela-orellan-gorocica',
    slug: 'dra-marianela-orellan-gorocica',
    nombre: 'Dra. Marianela Orellan Gorocica',
    titulo: 'Anestesiología',
    experiencia: 'Especialista en anestesiología con formación en anestesiología regional',
    mision: 'Soy la Dra. Orellan y mi misión es proporcionar al paciente un ambiente libre de dolor, ansiedad así como las condiciones más confortables y seguras para realizar procedimientos de diagnóstico y tratamiento quirúrgico, satisfaciendo sus necesidades integrales y expectativas, en un ambiente de atención sanitaria segura, equitativa y personalizada, con eficiencia y orientada a la excelencia. Nuestra mayor responsabilidad es brindar la máxima seguridad y calidad al paciente, siempre.',
    especialidades: ['Anestesiología', 'Anestesiología Regional'],
    areasAtencion: [
      'La anestesiología es la rama de la medicina dedicada al alivio del dolor y al total cuidado del paciente antes, durante y después de un acto quirúrgico. Es una de las especialidades de la medicina que más ha avanzado en los últimos años. Es así que hoy se operan pacientes que nunca se hubiera pensado que podrían operarse, llegando a cifras de mortalidad por causa anestésica bajísimas.',
      'Los anestesiólogos administramos diferentes tipos de anestesia: desde la vigilancia del paciente despierto o con diversos grados de sedación, sin anestesia o con anestesia local, hasta la realización de variados tipos de bloqueos periféricos, bloqueos neuroaxiales o diferentes tipos de anestesia general (inhalatoria, endovenosa total o una mezcla de ambas).',
      'Nuestra actividad como anestesiólogo se ha extendido a muchas actividades fuera del pabellón quirúrgico, especialmente a procedimientos radiológicos, hemodinámicos, oncológicos, endoscópicos y dentales.'
    ],
    formacion: 'Facultad de Medicina de la Benemerita Universidad Autonoma de Puebla. Especialidad de Anestesiologia, CMN Manuel Avila Camacho.',
    certificaciones: [
      'Diplomado en Anestesiologia Regional, Universidad de Monterrey'
    ],
    reconocimientos: [
      'Miembro de la Sociedad Mexicana de Anestesiologia en Ginecologia y Obstetrica'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '2383946057',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },
  {
    id: 'dr-christian-galicia-castelan',
    slug: 'dr-christian-galicia-castelan',
    nombre: 'Dr. Christian Misael Galicia Castelán',
    titulo: 'Anestesiología',
    experiencia: 'Médico Anestesiólogo certificado por el Colegio de Anestesiología de la Universidad de Monterrey',
    especialidades: ['Anestesiología'],
    formacion: 'Médico Cirujano Egresado de la Universidad Popular Autónoma del Estado de Puebla.',
    certificaciones: [
      'Certificado por el Colegio de Anestesiología de la Universidad de Monterrey',
      'Certificación de soporte vital básico (BLS) por la American Heart Association (AHA)',
      'Certificación de soporte vital cardiovascular avanzado (ACLS) por la American Heart Association (AHA)'
    ],
    whatsapp: '222 6620402',
    contactoTitulos: {
      whatsapp: 'WhatsApp'
    },
    hasDetailedProfile: true
  },
  {
    id: 'dra-maria-carrera-balderas',
    slug: 'dra-maria-carrera-balderas',
    nombre: 'Dra. María Teresa Carrera Balderas',
    titulo: 'Anestesiología',
    experiencia: 'Especialista en anestesiología con enfoque en control del dolor',
    mision: 'Soy la Dra. María Teresa Carrera, mi misión es contribuir a la actividad quirúrgica y al control del dolor en sus diferentes vertientes y a la aplicación en condiciones de confort y seguridad de diferentes técnicas diagnóstico-terapéuticas.',
    especialidades: ['Anestesiología', 'Control del Dolor'],
    areasAtencion: [
      'Quirúrgicos y control del dolor'
    ],
    formacion: 'Benemérita Universidad Autónoma de Puebla.',
    reconocimientos: [
      'Miembro de la sociedad mexicana de anestesiología en ginecóloga y obstetricia'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '2381235220',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },

  // Cirugía Plástica, Estética y Reconstructiva
  {
    id: 'dr-eugenio-garcia-cano',
    slug: 'dr-eugenio-garcia-cano',
    nombre: 'Dr. Eugenio García Cano',
    titulo: 'Cirugía Plástica, Estética y Reconstructiva',
    experiencia: 'Especialista en cirugía plástica, estética y reconstructiva con formación en cirugía cráneo facial',
    mision: 'Soy el Dr. Eugenio García, mi misión es ofrecer la mejor atención médica y un trato digno a mis pacientes.',
    especialidades: ['Cirugía Plástica', 'Cirugía Estética', 'Cirugía Reconstructiva', 'Cirugía Cráneo Facial'],
    areasAtencion: [
      'Inconformidad estética en cualquier parte del cuerpo',
      'Reconstrucción secundario a defectos de nacimiento o accidentes'
    ],
    formacion: 'Medicina general UPAEP. Cirugía general IMSS SAN JOSE PUEBLA. Cirugía Plástica, estética y reconstructiva ISSEMYM. Cirugía cráneo facial ISSEMYM',
    reconocimientos: [
      'Múltiples artículos publicados en revistas nacionales e internacionales'
    ],
    telefonoHospital: '238 382 4819',
    whatsapp: '222 174 6989',
    contactoTitulos: {
      hospital: 'Hospital',
      whatsapp: 'Celular y Mensaje WhatsApp'
    },
    telefonosAdicionales: ['2383829648'],
    hasDetailedProfile: true
  },
  {
    id: 'dr-jaime-araoz-arroyo',
    slug: 'dr-jaime-araoz-arroyo',
    nombre: 'Dr. Jaime Araoz Arroyo',
    titulo: 'Cirugía Plástica, Estética y Reconstructiva',
    especialidades: ['Cirugía Plástica', 'Cirugía Estética', 'Cirugía Reconstructiva'],
    experiencia: 'Especialista en cirugía plástica, estética y reconstructiva',
    hasDetailedProfile: false
  },
  {
    id: 'dra-samaria-mejia-rivera',
    slug: 'dra-samaria-mejia-rivera',
    nombre: 'Dra. Samaria Estefanía Mejia Rivera',
    titulo: 'Cirugía Plástica, Estética y Reconstructiva',
    especialidades: ['Cirugía Plástica', 'Cirugía Estética', 'Cirugía Reconstructiva'],
    experiencia: 'Especialista en cirugía plástica y estética',
    hasDetailedProfile: false
  },

  // Neurocirugía
  {
    id: 'dr-jorge-hernandez-garcia',
    slug: 'dr-jorge-hernandez-garcia',
    nombre: 'Dr. Jorge Luis Hernández García',
    titulo: 'Neurocirugía',
    especialidades: ['Neurocirugía'],
    experiencia: 'Especialista en neurocirugía',
    hasDetailedProfile: false
  },

  // Oftalmología Pediátrica
  {
    id: 'dra-lidia-suarez-reynoso',
    slug: 'dra-lidia-suarez-reynoso',
    nombre: 'Dra. Lidia Suárez Reynoso',
    titulo: 'Oftalmología Pediátrica',
    especialidades: ['Oftalmología', 'Oftalmología Pediátrica'],
    experiencia: 'Especialista en oftalmología pediátrica',
    hasDetailedProfile: false
  }
];

const especialidadesData: Especialidad[] = [
  {
    id: 'medicina-general',
    nombre: 'Medicina General',
    titulo: 'Medicina General',
    descripcion: 'Atención integral para toda la familia. Diagnóstico y tratamiento de enfermedades comunes.',
    descripcionDetallada: 'Brindamos atención médica integral para toda la familia, con diagnóstico y tratamiento de enfermedades comunes, medicina preventiva y seguimiento de pacientes crónicos.',
    slug: 'medicina-general',
    icon: Stethoscope,
    servicios: [
      'Consulta médica general',
      'Medicina preventiva',
      'Control de enfermedades crónicas',
      'Diagnóstico temprano',
      'Seguimiento de pacientes',
      'Certificados médicos'
    ],
    doctores: []
  },
  {
    id: 'medicina-critica',
    nombre: 'Medicina Crítica',
    titulo: 'Medicina Crítica / Terapia Intensiva',
    descripcion: 'Atención especializada en cuidados intensivos y medicina crítica para pacientes en estado grave.',
    descripcionDetallada: 'Especialistas en medicina crítica y terapia intensiva para el manejo de pacientes en estado crítico, con tecnología avanzada y atención 24/7.',
    slug: 'medicina-critica',
    icon: Zap,
    servicios: [
      'Cuidados intensivos',
      'Medicina crítica',
      'Monitoreo avanzado',
      'Soporte vital',
      'Ventilación mecánica',
      'Atención 24/7'
    ],
    doctores: []
  },
  {
    id: 'pediatria',
    nombre: 'Pediatría',
    titulo: 'Pediatría y Neonatología',
    descripcion: 'Cuidado de la salud de niños, adolescentes y recién nacidos. Vacunación, control de crecimiento y desarrollo.',
    descripcionDetallada: 'Atención médica especializada para niños, adolescentes y recién nacidos, incluyendo medicina preventiva, vacunación y seguimiento del crecimiento y desarrollo.',
    slug: 'pediatria',
    icon: Baby,
    servicios: [
      'Control del niño sano',
      'Vacunación',
      'Seguimiento del crecimiento',
      'Tratamiento de infecciones',
      'Medicina preventiva',
      'Cuidados neonatales'
    ],
    doctores: []
  },
  {
    id: 'traumatologia',
    nombre: 'Traumatología',
    titulo: 'Traumatología y Ortopedia',
    descripcion: 'Diagnóstico y tratamiento de lesiones musculoesqueléticas. Fracturas, esguinces y luxaciones.',
    descripcionDetallada: 'Especialistas en el diagnóstico y tratamiento de lesiones del sistema musculoesquelético, incluyendo fracturas, esguinces, luxaciones y cirugía ortopédica.',
    slug: 'traumatologia',
    icon: Bone,
    servicios: [
      'Tratamiento de fracturas',
      'Cirugía ortopédica',
      'Tratamiento de esguinces',
      'Cirugía de columna',
      'Prótesis articulares',
      'Medicina del deporte'
    ],
    doctores: []
  },
  {
    id: 'urgenciologia',
    nombre: 'Medicina de Urgencias',
    titulo: 'Medicina de Urgencias',
    descripcion: 'Atención médica inmediata para pacientes con enfermedades o lesiones agudas.',
    descripcionDetallada: 'Atención médica especializada de emergencia para pacientes con condiciones críticas que requieren intervención inmediata.',
    slug: 'urgenciologia',
    icon: AlertTriangle,
    servicios: [
      'Atención de emergencias',
      'Trauma',
      'Reanimación cardiopulmonar',
      'Medicina crítica',
      'Estabilización de pacientes',
      'Triage médico'
    ],
    doctores: []
  },
  {
    id: 'neurologia',
    nombre: 'Neurología',
    titulo: 'Neurología',
    descripcion: 'Diagnóstico y tratamiento de enfermedades del sistema nervioso.',
    descripcionDetallada: 'Especialistas en el diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.',
    slug: 'neurologia',
    icon: Brain,
    servicios: [
      'Electroencefalograma',
      'Tratamiento de epilepsia',
      'Cefaleas y migrañas',
      'Enfermedades neurodegenerativas',
      'Trastornos del movimiento',
      'Neurología vascular'
    ],
    doctores: []
  },
  {
    id: 'nutricion',
    nombre: 'Nutrición',
    titulo: 'Nutrición Clínica',
    descripcion: 'Asesoría nutricional especializada para el manejo de diversas condiciones de salud.',
    descripcionDetallada: 'Atención nutricional especializada para el manejo dietético de enfermedades, control de peso y promoción de hábitos alimentarios saludables.',
    slug: 'nutricion',
    icon: Apple,
    servicios: [
      'Evaluación nutricional',
      'Planes alimentarios personalizados',
      'Nutrición clínica',
      'Control de peso',
      'Educación nutricional',
      'Seguimiento dietético'
    ],
    doctores: []
  },
  {
    id: 'cardioneumologia',
    nombre: 'Cardioneumología',
    titulo: 'Cardioneumología',
    descripcion: 'Especialidad que combina el cuidado del corazón y los pulmones.',
    descripcionDetallada: 'Atención especializada en enfermedades cardiovasculares y pulmonares, con enfoque integral en ambos sistemas.',
    slug: 'cardioneumologia',
    icon: Heart,
    servicios: [
      'Electrocardiograma',
      'Pruebas de función pulmonar',
      'Tratamiento de cardiopatías',
      'Enfermedades respiratorias',
      'Rehabilitación cardiopulmonar',
      'Medicina crítica'
    ],
    doctores: []
  },
  {
    id: 'gastroenterologia',
    nombre: 'Gastroenterología',
    titulo: 'Gastroenterología',
    descripcion: 'Diagnóstico y tratamiento de enfermedades del sistema digestivo.',
    descripcionDetallada: 'Especialistas en enfermedades del aparato digestivo, desde el esófago hasta el colon, incluyendo hígado y páncreas.',
    slug: 'gastroenterologia',
    icon: Microscope,
    servicios: [
      'Endoscopia digestiva',
      'Colonoscopia',
      'Tratamiento de gastritis',
      'Enfermedades hepáticas',
      'Síndrome de intestino irritable',
      'Úlceras pépticas'
    ],
    doctores: []
  },
  {
    id: 'nefrologia',
    nombre: 'Nefrología',
    titulo: 'Nefrología',
    descripcion: 'Especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades renales.',
    descripcionDetallada: 'Atención especializada en enfermedades de los riñones y las vías urinarias, incluyendo diálisis y trasplante renal.',
    slug: 'nefrologia',
    icon: Droplets,
    servicios: [
      'Diagnóstico de enfermedades renales',
      'Tratamiento de insuficiencia renal',
      'Diálisis',
      'Hipertensión arterial',
      'Enfermedades glomerulares',
      'Seguimiento pre-trasplante'
    ],
    doctores: []
  },
  {
    id: 'neumologia',
    nombre: 'Neumología',
    titulo: 'Neumología',
    descripcion: 'Diagnóstico y tratamiento de enfermedades del aparato respiratorio.',
    descripcionDetallada: 'Especialistas en enfermedades pulmonares y del sistema respiratorio, incluyendo asma, EPOC y otras patologías respiratorias.',
    slug: 'neumologia',
    icon: Wind,
    servicios: [
      'Espirometría',
      'Broncoscopia',
      'Tratamiento de asma',
      'EPOC',
      'Enfermedades pulmonares intersticiales',
      'Medicina del sueño'
    ],
    doctores: []
  },
  {
    id: 'cirugia-general-especializada',
    nombre: 'Cirugía General',
    titulo: 'Cirugía General y Especializada',
    descripcion: 'Procedimientos quirúrgicos para tratar diversas enfermedades y condiciones.',
    descripcionDetallada: 'Cirugía especializada para el tratamiento de diversas condiciones que requieren intervención quirúrgica, desde procedimientos ambulatorios hasta cirugías complejas.',
    slug: 'cirugia-general-especializada',
    icon: Scissors,
    servicios: [
      'Cirugía de vesícula',
      'Cirugía de hernias',
      'Apendicectomía',
      'Cirugía laparoscópica',
      'Cirugía de tiroides',
      'Cirugía oncológica'
    ],
    doctores: []
  },
  {
    id: 'urologia',
    nombre: 'Urología',
    titulo: 'Urología',
    descripcion: 'Atención de enfermedades del sistema urinario y reproductor masculino.',
    descripcionDetallada: 'Diagnóstico y tratamiento de enfermedades del sistema urogenital masculino y urinario femenino, incluyendo cálculos, infecciones y cáncer urológico.',
    slug: 'urologia',
    icon: Activity,
    servicios: [
      'Tratamiento de cálculos renales',
      'Cirugía de próstata',
      'Tratamiento de incontinencia',
      'Disfunción eréctil',
      'Vasectomía',
      'Cáncer urológico'
    ],
    doctores: []
  },
  {
    id: 'dermatologia',
    nombre: 'Dermatología',
    titulo: 'Dermatología',
    descripcion: 'Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.',
    descripcionDetallada: 'Atención especializada en enfermedades de la piel, cabello y uñas, incluyendo tratamientos médicos y estéticos para el cuidado integral de la piel.',
    slug: 'dermatologia',
    icon: Eye,
    servicios: [
      'Eliminación de lunares',
      'Eliminación de verrugas',
      'Tratamiento de manchas',
      'Tratamiento antiacné',
      'Medicina estética',
      'Depilación láser'
    ],
    doctores: []
  },
  {
    id: 'ginecologia',
    nombre: 'Ginecología',
    titulo: 'Ginecología y Obstetricia',
    descripcion: 'Atención integral de la salud femenina. Control prenatal, menopausia y planificación familiar.',
    descripcionDetallada: 'Cuidado integral de la salud femenina en todas las etapas de la vida, desde la adolescencia hasta la menopausia, incluyendo atención obstétrica.',
    slug: 'ginecologia',
    icon: Baby,
    servicios: [
      'Control prenatal',
      'Planificación familiar',
      'Papanicolaou',
      'Colposcopía',
      'Ultrasonido ginecológico',
      'Atención del parto'
    ],
    doctores: []
  },
  {
    id: 'anestesiologia',
    nombre: 'Anestesiología',
    titulo: 'Anestesiología',
    descripcion: 'Especialidad médica dedicada al alivio del dolor y cuidado perioperatorio.',
    descripcionDetallada: 'Especialistas en anestesiología y manejo del dolor, proporcionando atención segura durante procedimientos quirúrgicos y manejo del dolor crónico.',
    slug: 'anestesiologia',
    icon: UserCheck,
    servicios: [
      'Anestesia general',
      'Anestesia regional',
      'Sedación',
      'Control del dolor',
      'Anestesia obstétrica',
      'Cuidados perioperatorios'
    ],
    doctores: []
  },
  {
    id: 'cirugia-plastica',
    nombre: 'Cirugía Plástica',
    titulo: 'Cirugía Plástica y Reconstructiva',
    descripcion: 'Procedimientos quirúrgicos para reconstruir o mejorar la apariencia física.',
    descripcionDetallada: 'Cirugía plástica reconstructiva y estética para mejorar la apariencia física y reconstruir defectos congénitos o adquiridos.',
    slug: 'cirugia-plastica',
    icon: Scissors,
    servicios: [
      'Reconstrucción mamaria',
      'Rinoplastia',
      'Liposucción',
      'Cirugía facial',
      'Reconstrucción de defectos',
      'Cirugía estética'
    ],
    doctores: []
  },
  {
    id: 'neurocirugia',
    nombre: 'Neurocirugía',
    titulo: 'Neurocirugía',
    descripcion: 'Cirugía especializada del sistema nervioso central y periférico.',
    descripcionDetallada: 'Especialistas en cirugía del cerebro, médula espinal y sistema nervioso periférico para el tratamiento de tumores, traumatismos y malformaciones.',
    slug: 'neurocirugia',
    icon: Brain,
    servicios: [
      'Cirugía de tumores cerebrales',
      'Cirugía de columna',
      'Tratamiento de traumatismos',
      'Cirugía vascular cerebral',
      'Cirugía de epilepsia',
      'Neurocirugía pediátrica'
    ],
    doctores: []
  },
  {
    id: 'oftalmologia',
    nombre: 'Oftalmología',
    titulo: 'Oftalmología Pediátrica',
    descripcion: 'Diagnóstico y tratamiento de enfermedades oculares en niños.',
    descripcionDetallada: 'Atención especializada en enfermedades oculares pediátricas, incluyendo estrabismo, ambliopía y otros trastornos visuales en niños.',
    slug: 'oftalmologia',
    icon: Eye,
    servicios: [
      'Examen visual pediátrico',
      'Tratamiento de estrabismo',
      'Corrección de ambliopía',
      'Cirugía ocular pediátrica',
      'Detección temprana',
      'Seguimiento del desarrollo visual'
    ],
    doctores: []
  }
];

// Map doctors to their respective specialties
especialidadesData.forEach(especialidad => {
  especialidad.doctores = doctores.filter(doctor => 
    doctor.especialidades.some(esp => 
      esp.toLowerCase().includes(especialidad.nombre.toLowerCase()) ||
      especialidad.nombre.toLowerCase().includes(esp.toLowerCase()) ||
      (especialidad.nombre === 'Medicina Crítica' && (esp.includes('Medicina Crítica') || esp.includes('Terapia Intensiva'))) ||
      (especialidad.nombre === 'Cirugía General' && esp.includes('Cirugía')) ||
      (especialidad.nombre === 'Cirugía Plástica' && esp.includes('Cirugía Plástica')) ||
      (especialidad.nombre === 'Oftalmología' && esp.includes('Oftalmología'))
    )
  );
});

export const especialidades = especialidadesData;

export const getAllEspecialidades = () => {
  return especialidades;
};

export const getEspecialidadBySlug = (slug: string) => {
  return especialidades.find((especialidad) => especialidad.slug === slug);
};

export const getAllDoctors = () => {
  return doctores;
};

export const getDoctorBySlug = (slug: string) => {
  return doctores.find((doctor) => doctor.slug === slug);
};

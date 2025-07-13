import { StaticImageData } from 'next/image';

export interface Especialidad {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: StaticImageData;
  slug: string;
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

import cardiologiaImage from '@/public/images/especialidades/cardiologia.webp';
import cirugiaGeneralImage from '@/public/images/especialidades/cirugia-general.webp';
import dermatologiaImage from '@/public/images/especialidades/dermatologia.webp';
import ginecologiaImage from '@/public/images/especialidades/ginecologia.webp';
import medicinaGeneralImage from '@/public/images/especialidades/medicina-general.webp';
import pediatriaImage from '@/public/images/especialidades/pediatria.webp';
import traumatologiaImage from '@/public/images/especialidades/traumatologia.webp';
import urologiaImage from '@/public/images/especialidades/urologia.webp';
import cirugiaPlasticaImage from '@/public/images/especialidades/cirugia-plastica.webp';
import urgenciologiaImage from '@/public/images/especialidades/urgenciologia.webp';

export const especialidades: Especialidad[] = [
  {
    id: 'medicina-general',
    nombre: 'Medicina General',
    descripcion: 'Atención integral para toda la familia. Diagnóstico y tratamiento de enfermedades comunes.',
    imagen: medicinaGeneralImage,
    slug: 'medicina-general'
  },
  {
    id: 'cardiologia',
    nombre: 'Cardiología',
    descripcion: 'Cuidado especializado del corazón y el sistema circulatorio. Prevención y tratamiento de enfermedades cardíacas.',
    imagen: cardiologiaImage,
    slug: 'cardiologia'
  },
  {
    id: 'dermatologia',
    nombre: 'Dermatología',
    descripcion: 'Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas. Cuidado estético de la piel.',
    imagen: dermatologiaImage,
    slug: 'dermatologia'
  },
  {
    id: 'ginecologia',
    nombre: 'Ginecología',
    descripcion: 'Atención integral de la salud femenina. Control prenatal, menopausia y planificación familiar.',
    imagen: ginecologiaImage,
    slug: 'ginecologia'
  },
  {
    id: 'pediatria',
    nombre: 'Pediatría',
    descripcion: 'Cuidado de la salud de niños y adolescentes. Vacunación, control de crecimiento y desarrollo.',
    imagen: pediatriaImage,
    slug: 'pediatria'
  },
  {
    id: 'traumatologia',
    nombre: 'Traumatología',
    descripcion: 'Diagnóstico y tratamiento de lesiones musculoesqueléticas. Fracturas, esguinces y luxaciones.',
    imagen: traumatologiaImage,
    slug: 'traumatologia'
  },
  {
    id: 'urologia',
    nombre: 'Urología',
    descripcion: 'Atención de enfermedades del sistema urinario y reproductor masculino. Infecciones, cálculos y cáncer.',
    imagen: urologiaImage,
    slug: 'urologia'
  },
  {
    id: 'cirugia-general-especializada',
    nombre: 'Cirugía General',
    descripcion: 'Procedimientos quirúrgicos para tratar diversas enfermedades y condiciones. Apéndice, hernias y vesícula biliar.',
    imagen: cirugiaGeneralImage,
    slug: 'cirugia-general-especializada'
  },
  {
    id: 'cirugia-plastica',
    nombre: 'Cirugía Plástica',
    descripcion: 'Procedimientos quirúrgicos para reconstruir o mejorar la apariencia física. Reconstrucción mamaria, rinoplastia y liposucción.',
    imagen: cirugiaPlasticaImage,
    slug: 'cirugia-plastica'
  },
  {
    id: 'urgenciologia',
    nombre: 'Medicina de Urgencias',
    descripcion: 'Atención médica inmediata para pacientes con enfermedades o lesiones agudas. Accidentes, infartos y derrames cerebrales.',
    imagen: urgenciologiaImage,
    slug: 'urgenciologia'
  },
];

export const doctores: Doctor[] = [
  {
    id: 'dr-juan-perez',
    slug: 'dr-juan-perez',
    nombre: 'Dr. Juan Pérez',
    titulo: 'Médico General',
    foto: '/images/doctores/dr-juan-perez.webp',
    especialidades: ['Medicina General'],
    experiencia: 'Más de 10 años de experiencia en medicina general',
    hasDetailedProfile: true
  },
  {
    id: 'dra-maria-gonzalez',
    slug: 'dra-maria-gonzalez',
    nombre: 'Dra. María González',
    titulo: 'Cardióloga',
    foto: '/images/doctores/dra-maria-gonzalez.webp',
    especialidades: ['Cardiología'],
    experiencia: 'Especialista en cardiología intervencionista',
    hasDetailedProfile: true
  },
  {
    id: 'dr-roberto-ramirez',
    slug: 'dr-roberto-ramirez',
    nombre: 'Dr. Roberto Ramírez',
    titulo: 'Dermatólogo',
    foto: '/images/doctores/dr-roberto-ramirez.webp',
    especialidades: ['Dermatología'],
    experiencia: 'Amplia experiencia en dermatología clínica y estética',
    hasDetailedProfile: true
  },
  {
    id: 'dra-laura-martinez',
    slug: 'dra-laura-martinez',
    nombre: 'Dra. Laura Martínez',
    titulo: 'Ginecóloga',
    foto: '/images/doctores/dra-laura-martinez.webp',
    especialidades: ['Ginecología'],
    experiencia: 'Especialista en salud femenina y obstetricia',
    hasDetailedProfile: true
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

  // Dr. Tedd Ochoa Vázquez - Urología
  {
    id: 'dr-tedd-ochoa-vazquez',
    slug: 'dr-tedd-ochoa-vazquez',
    nombre: 'Dr. Tedd Ochoa Vázquez',
    titulo: 'Urología',
    experiencia: 'Urólogo certificado desde 2011 con especialización en trasplante renal',
    mision: 'Soy el Dr. Tedd Ochoa, mi misión es ofrecer una atención integral y de vanguardia en el campo de la urología, enfocada en el diagnóstico, tratamiento y prevención para mis pacientes. Con pasión y dedicación, mi objetivo es mejorar la calidad de vida de mis pacientes, brindando tratamientos efectivas y personalizados.',
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

  // Dra. Irma Villanueva Cortes - Dermatología
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

  // Dra. Edith Jazmín Calvo Santana - Ginecología y Obstetricia
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

  // Dra. Nayeli del Rayo Sánchez Garibay - Ginecología y Obstetricia
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

  // Dr. Moisés Héctor Sánchez Pérez - Ginecología y Obstetricia
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

  // Dra. Luz María Gil Sandoval - Ginecología y Obstetricia
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

  // Dra. Marianela Orellan Gorocica - Anestesiología
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

  // Dr. Christian Misael Galicia Castelán - Anestesiología
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

  // Dra. María Teresa Carrera Balderas - Anestesiología
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

  // Dr. Eugenio García Cano - Cirugía Plástica
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

  // Dr. Hipólito Coyotl Cruz - Medicina General
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

  // Dr. Bernardo Velasco Olalde - Medicina General
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
  }
];

export const getAllDoctors = () => {
  return doctores;
};

export const getDoctorBySlug = (slug: string) => {
  return doctores.find((doctor) => doctor.slug === slug);
};

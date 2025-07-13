import { 
  Heart, 
  Stethoscope, 
  Baby, 
  Bone, 
  Ambulance, 
  Brain, 
  Utensils, 
  Wind,
  Shield,
  Activity,
  Wind as Wind2,
  Scissors,
  User,
  Sparkles,
  UserCheck,
  Syringe,
  Palette,
  Zap,
  Eye
} from 'lucide-react';

export interface Doctor {
  id: string;
  nombre: string;
  titulo: string;
  experiencia: string;
  certificaciones: string[];
  foto?: string;
  whatsapp?: string;
  telefonoHospital?: string;
  hasDetailedProfile?: boolean;
  formacion?: string;
  especialidades?: string[];
  slug?: string;
  horarios?: string;
  mision?: string;
  reconocimientos?: string[];
  procedimientos?: string[];
  areasAtencion?: string[];
  telefonosAdicionales?: string[];
  horarioDetallado?: string;
  contactoTitulos?: {
    whatsapp?: string;
    hospital?: string;
    adicionales?: string[];
  };
}

export interface Especialidad {
  id: string;
  slug: string;
  icon: any;
  titulo: string;
  descripcion: string;
  descripcionDetallada: string;
  servicios: string[];
  doctores: Doctor[];
}

export const especialidadesData: Especialidad[] = [
  {
    id: '1',
    slug: 'medicina-general',
    icon: Stethoscope,
    titulo: 'Medicina General',
    descripcion: 'Atención médica integral para toda la familia',
    descripcionDetallada: 'La medicina general es la especialidad médica que se encarga de mantener la salud en todos los aspectos, analizando y tratando las enfermedades comunes y derivando a especialistas cuando es necesario.',
    servicios: [
      'Consultas médicas generales',
      'Chequeos preventivos',
      'Control de enfermedades crónicas',
      'Vacunación',
      'Certificados médicos',
      'Atención de urgencias 24/7',
      'Medicina familiar',
      'Manejo de enfermedades crónico-degenerativas'
    ],
    doctores: [
      {
        id: 'dra_karina_pena_tello',
        nombre: 'Dra. Karina Peña Tello',
        titulo: 'Médico General / Ginecóloga Obstetra',
        experiencia: '15 años de experiencia',
        certificaciones: ['Universidad Autónoma de Puebla', 'Medicina General', 'Ginecología y Obstetricia'],
        foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
        whatsapp: '2381338026',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Universidad Autónoma de Puebla',
        especialidades: ['Medicina General', 'Ginecología', 'Obstetricia', 'Atención Materno Infantil'],
        slug: 'dra-karina-pena-tello',
        horarios: 'Lunes a Viernes: 8:00 AM - 6:00 PM, Sábados: 8:00 AM - 2:00 PM',
        mision: 'Brindar atención médica integral con calidez humana, especializada en salud femenina y medicina familiar, comprometida con el bienestar de mis pacientes.',
        reconocimientos: [
          'Miembro del Colegio de Médicos Generales',
          'Certificación en Medicina Materno Fetal',
          'Especialista en Control Prenatal',
          '15 años de experiencia en atención médica'
        ]
      },
      {
        id: 'dr_bernardo_velasco_olalde',
        nombre: 'Dr. Bernardo Velasco Olalde',
        titulo: 'Médico General / Especialista en Diabetes e Hipertensión',
        experiencia: '20 años de experiencia',
        certificaciones: ['BUAP', 'Especialista en Diabetes', 'Especialista en Hipertensión'],
        foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
        whatsapp: '2381022504',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
        especialidades: ['Medicina General', 'Diabetes Mellitus', 'Hipertensión Arterial', 'Enfermedades Crónico Degenerativas'],
        slug: 'dr-bernardo-velasco-olalde',
        horarios: 'Lunes a Viernes: 7:00 AM - 7:00 PM, Sábados: 8:00 AM - 3:00 PM',
        mision: 'Especialista en el manejo integral de diabetes e hipertensión, comprometido con mejorar la calidad de vida de mis pacientes a través de un tratamiento personalizado.',
        reconocimientos: [
          'Especialista certificado en Diabetes Mellitus',
          'Especialista certificado en Hipertensión Arterial',
          '20 años de experiencia clínica',
          'Miembro de la Asociación Mexicana de Diabetes'
        ]
      },
      {
        id: 'dr_javier_carrasco_gonzalez',
        nombre: 'Dr. Javier Carrasco González',
        titulo: 'Médico General',
        experiencia: '18 años de experiencia',
        certificaciones: ['Licenciado en Médico Cirujano y Partero'],
        whatsapp: '2381902659',
        hasDetailedProfile: true,
        formacion: 'Licenciatura en Médico Cirujano y Partero',
        especialidades: ['Medicina General', 'Enfermedades Crónico Degenerativas'],
        slug: 'dr-javier-carrasco-gonzalez',
        mision: 'Brindar una atención médica integral de calidad con humanismo y profesionalismo para mejorar la salud de las personas que lo necesiten.',
        reconocimientos: [
          'Actualizaciones en medicina de urgencias'
        ],
        areasAtencion: [
          'Enfermedades generales',
          'Enfermedades crónico degenerativas'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital'
        }
      },
      {
        id: 'dr_gerardo_valderrama_lopez',
        nombre: 'Dr. Gerardo Antonio Valderrama López',
        titulo: 'Médico General / Especialista en Urgencias',
        experiencia: '22 años de experiencia con maestría en administración de instituciones de salud',
        certificaciones: ['BUAP', 'Maestría en Administración de Instituciones de Salud', 'Especialista en Urgencias'],
        whatsapp: '2381117877',
        hasDetailedProfile: true,
        formacion: 'Licenciatura en Médico Cirujano y Partero BUAP, Maestría en Administración de Instituciones de Salud',
        especialidades: ['Medicina General', 'Medicina de Urgencias', 'Medicina Familiar', 'Enfermedades Crónico-degenerativas'],
        slug: 'dr-gerardo-valderrama-lopez',
        horarios: 'Lunes a Viernes: 10:00 AM - 2:00 PM, Sábados: 10:00 AM - 2:00 PM',
        horarioDetallado: 'Consulta: Lunes a Viernes 10-14 hrs, Sábados 10-14 hrs | Urgencias: 24/7',
        mision: 'Otorgar atención médica de calidad integral para el bienestar de nuestros pacientes.',
        reconocimientos: [
          'Adscrito al Servicio de Urgencias Médicas ISSSTE',
          'Maestría en Administración de Instituciones de Salud',
          '22 años de experiencia médica'
        ],
        areasAtencion: [
          'Atención médica primaria de Urgencias',
          'Medicina Familiar', 
          'Enfermedades Crónico-degenerativas'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital'
        }
      },
      {
        id: 'dr_raymundo_romero_ventura',
        nombre: 'Dr. Raymundo Romero Ventura',
        titulo: 'Médico General',
        experiencia: 'Más de 35 años de experiencia',
        certificaciones: ['Médico Cirujano y Partero egresado en 1984 por la BUAP'],
        whatsapp: '2381300097',
        hasDetailedProfile: true,
        formacion: 'Médico Cirujano y Partero egresado en 1984 por la Benemérita Universidad Autónoma del Estado de Puebla',
        especialidades: ['Medicina General', 'Atención Primaria', 'Medicina Familiar'],
        slug: 'dr-raymundo-romero-ventura',
        horarios: 'Lunes a Sábado de 10:00 – 14:00 y 16:00 – 20:00',
        mision: 'Médico general con desarrollo profesional y académico en atención primaria con más de 35 años de experiencia laborando en la Ciudad de Ajalpan, Puebla. Capacitado para resolver los principales problemas concernientes a la promoción, recuperación y rehabilitación de la salud, tanto individual como familiar.',
        reconocimientos: [
          'Recertificación en 2020 por el Colegio de Médicos Cirujanos del Estado de Puebla A.C.',
          'COMECEP y del Colegio Médico de México A.C. FENACOME',
          'Miembro activo de la Asociación Médica de Ajalpan y su Región A.C.',
          'Miembro del Colegio de Médicos Cirujanos del Estado de Puebla A.C.',
          'Más de 35 años de experiencia en medicina general'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital'
        }
      },
      {
        id: 'dr_hipolito_coyotl_cruz',
        nombre: 'Dr. Hipólito Coyotl Cruz',
        titulo: 'Médico General',
        experiencia: '12 años de experiencia',
        certificaciones: ['Medicina General'],
        foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
        whatsapp: '2381379034',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Médico Cirujano',
        especialidades: ['Medicina General', 'Atención Primaria'],
        slug: 'dr-hipolito-coyotl-cruz',
        horarios: 'Lunes a Viernes: 9:00 AM - 5:00 PM, Sábados: 9:00 AM - 1:00 PM',
        mision: 'Proporcionar atención médica integral y humanizada, enfocado en la prevención y el tratamiento oportuno de enfermedades.',
        reconocimientos: [
          'Médico Cirujano certificado',
          '12 años de experiencia en medicina general',
          'Especialista en atención primaria'
        ]
      },
      {
        id: 'dr_emilio_montoro_hidalgo',
        nombre: 'Dr. Emilio Gerardo Montoro Hidalgo',
        titulo: 'Médico General',
        experiencia: '14 años de experiencia',
        certificaciones: ['Medicina General'],
        telefonoHospital: '2381234567',
        hasDetailedProfile: false
      },
      {
        id: 'dr_hector_lopez_aparicio',
        nombre: 'Dr. Héctor López Aparicio',
        titulo: 'Médico General',
        experiencia: '16 años de experiencia',
        certificaciones: ['Medicina General'],
        telefonoHospital: '2381234567',
        hasDetailedProfile: false
      }
    ]
  },
  {
    id: '2',
    slug: 'medicina-critica-terapia-intensiva',
    icon: Heart,
    titulo: 'Medicina Crítica / Terapia Intensiva',
    descripcion: 'Cuidados especializados para pacientes críticos',
    descripcionDetallada: 'Especialidad dedicada al diagnóstico y tratamiento de pacientes en estado crítico que requieren cuidados intensivos y monitoreo continuo.',
    servicios: [
      'Manejo de pacientes críticos',
      'Ventilación mecánica',
      'Monitoreo hemodinámico',
      'Soporte vital avanzado',
      'Manejo de shock'
    ],
    doctores: [
      {
        id: 'dr_hector_pena_carrillo',
        nombre: 'Dr. Héctor Peña Carrillo',
        titulo: 'Cardioneumólogo / Medicina Crítica / Anestesiólogo',
        experiencia: '15 años de experiencia',
        certificaciones: ['UPAEP', 'UAA', 'UNAM', 'Universidad Católica de Chile'],
        whatsapp: '2381119392',
        hasDetailedProfile: true,
        formacion: 'UPAEP - UAA - UNAM - Universidad Católica de Chile',
        especialidades: ['Medicina Crítica', 'Terapia Intensiva', 'Cardiología', 'Neumología', 'Anestesiología', 'Medicina Interna'],
        slug: 'dr-hector-pena-carrillo',
        mision: 'Atención y manejo de pacientes muy graves con especialización en medicina crítica, cardiología y neumología.',
        reconocimientos: [
          'Fellow of American Collage of Chest',
          'Fellow of American Association for Bronchology',
          'Sociedad Mexicana de Medicina Critica',
          'Colegio Mexicano de Anestesiología',
          'Sociedad Mexicana de Neumología y Cirugía de Tórax',
          'Sociedad de Circulación e Hipertensión Arterial Pulmonar AC',
          'Más de 40 Publicaciones Nacionales e Internacionales'
        ],
        areasAtencion: [
          'Pacientes muy graves',
          'Neumonías',
          'Diabéticos Descompensados',
          'Hipertensión Arterial Descompensada',
          'Hipertensión Pulmonar',
          'Tromboembolia Pulmonar',
          'Enfermedad Pulmonar Obstructiva Crónica (EPOC)',
          'Infecciones Severas',
          'Cuidados Anestésicos y Post Quirúrgicos Avanzados',
          'Broncoscopia'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital'
        }
      },
      {
        id: 'dr_hazael_sanchez_rosales',
        nombre: 'Dr. Hazael Sánchez Rosales',
        titulo: 'Medicina Crítica / Terapia Intensiva',
        experiencia: '12 años de experiencia',
        certificaciones: ['Especialista en Medicina de Urgencias IPN', 'Especialista en Medicina Critica UNAM'],
        whatsapp: '2381367962',
        hasDetailedProfile: true,
        formacion: 'Especialista en Medicina de Urgencias IPN, Especialista en Medicina Critica UNAM',
        especialidades: ['Medicina Crítica', 'Terapia Intensiva', 'Medicina de Urgencias'],
        slug: 'dr-hazael-sanchez-rosales',
        mision: 'Tratar a pacientes graves con complicaciones derivadas de descompensaciones metabólicas o complicaciones post-quirúrgicas así como vigilancia de estados patológicos crónicos.',
        reconocimientos: [
          'Mérito académico UNAM',
          'Reconocimiento Labor COVID UNAM'
        ],
        areasAtencion: [
          'Infarto de corazón',
          'Infarto y hemorragia cerebral',
          'Complicaciones agudas de diabetes mellitus',
          'Tromboembolia pulmonar',
          'Trombosis venosa profunda',
          'Pacientes con ventilación artificial',
          'Complicaciones de insuficiencia renal crónica',
          'Traumatismo craneoencefálico'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital'
        }
      }
    ]
  },
  {
    id: '3',
    slug: 'pediatria-neonatologia',
    icon: Baby,
    titulo: 'Pediatría / Neonatología',
    descripcion: 'Atención especializada para bebés y niños',
    descripcionDetallada: 'Especialidad médica dedicada al cuidado integral de la salud de niños desde el nacimiento hasta la adolescencia, incluyendo el cuidado especializado de recién nacidos.',
    servicios: [
      'Control de crecimiento y desarrollo',
      'Vacunación infantil',
      'Tratamiento de enfermedades pediátricas',
      'Cuidados neonatales',
      'Consultas de puericultura'
    ],
    doctores: [
      {
        id: 'dr_abraham_tellez_barragan',
        nombre: 'Dr. Abraham Téllez Barragán',
        titulo: 'Pediatra Neonatólogo',
        experiencia: '18 años de experiencia',
        certificaciones: ['Pediatría', 'Neonatología'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_irvin_romero_ponce',
        nombre: 'Dr. Irvin Omar Romero Ponce',
        titulo: 'Pediatra',
        experiencia: '10 años de experiencia',
        certificaciones: ['Pediatría'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_eltzy_rocha_rivera',
        nombre: 'Dra. Eltzy Rubí Rocha Rivera',
        titulo: 'Pediatra',
        experiencia: '8 años de experiencia',
        certificaciones: ['Pediatría'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_alberto_delgado_sandoval',
        nombre: 'Dr. Alberto Delgado Sandoval',
        titulo: 'Pediatra Neonatólogo',
        experiencia: '14 años de experiencia',
        certificaciones: ['Pediatría', 'Neonatología'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '4',
    slug: 'traumatologia-ortopedia',
    icon: Bone,
    titulo: 'Traumatología / Ortopedia',
    descripcion: 'Tratamiento de lesiones óseas y musculares',
    descripcionDetallada: 'Especialidad quirúrgica que se ocupa de las lesiones traumáticas y enfermedades del sistema musculoesquelético.',
    servicios: [
      'Tratamiento de fracturas',
      'Cirugía ortopédica',
      'Artroscopia',
      'Prótesis articulares',
      'Rehabilitación'
    ],
    doctores: [
      {
        id: 'dr_cesar_gonzalez_martinez',
        nombre: 'Dr. Cesar González Martínez',
        titulo: 'Traumatólogo Ortopedista',
        experiencia: '20 años de experiencia',
        certificaciones: ['Ortopedia', 'Traumatología'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_arturo_dominguez_millan',
        nombre: 'Dr. Arturo Domínguez Millan',
        titulo: 'Traumatólogo Ortopedista',
        experiencia: '16 años de experiencia',
        certificaciones: ['Ortopedia', 'Traumatología'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '5',
    slug: 'urgenciologia',
    icon: Ambulance,
    titulo: 'Urgenciología',
    descripcion: 'Atención médica inmediata las 24 horas',
    descripcionDetallada: 'Especialidad médica enfocada en la atención inmediata de emergencias y urgencias médicas las 24 horas del día.',
    servicios: [
      'Atención de emergencias',
      'Urgencias médicas',
      'Trauma',
      'Reanimación cardiopulmonar',
      'Triaje médico'
    ],
    doctores: [
      {
        id: 'dra_silvia_huerta_damian',
        nombre: 'Dra. Silvia Huerta Damian',
        titulo: 'Especialista en Medicina de Emergencias',
        experiencia: '12 años de experiencia',
        certificaciones: ['Medicina de Emergencias', 'ACLS', 'ATLS'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_porfirio_apam_cruz',
        nombre: 'Dr. Porfirio Apam Cruz',
        titulo: 'Especialista en Urgenciología',
        experiencia: '15 años de experiencia',
        certificaciones: ['Urgenciología', 'Medicina de Emergencias'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '6',
    slug: 'neurologia',
    icon: Brain,
    titulo: 'Neurología',
    descripcion: 'Diagnóstico y tratamiento del sistema nervioso',
    descripcionDetallada: 'Especialidad médica que se ocupa del estudio y tratamiento de los trastornos del sistema nervioso central y periférico.',
    servicios: [
      'Diagnóstico neurológico',
      'Electroencefalografía',
      'Tratamiento de epilepsia',
      'Cefaleas y migrañas',
      'Enfermedades neurodegenerativas'
    ],
    doctores: [
      {
        id: 'dr_jorge_almanza_islas',
        nombre: 'Dr. Jorge Alberto Almanza Islas',
        titulo: 'Neurólogo',
        experiencia: '14 años de experiencia',
        certificaciones: ['Neurología', 'Neurofisiología'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '7',
    slug: 'nutricion',
    icon: Utensils,
    titulo: 'Nutrición',
    descripcion: 'Planes alimentarios personalizados',
    descripcionDetallada: 'Especialidad que se encarga de la evaluación, diagnóstico y tratamiento de problemas relacionados con la alimentación y nutrición.',
    servicios: [
      'Evaluación nutricional',
      'Planes alimentarios',
      'Nutrición clínica',
      'Educación nutricional',
      'Seguimiento nutricional'
    ],
    doctores: [
      {
        id: 'lnc_carlos_escobar_olivier',
        nombre: 'L.N.C. Carlos Escobar Olivier',
        titulo: 'Licenciado en Nutrición Clínica',
        experiencia: '8 años de experiencia',
        certificaciones: ['Nutrición Clínica', 'Dietética'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '8',
    slug: 'cardioneumologia',
    icon: Wind,
    titulo: 'Cardioneumología',
    descripcion: 'Especialidad del corazón y pulmones',
    descripcionDetallada: 'Especialidad que combina el cuidado del sistema cardiovascular y respiratorio, tratando patologías que afectan ambos sistemas.',
    servicios: [
      'Ecocardiografía',
      'Espirometría',
      'Pruebas de esfuerzo',
      'Holter',
      'Rehabilitación cardiopulmonar'
    ],
    doctores: [
      {
        id: 'dr_hector_pena_carrillo_cardio',
        nombre: 'Dr. Héctor Peña Carrillo',
        titulo: 'Cardioneumólogo / Medicina Crítica / Anestesiólogo',
        experiencia: '16 años de experiencia',
        certificaciones: ['Cardiología', 'Neumología', 'Medicina Crítica', 'Anestesiología'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '9',
    slug: 'gastroenterologia',
    icon: Shield,
    titulo: 'Gastroenterología',
    descripcion: 'Cuidado del sistema digestivo',
    descripcionDetallada: 'Especialidad médica que se ocupa del estudio, diagnóstico y tratamiento de las enfermedades del aparato digestivo.',
    servicios: [
      'Endoscopia digestiva',
      'Colonoscopia',
      'Tratamiento de gastritis',
      'Manejo de úlceras',
      'Enfermedades hepáticas'
    ],
    doctores: [
      {
        id: 'dr_virgilio_marroquin_jimenez',
        nombre: 'Dr. Virgilio Marroquín Jiménez',
        titulo: 'Gastroenterólogo',
        experiencia: '13 años de experiencia',
        certificaciones: ['Gastroenterología', 'Endoscopia'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '10',
    slug: 'nefrologia',
    icon: Activity,
    titulo: 'Nefrología',
    descripcion: 'Especialidad en riñones y vías urinarias',
    descripcionDetallada: 'Especialidad médica que se dedica al estudio de la función y las enfermedades del riñón.',
    servicios: [
      'Diagnóstico de enfermedades renales',
      'Tratamiento de insuficiencia renal',
      'Diálisis',
      'Trasplante renal',
      'Hipertensión arterial'
    ],
    doctores: [
      {
        id: 'dra_yadira_tehuacanero_tecua',
        nombre: 'Dra. Yadira Tehuacanero Tecua',
        titulo: 'Nefróloga',
        experiencia: '11 años de experiencia',
        certificaciones: ['Nefrología', 'Diálisis'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '11',
    slug: 'neumologia',
    icon: Wind2,
    titulo: 'Neumología',
    descripcion: 'Tratamiento de enfermedades respiratorias',
    descripcionDetallada: 'Especialidad médica encargada del estudio de las enfermedades del aparato respiratorio y órganos del tórax.',
    servicios: [
      'Espirometría',
      'Broncoscopia',
      'Tratamiento de asma',
      'EPOC',
      'Enfermedades pulmonares'
    ],
    doctores: [
      {
        id: 'dr_benito_vargas_abrego',
        nombre: 'Dr. Benito Vargas Ábrego',
        titulo: 'Neumólogo',
        experiencia: '17 años de experiencia',
        certificaciones: ['Neumología', 'Medicina Respiratoria'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '12',
    slug: 'cirugia-general-especializada',
    icon: Scissors,
    titulo: 'Cirugía General y Especializada',
    descripcion: 'Procedimientos quirúrgicos avanzados',
    descripcionDetallada: 'Especialidad quirúrgica que abarca una amplia gama de procedimientos operatorios en diferentes áreas del cuerpo.',
    servicios: [
      'Cirugía abdominal',
      'Laparoscopia',
      'Cirugía de vesícula',
      'Hernias',
      'Cirugía oncológica'
    ],
    doctores: [
      {
        id: 'dr_omar_marroquin_herrera',
        nombre: 'Dr. Omar Marroquín Herrera',
        titulo: 'Cirujano General',
        experiencia: '22 años de experiencia',
        certificaciones: ['Cirugía General', 'Laparoscopia'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_jose_luis_hernandez_aguilar',
        nombre: 'Dr. José Luis Hernández Aguilar',
        titulo: 'Cirujano General',
        experiencia: '18 años de experiencia',
        certificaciones: ['Cirugía General'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_miguel_parra_flores',
        nombre: 'Dr. Miguel Parra Flores',
        titulo: 'Cirujano General',
        experiencia: '20 años de experiencia',
        certificaciones: ['Cirugía General'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_quintin_gonzalez_contreras',
        nombre: 'Dr. Quintín Héctor González Contreras',
        titulo: 'Cirujano General',
        experiencia: '25 años de experiencia',
        certificaciones: ['Cirugía General'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_jaime_romero_salas',
        nombre: 'Dr. Jaime Oscar Romero Salas',
        titulo: 'Cirujano General',
        experiencia: '16 años de experiencia',
        certificaciones: ['Cirugía General'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '13',
    slug: 'urologia',
    icon: User,
    titulo: 'Urología',
    descripcion: 'Especialidad del sistema genitourinario',
    descripcionDetallada: 'Especialidad médico-quirúrgica que se ocupa del estudio, diagnóstico y tratamiento de las patologías del aparato urinario y reproductor masculino.',
    servicios: [
      'Consulta urológica',
      'Cistoscopia',
      'Cirugía de próstata',
      'Litiasis renal',
      'Disfunción eréctil'
    ],
    doctores: [
      {
        id: 'dr_tedd_ochoa_vazquez',
        nombre: 'Dr. Tedd Ochoa Vázquez',
        titulo: 'Urólogo',
        experiencia: '19 años de experiencia',
        certificaciones: ['Urología', 'Andrología'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '14',
    slug: 'dermatologia',
    icon: Sparkles,
    titulo: 'Dermatología',
    descripcion: 'Cuidado integral de la piel',
    descripcionDetallada: 'Especialidad médica que se dedica al estudio de la estructura y función de la piel, así como de las enfermedades que la afectan.',
    servicios: [
      'Consulta dermatológica',
      'Dermatoscopia',
      'Tratamiento de acné',
      'Cirugía dermatológica',
      'Cosmiatría'
    ],
    doctores: [
      {
        id: 'dra_irma_villanueva_cortes',
        nombre: 'Dra. Irma Villanueva Cortes',
        titulo: 'Dermatóloga',
        experiencia: '9 años de experiencia',
        certificaciones: ['Dermatología', 'Dermatología Estética'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '15',
    slug: 'ginecologia',
    icon: UserCheck,
    titulo: 'Ginecología y Obstetricia',
    descripcion: 'Salud integral de la mujer',
    descripcionDetallada: 'Especialidad médica que se ocupa del cuidado del sistema reproductor femenino y la salud de la mujer en todas las etapas de su vida.',
    servicios: [
      'Control ginecológico',
      'Papanicolaou',
      'Ecografía ginecológica',
      'Planificación familiar',
      'Menopausia'
    ],
    doctores: [
      {
        id: 'dra_karina_pena_tello_gine',
        nombre: 'Dra. Karina Peña Tello',
        titulo: 'Ginecóloga Obstetra',
        experiencia: '15 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia', 'Medicina Materno Fetal'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_edith_calvo_santana',
        nombre: 'Dra. Edith Jazmín Calvo Santana',
        titulo: 'Ginecóloga Obstetra',
        experiencia: '12 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_nayeli_sanchez_garibay',
        nombre: 'Dra. Nayeli del Rayo Sánchez Garibay',
        titulo: 'Ginecóloga Obstetra',
        experiencia: '10 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_ruben_nacer',
        nombre: 'Dr. Rubén Julián Nacer',
        titulo: 'Ginecólogo Obstetra',
        experiencia: '18 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_moises_sanchez_perez',
        nombre: 'Dr. Moisés Héctor Sánchez Pérez',
        titulo: 'Ginecólogo Obstetra',
        experiencia: '20 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_luz_gil_sandoval',
        nombre: 'Dra. Luz María Gil Sandoval',
        titulo: 'Ginecóloga Obstetra',
        experiencia: '14 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '16',
    slug: 'anestesiologia',
    icon: Syringe,
    titulo: 'Anestesiología',
    descripcion: 'Manejo del dolor y anestesia quirúrgica',
    descripcionDetallada: 'Especialidad médica dedicada al cuidado perioperatorio del paciente, incluyendo anestesia, analgesia y cuidados críticos.',
    servicios: [
      'Anestesia general',
      'Anestesia regional',
      'Manejo del dolor',
      'Sedación',
      'Cuidados perioperatorios'
    ],
    doctores: [
      {
        id: 'dr_hector_pena_carrillo_anest',
        nombre: 'Dr. Héctor Peña Carrillo',
        titulo: 'Anestesiólogo / Cardioneumólogo / Medicina Crítica',
        experiencia: '14 años de experiencia',
        certificaciones: ['Anestesiología', 'Cardiología', 'Neumología', 'Medicina Crítica'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_marianela_orellan_gorgocia',
        nombre: 'Dra. Marianela Orellan Gorgocia',
        titulo: 'Anestesióloga',
        experiencia: '10 años de experiencia',
        certificaciones: ['Anestesiología'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_christian_galicia_castelan',
        nombre: 'Dr. Christian Misael Galicia Castelán',
        titulo: 'Anestesiólogo',
        experiencia: '8 años de experiencia',
        certificaciones: ['Anestesiología'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_maria_carrera_balderas',
        nombre: 'Dra. María Teresa Carrera Balderas',
        titulo: 'Anestesióloga',
        experiencia: '12 años de experiencia',
        certificaciones: ['Anestesiología'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '17',
    slug: 'cirugia-plastica',
    icon: Palette,
    titulo: 'Cirugía Plástica, Estética y Reconstructiva',
    descripcion: 'Reconstrucción y cirugía estética',
    descripcionDetallada: 'Especialidad quirúrgica que se ocupa de la corrección de defectos congénitos, adquiridos, traumáticos o involutivos que requieren reparación o reposición.',
    servicios: [
      'Cirugía reconstructiva',
      'Cirugía estética',
      'Quemaduras',
      'Microsirugía',
      'Rejuvenecimiento facial',
      'Aumento de busto',
      'Liposucción',
      'Abdominoplastia',
      'Mommy makeover'
    ],
    doctores: [
      {
        id: 'dr_eugenio_garcia_cano',
        nombre: 'Dr. Eugenio García Cano',
        titulo: 'Cirujano Plástico, Estético y Reconstructivo',
        experiencia: '16 años de experiencia',
        certificaciones: ['Cirugía Plástica', 'Cirugía Estética', 'Cirugía Reconstructiva'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dr_jaime_araoz_arroyo',
        nombre: 'Dr. Jaime Araoz Arroyo',
        titulo: 'Cirujano Plástico, Estético y Reconstructivo',
        experiencia: '18 años de experiencia',
        certificaciones: ['Cirugía Plástica', 'Cirugía Estética', 'Cirugía Reconstructiva'],
        telefonoHospital: '2381234567'
      },
      {
        id: 'dra_samaria_mejia_rivera',
        nombre: 'Dra. Samaria Estefanía Mejía Rivera',
        titulo: 'Cirujana Plástica, Estética y Reconstructiva',
        experiencia: '10 años de experiencia especializada en procedimientos de vanguardia',
        certificaciones: ['BUAP', 'UNAM', 'Hospital General de México "Dr. Eduardo Liceaga"'],
        whatsapp: '2382130011',
        hasDetailedProfile: true,
        formacion: 'BUAP, UNAM y Hospital General de México "Dr. Eduardo Liceaga"',
        especialidades: ['Cirugía Plástica', 'Cirugía Estética', 'Cirugía Reconstructiva'],
        slug: 'dra-samaria-mejia-rivera',
        horarios: 'Disponible mediante cita previa',
        mision: 'Especialista en cirugía plástica, estética y reconstructiva, comprometida con ofrecer procedimientos de la más alta calidad y seguridad.',
        reconocimientos: [
          'Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva',
          'Asociación Mexicana de Cirugía Plástica, Estética y Reconstructiva',
          'International Society of Aesthetic Plastic Surgery'
        ],
        procedimientos: [
          'Rejuvenecimiento/estiramiento facial (facelift)',
          'Rejuvenecimiento de cuello (necklift)',
          'Lipofilling facial (injerto graso)',
          'Cirugía de párpados',
          'Levantamiento/acortamiento de labio superior (lip lift)',
          'Aumento de busto',
          'Levantamiento de busto con o sin implantes',
          'Explantación mamaria (retiro de implantes de busto)',
          'Liposucción 360 con aumento graso de glúteo',
          'Mommy makeover',
          'Lipoabdominoplastia',
          'Liposucción de brazos',
          'Braquiplastia'
        ],
        contactoTitulos: {
          whatsapp: 'WhatsApp y Consultas'
        }
      }
    ]
  },
  {
    id: '18',
    slug: 'neurocirugia',
    icon: Zap,
    titulo: 'Neurocirugía',
    descripcion: 'Cirugía especializada del sistema nervioso',
    descripcionDetallada: 'Especialidad médica que se ocupa del tratamiento quirúrgico de enfermedades del sistema nervioso central, periférico y vegetativo.',
    servicios: [
      'Cirugía cerebral',
      'Cirugía de columna',
      'Neurocirugía vascular',
      'Tumores cerebrales',
      'Traumatismo craneoencefálico'
    ],
    doctores: [
      {
        id: 'dr_jorge_hernandez_garcia',
        nombre: 'Dr. Jorge Luis Hernández García',
        titulo: 'Neurocirujano',
        experiencia: '21 años de experiencia',
        certificaciones: ['Neurocirugía', 'Cirugía de Columna'],
        telefonoHospital: '2381234567'
      }
    ]
  },
  {
    id: '19',
    slug: 'oftalmologia-pediatrica',
    icon: Eye,
    titulo: 'Oftalmología Pediátrica',
    descripcion: 'Cuidado ocular infantil especializado',
    descripcionDetallada: 'Subespecialidad de la oftalmología que se dedica al diagnóstico y tratamiento de enfermedades oculares en niños.',
    servicios: [
      'Examen oftalmológico pediátrico',
      'Estrabismo',
      'Ambliopía',
      'Refracción pediátrica',
      'Cirugía oftalmológica infantil'
    ],
    doctores: [
      {
        id: 'dra_lidia_suarez_reynoso',
        nombre: 'Dra. Lidia Suárez Reynoso',
        titulo: 'Oftalmóloga Pediatra',
        experiencia: '12 años de experiencia',
        certificaciones: ['Oftalmología', 'Oftalmología Pediátrica'],
        telefonoHospital: '2381234567'
      }
    ]
  }
];

// Function to get all doctors from all specialties
export const getAllDoctors = (): Doctor[] => {
  return especialidadesData.flatMap(especialidad => especialidad.doctores);
};

export const getDoctorBySlug = (slug: string): Doctor | undefined => {
  for (const especialidad of especialidadesData) {
    const doctor = especialidad.doctores.find(doctor => doctor.slug === slug);
    if (doctor) return doctor;
  }
  return undefined;
};

export const getEspecialidadBySlug = (slug: string): Especialidad | undefined => {
  return especialidadesData.find(especialidad => especialidad.slug === slug);
};

export const getAllEspecialidades = (): Especialidad[] => {
  return especialidadesData;
};

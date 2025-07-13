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
  servicios?: string[];
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
          adicionales: ['Hospital', 'Hospital']
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
          adicionales: ['Hospital', 'Hospital']
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
          adicionales: ['Hospital', 'Hospital']
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
        experiencia: '16 años de experiencia',
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
          'Medicina Interna',
          'Medicina Critica',
          'Terapia Intensiva',
          'Broncoscopia'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
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
          adicionales: ['Hospital', 'Hospital']
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
        titulo: 'Pediatra',
        experiencia: '18 años de experiencia',
        certificaciones: ['La Facultad de Medicina en la Universidad Regional de Sureste de Oaxaca', 'Posgrado en Pediatría en el Hospital del Niño Poblano'],
        whatsapp: '2381680976',
        hasDetailedProfile: true,
        formacion: 'La Facultad de Medicina en la Universidad Regional de Sureste de Oaxaca, Posgrado en Pediatría en el Hospital del Niño Poblano',
        especialidades: ['Pediatría'],
        slug: 'dr-abraham-tellez-barragan',
        mision: 'Ayudar a mis pacientes en la prevención, diagnóstico, tratamiento de enfermedades y lesiones de la etapa más importante del ser humano: la infancia. Asesoramos a los Papás desde la concepción al nacimiento y adolescencia de una forma integral.',
        reconocimientos: [
          'Pediatra Certificado por el Consejo Mexicano de Certificación en Pediatría',
          'Certificado en Reanimación Neonatal y Pediátrica Avanzada',
          'Pediatra Prolactancia'
        ],
        servicios: [
          'Asesoría Prenatal',
          'Vacunas',
          'Atención del Recién Nacido Sano y Enfermo',
          'Asesorías de Lactancia Materna',
          'Asesorías en Alimentación Complementaria',
          'Consulta de Niño Sano y de Urgencia'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
      },
      {
        id: 'dr_irvin_romero_ponce',
        nombre: 'Dr. Irvin Omar Romero Ponce',
        titulo: 'Pediatra',
        experiencia: '10 años de experiencia',
        certificaciones: ['Medicina en la Universidad Popular Autónoma del Estado de Puebla, UPAEP', 'Especialidad en Pediatría Hospital Juárez de México'],
        whatsapp: '2225079022',
        hasDetailedProfile: true,
        formacion: 'Médico Pediatra en la Universidad Popular Autónoma del Estado de Puebla',
        especialidades: ['Pediatría'],
        slug: 'dr-irvin-romero-ponce',
        reconocimientos: [
          'Internado en el Hospital de la Margarita IMSS',
          'Servicio Social Santiago Miahuatlán',
          'Certificado por el Consejo Mexicano',
          'Diplomas en cursos de terapia intensiva, urgencias pediátricas, BLS, ACLS, PALS y RENEO'
        ],
        contactoTitulos: {
          whatsapp: 'Contacto'
        }
      },
      {
        id: 'dra_eltzy_rocha_rivera',
        nombre: 'Dra. Eltzy Rubí Rocha Rivera',
        titulo: 'Médico Neonatóloga Pediatra',
        experiencia: '8 años de experiencia',
        certificaciones: ['La Facultad de Medicina en pediatría en la Benemérita Universidad Autónoma de Puebla', 'La Facultad de Medicina en neonatología en la Benemérita Universidad Autónoma de Puebla'],
        whatsapp: '2381478768',
        hasDetailedProfile: true,
        formacion: 'Benemérita Universidad Autónoma de Puebla - Pediatría y Neonatología',
        especialidades: ['Pediatría', 'Neonatología'],
        slug: 'dra-eltzy-rocha-rivera',
        reconocimientos: [
          'Rotación en Hospital de la paz España en la subespecialidad'
        ],
        contactoTitulos: {
          whatsapp: 'Contacto'
        }
      },
      {
        id: 'dr_alberto_delgado_sandoval',
        nombre: 'Dr. Alberto Delgado Sandoval',
        titulo: 'Pediatra Neonatólogo',
        experiencia: '14 años de experiencia',
        certificaciones: ['Pediatría', 'Neonatología'],
        telefonoHospital: '2381234567',
        hasDetailedProfile: false
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
        nombre: 'Dr. César González Martínez',
        titulo: 'Traumatólogo Ortopedista',
        experiencia: '20 años de experiencia',
        certificaciones: ['Médico cirujano y partero por la Universidad Autónoma de Nuevo León', 'Posgrado en Traumatología y Ortopedia por la Benemérita Universidad Autónoma de Puebla'],
        whatsapp: '8180865876',
        hasDetailedProfile: true,
        formacion: 'Médico cirujano y partero por la Universidad Autónoma de Nuevo León, Posgrado en Traumatología y Ortopedia por la Benemérita Universidad Autónoma de Puebla',
        especialidades: ['Traumatología', 'Ortopedia'],
        slug: 'dr-cesar-gonzalez-martinez',
        horarios: '12:00 a 14:00 y 17:30 a 19:30',
        mision: 'Prevenir, diagnosticar y tratar enfermedades y lesiones relacionadas con el sistema músculo esquelético.',
        areasAtencion: [
          'Esguinces',
          'Luxaciones',
          'Fracturas',
          'Artrosis',
          'Pacientes con patología del sistema músculo esquelético'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
      },
      {
        id: 'dr_arturo_dominguez_millan',
        nombre: 'Dr. Arturo Domínguez Millan',
        titulo: 'Alta Especialidad en Cirugía Articular',
        experiencia: '16 años de experiencia',
        certificaciones: ['Hospital General de México Traumatología y Ortopedia'],
        whatsapp: '2221133552',
        hasDetailedProfile: true,
        formacion: 'Hospital General de México Traumatología y Ortopedia',
        especialidades: ['Traumatología', 'Ortopedia', 'Cirugía Articular'],
        slug: 'dr-arturo-dominguez-millan',
        horarios: 'L-M-V: 8:00hr a 12:00hr, M-J: 10:00hr a 12:00hr y 15:00hr a 20:00 hr, Urgencias 24 hrs',
        mision: 'Tratar a mis pacientes con un trato especializado y cordial, con alta calidad humana, con alto espíritu de servicio y con genuino compromiso en el fomento de la salud.',
        reconocimientos: [
          'Certificado por el Consejo Mexicano de Ortopedia y Traumatología A. C.'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
      },
      {
        id: 'dr_omar_marroquin_herrera',
        nombre: 'Dr. Omar Marroquín Herrera',
        titulo: 'Ortopedista, Traumatólogo y Cirujano de Columna',
        experiencia: '22 años de experiencia',
        certificaciones: ['Benemérita Universidad Autónoma de Puebla', 'Universidad Autónoma de Querétaro', 'Hospital Universitario Fundación Santa Fé de Bogotá'],
        whatsapp: '2381104740',
        hasDetailedProfile: true,
        formacion: 'Benemérita Universidad Autónoma de Puebla (Médico general), Universidad Autónoma de Querétaro (Especialidad en Traumatología y Ortopedia)',
        especialidades: ['Traumatología', 'Ortopedia', 'Cirugía de Columna'],
        slug: 'dr-omar-marroquin-herrera',
        mision: 'Especialista en Cirugía de Ortopedia y Traumatología con Subespecialidad en Cirugía de Columna vertebral de adultos y niños. Cuenta con adiestramiento especial en cirugía de mínima invasión endoscópica de Columna con estudios realizados en Colombia y Argentina.',
        reconocimientos: [
          'Hospital Universitario Fundación Santa Fé de Bogotá (Sub especialidad Cirugía de columna en adultos)',
          'Instituto Roosevelt (Subespecialidad Cirugía de columna pediátrica)',
          'Clínica Porto Azul, Barranquilla. (Cirugía endoscópica y mínima invasión de columna vertebral)',
          'Hospital Español de Mendoza, Argentina (Cirugía de mínima invasión de columna vertebral)',
          'Universidad Caxias Do Sul, Brasil ( Patologías de la columna vertebral: Prevención, Manejo y Diagnóstico )'
        ],
        contactoTitulos: {
          whatsapp: 'Agendar una cita con su asistente la Srita. Magda'
        }
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
        titulo: 'Médico General de Urgencias y Consulta Familiar Privada',
        experiencia: '22 años de experiencia',
        certificaciones: ['BUAP', 'Maestría en Administración de Instituciones de Salud', 'Diplomado en Colposcopía', 'Diplomado en Urgencias Pediátricas'],
        whatsapp: '2383882225',
        telefonoHospital: '2383824819',
        hasDetailedProfile: true,
        formacion: 'Médico Cirujano y Partero - Benemérita Universidad Autónoma de Puebla, Maestría en Administración de Instituciones de Salud - Universidad EIU',
        especialidades: ['Medicina de Urgencias', 'Medicina General', 'Consulta Familiar'],
        slug: 'dra-silvia-huerta-damian',
        mision: 'Atender con profesionalismo y excelente atención de salud integral a mis pacientes. Soy Médica profesional del área de urgencias del hospital general de Tehuacán, y atención médica de consulta general particular, con más 22 años de experiencia y capacidad para la atención de pacientes en urgencias médicas y consultas familiares presenciales y a distancia.',
        reconocimientos: [
          'Médico Adscrito al servicio de Urgencias en el hospital general Tehuacán desde hace más de 10 años',
          'Médico docente en universidades de Tehuacán (UVP, UGMEX, CUT, UNID, ATENEO, ICT)',
          'Diplomado en Colposcopía y Cáncer en la mujer',
          'Diplomado en Urgencias en Pediatría',
          'Diplomado en Farmacología Médica y Terapéutica'
        ],
        areasAtencion: [
          'Urgencias médicas',
          'Consulta general',
          'Medicina familiar',
          'Urgencias pediátricas',
          'Atención presencial y a distancia'
        ],
        telefonosAdicionales: [
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital',
          adicionales: ['Hospital']
        }
      },
      {
        id: 'dr_porfirio_apam_cruz',
        nombre: 'Dr. Porfirio Apam Cruz',
        titulo: 'Urgencias Médico Quirúrgicas',
        experiencia: '15 años de experiencia',
        certificaciones: ['IPN', 'UNAM FES Zaragoza', 'Universidad mesoamericana'],
        whatsapp: '2381178593',
        telefonoHospital: '2383824819',
        hasDetailedProfile: true,
        formacion: 'Médico Especialista en Urgencias Medico Quirúrgicas por el Instituto Politécnico Nacional, Diplomado en ultrasonido diagnóstico por la UNAM FES Zaragoza, Maestría en ciencias forenses y periciales por la Universidad mesoamericana',
        especialidades: ['Urgencias Médico Quirúrgicas', 'Ultrasonido Diagnóstico', 'Ciencias Forenses'],
        slug: 'dr-porfirio-apam-cruz',
        horarios: '8:00 - 13:00 hrs lunes a sábado',
        mision: 'Otorgar a mis pacientes medicina ética, pronta, efectiva y vanguardista con el fin de satisfacer el alto estándar que la actualidad emergente como médicos nos demanda.',
        reconocimientos: [
          'Médico Especialista certificado por el IPN',
          'Diplomado en ultrasonido diagnóstico UNAM',
          'Maestría en ciencias forenses y periciales',
          'Certificaciones: ACLS, ATLS, MIP, ALSO, Accesos vasculares',
          'Adscrito al área de urgencias del Hospital General de Zona número 15 de Tehuacán Puebla'
        ],
        areasAtencion: [
          'Biomédica',
          'Atención de urgencias',
          'Urgencias médico quirúrgicas',
          'Ultrasonido diagnóstico'
        ],
        telefonosAdicionales: [
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital',
          adicionales: ['Hospital']
        }
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
        titulo: 'Neurólogo y Neurofisiólogo',
        experiencia: '14 años de experiencia',
        certificaciones: ['Neurología', 'Neurofisiología'],
        whatsapp: '5529806563',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Facultad de Medicina de Veracruz, Especialidad en Neurología, Especialidad en Neurofisiología',
        especialidades: ['Neurología', 'Neurofisiología'],
        slug: 'dr-jorge-almanza-islas',
        mision: 'Especialista en neurología y neurofisiología comprometido con el diagnóstico y tratamiento de enfermedades del sistema nervioso.',
        reconocimientos: [
          'Especialista en el Instituto Mexicano del Seguro Social durante 13 años',
          'Especialidad en Neurofisiología',
          'Especialidad en Neurología',
          'Realizó diferentes estudios fisiológicos'
        ],
        areasAtencion: [
          'Enfermedades neurológicas',
          'Estudios neurofisiológicos',
          'Diagnóstico neurológico',
          'Electroencefalografía'
        ],
        contactoTitulos: {
          whatsapp: 'Contacto'
        }
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
        titulo: 'Nutriólogo clínico – Técnico auxiliar en lactancia materna',
        experiencia: '8 años de experiencia',
        certificaciones: ['Centro Universitario Milenium', 'Federación Nacional de Nutrición y Ciencia - UAEM'],
        whatsapp: '2381306208',
        telefonoHospital: '2383824819',
        hasDetailedProfile: true,
        formacion: 'Licenciado en Nutrición Clínica - Centro Universitario Milenium, Certificado por Federación Nacional de Nutrición y Ciencia - UAEM',
        especialidades: ['Nutrición Clínica', 'Lactancia Materna', 'Inmunonutrición', 'Onconutrición'],
        slug: 'lnc-carlos-escobar-olivier',
        mision: 'Resaltar la importancia de la nutrición en su uso clínico y hospitalario para la mejora del paciente a través de un tratamiento nutricional que implique la correcta elección de nutrientes y cantidades de estos, necesarios para tratar la enfermedad del paciente. Enaltecer a la nutrición clínica como una especialidad médica de suma importancia y estar a la par de la toma de decisiones en cuanto al tratamiento del paciente se refiere.',
        reconocimientos: [
          'Diplomado en Abordaje integral del paciente con enfermedades crónicas',
          'Certificado por Federación Nacional de Nutrición y Ciencia - UAEM',
          'Técnico auxiliar en lactancia materna'
        ],
        areasAtencion: [
          'Paciente crítico',
          'Desnutrición severa',
          'Diabetes',
          'Hipertensión',
          'Inmunonutrición',
          'Onconutrición',
          'Obesidad y sobrepeso',
          'Embarazo y lactancia materna',
          'Aplicación de nutrición enteral y parenteral',
          'Enfermedad renal crónica',
          'Enfermedades gastrointestinales',
          'Enfermedades pulmonares',
          'Enfermedades ginecológicas'
        ],
        telefonosAdicionales: [
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          hospital: 'Hospital',
          adicionales: ['Hospital']
        }
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
        certificaciones: ['Hospital de Especialidades, Centro Medico Nacional La Raza de la CDMX'],
        whatsapp: '2381122126',
        hasDetailedProfile: true,
        formacion: 'Egresado del Hospital de Especialidades, Centro Medico Nacional La Raza de la CDMX',
        especialidades: ['Gastroenterología', 'Endoscopia'],
        slug: 'dr-virgilio-marroquin-jimenez',
        horarios: 'Lunes a viernes de 11 a 14 hrs y 16 a 19 hrs',
        mision: 'Proporcionar una atención médica especializada en el diagnóstico y tratamiento oportuno de enfermedades digestivas. Con enfoque en la excelencia clínica y la compasión hacia mis pacientes, me comprometo a brindar soluciones efectivas y personalizadas para mejorar la salud digestiva y el bienestar general.',
        reconocimientos: [
          'Miembro de la Asociación Mexicana de Gastroenterología',
          'Miembro de la Asociación Mexicana de Endoscopia Gastrointestinal'
        ],
        areasAtencion: [
          'Enfermedades del esófago, estómago, hígado, páncreas, vesícula e intestinos'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648',
          '2383825027'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital', 'Celular']
        }
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
        titulo: 'Nefrología y Trasplante Renal',
        experiencia: '11 años de experiencia',
        certificaciones: ['Nefrología', 'Trasplante Renal'],
        whatsapp: '2361005844',
        hasDetailedProfile: true,
        formacion: 'Especialista en Nefrología',
        especialidades: ['Nefrología', 'Trasplante Renal'],
        slug: 'dra-yadira-tehuacanero-tecua',
        mision: 'Nefróloga especialista en enfermedades renales y vías urinarias. Con la visión de dar un manejo integral de las enfermedades de los riñones y las vías urinarias nace este proyecto. Recuerda que solo un especialista bien preparado y certificado te va a dar el tratamiento adecuado.',
        areasAtencion: [
          'HTA y daño vascular',
          'Hematuria (sangre en la orina), proteinuria (proteínas en la orina)',
          'Infecciones de orina',
          'Enfermedades que producen cálculos en el riñón',
          'Enfermedades que producen inflamación en el riñón (Nefritis)',
          'Enfermedades en otros órganos, en la inmunidad y tratamientos que afectan a los riñones',
          'Tratamiento de las consecuencias de la función renal alterada: anemia, falta de bicarbonato, aumento del fósforo',
          'Seguimiento de la Insuficiencia Renal Crónica en consulta (ERCA)',
          'Tratamiento de diálisis: Hemodiálisis y Diálisis peritoneal',
          'Atención previa, inmediata y posterior del Trasplante renal',
          'Biopsia Renal para el diagnóstico de las enfermedades renales',
          'Realización de accesos en venas para realizar hemodiálisis (catéteres)',
          'Técnicas especiales de depuración de la sangre: plasmaféresis, granuloaféresis, leucocitaféresis, LDL aféresis etc.'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
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
        titulo: 'Cirujano Cardiovascular y Torácico',
        experiencia: '17 años de experiencia',
        certificaciones: ['Cirugía Torácica No Cardiaca', 'Consejo Nacional de Cirugía del Tórax'],
        whatsapp: '5519485538',
        hasDetailedProfile: true,
        formacion: 'Médico General, Cirujano Cardiotorácico (Cirugía Torácica No Cardiaca en Adultos)',
        especialidades: ['Neumología', 'Cirugía Torácica', 'Cirugía Cardiovascular'],
        slug: 'dr-benito-vargas-abrego',
        mision: 'Médico Especialista Certificado en Cirugia de Enfermedades Pleuro-Pulmonares, Endoscopista Torácico (Broncoscopia intervencionista y Toracoscopia Avanzada VATS y Uniportal) Cirugía Torácica No Cardiaca. Mi misión es ofrecer diagnóstico, tratamiento y paliación a pacientes que sufren de enfermedades respiratorias que requieren Cirugía.',
        reconocimientos: [
          'Certificado por en Consejo Nacional de Cirugía del Tórax',
          'Ex Jefe de la División de Cirugía de Tórax de la Sociedad Mexicana de Neumología y Cirugía de Tórax',
          'Actual Tesorero de la Sociedad Mexicana de Cirujanos Torácicos Generales',
          'Jefe de Cirugía de Tórax del Hospital General de México Dr. Eduardo Liceaga'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
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
        id: 'dr_omar_marroquin_herrera_cirugia',
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
        certificaciones: ['Egresado de la BUAP como médico general', 'Especialidad en cirugía General CMN MAC IMSS Puebla'],
        whatsapp: '2381106342',
        hasDetailedProfile: true,
        formacion: 'Egresado de la BUAP como médico general, Especialidad en cirugía General CMN MAC IMSS Puebla',
        especialidades: ['Cirugía General'],
        slug: 'dr-jose-luis-hernandez-aguilar',
        mision: 'Brindar atención médica excepcional a mis pacientes, especializándome en el tratamiento y resolución de enfermedades que requieren procedimientos quirúrgicos. Mi compromiso es ofrecer cuidados de alta calidad, utilizando técnicas avanzadas y un enfoque humano, para mejorar la salud y el bienestar de cada paciente que confía en mi experiencia médica.',
        reconocimientos: [
          'Cómo participantes de cirugías extramuros IMSS Oaxaca y de cirugías extramuros del sector salud Puebla'
        ],
        areasAtencion: [
          'Hernias',
          'Cálculos vesiculares',
          'Apéndice',
          'Tumores de partes blandas',
          'Tumores del tubo digestivo',
          'Lesiones por trauma en tórax y abdomen'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648',
          '2381278192'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital', 'Celular']
        }
      },
      {
        id: 'dr_miguel_parra_flores',
        nombre: 'Dr. Miguel Parra Flores',
        titulo: 'Cirujano General',
        experiencia: '20 años de experiencia',
        certificaciones: ['Egresado de la UNAM', 'Aprobado por el consejo de Cirugía'],
        whatsapp: '2225360991',
        hasDetailedProfile: true,
        formacion: 'Egresado de la UNAM',
        especialidades: ['Cirugía General'],
        slug: 'dr-miguel-parra-flores',
        mision: 'Proporcionar una atención médica especializada y compasiva a mis pacientes, enfocándome en el tratamiento y resolución de problemas que requieren cirugía, como pie diabético, varices, hernias, apéndice, vesícula y condiciones del sistema digestivo. Mi objetivo es mejorar la calidad de vida de mis pacientes mediante procedimientos quirúrgicos seguros y efectivos, brindando un cuidado integral y personalizado que promueva la recuperación y bienestar general.',
        reconocimientos: [
          'Aprobado por el consejo de Cirugía'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
      },
      {
        id: 'dr_quintin_gonzalez_contreras',
        nombre: 'Dr. Quintín Héctor González Contreras',
        titulo: 'Especialista en Cirugía General, Cirugía gastrointestinal y Coloproctología',
        experiencia: '25 años de experiencia',
        certificaciones: ['Universidad Autónoma del Estado de México (UAEM)', 'Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán'],
        whatsapp: '2381680976',
        hasDetailedProfile: true,
        formacion: 'Egresó como Médico Cirujano de la Universidad Autónoma del Estado de México (UAEM) para posteriormente realizar la Especialidad en Cirugía General en el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán',
        especialidades: ['Cirugía General', 'Cirugía Gastrointestinal', 'Coloproctología'],
        slug: 'dr-quintin-gonzalez-contreras',
        mision: 'Especialista en Cirugía General, Cirugía gastrointestinal y Coloproctología posicionado como uno de los mejores Cirujanos en la Ciudad de México.',
        reconocimientos: [
          'Miembro. Sociedad Médica del Instituto Nacional de Nutrición y Ciencias Médicas "Salvador Zubirán"',
          'Miembro. Phi Beta Delta International Honor Society for Scholar Nu Chapter',
          'Socio Activo y Fundador. Colegio Mexicano de Especialista en Coloproctología',
          'Miembro. International Society of University Colon and Rectal Surgeons',
          'Miembro. American Society of Colon and Rectal Surgeons',
          'Socio. Sociedad Médica del Hospital Ángeles del Pedregal',
          'Socio. Asociación Mexicana de Cirugía Endoscópica AC',
          'Socio Activo. Asociación Mexicana de Cirugía General',
          'Socio Adscrito. Sociedad Mexicana de Coloproctología',
          'Miembro. Asociación Mexicana de Gastroenterología',
          'Miembro. Sociedad Médica del Hospital ABC',
          'Miembro. Academia Nacional de Medicina',
          'Miembro. Academia Mexicana de Cirugía',
          'Socio Activo. Sociedad Médica de Medica Sur',
          'Miembro. Comité Científico. Asociación Mexicana de Cirugía Endoscópica',
          'Miembro. Sociedad Médica HMG',
          'Miembro. Sociedad Mexicana de Cirugía del Aparato Digestivo',
          'Miembro. Fellow American College of Surgeons'
        ],
        areasAtencion: [
          'Hemorroides',
          'Cirugía del Cáncer de Colon y Recto',
          'Cirugía de la Hernia Inguinal',
          'Cirugía de la Hernia Umbilical',
          'Cirugía Laparoscópica',
          'Cirugía Hemorroides'
        ],
        telefonosAdicionales: [
          '2383824819',
          '2383829648'
        ],
        contactoTitulos: {
          whatsapp: 'Celular y Mensaje WhatsApp',
          adicionales: ['Hospital', 'Hospital']
        }
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


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
      'Certificados médicos'
    ],
    doctores: [
      {
        id: 'dra_karina_pena_tello',
        nombre: 'Dra. Karina Peña Tello',
        titulo: 'Médico General',
        experiencia: '15 años de experiencia',
        certificaciones: ['Universidad Autónoma de Puebla', 'Medicina General'],
        whatsapp: '2381338026',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Universidad Autónoma de Puebla',
        especialidades: ['Medicina General', 'Atención Primaria'],
        slug: 'dra-karina-pena-tello'
      },
      {
        id: 'dr_bernardo_velasco_olalde',
        nombre: 'Dr. Bernardo Velasco Olalde',
        titulo: 'Médico General',
        experiencia: '20 años de experiencia',
        certificaciones: ['BUAP', 'Especialista en Diabetes', 'Especialista en Hipertensión'],
        whatsapp: '2381022504',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Benemérita Universidad Autónoma de Puebla (BUAP)',
        especialidades: ['Medicina General', 'Diabetes', 'Hipertensión'],
        slug: 'dr-bernardo-velasco-olalde'
      },
      {
        id: 'dr_javier_carrasco_gonzalez',
        nombre: 'Dr. Javier Carrasco González',
        titulo: 'Médico Cirujano y Partero',
        experiencia: '18 años de experiencia',
        certificaciones: ['Licenciado en Médico Cirujano y Partero'],
        whatsapp: '2381902659',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Médico Cirujano y Partero',
        especialidades: ['Medicina General', 'Cirugía Menor'],
        slug: 'dr-javier-carrasco-gonzalez'
      },
      {
        id: 'dr_gerardo_valderrama_lopez',
        nombre: 'Dr. Gerardo Antonio Valderrama López',
        titulo: 'Médico General',
        experiencia: '22 años de experiencia',
        certificaciones: ['BUAP', 'Maestría', 'Especialista en Urgencias'],
        whatsapp: '2381117877',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Benemérita Universidad Autónoma de Puebla (BUAP) con Maestría',
        especialidades: ['Medicina General', 'Medicina de Urgencias'],
        slug: 'dr-gerardo-valderrama-lopez'
      },
      {
        id: 'dr_raymundo_romero_ventura',
        nombre: 'Dr. Raymundo Romero Ventura',
        titulo: 'Médico General',
        experiencia: '35+ años de experiencia',
        certificaciones: ['Egresado 1984', 'Medicina General'],
        whatsapp: '2381300097',
        telefonoHospital: '2381234567',
        hasDetailedProfile: true,
        formacion: 'Egresado en 1984',
        especialidades: ['Medicina General', 'Medicina Familiar'],
        slug: 'dr-raymundo-romero-ventura'
      },
      {
        id: 'dr_hipolito_coyotl_cruz',
        nombre: 'Dr. Hipólito Coyotl Cruz',
        titulo: 'Médico General',
        experiencia: '12 años de experiencia',
        certificaciones: ['Medicina General'],
        telefonoHospital: '2381234567',
        hasDetailedProfile: false
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
        id: 'dr2',
        nombre: 'Dra. Ana Herrera',
        titulo: 'Especialista en Medicina Intensiva',
        experiencia: '12 años de experiencia',
        certificaciones: ['UCI Avanzada', 'Soporte Vital']
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
        id: 'dr3',
        nombre: 'Dr. Luis Ramírez',
        titulo: 'Pediatra Neonatólogo',
        experiencia: '18 años de experiencia',
        certificaciones: ['Pediatría', 'Neonatología', 'UCIN']
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
        id: 'dr4',
        nombre: 'Dr. Roberto Silva',
        titulo: 'Traumatólogo Ortopedista',
        experiencia: '20 años de experiencia',
        certificaciones: ['Ortopedia', 'Traumatología', 'Artroscopia']
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
        id: 'dr5',
        nombre: 'Dra. Patricia Vega',
        titulo: 'Especialista en Medicina de Emergencias',
        experiencia: '10 años de experiencia',
        certificaciones: ['Medicina de Emergencias', 'ACLS', 'ATLS']
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
        id: 'dr6',
        nombre: 'Dr. Miguel Torres',
        titulo: 'Neurólogo',
        experiencia: '14 años de experiencia',
        certificaciones: ['Neurología', 'Neurofisiología']
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
        id: 'dr7',
        nombre: 'Lic. Carmen López',
        titulo: 'Nutricionista Clínica',
        experiencia: '8 años de experiencia',
        certificaciones: ['Nutrición Clínica', 'Dietética']
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
        id: 'dr8',
        nombre: 'Dr. Eduardo Paz',
        titulo: 'Cardioneumólogo',
        experiencia: '16 años de experiencia',
        certificaciones: ['Cardiología', 'Neumología']
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
        id: 'dr9',
        nombre: 'Dr. Francisco Morales',
        titulo: 'Gastroenterólogo',
        experiencia: '13 años de experiencia',
        certificaciones: ['Gastroenterología', 'Endoscopia']
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
        id: 'dr10',
        nombre: 'Dra. Isabel Cruz',
        titulo: 'Nefróloga',
        experiencia: '11 años de experiencia',
        certificaciones: ['Nefrología', 'Diálisis']
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
        id: 'dr11',
        nombre: 'Dr. Andrés Gutiérrez',
        titulo: 'Neumólogo',
        experiencia: '17 años de experiencia',
        certificaciones: ['Neumología', 'Medicina Respiratoria']
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
        id: 'dr12',
        nombre: 'Dr. Manuel Sánchez',
        titulo: 'Cirujano General',
        experiencia: '22 años de experiencia',
        certificaciones: ['Cirugía General', 'Laparoscopia']
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
        id: 'dr13',
        nombre: 'Dr. José Fernández',
        titulo: 'Urólogo',
        experiencia: '19 años de experiencia',
        certificaciones: ['Urología', 'Andrología']
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
        id: 'dr14',
        nombre: 'Dra. Sofía Ruiz',
        titulo: 'Dermatóloga',
        experiencia: '9 años de experiencia',
        certificaciones: ['Dermatología', 'Dermatología Estética']
      }
    ]
  },
  {
    id: '15',
    slug: 'ginecologia',
    icon: UserCheck,
    titulo: 'Ginecología',
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
        id: 'dr15',
        nombre: 'Dra. Karina Peña Tello',
        titulo: 'Ginecóloga Obstetra',
        experiencia: '15 años de experiencia',
        certificaciones: ['Ginecología', 'Obstetricia', 'Medicina Materno Fetal']
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
        id: 'dr16',
        nombre: 'Dr. Alberto Díaz',
        titulo: 'Anestesiólogo',
        experiencia: '14 años de experiencia',
        certificaciones: ['Anestesiología', 'Dolor']
      }
    ]
  },
  {
    id: '17',
    slug: 'cirugia-plastica',
    icon: Palette,
    titulo: 'Cirugía Plástica',
    descripcion: 'Reconstrucción y cirugía estética',
    descripcionDetallada: 'Especialidad quirúrgica que se ocupa de la corrección de defectos congénitos, adquiridos, traumáticos o involutivos que requieren reparación o reposición.',
    servicios: [
      'Cirugía reconstructiva',
      'Cirugía estética',
      'Quemaduras',
      'Microsirugía',
      'Rejuvenecimiento facial'
    ],
    doctores: [
      {
        id: 'dr17',
        nombre: 'Dr. Ricardo Paredes',
        titulo: 'Cirujano Plástico',
        experiencia: '16 años de experiencia',
        certificaciones: ['Cirugía Plástica', 'Cirugía Reconstructiva']
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
        id: 'dr18',
        nombre: 'Dr. Óscar Medina',
        titulo: 'Neurocirujano',
        experiencia: '21 años de experiencia',
        certificaciones: ['Neurocirugía', 'Cirugía de Columna']
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
        id: 'dr19',
        nombre: 'Dra. Lucía Campos',
        titulo: 'Oftalmóloga Pediatra',
        experiencia: '12 años de experiencia',
        certificaciones: ['Oftalmología', 'Oftalmología Pediátrica']
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

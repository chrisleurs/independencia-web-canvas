
import { Heart, Droplets, TestTube, Activity, Pill, Stethoscope, UserCheck, Zap } from 'lucide-react';

export interface Servicio {
  id: string;
  slug: string;
  titulo: string;
  descripcionCorta: string;
  descripcionCompleta: string;
  incluye: string[];
  tecnologia: string[];
  beneficios: string[];
  requisitos?: string[];
  horarios: string;
  icon: any;
  doctoresEspecialistas: string[];
  imagen?: string;
}

export const servicios: Servicio[] = [
  {
    id: '1',
    slug: 'terapia-intensiva',
    titulo: 'Terapia Intensiva / Pacientes Críticos',
    descripcionCorta: 'Atención especializada 24/7 con tecnología avanzada para pacientes en estado crítico.',
    descripcionCompleta: 'Nuestra Unidad de Terapia Intensiva cuenta con un equipo altamente capacitado y multidisciplinario de médicos intensivistas, enfermeros especializados, terapeutas respiratorios y otros profesionales de la salud. Trabajamos las 24 horas del día, los 7 días de la semana, para proporcionar un cuidado ininterrumpido y garantizar la estabilidad y recuperación de nuestros pacientes críticos.',
    incluye: [
      'Monitoreo continuo de signos vitales',
      'Ventilación mecánica avanzada',
      'Equipo multidisciplinario especializado',
      'Atención médica 24/7',
      'Tecnología de vanguardia',
      'Cuidados de enfermería especializada'
    ],
    tecnologia: [
      'Monitores multiparamétricos',
      'Ventiladores mecánicos de última generación',
      'Bombas de infusión programables',
      'Desfibriladores/Cardioversores',
      'Equipos de hemodiálisis',
      'Sistema de monitoreo central'
    ],
    beneficios: [
      'Atención inmediata ante emergencias',
      'Mayor probabilidad de recuperación',
      'Cuidado personalizado',
      'Reducción de complicaciones',
      'Comunicación constante con familiares'
    ],
    horarios: '24 horas, 365 días del año',
    icon: Heart,
    doctoresEspecialistas: [
      'Dr. Héctor Peña Carrillo',
      'Dr. Hazael Sánchez Rosales'
    ]
  },
  {
    id: '2',
    slug: 'transfusion-sanguinea',
    titulo: 'Transfusión Sanguínea',
    descripcionCorta: 'Servicio especializado en transfusiones sanguíneas con los más altos estándares de seguridad.',
    descripcionCompleta: 'En esta área, nos preocupamos por mantener un suministro adecuado de sangre y productos sanguíneos para satisfacer las necesidades de nuestros pacientes. Trabajamos en coordinación con bancos de sangre y donantes voluntarios para garantizar la disponibilidad de sangre de diferentes tipos y componentes, como glóbulos rojos, plasma y plaquetas.',
    incluye: [
      'Evaluación pre-transfusional completa',
      'Tipificación y compatibilidad sanguínea',
      'Monitoreo durante la transfusión',
      'Componentes sanguíneos especializados',
      'Protocolos de seguridad estrictos'
    ],
    tecnologia: [
      'Banco de sangre certificado',
      'Equipos de aféresis',
      'Sistemas de almacenamiento refrigerado',
      'Analizadores hematológicos',
      'Pruebas cruzadas automatizadas'
    ],
    beneficios: [
      'Reposición segura de componentes sanguíneos',
      'Tratamiento de anemias severas',
      'Soporte en cirugías complejas',
      'Atención de emergencias hemorrágicas'
    ],
    requisitos: [
      'Evaluación médica previa',
      'Pruebas de compatibilidad',
      'Consentimiento informado'
    ],
    horarios: '24 horas para emergencias, 8:00 AM - 6:00 PM programadas',
    icon: Droplets,
    doctoresEspecialistas: [
      'Dr. Emilio Gerardo Montoro Hidalgo',
      'Dr. Bernardo Velasco Olalde'
    ]
  },
  {
    id: '3',
    slug: 'laboratorios-medicos',
    titulo: 'Laboratorios Médicos',
    descripcionCorta: 'Análisis clínicos y diagnósticos de laboratorio con tecnología de vanguardia.',
    descripcionCompleta: 'El área de Laboratorios Médicos en nuestro hospital es una parte fundamental de nuestra institución dedicada al análisis y diagnóstico de muestras biológicas para ayudar a los médicos a establecer diagnósticos precisos y proporcionar el tratamiento adecuado a nuestros pacientes.',
    incluye: [
      'Análisis de sangre completos',
      'Estudios microbiológicos',
      'Pruebas de química clínica',
      'Análisis de orina y heces',
      'Marcadores tumorales',
      'Perfil hormonal'
    ],
    tecnologia: [
      'Analizadores automatizados',
      'Equipos de inmunofluorescencia',
      'Microscopios de alta resolución',
      'Sistemas de cultivo bacteriano',
      'Equipos de PCR en tiempo real'
    ],
    beneficios: [
      'Resultados rápidos y precisos',
      'Diagnósticos tempranos',
      'Monitoreo de tratamientos',
      'Detección de enfermedades',
      'Seguimiento médico continuo'
    ],
    requisitos: [
      'Ayuno según el tipo de examen',
      'Indicación médica',
      'Preparación específica según análisis'
    ],
    horarios: 'Lunes a Viernes 6:00 AM - 8:00 PM, Sábados 7:00 AM - 2:00 PM',
    icon: TestTube,
    doctoresEspecialistas: [
      'Dr. Javier Carrasco González',
      'Dr. Gerardo Antonio Valderrama López'
    ]
  },
  {
    id: '4',
    slug: 'fisioterapia',
    titulo: 'Fisioterapia',
    descripcionCorta: 'Rehabilitación física especializada para recuperar movilidad y funcionalidad.',
    descripcionCompleta: 'Contamos con un equipo de fisioterapeutas altamente capacitados y profesionales en terapia física que utilizan técnicas y enfoques terapéuticos basados en evidencia para ayudar a los pacientes a recuperar su movilidad, reducir el dolor, mejorar la fuerza muscular y recuperar la funcionalidad después de una lesión o cirugía.',
    incluye: [
      'Evaluación funcional completa',
      'Terapia manual especializada',
      'Ejercicios terapéuticos',
      'Electroterapia',
      'Rehabilitación post-quirúrgica',
      'Educación al paciente'
    ],
    tecnologia: [
      'Equipos de electroterapia',
      'Ultrasonido terapéutico',
      'Láser de baja intensidad',
      'Equipos de mecanoterapia',
      'Gimnasio terapéutico'
    ],
    beneficios: [
      'Reducción del dolor',
      'Mejora de la movilidad',
      'Fortalecimiento muscular',
      'Prevención de lesiones',
      'Aceleración de la recuperación'
    ],
    horarios: 'Lunes a Viernes 7:00 AM - 7:00 PM, Sábados 8:00 AM - 1:00 PM',
    icon: Activity,
    doctoresEspecialistas: [
      'Dr. Cesar González Martínez',
      'Dr. Arturo Domínguez Millan'
    ]
  },
  {
    id: '5',
    slug: 'farmacia',
    titulo: 'Farmacia Hospitalaria',
    descripcionCorta: 'Servicio farmacéutico integral con medicamentos especializados y atención personalizada.',
    descripcionCompleta: 'Contamos con un equipo de farmacéuticos altamente capacitados y profesionales en farmacia que trabajan en estrecha colaboración con médicos y enfermeras para asegurarse de que cada paciente reciba el medicamento adecuado, en la dosis correcta y en el momento oportuno. Además contamos con todo el medicamento especializado y material que se necesite.',
    incluye: [
      'Dispensación de medicamentos',
      'Consulta farmacéutica',
      'Seguimiento farmacoterapéutico',
      'Medicamentos especializados',
      'Material médico quirúrgico',
      'Atención 24/7'
    ],
    tecnologia: [
      'Sistema de dispensación automatizado',
      'Base de datos de interacciones',
      'Control de inventarios',
      'Almacenamiento controlado',
      'Trazabilidad de medicamentos'
    ],
    beneficios: [
      'Seguridad en la medicación',
      'Asesoría especializada',
      'Disponibilidad inmediata',
      'Control de calidad',
      'Educación al paciente'
    ],
    horarios: '24 horas, 365 días del año',
    icon: Pill,
    doctoresEspecialistas: [
      'Dr. Hipólito Coyotl Cruz',
      'Dra. Karina Peña Tello'
    ]
  },
  {
    id: '6',
    slug: 'endoscopia-broncoscopia',
    titulo: 'Endoscopia y Broncoscopia',
    descripcionCorta: 'Procedimientos endoscópicos avanzados para diagnóstico y tratamiento.',
    descripcionCompleta: 'El área de Endoscopia y Broncoscopia en nuestro hospital es una sección especializada que ofrece servicios avanzados de diagnóstico y tratamiento mediante procedimientos endoscópicos y broncoscópicos.',
    incluye: [
      'Endoscopia digestiva alta y baja',
      'Broncoscopia diagnóstica y terapéutica',
      'Procedimientos ambulatorios',
      'Sedación consciente',
      'Biopsias especializadas'
    ],
    tecnologia: [
      'Endoscopios de alta definición',
      'Broncoscopios flexibles',
      'Sistema de video digital',
      'Equipos de biopsia',
      'Monitoreo anestésico'
    ],
    beneficios: [
      'Diagnóstico preciso',
      'Procedimientos mínimamente invasivos',
      'Recuperación rápida',
      'Detección temprana de patologías',
      'Tratamiento inmediato'
    ],
    requisitos: [
      'Ayuno de 8-12 horas',
      'Evaluación pre-anestésica',
      'Consentimiento informado',
      'Acompañante mayor de edad'
    ],
    horarios: 'Lunes a Viernes 8:00 AM - 4:00 PM',
    icon: Stethoscope,
    doctoresEspecialistas: [
      'Dr. Virgilio Marroquín Jiménez',
      'Dr. Benito Vargas Ábrego'
    ]
  },
  {
    id: '7',
    slug: 'consulta-externa',
    titulo: 'Consulta Externa',
    descripcionCorta: 'Atención médica ambulatoria con especialistas en diversas áreas.',
    descripcionCompleta: 'Aquí, podrás recibir diagnósticos precisos, tratamientos efectivos y orientación experta para cualquier inquietud médica que puedas tener. Nuestras instalaciones están equipadas con tecnología de vanguardia, lo que nos permite ofrecerte una atención de primera clase en un ambiente cómodo y seguro.',
    incluye: [
      'Consultas especializadas',
      'Diagnóstico integral',
      'Seguimiento médico',
      'Referencia a otros servicios',
      'Medicina preventiva',
      'Atención multidisciplinaria'
    ],
    tecnologia: [
      'Expediente electrónico',
      'Equipos de diagnóstico',
      'Telemedicina',
      'Sistema de citas en línea',
      'Laboratorio integrado'
    ],
    beneficios: [
      'Atención personalizada',
      'Diagnóstico oportuno',
      'Tratamiento integral',
      'Seguimiento continuo',
      'Medicina preventiva'
    ],
    horarios: 'Lunes a Viernes 8:00 AM - 8:00 PM, Sábados 8:00 AM - 2:00 PM',
    icon: UserCheck,
    doctoresEspecialistas: [
      'Dra. Karina Peña Tello',
      'Dr. Emilio Gerardo Montoro Hidalgo',
      'Dr. Bernardo Velasco Olalde'
    ]
  },
  {
    id: '8',
    slug: 'colocacion-marcapasos',
    titulo: 'Colocación de Marcapasos',
    descripcionCorta: 'Procedimiento especializado para la implantación de marcapasos cardíacos.',
    descripcionCompleta: 'En el área de Colocación de Marcapasos, nos enfocamos en brindar una atención de alta calidad y centrada en el paciente. Antes del procedimiento, nuestros especialistas evalúan detalladamente la salud cardíaca del paciente y explican el proceso de la colocación del marcapasos, respondiendo a todas sus preguntas y preocupaciones.',
    incluye: [
      'Evaluación cardiológica completa',
      'Implantación de marcapasos',
      'Monitoreo post-procedimiento',
      'Programación del dispositivo',
      'Seguimiento a largo plazo',
      'Educación al paciente'
    ],
    tecnologia: [
      'Marcapasos de última generación',
      'Fluoroscopia digital',
      'Monitoreo telemetría',
      'Programadores especializados',
      'Quirófano especializado'
    ],
    beneficios: [
      'Regularización del ritmo cardíaco',
      'Mejora de la calidad de vida',
      'Prevención de complicaciones',
      'Monitoreo remoto',
      'Procedimiento mínimamente invasivo'
    ],
    requisitos: [
      'Evaluación cardiológica previa',
      'Estudios de imagen',
      'Laboratorios pre-operatorios',
      'Ayuno de 8 horas',
      'Consentimiento informado'
    ],
    horarios: 'Programado de Lunes a Viernes 8:00 AM - 4:00 PM',
    icon: Zap,
    doctoresEspecialistas: [
      'Dr. Héctor Peña Carrillo'
    ]
  }
];

export const getServicioBySlug = (slug: string): Servicio | undefined => {
  return servicios.find(servicio => servicio.slug === slug);
};

export const getAllServicios = (): Servicio[] => {
  return servicios;
};

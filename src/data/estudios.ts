
import { 
  Activity, 
  Heart, 
  Brain, 
  Zap, 
  Eye, 
  Microscope, 
  X, 
  Monitor,
  Stethoscope,
  Scan,
  CircuitBoard,
  Camera
} from 'lucide-react';

export interface Estudio {
  id: string;
  titulo: string;
  slug: string;
  descripcion: string;
  descripcionDetallada: string;
  icon: any;
  categoria: 'laboratorio' | 'imagenologia' | 'cardiologia' | 'neurologia' | 'ultrasonido';
  duracion: string;
  preparacion: string[];
  precio?: string;
  disponibilidad: string;
  beneficios: string[];
  whatsappMessage?: string;
}

export const estudios: Estudio[] = [
  {
    id: 'hemograma-completo',
    titulo: 'Hemograma Completo',
    slug: 'hemograma-completo',
    descripcion: 'Análisis completo de la sangre para evaluar el estado general de salud',
    descripcionDetallada: 'El hemograma completo es uno de los estudios más importantes que permite evaluar los componentes celulares de la sangre: glóbulos rojos, glóbulos blancos y plaquetas. Proporciona información crucial sobre posibles infecciones, anemias, problemas de coagulación y otras condiciones de salud.',
    icon: Microscope,
    categoria: 'laboratorio',
    duracion: '30 minutos',
    preparacion: [
      'Ayuno de 8-12 horas',
      'No consumir alcohol 24 horas antes',
      'Suspender medicamentos según indicación médica',
      'Traer orden médica'
    ],
    disponibilidad: 'Lunes a Sábado: 7:00 AM - 10:00 AM',
    beneficios: [
      'Detección temprana de anemias',
      'Identificación de infecciones',
      'Evaluación del sistema inmunológico',
      'Control de tratamientos médicos',
      'Diagnóstico de trastornos sanguíneos'
    ],
    whatsappMessage: 'Hola, me gustaría agendar un Hemograma Completo. ¿Cuál es la disponibilidad?'
  },
  {
    id: 'quimica-sanguinea',
    titulo: 'Química Sanguínea',
    slug: 'quimica-sanguinea',
    descripcion: 'Evaluación de glucosa, colesterol, triglicéridos y función renal',
    descripcionDetallada: 'La química sanguínea es un conjunto de pruebas que evalúa el funcionamiento de diferentes órganos y sistemas del cuerpo, incluyendo riñones, hígado, páncreas y metabolismo de grasas.',
    icon: Activity,
    categoria: 'laboratorio',
    duracion: '45 minutos',
    preparacion: [
      'Ayuno estricto de 12 horas',
      'Solo agua permitida durante el ayuno',
      'No fumar antes del estudio',
      'Suspender suplementos vitamínicos 24 horas antes'
    ],
    disponibilidad: 'Lunes a Sábado: 7:00 AM - 9:00 AM',
    beneficios: [
      'Detección de diabetes',
      'Evaluación de riesgo cardiovascular',
      'Control de función renal',
      'Monitoreo de función hepática',
      'Seguimiento de tratamientos'
    ],
    whatsappMessage: 'Hola, necesito realizarme una Química Sanguínea. ¿Podrían darme información sobre horarios?'
  },
  {
    id: 'rayos-x',
    titulo: 'Rayos X',
    slug: 'rayos-x',
    descripcion: 'Estudios radiológicos para diagnóstico de fracturas, infecciones y más',
    descripcionDetallada: 'Los rayos X son estudios de imagen que utilizan radiación electromagnética para crear imágenes del interior del cuerpo. Son especialmente útiles para evaluar huesos, articulaciones, pulmones y detectar fracturas.',
    icon: X,
    categoria: 'imagenologia',
    duracion: '15-30 minutos',
    preparacion: [
      'Retirar objetos metálicos',
      'Usar bata hospitalaria',
      'Informar sobre embarazo',
      'Seguir indicaciones del técnico'
    ],
    disponibilidad: 'Lunes a Domingo: 24 horas',
    beneficios: [
      'Diagnóstico rápido de fracturas',
      'Detección de neumonías',
      'Evaluación de articulaciones',
      'Control post-quirúrgico',
      'Diagnóstico de condiciones torácicas'
    ],
    whatsappMessage: 'Hola, necesito realizarme unos Rayos X. ¿Están disponibles las 24 horas?'
  },
  {
    id: 'tomografia',
    titulo: 'Tomografía',
    slug: 'tomografia',
    descripcion: 'Estudios de alta resolución para diagnóstico detallado',
    descripcionDetallada: 'La tomografía computarizada (TAC) utiliza rayos X y procesamiento computarizado para crear imágenes detalladas de cortes transversales del cuerpo.',
    icon: Scan,
    categoria: 'imagenologia',
    duracion: '30-60 minutos',
    preparacion: [
      'Ayuno de 4-6 horas si requiere contraste',
      'Retirar objetos metálicos',
      'Informar sobre alergias',
      'Traer estudios previos'
    ],
    disponibilidad: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    beneficios: [
      'Diagnóstico preciso de lesiones',
      'Detección de tumores',
      'Evaluación de órganos internos',
      'Planificación quirúrgica',
      'Seguimiento de tratamientos'
    ],
    whatsappMessage: 'Hola, me gustaría agendar una Tomografía. ¿Qué preparación necesito?'
  },
  {
    id: 'ultrasonido',
    titulo: 'Ultrasonido',
    slug: 'ultrasonido',
    descripcion: 'Estudios no invasivos con ondas de sonido de alta frecuencia',
    descripcionDetallada: 'El ultrasonido utiliza ondas sonoras de alta frecuencia para crear imágenes en tiempo real de órganos internos, tejidos blandos y estructuras corporales.',
    icon: Monitor,
    categoria: 'ultrasonido',
    duracion: '30-45 minutos',
    preparacion: [
      'Ayuno de 8 horas para abdomen',
      'Vejiga llena para pelvis',
      'Ropa cómoda y holgada',
      'Traer gel si es indicado'
    ],
    disponibilidad: 'Lunes a Sábado: 8:00 AM - 5:00 PM',
    beneficios: [
      'Seguimiento de embarazo',
      'Evaluación de órganos abdominales',
      'Detección de cálculos',
      'Estudio seguro sin radiación',
      'Diagnóstico en tiempo real'
    ],
    whatsappMessage: 'Hola, necesito un Ultrasonido. ¿Podrían informarme sobre la preparación?'
  },
  {
    id: 'electrocardiograma',
    titulo: 'Electrocardiograma (ECG)',
    slug: 'electrocardiograma',
    descripcion: 'Evaluación de la actividad eléctrica del corazón',
    descripcionDetallada: 'El electrocardiograma registra la actividad eléctrica del corazón para detectar arritmias, infartos, problemas de conducción y otras condiciones cardíacas.',
    icon: Heart,
    categoria: 'cardiologia',
    duracion: '15-20 minutos',
    preparacion: [
      'No aplicar cremas en el pecho',
      'Usar ropa cómoda',
      'Evitar ejercicio intenso antes',
      'Informar sobre medicamentos cardíacos'
    ],
    disponibilidad: 'Lunes a Domingo: 24 horas',
    beneficios: [
      'Detección de arritmias',
      'Diagnóstico de infartos',
      'Evaluación pre-quirúrgica',
      'Seguimiento de tratamientos',
      'Detección de problemas de conducción'
    ],
    whatsappMessage: 'Hola, me gustaría realizarme un Electrocardiograma. ¿Está disponible hoy?'
  },
  {
    id: 'ecocardiograma',
    titulo: 'Ecocardiograma',
    slug: 'ecocardiograma',
    descripcion: 'Ultrasonido especializado del corazón para evaluar estructura y función',
    descripcionDetallada: 'El ecocardiograma utiliza ultrasonido para evaluar la estructura y función del corazón, incluyendo las válvulas cardíacas, el músculo cardíaco y el flujo sanguíneo.',
    icon: Stethoscope,
    categoria: 'cardiologia',
    duracion: '45-60 minutos',
    preparacion: [
      'No requiere ayuno',
      'Usar ropa cómoda de dos piezas',
      'Traer estudios cardíacos previos',
      'Continuar medicamentos habituales'
    ],
    disponibilidad: 'Lunes a Viernes: 9:00 AM - 4:00 PM',
    beneficios: [
      'Evaluación de válvulas cardíacas',
      'Diagnóstico de insuficiencia cardíaca',
      'Detección de problemas congénitos',
      'Seguimiento post-infarto',
      'Evaluación de función ventricular'
    ],
    whatsappMessage: 'Hola, necesito realizarme un Ecocardiograma. ¿Podrían darme una cita?'
  },
  {
    id: 'electroencefalograma',
    titulo: 'Electroencefalograma (EEG)',
    slug: 'electroencefalograma',
    descripcion: 'Evaluación de la actividad eléctrica cerebral',
    descripcionDetallada: 'El electroencefalograma registra la actividad eléctrica del cerebro para diagnosticar epilepsia, trastornos del sueño, problemas neurológicos y evaluar la función cerebral.',
    icon: Brain,
    categoria: 'neurologia',
    duracion: '60-90 minutos',
    preparacion: [
      'Cabello limpio y seco',
      'No usar gel o aceites',
      'Dormir normal la noche anterior',
      'Traer lista de medicamentos'
    ],
    disponibilidad: 'Lunes a Viernes: 9:00 AM - 3:00 PM',
    beneficios: [
      'Diagnóstico de epilepsia',
      'Evaluación de convulsiones',
      'Detección de problemas neurológicos',
      'Seguimiento de tratamientos',
      'Evaluación de función cerebral'
    ],
    whatsappMessage: 'Hola, me gustaría agendar un Electroencefalograma. ¿Qué preparación necesito?'
  }
];

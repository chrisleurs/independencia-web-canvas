
-- Crear tabla de especialidades
CREATE TABLE public.especialidades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  descripcion TEXT NOT NULL,
  descripcion_detallada TEXT,
  icon_name TEXT NOT NULL,
  servicios TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Crear tabla de doctores
CREATE TABLE public.doctores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  experiencia TEXT,
  foto TEXT,
  whatsapp TEXT,
  certificaciones TEXT[],
  has_detailed_profile BOOLEAN DEFAULT false,
  biografia TEXT,
  educacion TEXT[],
  logros TEXT[],
  horarios_atencion TEXT,
  ubicacion_consultorio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Crear tabla de servicios
CREATE TABLE public.servicios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  descripcion_corta TEXT NOT NULL,
  descripcion_completa TEXT NOT NULL,
  incluye TEXT[],
  tecnologia TEXT[],
  beneficios TEXT[],
  requisitos TEXT[],
  horarios TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  imagen TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Crear tabla de relación doctores-especialidades (muchos a muchos)
CREATE TABLE public.doctor_especialidades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID REFERENCES public.doctores(id) ON DELETE CASCADE,
  especialidad_id UUID REFERENCES public.especialidades(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(doctor_id, especialidad_id)
);

-- Crear tabla de relación doctores-servicios (muchos a muchos)
CREATE TABLE public.doctor_servicios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id UUID REFERENCES public.doctores(id) ON DELETE CASCADE,
  servicio_id UUID REFERENCES public.servicios(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(doctor_id, servicio_id)
);

-- Habilitar Row Level Security (por ahora público para lectura)
ALTER TABLE public.especialidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.servicios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctor_especialidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doctor_servicios ENABLE ROW LEVEL SECURITY;

-- Crear políticas de lectura pública
CREATE POLICY "Anyone can read especialidades" ON public.especialidades FOR SELECT USING (true);
CREATE POLICY "Anyone can read doctores" ON public.doctores FOR SELECT USING (true);
CREATE POLICY "Anyone can read servicios" ON public.servicios FOR SELECT USING (true);
CREATE POLICY "Anyone can read doctor_especialidades" ON public.doctor_especialidades FOR SELECT USING (true);
CREATE POLICY "Anyone can read doctor_servicios" ON public.doctor_servicios FOR SELECT USING (true);

-- Crear bucket para fotos de doctores
INSERT INTO storage.buckets (id, name, public) VALUES ('doctor-photos', 'doctor-photos', true);

-- Crear política para el bucket de fotos
CREATE POLICY "Anyone can view doctor photos" ON storage.objects FOR SELECT USING (bucket_id = 'doctor-photos');

-- Crear índices para mejorar performance
CREATE INDEX idx_especialidades_slug ON public.especialidades(slug);
CREATE INDEX idx_doctores_slug ON public.doctores(slug);
CREATE INDEX idx_servicios_slug ON public.servicios(slug);
CREATE INDEX idx_doctor_especialidades_doctor_id ON public.doctor_especialidades(doctor_id);
CREATE INDEX idx_doctor_especialidades_especialidad_id ON public.doctor_especialidades(especialidad_id);
CREATE INDEX idx_doctor_servicios_doctor_id ON public.doctor_servicios(doctor_id);
CREATE INDEX idx_doctor_servicios_servicio_id ON public.doctor_servicios(servicio_id);

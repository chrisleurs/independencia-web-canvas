-- Agregar las columnas faltantes a la tabla doctores
ALTER TABLE public.doctores 
ADD COLUMN IF NOT EXISTS telefono_hospital text,
ADD COLUMN IF NOT EXISTS telefonos_adicionales text[],
ADD COLUMN IF NOT EXISTS mision text,
ADD COLUMN IF NOT EXISTS areas_atencion text[],
ADD COLUMN IF NOT EXISTS formacion_detallada text,
ADD COLUMN IF NOT EXISTS reconocimientos text[],
ADD COLUMN IF NOT EXISTS horario_detallado text;
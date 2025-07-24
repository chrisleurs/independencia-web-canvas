
-- Eliminar duplicado de Dra. Karina Peña Tello
-- Primero, identificar los registros duplicados
WITH duplicados AS (
  SELECT 
    id, 
    nombre, 
    created_at,
    ROW_NUMBER() OVER (PARTITION BY nombre ORDER BY created_at ASC) as rn
  FROM doctores 
  WHERE nombre = 'Dra. Karina Peña Tello'
)
-- Eliminar el registro más reciente (mantener el más antiguo)
DELETE FROM doctores 
WHERE id IN (
  SELECT id FROM duplicados WHERE rn > 1
);

-- También limpiar las relaciones en doctor_especialidades para el registro eliminado
DELETE FROM doctor_especialidades 
WHERE doctor_id NOT IN (SELECT id FROM doctores);

-- Verificar que solo quede un registro
SELECT nombre, COUNT(*) as total 
FROM doctores 
WHERE nombre = 'Dra. Karina Peña Tello' 
GROUP BY nombre;

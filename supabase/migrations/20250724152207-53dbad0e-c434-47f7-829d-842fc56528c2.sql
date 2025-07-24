
-- FASE 1: DETECTAR TODOS LOS DUPLICADOS
-- Consulta para identificar doctores duplicados por nombre exacto
SELECT 
    nombre,
    COUNT(*) as total_duplicados,
    STRING_AGG(id::text, ', ') as ids_duplicados,
    STRING_AGG(created_at::text, ', ') as fechas_creacion
FROM doctores 
GROUP BY nombre 
HAVING COUNT(*) > 1
ORDER BY COUNT(*) DESC;

-- FASE 2: IDENTIFICAR DUPLICADOS Y CONSERVAR EL MEJOR
-- Crear tabla temporal con los doctores a conservar
WITH doctores_rankeados AS (
    SELECT 
        id,
        nombre,
        created_at,
        has_detailed_profile,
        CASE 
            WHEN experiencia IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN horario_detallado IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN biografia IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN mision IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN telefono_hospital IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN whatsapp IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN certificaciones IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN educacion IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN logros IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN areas_atencion IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN reconocimientos IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN formacion_detallada IS NOT NULL THEN 1 ELSE 0 END +
            CASE WHEN telefonos_adicionales IS NOT NULL THEN 1 ELSE 0 END
        AS campos_completados,
        ROW_NUMBER() OVER (
            PARTITION BY nombre 
            ORDER BY 
                -- Prioridad 1: Más campos completados
                (CASE 
                    WHEN experiencia IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN horario_detallado IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN biografia IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN mision IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN telefono_hospital IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN whatsapp IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN certificaciones IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN educacion IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN logros IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN areas_atencion IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN reconocimientos IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN formacion_detallada IS NOT NULL THEN 1 ELSE 0 END +
                    CASE WHEN telefonos_adicionales IS NOT NULL THEN 1 ELSE 0 END
                ) DESC,
                -- Prioridad 2: Perfil detallado
                has_detailed_profile DESC,
                -- Prioridad 3: Más reciente
                created_at DESC,
                -- Prioridad 4: ID menor (en caso de empate)
                id ASC
        ) as ranking
    FROM doctores
)
-- FASE 3: ELIMINAR DUPLICADOS
-- Primero eliminar relaciones huérfanas de doctor_especialidades
DELETE FROM doctor_especialidades 
WHERE doctor_id IN (
    SELECT id FROM doctores_rankeados WHERE ranking > 1
);

-- Luego eliminar doctores duplicados (conservar solo ranking = 1)
DELETE FROM doctores 
WHERE id IN (
    SELECT id FROM doctores_rankeados WHERE ranking > 1
);

-- VERIFICACIÓN: Contar doctores únicos restantes
SELECT 
    'Doctores únicos restantes' as resumen,
    COUNT(*) as total
FROM doctores;

-- VERIFICACIÓN: Confirmar que no hay duplicados
SELECT 
    'Verificación de duplicados' as resumen,
    COUNT(*) as total_grupos,
    SUM(CASE WHEN cnt > 1 THEN 1 ELSE 0 END) as grupos_duplicados
FROM (
    SELECT nombre, COUNT(*) as cnt
    FROM doctores 
    GROUP BY nombre
) t;

-- VERIFICACIÓN: Mostrar doctores por especialidad principales
SELECT 
    e.titulo as especialidad,
    COUNT(de.doctor_id) as total_doctores
FROM especialidades e
LEFT JOIN doctor_especialidades de ON e.id = de.especialidad_id
LEFT JOIN doctores d ON de.doctor_id = d.id
WHERE e.slug IN ('medicina-general', 'cardiologia', 'pediatria', 'ginecologia-obstetricia', 'traumatologia-ortopedia')
GROUP BY e.titulo, e.slug
ORDER BY e.titulo;

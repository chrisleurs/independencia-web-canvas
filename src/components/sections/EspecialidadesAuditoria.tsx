
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEspecialidades } from '@/hooks/useEspecialidades';
import { useDoctores } from '@/hooks/useDoctores';
import { CheckCircle, XCircle, AlertCircle, Users } from 'lucide-react';

const EspecialidadesAuditoria = () => {
  const { data: especialidades, isLoading: especialidadesLoading } = useEspecialidades();
  const { data: doctores, isLoading: doctoresLoading } = useDoctores();

  // Lista completa de especialidades requeridas
  const especialidadesRequeridas = [
    { id: 1, titulo: 'Medicina General', slug: 'medicina-general' },
    { id: 2, titulo: 'Cardiología', slug: 'cardiologia' },
    { id: 3, titulo: 'Ginecología y Obstetricia', slug: 'ginecologia-obstetricia' },
    { id: 4, titulo: 'Pediatría', slug: 'pediatria' },
    { id: 5, titulo: 'Traumatología y Ortopedia', slug: 'traumatologia-ortopedia' },
    { id: 6, titulo: 'Medicina Crítica - Terapia Intensiva', slug: 'medicina-critica-terapia-intensiva' },
    { id: 7, titulo: 'Urgenciología', slug: 'urgenciologia' },
    { id: 8, titulo: 'Neurología', slug: 'neurologia' },
    { id: 9, titulo: 'Nutrición', slug: 'nutricion' },
    { id: 10, titulo: 'Cardineumología', slug: 'cardineumologia' },
    { id: 11, titulo: 'Gastroenterología', slug: 'gastroenterologia' },
    { id: 12, titulo: 'Nefrología', slug: 'nefrologia' },
    { id: 13, titulo: 'Neumología', slug: 'neumologia' },
    { id: 14, titulo: 'Cirugía General y Especializada', slug: 'cirugia-general-especializada' },
    { id: 15, titulo: 'Urología', slug: 'urologia' },
    { id: 16, titulo: 'Dermatología', slug: 'dermatologia' },
    { id: 17, titulo: 'Anestesiología', slug: 'anestesiologia' },
    { id: 18, titulo: 'Cirugía Plástica', slug: 'cirugia-plastica' },
    { id: 19, titulo: 'Neurocirugía', slug: 'neurocirugia' },
    { id: 20, titulo: 'Oftalmología Pediátrico', slug: 'oftalmologia-pediatrico' }
  ];

  const realizarAuditoria = () => {
    console.log('🔍 === AUDITORÍA COMPLETA DE ESPECIALIDADES ===');
    
    if (!especialidades || !doctores) {
      console.log('❌ No se pudieron cargar los datos');
      return;
    }

    // Especialidades actuales en BD
    const especialidadesActuales = especialidades.map(esp => ({
      titulo: esp.titulo,
      slug: esp.slug,
      id: esp.id
    }));

    console.log('📊 ESPECIALIDADES ACTUALES EN BD:', especialidadesActuales.length);
    especialidadesActuales.forEach((esp, index) => {
      console.log(`  ${index + 1}. ${esp.titulo} (slug: ${esp.slug})`);
    });

    // Verificar cuáles existen
    const existentes = [];
    const faltantes = [];

    especialidadesRequeridas.forEach(requerida => {
      const existe = especialidades.find(actual => 
        actual.titulo.toLowerCase().trim() === requerida.titulo.toLowerCase().trim() ||
        actual.slug === requerida.slug
      );
      
      if (existe) {
        existentes.push({
          ...requerida,
          bdId: existe.id,
          bdSlug: existe.slug
        });
      } else {
        faltantes.push(requerida);
      }
    });

    console.log('\n✅ ESPECIALIDADES EXISTENTES:', existentes.length);
    existentes.forEach((esp, index) => {
      console.log(`  ${index + 1}. ${esp.titulo} ✓`);
    });

    console.log('\n❌ ESPECIALIDADES FALTANTES:', faltantes.length);
    faltantes.forEach((esp, index) => {
      console.log(`  ${index + 1}. ${esp.titulo} (slug sugerido: ${esp.slug})`);
    });

    // Contar doctores por especialidad existente
    console.log('\n👥 DOCTORES POR ESPECIALIDAD EXISTENTE:');
    existentes.forEach(esp => {
      // Aquí necesitaríamos consultar la tabla doctor_especialidades
      // Por ahora mostramos estructura
      console.log(`  - ${esp.titulo}: [Requiere consulta a doctor_especialidades]`);
    });

    console.log('\n📈 RESUMEN ESTADÍSTICO:');
    console.log(`  Total requeridas: ${especialidadesRequeridas.length}`);
    console.log(`  Existentes: ${existentes.length}`);
    console.log(`  Faltantes: ${faltantes.length}`);
    console.log(`  Progreso: ${((existentes.length / especialidadesRequeridas.length) * 100).toFixed(1)}%`);
    console.log(`  Total doctores en BD: ${doctores.length}`);
  };

  if (especialidadesLoading || doctoresLoading) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-hospital-primary mx-auto mb-4"></div>
          <p className="text-lg">Cargando datos para auditoría...</p>
        </div>
      </div>
    );
  }

  if (!especialidades || !doctores) {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom text-center">
          <p className="text-lg text-red-600">Error al cargar datos para auditoría</p>
        </div>
      </div>
    );
  }

  // Calcular estadísticas
  const existentes = especialidadesRequeridas.filter(requerida => 
    especialidades.some(actual => 
      actual.titulo.toLowerCase().trim() === requerida.titulo.toLowerCase().trim() ||
      actual.slug === requerida.slug
    )
  );

  const faltantes = especialidadesRequeridas.filter(requerida => 
    !especialidades.some(actual => 
      actual.titulo.toLowerCase().trim() === requerida.titulo.toLowerCase().trim() ||
      actual.slug === requerida.slug
    )
  );

  const porcentajeCompletado = ((existentes.length / especialidadesRequeridas.length) * 100).toFixed(1);

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-hospital-primary flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              🔍 Auditoría Completa de Especialidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-hospital-light rounded-lg">
                <div className="text-3xl font-bold text-hospital-primary mb-2">
                  {especialidadesRequeridas.length}
                </div>
                <div className="text-sm text-hospital-gray">Total Requeridas</div>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {existentes.length}
                </div>
                <div className="text-sm text-green-700">Existentes</div>
              </div>
              
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {faltantes.length}
                </div>
                <div className="text-sm text-red-700">Faltantes</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Progreso</span>
                <span className="text-sm font-medium">{porcentajeCompletado}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-hospital-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${porcentajeCompletado}%` }}
                ></div>
              </div>
            </div>

            <Button onClick={realizarAuditoria} className="w-full mb-6">
              📋 Ejecutar Auditoría Completa (Ver Consola)
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Especialidades Existentes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Especialidades Existentes ({existentes.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {existentes.map((esp, index) => {
                  const actualEsp = especialidades.find(actual => 
                    actual.titulo.toLowerCase().trim() === esp.titulo.toLowerCase().trim() ||
                    actual.slug === esp.slug
                  );
                  
                  return (
                    <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">{esp.titulo}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-hospital-gray" />
                        <span className="text-xs text-hospital-gray">
                          {actualEsp?.slug || 'N/A'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Especialidades Faltantes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Especialidades Faltantes ({faltantes.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {faltantes.map((esp, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">{esp.titulo}</span>
                    </div>
                    <span className="text-xs text-red-700 font-mono">
                      {esp.slug}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Información adicional */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-hospital-primary">
              📊 Información Adicional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Especialidades en BD:</h4>
                <ul className="text-sm space-y-1">
                  {especialidades.map((esp, index) => (
                    <li key={esp.id} className="text-hospital-gray">
                      {index + 1}. {esp.titulo}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Estadísticas:</h4>
                <ul className="text-sm space-y-1">
                  <li>📋 Total doctores: {doctores.length}</li>
                  <li>🏥 Especialidades actuales: {especialidades.length}</li>
                  <li>📈 Progreso: {porcentajeCompletado}%</li>
                  <li>🎯 Meta: {especialidadesRequeridas.length} especialidades</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EspecialidadesAuditoria;

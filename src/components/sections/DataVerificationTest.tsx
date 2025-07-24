
import React from 'react';
import { useEspecialidades } from '@/hooks/useEspecialidades';
import { useDoctores, useDoctoresByEspecialidad, useEspecialidadesByDoctor } from '@/hooks/useDoctores';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DataVerificationTest = () => {
  const { data: especialidades } = useEspecialidades();
  const { data: doctores } = useDoctores();
  
  // Tomar la primera especialidad para pruebas
  const firstEspecialidad = especialidades?.[0];
  const { data: doctoresDeEspecialidad } = useDoctoresByEspecialidad(firstEspecialidad?.id || '');
  
  // Tomar el primer doctor para pruebas
  const firstDoctor = doctores?.[0];
  const { data: especialidadesDeDoctor } = useEspecialidadesByDoctor(firstDoctor?.id || '');

  const logAllData = () => {
    console.log('=== VERIFICACIÓN COMPLETA DE DATOS ===');
    console.log('🏥 Especialidades:', especialidades);
    console.log('👨‍⚕️ Doctores:', doctores);
    console.log('🔗 Doctores de primera especialidad:', doctoresDeEspecialidad);
    console.log('🔗 Especialidades de primer doctor:', especialidadesDeDoctor);
    
    console.log('\n=== RELACIONES DETECTADAS ===');
    if (firstEspecialidad && doctoresDeEspecialidad) {
      console.log(`📋 Especialidad: ${firstEspecialidad.titulo}`);
      console.log(`👥 Doctores asociados: ${doctoresDeEspecialidad.length}`);
      doctoresDeEspecialidad.forEach((doctor, index) => {
        console.log(`  ${index + 1}. ${doctor.nombre} - ${doctor.titulo}`);
      });
    }
    
    if (firstDoctor && especialidadesDeDoctor) {
      console.log(`\n👨‍⚕️ Doctor: ${firstDoctor.nombre}`);
      console.log(`📋 Especialidades asociadas: ${especialidadesDeDoctor.length}`);
      especialidadesDeDoctor.forEach((especialidad, index) => {
        console.log(`  ${index + 1}. ${especialidad.titulo}`);
      });
    }
  };

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-hospital-primary">
              🔍 Verificación de Datos y Relaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-2">📊 Resumen de Datos</h3>
                <ul className="space-y-1 text-sm">
                  <li>Especialidades: {especialidades?.length || 0}</li>
                  <li>Doctores: {doctores?.length || 0}</li>
                  <li>Doctores en primera especialidad: {doctoresDeEspecialidad?.length || 0}</li>
                  <li>Especialidades del primer doctor: {especialidadesDeDoctor?.length || 0}</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">🔗 Pruebas de Relaciones</h3>
                <ul className="space-y-1 text-sm">
                  <li>✅ useEspecialidades: {especialidades ? 'OK' : 'Loading...'}</li>
                  <li>✅ useDoctores: {doctores ? 'OK' : 'Loading...'}</li>
                  <li>✅ useDoctoresByEspecialidad: {doctoresDeEspecialidad ? 'OK' : 'Loading...'}</li>
                  <li>✅ useEspecialidadesByDoctor: {especialidadesDeDoctor ? 'OK' : 'Loading...'}</li>
                </ul>
              </div>
            </div>
            
            <Button onClick={logAllData} className="w-full">
              📋 Mostrar Todos los Datos en Consola
            </Button>
          </CardContent>
        </Card>
        
        {/* Muestra de datos en vivo */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Primera Especialidad y sus Doctores</CardTitle>
            </CardHeader>
            <CardContent>
              {firstEspecialidad ? (
                <div>
                  <h4 className="font-semibold text-hospital-primary mb-2">
                    {firstEspecialidad.titulo}
                  </h4>
                  <div className="text-sm space-y-1">
                    {doctoresDeEspecialidad?.map((doctor, index) => (
                      <div key={doctor.id} className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-hospital-accent rounded-full flex items-center justify-center text-white text-xs">
                          {index + 1}
                        </span>
                        <span>{doctor.nombre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Cargando...</p>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Primer Doctor y sus Especialidades</CardTitle>
            </CardHeader>
            <CardContent>
              {firstDoctor ? (
                <div>
                  <h4 className="font-semibold text-hospital-primary mb-2">
                    {firstDoctor.nombre}
                  </h4>
                  <div className="text-sm space-y-1">
                    {especialidadesDeDoctor?.map((especialidad, index) => (
                      <div key={especialidad.id} className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-hospital-secondary rounded-full flex items-center justify-center text-white text-xs">
                          {index + 1}
                        </span>
                        <span>{especialidad.titulo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">Cargando...</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataVerificationTest;

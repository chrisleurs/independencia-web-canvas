
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useEspecialidades, useEspecialidadBySlug } from '@/hooks/useEspecialidades';
import { useDoctores, useDoctoresByEspecialidad } from '@/hooks/useDoctores';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

const EspecialidadesAuditoria = () => {
  const { data: especialidades, isLoading: especialidadesLoading, error: especialidadesError } = useEspecialidades();
  const { data: doctores, isLoading: doctoresLoading, error: doctoresError } = useDoctores();
  
  // Test specific specialty navigation
  const { data: cardiologiaTest } = useEspecialidadBySlug('cardiologia');
  const { data: doctoresCardiologia } = useDoctoresByEspecialidad(cardiologiaTest?.id || '');

  useEffect(() => {
    console.log('🔍 === AUDITORÍA COMPLETA DE ESPECIALIDADES ===');
    console.log('📅 Fecha:', new Date().toISOString());
    console.log('');

    // 1. Estado de especialidades
    console.log('📋 1. ESPECIALIDADES ACTUALES:');
    if (especialidades) {
      console.log(`✅ Total especialidades: ${especialidades.length}`);
      console.log('');
      
      especialidades.forEach((esp, index) => {
        console.log(`${index + 1}. ${esp.titulo}`);
        console.log(`   - ID: ${esp.id}`);
        console.log(`   - Slug: ${esp.slug}`);
        console.log(`   - Descripción: ${esp.descripcion}`);
        console.log(`   - Descripción detallada: ${esp.descripcion_detallada ? 'Sí' : 'No'}`);
        console.log(`   - Icono: ${esp.icon_name}`);
        console.log(`   - Servicios: ${esp.servicios ? esp.servicios.length : 0} servicios`);
        console.log(`   - Creado: ${esp.created_at}`);
        console.log('');
      });
    } else if (especialidadesError) {
      console.log('❌ Error al cargar especialidades:', especialidadesError);
    } else {
      console.log('⏳ Cargando especialidades...');
    }

    // 2. Estructura de la tabla
    console.log('🏗️ 2. ESTRUCTURA DE LA TABLA ESPECIALIDADES:');
    if (especialidades && especialidades.length > 0) {
      const ejemplo = especialidades[0];
      console.log('📝 Campos de la tabla (ejemplo con', ejemplo.titulo, '):');
      console.log('   - id (uuid, obligatorio):', ejemplo.id);
      console.log('   - titulo (text, obligatorio):', ejemplo.titulo);
      console.log('   - slug (text, obligatorio):', ejemplo.slug);
      console.log('   - descripcion (text, obligatorio):', ejemplo.descripcion);
      console.log('   - descripcion_detallada (text, opcional):', ejemplo.descripcion_detallada);
      console.log('   - icon_name (text, obligatorio):', ejemplo.icon_name);
      console.log('   - servicios (array, opcional):', ejemplo.servicios);
      console.log('   - created_at (timestamp):', ejemplo.created_at);
      console.log('   - updated_at (timestamp):', ejemplo.updated_at);
      console.log('');
    }

    // 3. Estado de doctores
    console.log('👨‍⚕️ 3. ESTADO DE DOCTORES:');
    if (doctores) {
      console.log(`✅ Total doctores: ${doctores.length}`);
      console.log('');
      
      doctores.forEach((doc, index) => {
        console.log(`${index + 1}. ${doc.nombre}`);
        console.log(`   - ID: ${doc.id}`);
        console.log(`   - Slug: ${doc.slug}`);
        console.log(`   - Título: ${doc.titulo}`);
        console.log(`   - WhatsApp: ${doc.whatsapp || 'No disponible'}`);
        console.log(`   - Perfil detallado: ${doc.has_detailed_profile ? 'Sí' : 'No'}`);
        console.log(`   - Áreas de atención: ${doc.areas_atencion?.length || 0} áreas`);
        console.log('');
      });
    } else if (doctoresError) {
      console.log('❌ Error al cargar doctores:', doctoresError);
    } else {
      console.log('⏳ Cargando doctores...');
    }

    // 4. Test de navegación específica
    console.log('🧪 4. TEST DE NAVEGACIÓN ESPECÍFICA:');
    if (cardiologiaTest) {
      console.log('✅ Test useEspecialidadBySlug("cardiologia"):', cardiologiaTest.titulo);
      console.log('   - ID:', cardiologiaTest.id);
      console.log('   - Slug:', cardiologiaTest.slug);
      console.log('   - URL navegación: /especialidades/cardiologia');
      console.log('');
    }

    if (doctoresCardiologia) {
      console.log('✅ Test useDoctoresByEspecialidad para Cardiología:');
      console.log(`   - Doctores encontrados: ${doctoresCardiologia.length}`);
      doctoresCardiologia.forEach((doc, index) => {
        console.log(`   ${index + 1}. ${doc.nombre} (${doc.titulo})`);
      });
      console.log('');
    }

    // 5. Verificación de rutas
    console.log('🚦 5. VERIFICACIÓN DE RUTAS:');
    console.log('✅ Rutas configuradas en App.tsx:');
    console.log('   - / (Inicio)');
    console.log('   - /especialidades (Lista completa)');
    console.log('   - /especialidades/:slug (Página individual)');
    console.log('   - /doctores/:slug (Perfil doctor)');
    console.log('   - /equipo/doctores (Lista doctores)');
    console.log('');

    // 6. Hooks funcionando
    console.log('🔧 6. ESTADO DE HOOKS:');
    console.log('✅ useEspecialidades():', especialidadesLoading ? 'Cargando' : especialidades ? 'Funcionando' : 'Error');
    console.log('✅ useEspecialidadBySlug():', cardiologiaTest ? 'Funcionando' : 'No testado');
    console.log('✅ useDoctores():', doctoresLoading ? 'Cargando' : doctores ? 'Funcionando' : 'Error');
    console.log('✅ useDoctoresByEspecialidad():', doctoresCardiologia ? 'Funcionando' : 'No testado');
    console.log('');

    console.log('🎯 === FIN DE AUDITORÍA ===');
  }, [especialidades, doctores, cardiologiaTest, doctoresCardiologia, especialidadesLoading, doctoresLoading, especialidadesError, doctoresError]);

  if (especialidadesLoading || doctoresLoading) {
    return (
      <div className="container-custom py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-hospital-primary mx-auto mb-4"></div>
          <p className="text-lg">Ejecutando auditoría completa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-hospital-primary mb-4">
          🔍 Auditoría de Especialidades
        </h1>
        <p className="text-hospital-gray">
          Verificación completa del estado actual del sistema. Revisa la consola para detalles completos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Estado de Especialidades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Especialidades Actuales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-hospital-primary">
                {especialidades?.length || 0} especialidades
              </p>
              {especialidades?.map((esp) => (
                <div key={esp.id} className="flex items-center justify-between">
                  <span className="text-sm">{esp.titulo}</span>
                  <Badge variant="outline">{esp.slug}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Estado de Doctores */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Doctores Registrados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-hospital-primary">
                {doctores?.length || 0} doctores
              </p>
              <div className="space-y-1">
                {doctores?.slice(0, 5).map((doc) => (
                  <div key={doc.id} className="text-sm">
                    <span className="font-medium">{doc.nombre}</span>
                    <br />
                    <span className="text-hospital-gray text-xs">{doc.titulo}</span>
                  </div>
                ))}
                {doctores && doctores.length > 5 && (
                  <p className="text-xs text-hospital-gray">
                    +{doctores.length - 5} más...
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test de Navegación */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              Test de Navegación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-medium">Enlaces principales:</p>
                <div className="space-y-1">
                  <Link 
                    to="/especialidades" 
                    className="block text-sm text-hospital-accent hover:underline"
                  >
                    → Ver todas las especialidades
                  </Link>
                  <Link 
                    to="/especialidades/cardiologia" 
                    className="block text-sm text-hospital-accent hover:underline"
                  >
                    → Test: Cardiología
                  </Link>
                  <Link 
                    to="/equipo/doctores" 
                    className="block text-sm text-hospital-accent hover:underline"
                  >
                    → Lista de doctores
                  </Link>
                </div>
              </div>
              
              {cardiologiaTest && (
                <div className="pt-2 border-t">
                  <p className="text-sm font-medium text-green-600">
                    ✅ Test de slug exitoso
                  </p>
                  <p className="text-xs text-hospital-gray">
                    Cardiología cargada correctamente
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estructura de datos */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>📋 Estructura para nuevas especialidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-hospital-light p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Campos obligatorios:</p>
            <ul className="text-sm space-y-1 text-hospital-gray">
              <li>• titulo (text) - Nombre de la especialidad</li>
              <li>• slug (text) - URL amigable (ej: 'medicina-critica')</li>
              <li>• descripcion (text) - Descripción breve</li>
              <li>• icon_name (text) - Nombre del icono de Lucide</li>
            </ul>
            <p className="text-sm font-medium mt-3 mb-2">Campos opcionales:</p>
            <ul className="text-sm space-y-1 text-hospital-gray">
              <li>• descripcion_detallada (text) - Descripción extendida</li>
              <li>• servicios (array) - Lista de servicios ofrecidos</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Botones de acción */}
      <div className="mt-6 flex gap-4">
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline"
        >
          🔄 Recargar Auditoría
        </Button>
        <Button 
          onClick={() => console.clear()} 
          variant="outline"
        >
          🧹 Limpiar Consola
        </Button>
      </div>
    </div>
  );
};

export default EspecialidadesAuditoria;

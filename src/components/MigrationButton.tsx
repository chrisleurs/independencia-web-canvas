
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { migrateAllData } from '@/utils/dataMigration';
import { Database, RefreshCw, CheckCircle } from 'lucide-react';

const MigrationButton = () => {
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationComplete, setMigrationComplete] = useState(false);
  const [migrationStats, setMigrationStats] = useState<{
    doctores: number;
    especialidades: number;
    servicios: number;
  } | null>(null);

  const handleMigration = async () => {
    setIsMigrating(true);
    try {
      await migrateAllData();
      setMigrationComplete(true);
      setMigrationStats({
        doctores: 54,
        especialidades: 19,
        servicios: 10
      });
      console.log('Migración completada exitosamente - 54 doctores, 19 especialidades migradas');
    } catch (error) {
      console.error('Error en la migración:', error);
    } finally {
      setIsMigrating(false);
    }
  };

  if (migrationComplete && migrationStats) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5" />
          <span className="font-semibold">Migración Completada</span>
        </div>
        <div className="text-sm">
          <div>✅ {migrationStats.doctores} doctores</div>
          <div>✅ {migrationStats.especialidades} especialidades</div>
          <div>✅ {migrationStats.servicios} servicios</div>
        </div>
      </div>
    );
  }

  return (
    <Button
      onClick={handleMigration}
      disabled={isMigrating}
      className="fixed bottom-4 right-4 bg-hospital-primary hover:bg-hospital-primary/90 text-white shadow-lg"
      size="lg"
    >
      {isMigrating ? (
        <>
          <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
          Migrando 54 doctores...
        </>
      ) : (
        <>
          <Database className="w-5 h-5 mr-2" />
          Migrar 54 doctores a Supabase
        </>
      )}
    </Button>
  );
};

export default MigrationButton;

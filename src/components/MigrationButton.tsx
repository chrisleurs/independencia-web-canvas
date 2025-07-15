
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { migrateAllData } from '@/utils/dataMigration';
import { Database, RefreshCw } from 'lucide-react';

const MigrationButton = () => {
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationComplete, setMigrationComplete] = useState(false);

  const handleMigration = async () => {
    setIsMigrating(true);
    try {
      await migrateAllData();
      setMigrationComplete(true);
      console.log('Migración completada exitosamente');
    } catch (error) {
      console.error('Error en la migración:', error);
    } finally {
      setIsMigrating(false);
    }
  };

  if (migrationComplete) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          <span>Migración completada</span>
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
          Migrando datos...
        </>
      ) : (
        <>
          <Database className="w-5 h-5 mr-2" />
          Migrar datos a Supabase
        </>
      )}
    </Button>
  );
};

export default MigrationButton;

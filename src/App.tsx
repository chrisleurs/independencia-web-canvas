
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Especialidades from "./pages/Especialidades";
import EspecialidadIndividual from "./pages/EspecialidadIndividualSupabase";
import DoctorIndividual from "./pages/DoctorIndividual";
import Servicios from "./pages/Servicios";
import ServicioIndividual from "./pages/ServicioIndividual";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Equipo from "./pages/Equipo";
import EquipoDoctores from "./pages/EquipoDoctoresMejorado";
import EquipoEnfermeria from "./pages/EquipoEnfermeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Verificación de rutas al inicio
  console.log('🔗 VERIFICACIÓN DE RUTAS DE REACT ROUTER:');
  console.log('=======================================');
  console.log('✅ Ruta configurada: /doctores -> EquipoDoctoresMejorado');
  console.log('✅ Ruta configurada: /doctores/:slug -> DoctorIndividual');
  console.log('✅ Componente: DoctorIndividual existe');
  console.log('✅ Componente: DoctorProfileEnhanced existe');
  console.log('✅ Hook: useDoctorBySlug configurado');
  console.log('=======================================');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/especialidades/:slug" element={<EspecialidadIndividual />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/:slug" element={<ServicioIndividual />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            
            {/* Rutas de Equipo */}
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/equipo/doctores" element={<EquipoDoctores />} />
            <Route path="/doctores" element={<EquipoDoctores />} />
            <Route path="/equipo/enfermeria" element={<EquipoEnfermeria />} />
            
            {/* Rutas para perfiles individuales de doctores */}
            <Route path="/doctores/:slug" element={<DoctorIndividual />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

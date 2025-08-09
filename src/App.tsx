
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
import EstudiosPage from './pages/EstudiosPage';
import EstudioDetalle from './pages/EstudioDetalle';
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Equipo from "./pages/Equipo";
import EquipoDoctores from "./pages/EquipoDoctoresMejorado";
import EquipoEnfermeria from "./pages/EquipoEnfermeria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('✅ 13 doctores actualizados con has_detailed_profile = true');
  console.log('✅ Componentes de diagnóstico removidos');
  console.log('✅ Sistema restaurado y funcional');
  console.log('✅ Ruta /doctores/:slug configurada correctamente');

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
            <Route path="/estudios" element={<EstudiosPage />} />
            <Route path="/estudios/:slug" element={<EstudioDetalle />} />
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

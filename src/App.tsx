
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Especialidades from "./pages/Especialidades";
import EspecialidadIndividual from "./pages/EspecialidadIndividual";
import DoctorIndividual from "./pages/DoctorIndividual";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Doctores from "./pages/Doctores";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/doctores" element={<Doctores />} />
          {/* Rutas para perfiles individuales de doctores */}
          <Route path="/doctor/dra-karina-pena-tello" element={<DoctorIndividual />} />
          <Route path="/doctor/dr-bernardo-velasco-olalde" element={<DoctorIndividual />} />
          <Route path="/doctor/dr-javier-carrasco-gonzalez" element={<DoctorIndividual />} />
          <Route path="/doctor/dr-gerardo-valderrama-lopez" element={<DoctorIndividual />} />
          <Route path="/doctor/dr-raymundo-romero-ventura" element={<DoctorIndividual />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

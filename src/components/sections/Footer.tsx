
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const especialidades = [
    'Cardiología',
    'Neurología',
    'Pediatría',
    'Ginecología',
    'Traumatología',
    'Oncología',
  ];

  const servicios = [
    'Consulta Externa',
    'Urgencias 24/7',
    'Hospitalización',
    'Cirugía',
    'Laboratorio',
    'Imagenología',
  ];

  return (
    <footer id="contacto" className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hospital Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 medical-gradient rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">Hospital Independencia</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Más de 25 años brindando atención médica de calidad con tecnología de vanguardia y un equipo humano comprometido con tu bienestar.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-primary hover:bg-white/10">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Especialidades */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Especialidades</h3>
              <ul className="space-y-2">
                {especialidades.map((especialidad, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">
                      {especialidad}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Servicios</h3>
              <ul className="space-y-2">
                {servicios.map((servicio, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200">
                      {servicio}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    Av. Principal 123<br />
                    Colonia Centro<br />
                    Ciudad, Estado
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    (55) 1234-5678
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    info@hospitalindependencia.com
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-slate-300 text-sm">
                    Urgencias: 24/7<br />
                    Consulta: 7:00 - 21:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Hospital Independencia. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Términos de Uso
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

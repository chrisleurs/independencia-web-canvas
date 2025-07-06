
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { User, Phone, Mail } from 'lucide-react';

const Doctores = () => {
  // Placeholder data - en el futuro se reemplazará con datos reales
  const doctores = [
    {
      id: 'dra-karina-pena-tello',
      nombre: 'Dra. Karina Peña Tello',
      especialidad: 'Cardiología',
      descripcion: 'Especialista en cardiología con más de 15 años de experiencia',
      telefono: '(238) 123-4567',
      email: 'karina.pena@hospitalindependencia.com'
    },
    {
      id: 'dr-juan-perez',
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Neurología',
      descripcion: 'Neurólogo especializado en trastornos del sistema nervioso',
      telefono: '(238) 123-4568',
      email: 'juan.perez@hospitalindependencia.com'
    },
    {
      id: 'dra-maria-gonzalez',
      nombre: 'Dra. María González',
      especialidad: 'Pediatría',
      descripcion: 'Pediatra con enfoque en atención integral infantil',
      telefono: '(238) 123-4569',
      email: 'maria.gonzalez@hospitalindependencia.com'
    }
  ];

  return (
    <Layout>
      <div className="pt-20">
        <section className="section-padding bg-hospital-primary text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Doctores
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Contamos con un equipo médico altamente calificado y comprometido con brindar la mejor atención a nuestros pacientes
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctores.map((doctor) => (
                <div key={doctor.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  {/* Foto placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-hospital-primary/10 to-hospital-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-hospital-primary" />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">{doctor.nombre}</h3>
                    <p className="text-hospital-primary font-medium mb-2">{doctor.especialidad}</p>
                    <p className="text-muted-foreground text-sm">{doctor.descripcion}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{doctor.telefono}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">{doctor.email}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button size="sm" className="w-full">
                      Agendar Cita
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-slate-50 p-8 rounded-2xl max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">¿Buscas una especialidad específica?</h2>
                <p className="text-muted-foreground mb-6">
                  Contamos con más de 30 especialidades médicas. Contáctanos para conocer la disponibilidad de nuestros especialistas.
                </p>
                <Button size="lg">
                  Contactar para Más Información
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Doctores;

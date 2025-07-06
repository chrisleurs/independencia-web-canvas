
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Baby, 
  Bone, 
  Ambulance, 
  Brain, 
  Utensils, 
  Lungs,
  Shield,
  Activity,
  Wind,
  Scissors,
  User,
  Sparkles,
  UserCheck,
  Syringe,
  Palette,
  Zap,
  Eye
} from 'lucide-react';

const EspecialidadesMedicas = () => {
  const especialidades = [
    {
      icon: Stethoscope,
      titulo: 'Medicina General',
      descripcion: 'Atención médica integral para toda la familia'
    },
    {
      icon: Heart,
      titulo: 'Medicina Crítica / Terapia Intensiva',
      descripcion: 'Cuidados especializados para pacientes críticos'
    },
    {
      icon: Baby,
      titulo: 'Pediatría / Neonatología',
      descripcion: 'Atención especializada para bebés y niños'
    },
    {
      icon: Bone,
      titulo: 'Traumatología / Ortopedia',
      descripcion: 'Tratamiento de lesiones óseas y musculares'
    },
    {
      icon: Ambulance,
      titulo: 'Urgenciología',
      descripcion: 'Atención médica inmediata las 24 horas'
    },
    {
      icon: Brain,
      titulo: 'Neurología',
      descripcion: 'Diagnóstico y tratamiento del sistema nervioso'
    },
    {
      icon: Utensils,
      titulo: 'Nutrición',
      descripcion: 'Planes alimentarios personalizados'
    },
    {
      icon: Lungs,
      titulo: 'Cardioneumología',
      descripcion: 'Especialidad del corazón y pulmones'
    },
    {
      icon: Shield,
      titulo: 'Gastroenterología',
      descripcion: 'Cuidado del sistema digestivo'
    },
    {
      icon: Activity,
      titulo: 'Nefrología',
      descripcion: 'Especialidad en riñones y vías urinarias'
    },
    {
      icon: Wind,
      titulo: 'Neumología',
      descripcion: 'Tratamiento de enfermedades respiratorias'
    },
    {
      icon: Scissors,
      titulo: 'Cirugía General y Especializada',
      descripcion: 'Procedimientos quirúrgicos avanzados'
    },
    {
      icon: User,
      titulo: 'Urología',
      descripcion: 'Especialidad del sistema genitourinario'
    },
    {
      icon: Sparkles,
      titulo: 'Dermatología',
      descripcion: 'Cuidado integral de la piel'
    },
    {
      icon: UserCheck,
      titulo: 'Ginecología',
      descripcion: 'Salud integral de la mujer'
    },
    {
      icon: Syringe,
      titulo: 'Anestesiología',
      descripcion: 'Manejo del dolor y anestesia quirúrgica'
    },
    {
      icon: Palette,
      titulo: 'Cirugía Plástica',
      descripcion: 'Reconstrucción y cirugía estética'
    },
    {
      icon: Zap,
      titulo: 'Neurocirugía',
      descripcion: 'Cirugía especializada del sistema nervioso'
    },
    {
      icon: Eye,
      titulo: 'Oftalmología Pediátrica',
      descripcion: 'Cuidado ocular infantil especializado'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hospital-primary">
            Especialidades Médicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contamos con más de 19 especialidades médicas con profesionales altamente calificados para brindar atención integral a tu salud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {especialidades.map((especialidad, index) => {
            const Icon = especialidad.icon;
            return (
              <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-hospital-light to-white border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 h-32 flex flex-col justify-center items-center text-center relative">
                  <div className="w-12 h-12 bg-hospital-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-hospital-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-hospital-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-sm font-semibold text-hospital-primary group-hover:text-hospital-secondary transition-colors duration-300 leading-tight">
                    {especialidad.titulo}
                  </h3>

                  {/* Overlay con descripción en hover */}
                  <div className="absolute inset-0 bg-hospital-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <div className="text-center">
                      <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-sm mb-2">
                        {especialidad.titulo}
                      </h4>
                      <p className="text-white/90 text-xs leading-relaxed">
                        {especialidad.descripcion}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Botón CTA */}
        <div className="text-center">
          <Link to="/especialidades">
            <Button 
              className="bg-hospital-secondary hover:bg-hospital-secondary/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Ver todas las especialidades
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesMedicas;

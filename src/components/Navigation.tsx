
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    const phoneNumber = 'tel:+522381234567';
    window.open(phoneNumber, '_self');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-hospital-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-hospital-primary'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <div className="w-6 h-6 md:w-7 md:h-7 bg-hospital-primary rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-sm"></div>
              </div>
            </div>
            <div className="text-white">
              <div className="text-lg md:text-xl font-bold font-heading">
                Hospital Independencia
              </div>
              <div className="text-xs md:text-sm opacity-90 font-light">
                Tehuacán, Puebla
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-white hover:border-b-2 hover:border-hospital-secondary transition-all duration-200 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={handleContactClick}
              className="ml-4 bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-hospital-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-hospital-primary shadow-xl border-t border-hospital-secondary/20">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-6 py-3 text-white/90 hover:text-white hover:bg-hospital-secondary/20 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-2">
                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-hospital-accent hover:bg-hospital-accent/90 text-white font-semibold"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

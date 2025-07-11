
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Especialidades', href: '/especialidades' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Doctores', href: '/doctores' },
    { label: 'Contacto', href: '/contacto' },
  ];

  const handleContactClick = () => {
    const phoneNumber = 'tel:+522381234567';
    window.open(phoneNumber, '_self');
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
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
          {/* Logo con imagen real */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm p-1">
              <img 
                src="/lovable-uploads/34c5be76-cf86-4d35-a2e4-c27b77abb024.png" 
                alt="Hospital Independencia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-white">
              <div className="text-lg md:text-xl font-bold font-heading">
                Hospital Independencia
              </div>
              <div className="text-xs md:text-sm opacity-90 font-light text-hospital-gold-light">
                Tehuacán, Puebla
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-white/90 hover:text-white hover:border-b-2 hover:border-hospital-gold transition-all duration-200 font-medium py-2 ${
                  isActive(item.href) ? 'text-white border-b-2 border-hospital-gold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={handleContactClick}
              className="ml-4 btn-gold font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-hospital-gold transition-colors"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-hospital-primary shadow-xl border-t border-hospital-gold/20">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-6 py-3 text-white/90 hover:text-white hover:bg-hospital-gold/20 transition-colors duration-200 font-medium ${
                    isActive(item.href) ? 'text-white bg-hospital-gold/20 border-r-4 border-hospital-gold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 pt-2">
                <Button 
                  onClick={handleContactClick}
                  className="w-full btn-gold font-semibold"
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

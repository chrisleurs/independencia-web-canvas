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
    { label: 'Equipo', href: '/equipo' },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo - Optimized for mobile */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm p-1">
              <img 
                src="/lovable-uploads/34c5be76-cf86-4d35-a2e4-c27b77abb024.png" 
                alt="Hospital Independencia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-white">
              <div className="text-sm sm:text-lg md:text-xl font-bold font-heading">
                Hospital Independencia
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-light">
                Tehuacán, Puebla
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-white/90 hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 font-medium py-2 text-sm xl:text-base ${
                  isActive(item.href) ? 'text-white border-b-2 border-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={handleContactClick}
              className="ml-4 bg-white text-hospital-primary hover:bg-white/95 font-semibold min-h-[44px] px-6"
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </Button>
          </div>

          {/* Mobile Menu Button - Larger touch target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-white hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Menú"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Improved UX */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-hospital-primary shadow-xl border-t border-white/10">
            <div className="py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-medium min-h-[48px] flex items-center ${
                    isActive(item.href) ? 'text-white bg-white/10 border-r-4 border-white' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 pt-4 pb-2">
                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-white text-hospital-primary hover:bg-white/95 font-semibold min-h-[48px] text-base"
                >
                  <Phone className="w-5 h-5 mr-3" />
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

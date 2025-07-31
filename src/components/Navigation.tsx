
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

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - Optimized for all screen sizes */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 max-w-[60%] sm:max-w-none">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm p-1 flex-shrink-0">
              <img 
                src="/lovable-uploads/34c5be76-cf86-4d35-a2e4-c27b77abb024.png" 
                alt="Hospital Independencia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-white min-w-0">
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold font-heading leading-tight truncate">
                Hospital Independencia
              </div>
              <div className="text-xs sm:text-sm opacity-90 font-light leading-tight">
                Tehuacán, Puebla
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-white/90 hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 font-medium py-2 text-sm xl:text-base whitespace-nowrap ${
                  isActive(item.href) ? 'text-white border-b-2 border-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={handleContactClick}
              size="sm"
              className="ml-4 bg-white text-hospital-primary hover:bg-white/95 font-semibold min-h-[44px] px-4 xl:px-6 text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2" />
              Llamar
            </Button>
          </div>

          {/* Mobile Menu Button - Larger touch target */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Improved UX and accessibility */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-hospital-primary border-t border-white/10">
            <div className="py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-medium min-h-[48px] flex items-center text-base ${
                    isActive(item.href) ? 'text-white bg-white/10 border-r-4 border-white' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 pt-4 pb-2">
                <Button 
                  onClick={() => {
                    handleContactClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-white text-hospital-primary hover:bg-white/95 font-semibold min-h-[48px] text-base"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm"
          style={{ top: '64px' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;

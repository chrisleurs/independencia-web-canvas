
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      document.body.style.overflow = 'hidden';
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

  const handleWhatsAppClick = () => {
    const phoneNumber = '522381234567';
    const message = encodeURIComponent('Hola, me gustaría obtener información sobre los servicios del Hospital Independencia');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMobileNavigation = (href: string, label: string) => {
    console.log(`🔍 Navegando a: ${label} (${href})`);
    
    // Cerrar menú primero
    setIsMenuOpen(false);
    
    // Navegar programáticamente
    navigate(href);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const WhatsAppIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
    </svg>
  );

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
              onClick={handleWhatsAppClick}
              size="sm"
              className="ml-4 bg-whatsapp text-white hover:bg-whatsapp font-semibold min-h-[44px] px-4 xl:px-6 text-sm whitespace-nowrap"
            >
              <WhatsAppIcon />
              <span className="ml-2">WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log(`🔍 Menu toggle: ${!isMenuOpen ? 'opening' : 'closing'}`);
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

        {/* Mobile Navigation - Fixed with programmatic navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-hospital-primary border-t border-white/20 shadow-lg">
            <div className="py-4 space-y-0 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMobileNavigation(item.href, item.label)}
                  className={`block w-full text-left px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 font-medium min-h-[48px] text-base border-b border-white/10 ${
                    isActive(item.href) ? 'bg-white/10 border-r-4 border-white' : ''
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* WhatsApp Button */}
              <div className="px-6 pt-4 pb-2 border-t border-white/10">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('🔍 WhatsApp clicked from mobile menu');
                    handleWhatsAppClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-whatsapp text-white hover:bg-green-600 font-semibold min-h-[48px] text-base transition-colors"
                >
                  <WhatsAppIcon />
                  <span className="ml-3">WhatsApp</span>
                </Button>
              </div>
              
              {/* Phone number as text */}
              <div className="px-6 pb-4">
                <div className="text-center text-white/80 text-sm bg-white/5 rounded-lg p-3">
                  📞 Hospital: 238 382 4819
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50"
          style={{ top: '64px' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;

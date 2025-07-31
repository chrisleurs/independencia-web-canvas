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
    console.log(`🔍 Click detectado en: ${label} (${href})`);
    console.log(`🔍 Estado actual del menú: ${isMenuOpen ? 'abierto' : 'cerrado'}`);
    
    // Small delay to ensure menu closes before navigation
    setTimeout(() => {
      setIsMenuOpen(false);
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    
    console.log(`✅ Navegación completada a: ${href}`);
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
          ? 'bg-white shadow-lg'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo - Hospital Independencia with original colors */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 max-w-[60%] sm:max-w-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
              <img 
                src="/lovable-uploads/43efa578-f21d-46b3-95de-ee32883410c1.png" 
                alt="Hospital Independencia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-heading leading-tight truncate text-black">
                Hospital Independencia
              </div>
              <div className="text-xs sm:text-sm md:text-base opacity-90 font-light leading-tight text-gray-600">
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
                className={`text-black hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-200 font-medium py-2 text-sm xl:text-base whitespace-nowrap ${
                  isActive(item.href) ? 'text-blue-700 border-b-2 border-blue-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={handleWhatsAppClick}
              size="sm"
              className="ml-4 bg-green-500 text-white hover:bg-green-600 font-semibold min-h-[44px] px-4 xl:px-6 text-sm whitespace-nowrap"
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
            className="lg:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation active:bg-gray-200"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            type="button"
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
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="py-2 space-y-0">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavigation(item.href, item.label);
                  }}
                  className={`block w-full text-left px-6 py-4 text-black hover:bg-gray-50 transition-colors duration-200 font-medium text-base border-b border-gray-100 cursor-pointer touch-manipulation active:bg-gray-100 ${
                    isActive(item.href) ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-700' : ''
                  }`}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              
              {/* WhatsApp Button */}
              <div className="px-6 pt-4 pb-2 border-t border-gray-200">
                <Button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🔍 WhatsApp clicked from mobile menu');
                    handleWhatsAppClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-green-500 text-white hover:bg-green-600 font-semibold text-base"
                  type="button"
                >
                  <WhatsAppIcon />
                  <span className="ml-3">WhatsApp</span>
                </Button>
              </div>
              
              {/* Phone number as text */}
              <div className="px-6 pb-4">
                <div className="text-center text-gray-600 text-sm bg-gray-50 rounded-lg p-3">
                  📞 Hospital: 238 382 4819
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

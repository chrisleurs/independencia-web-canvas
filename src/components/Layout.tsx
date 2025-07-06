
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Scroll to top when component mounts (page navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;

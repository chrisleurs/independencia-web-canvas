
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Ensure page always starts from top immediately
  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Also set document and body scroll position to ensure consistency
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ scrollBehavior: 'auto' }}>
      <Navigation />
      <main className="pt-16 md:pt-18 lg:pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;

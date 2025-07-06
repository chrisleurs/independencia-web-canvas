
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;

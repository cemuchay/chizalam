import React, { ReactNode } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-slate-200 selection:bg-cyan-500/30">
      {/* Fixed/Sticky Navbar usually feels more modern */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Subtle entry animation wrapper */}
        <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
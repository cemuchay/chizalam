import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }: {children:any}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

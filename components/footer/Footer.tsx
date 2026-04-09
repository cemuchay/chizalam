import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/cemuchay' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chizalam-emuchay' },
  ];

  return (
    <footer className="mt-auto border-t border-white/5 bg-[#0f172a] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-white font-bold tracking-tighter text-lg">
            CE
          </span>
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Chizalam Emuchay.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white text-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
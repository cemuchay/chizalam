import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'About', href: '/about' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-white text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            CE
          </a>
        </Link>

        <div className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link key={link.href} href={link.href} passHref>
                <a className="relative px-4 py-2 group">
                  <span className={`relative z-10 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {link.title}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
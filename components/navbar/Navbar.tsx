import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks =  [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Projects',
      to: '/projects',
    },
    {
      title: 'About',
      to: '/about',
    },
  ]
  return (
    <nav className="bg-gray-900 py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-2xl font-semibold">CE</a>
        </Link>
        <div>
        {
  navLinks.map((link: any) => (
    <motion.a
      key={link.id}
      href={link.to}
      className="text-gray-300 hover:text-white mx-4"
      whileHover={{ scale: 1.1, color: 'white' }}
      style={{ display: 'inline-block' }} // Add this style
    >
      {link.title}
    </motion.a>
  ))
}


        </div>
      </div>
    </nav>
  );
};

export default Navbar;

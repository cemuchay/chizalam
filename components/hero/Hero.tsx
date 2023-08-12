import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (

      <motion.section
      id="about"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 text-white py-20"
    >
      <div className="container mx-auto text-center">
      <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-4"
        >
        <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Chizalam Emuchay</h1>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg mb-8"
        >
        <p className="text-lg text-gray-300 mb-8">
          A Front-End Engineer based in Nigeria with a passion for creating engaging web experiences.
        </p>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center space-x-4"
        >
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/cemuchay" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/chizalam-emuchay-35b02492/" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-300">
            LinkedIn
          </a>
        </div>
        </motion.div>
      </div>
      
    </motion.section>

  );
};

export default Hero;

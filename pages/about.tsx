import Layout from '../components/layout/Layout';
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
     
          <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-white mb-8"
        >
          About Me
        </motion.h1>

          <p className="text-gray-400 mb-6">
            I&apos;m Chizalam Emuchay, a Front-End Engineer based in Nigeria. I have
            a passion for creating engaging and user-friendly web experiences. I
            specialize in JavaScript, TypeScript, Next.js, React, and other modern
            front-end technologies.
          </p>
          <p className="text-gray-400 mb-6">
            My expertise also extends to CSS frameworks like Tailwind CSS and Sass.
            I enjoy turning complex problems into elegant solutions and I&apos;m always
            looking for opportunities to learn and grow in the ever-evolving world
            of front-end development.
          </p>
          <p className="text-gray-400">
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open-source projects, and sharing my knowledge with
            the developer community.
          </p>
        </div>
        <div className="mt-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Hobbies
          </motion.h2>
          <ul className="text-gray-400">
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-2"
            >
              Reading
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-2"
            >
              Drone Photography
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Writing
            </motion.li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <ScrollLink to="contact" smooth={true} duration={500}>
            <a className="text-blue-500 hover:text-blue-300">Contact Me</a>
          </ScrollLink>
        </motion.div>
      </div>
      </Layout>
  );
};

export default AboutPage;

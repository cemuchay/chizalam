import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Layout from '../components/layout/Layout';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const hobbies = ["Reading Voraciously", "Drone Photography", "Writing"];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Main Bio - 7 Columns */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                About <span className="text-cyan-400">Me.</span>
              </h1>
              <div className="h-1 w-20 bg-cyan-500 rounded-full" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">Chizalam Emuchay</span>, a Front-End Engineer
                shaping digital experiences from Nigeria. I bridge the gap between complex logic and
                elegant design, focusing on high-performance applications.
              </p>
              <p>
                My core expertise lies in the <span className="text-white">React ecosystem</span>—specifically
                TypeScript and Next.js—where I turn architectural challenges into seamless user journeys.
                I treat CSS as a first-class citizen, leveraging Tailwind CSS to build scalable design systems.
              </p>
              <p>
                Outside of my IDE, I am deeply committed to the business side of things and in mentoring emerging talents.
              </p>
            </motion.div>

            {/* <motion.div variants={itemVariants} className="pt-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
                <button className="px-8 py-3 rounded-full bg-white text-slate-950 font-bold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Let&apos;s Connect
                </button>
              </ScrollLink>
            </motion.div> */}
          </div>

          {/* Sidebar - 5 Columns */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-cyan-500 mr-4" />
                Interests
              </h2>
              <div className="flex flex-col gap-4">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby}
                    className="flex items-center text-slate-300 group"
                  >
                    <div className="w-2 h-2 rounded-full border border-cyan-500 mr-4 group-hover:bg-cyan-500 transition-colors" />
                    <span className="text-lg font-medium">{hobby}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="px-8">
              <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">
                Current Location
              </h2>
              <p className="text-white text-lg">Aba, Abia State — Nigeria</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;
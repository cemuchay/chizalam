import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for cleaner code and staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.span 
          variants={itemVariants}
          className="inline-block text-cyan-400 font-medium tracking-widest text-xs uppercase mb-4"
        >
          Front-End Engineer
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
        >
          Hello, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Chizalam Emuchay
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I build high-performance, accessible, and visually stunning web experiences 
          with a focus on modern engineering practices.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/chizalam-emuchay-35b02492/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cemuchay"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
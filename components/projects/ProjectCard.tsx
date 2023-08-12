import { motion } from 'framer-motion';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="mb-4">
          <iframe
            src={project.liveLink}
            title={`Live Demo of ${project.title}`}
            className="w-full h-64 rounded-md"
          ></iframe>
        </div>
      </div>
      <a href={project.liveLink} target="_blank" className="text-blue-500 hover:text-blue-300">
        View Full Website
      </a>
    </div>
    </motion.div>
  );
};

export default ProjectCard;

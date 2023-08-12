import { Key } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }: {projects: any}) => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 ml-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: { id: Key | null | undefined; }) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

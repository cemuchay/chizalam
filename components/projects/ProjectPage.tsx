import React from 'react';
import Layout from '../layout/Layout';
import ProjectCard from './ProjectCard';
import projects from '../../public/projects'

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold text-white mb-8 ml-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;

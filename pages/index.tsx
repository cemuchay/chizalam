import Hero from '../components/hero/Hero';
import Layout from '../components/layout/Layout';
import Projects from '../components/projects/Projects';
import projects from '../public/projects'


const Home = () => {
  return (
    <Layout>
        <Hero />
        <Projects projects={projects} />
        </Layout>
  );
};

export default Home;

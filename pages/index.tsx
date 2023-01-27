import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

const Index = () => {
  return (
//     <Container fluid className={styles.container}>
//       <h1 className='h1'>
//         Chizalam Emuchay
//       </h1>
//     </Container>
    <HeroSection />
  );
}

export default Index;

// Index.getLayout = (page: ReactElement) => {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }

const HeroSection = () => {
  return (
    //@ts-ignore
    <div className="hero-section" style={heroSectionStyles}>
      <h1 style={heroTextStyles}>Welcome to My Website</h1>
      <div style={buttonContainerStyles}>
        <button style={buttonStyles}>Learn More</button>
        <button style={buttonStyles}>Contact Us</button>
      </div>
    </div>
  );
};

const heroSectionStyles = {
  background: "linear-gradient(to right, #1e3c72, #2a5298)",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
};

const heroTextStyles = {
  color: "white",
  fontSize: "4rem",
  fontWeight: "bold",
  textShadow: "1px 1px 3px black"
};

const buttonContainerStyles = {
  marginTop: "2rem"
};

const buttonStyles = {
  padding: "1rem 2rem",
  background: "white",
  color: "#1e3c72",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  marginRight: "1rem",
  cursor: "pointer",
  boxShadow: "1px 1px 3px #ccc",
  "&:hover": {
    background: "#1e3c72",
    color: "white"
  }
};

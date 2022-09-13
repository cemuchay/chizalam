import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';
import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';

const Index = () => {
  return (
    <Container fluid className={styles.container}>
      <h1 className='h1'>
        Chizalam Emuchay
      </h1>
    </Container>
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
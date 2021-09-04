import Head from 'next/head';
import Image from 'next/image';

// components
import Layout from '../components/Layout';

// page styling
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  const pageTitle = 'Services';
  const pageDescription =
    'Experts covering your home’s needs from the right light bulb shade to remodeling.';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div style={{ height: '101vh' }}></div>
      </Layout>
    </div>
  );
};

export default Home;

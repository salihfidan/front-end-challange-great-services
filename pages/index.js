import Head from 'next/head';
import Image from 'next/image';

// components
import Layout from '../components/Layout';

// page styling
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Home Page</Layout>
    </div>
  );
};

export default Home;

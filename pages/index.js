import Head from 'next/head';
import Image from 'next/image';

// components
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';

// page styling
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  const pageTitle = 'Services';
  const pageDescription = 'Experts covering your home’s needs from the right light bulb shade to remodeling.';

  const people = [
    { avatar: 'http://basework.studio/frontendcase/person-img-3.jpg', name: 'Jane' },
    { avatar: 'http://basework.studio/frontendcase/person-img-4.jpg', name: 'Ashton' },
  ];

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <section className={styles['home__services']}>
          <div className="container-xxl">
            <div className="row mt-lg-7">
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Landscaping" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Tile / Countertops" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Prepping for sale" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Landscaping" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Landscaping" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Landscaping" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Landscaping" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-7">
                <ServiceCard title="Landscaping" icon="http://basework.studio/frontendcase/icon.svg" people={people} />
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: '101vh' }}></div>
      </Layout>
    </div>
  );
};

export default Home;

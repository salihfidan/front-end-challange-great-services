import Head from 'next/head';

// components
import Layout from '../components/Layout';
import InfiniteServices from '../components/InfiniteServices';

// icons
import { CheckIcon } from '../components/SvgIcon';

// page styling
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
  const pageTitle = 'Services';
  const pageDescription = 'Experts covering your home’s needs from the right light bulb shade to remodeling.';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="container-xxl">
          <InfiniteServices />
        </div>
        <div className={styles.features}>
          <div className={styles['features__items']}>
            <div className="container-xxl">
              <div className="row">
                <div className="col-sm-6 col-xl-3 mb-30 mb-sm-7 mb-xl-100">
                  <div className={styles['features__item']}>
                    <div className={styles['features__item-icon-area']}>
                      <CheckIcon />
                    </div>
                    <div className={styles['features__item-text-area']}>
                      <div className={styles['features__item-title']}>Manage your task</div>
                      <div className={styles['features__item-text']}>No matter what the size of the task is we will manage it and find solutions for you. From cleaning to junk removal to fixing we have got you covered.</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-30 mb-sm-7 mb-xl-100">
                  <div className={styles['features__item']}>
                    <div className={styles['features__item-icon-area']}>
                      <CheckIcon />
                    </div>
                    <div className={styles['features__item-text-area']}>
                      <div className={styles['features__item-title']}>Define the scope of work</div>
                      <div className={styles['features__item-text']}>We will have the subject-matter expert define the scope of work.</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-30 mb-sm-7 mb-xl-100">
                  <div className={styles['features__item']}>
                    <div className={styles['features__item-icon-area']}>
                      <CheckIcon />
                    </div>
                    <div className={styles['features__item-text-area']}>
                      <div className={styles['features__item-title']}>Vet licensed vendor</div>
                      <div className={styles['features__item-text']}>We make sure they have a license, valid insurance, criminal background check, and are trusted in their local community.</div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3 mb-30 mb-sm-7 mb-xl-100">
                  <div className={styles['features__item']}>
                    <div className={styles['features__item-icon-area']}>
                      <CheckIcon />
                    </div>
                    <div className={styles['features__item-text-area']}>
                      <div className={styles['features__item-title']}>3 Quotes, until you are satisfied.</div>
                      <div className={styles['features__item-text']}>We will get 3 quotes, If not satisfied we will get more quotes at no cost.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['features__email-area']}>
            <div className={`container-xxl ${styles['features__email-area-container']}`}>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles['features__email-title']}>
                    Stay up to speed on the
                    <br />
                    latest at Great.
                  </div>
                </div>
                <div className="col-md-6">
                  <form className={styles['features__email-form']}>
                    <input type="email" name="email" className={styles['features__email-input']} placeholder="jsmith@example.com" required />
                    <div className={styles['features__email-checkbox-area']}>
                      <input type="checkbox" id="stayInformed" name="stayInformed" className={styles['features__email-checkbox']} />
                      <label htmlFor="stayInformed" className={styles['features__email-checkbox-label']}>
                        Additionally, I’d like to stay informed about local events
                      </label>
                    </div>
                    <button type="submit" className={styles['features__email-submit']}>
                      Subscribe
                    </button>
                    <div className={styles['features__email-terms-of-service']}>
                      By submitting this form, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;

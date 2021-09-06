import React from 'react';

// components
import Header from '../Header';
import Footer from '../Footer';

// component styling
import styles from './Layout.module.scss';

const Layout = ({ children, pageTitle, pageDescription }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles['layout__hero']}>
        <h1 className={styles['layout__hero-title']}>{pageTitle}</h1>
        <p className={styles['layout__hero-text']}>{pageDescription}</p>
      </section>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';

// component styling
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container-xxl">
        <h2 className={styles['footer__header']}>Get in touch</h2>
      </div>
      <div className="container-xxl mb-50">
        <div className="row">
          <div className="col-md-6">
            <div className={styles['footer__text']}>Get to know our hiring process before you apply or find answers to any lingering questions, right here, right now.</div>
          </div>
          <div className="col-md-5 text-md-right">
            <a href="#" className={styles['footer__action']}>
              Join
            </a>
          </div>
          <div className="col-md-1 d-none d-md-block"></div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-7 col-lg-3 order-lg-3">
            <h3 className={styles['footer__heading']}>Stunner</h3>
            <nav className={styles['footer__nav']}>
              <ul className={styles['footer__nav-ul']}>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    How It Works
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Advantages of Great
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    45 Expert/Categories
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Apply to be an expert
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-5 col-lg-3 order-lg-4 pl-lg-0">
            <h3 className={styles['footer__heading']}>Follow us</h3>
            <nav className={styles['footer__nav']}>
              <ul className={styles['footer__nav-ul']}>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Facebook
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Twitter
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Instagram
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-7 col-lg-3 order-lg-1 mt-50 mt-lg-0">
            <div className={styles['footer__address-area']}>
              <div className={styles['footer__address']}>
                1447 2nd St
                {/* <br /> */}
                Santa Monica, CA 90401
              </div>
              <div className={styles['footer__address']}>
                333 SE 2nd Ave
                {/* <br /> */}
                Suite 2000
                {/* <br /> */}
                Miami, FL 33131
                {/* <br /> */}
                (786) 833-9688
              </div>
            </div>
          </div>
          <div className="col-5 col-lg-3 mt-50 d-lg-none">
            <nav className={styles['footer__nav']}>
              <ul className={styles['footer__nav-ul']}>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Privacy policy
                  </a>
                </li>
                <li className={styles['footer__nav-item']}>
                  <a href="#" className={styles['footer__nav-link']}>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-7 col-lg-3 order-lg-2">
            <div className={styles['footer__address-area']}>
              <div className={styles['footer__address']}>
                1341 W Mockingbird Ln
                {/* <br /> */}
                Dallas, TX 75247
                {/* <br /> */}
                (214) 380-2666
              </div>
              <div className={styles['footer__address']}>
                3 E Third Ave
                {/* <br /> */}
                Suite 200
                {/* <br /> */}
                San Mateo, CA 94401
                {/* <br /> */}
                (415) 300-2889
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles['footer__bottom-mark']}>© 2021 Great Inc.</div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className={styles['footer__bottom-link-area']}>
              <a href="#" className={styles['footer__bottom-link']}>
                Privacy policy
              </a>
              <a href="#" className={styles['footer__bottom-link']}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

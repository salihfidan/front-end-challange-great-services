import React, { useState } from 'react';
import Image from 'next/image';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

// images
import logo from '../../public/img/logo.svg';
import youtube from '../../public/img/youtube.svg';
import facebook from '../../public/img/facebook.svg';
import instagram from '../../public/img/instagram.svg';
import linkedin from '../../public/img/linkedin.svg';

// component styling
import styles from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const _isScrolled = currPos.y < -50;
      if (_isScrolled !== isScrolled) setIsScrolled(_isScrolled);
    },
    [isScrolled]
  );

  return (
    <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''} ${isMobileMenuOpened ? styles['header--menu-opened'] : ''}`}>
      <div className={styles['header__inner']}>
        <Image src={logo} alt="GREAT Services" />
        <button className={styles['header__button']} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={styles['header__mobile-menu']}>
        <nav className={styles['header__mobile-nav']}>
          <ul className={styles['header__mobile-nav-list']}>
            <li className={styles['header__mobile-nav-item']}>
              <a href="#" className={styles['header__mobile-nav-link']}>
                How It Works
              </a>
            </li>
            <li className={styles['header__mobile-nav-item']}>
              <a href="#" className={styles['header__mobile-nav-link']}>
                Advantages of Great
              </a>
            </li>
            <li className={styles['header__mobile-nav-item']}>
              <a href="#" className={styles['header__mobile-nav-link']}>
                45 Expert/Categories
              </a>
            </li>
            <li className={styles['header__mobile-nav-item']}>
              <a href="#" className={styles['header__mobile-nav-link']}>
                Apply to be an expert
              </a>
            </li>
          </ul>
        </nav>
        <nav className={styles['header__social-nav']}>
          <ul className={styles['header__social-nav-list']}>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <Image src={youtube} alt="Youtube" className={styles['header__social-nav-logo']} />
              </a>
            </li>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <Image src={facebook} alt="Facebook" className={styles['header__social-nav-logo']} />
              </a>
            </li>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <Image src={instagram} alt="Instagram" className={styles['header__social-nav-logo']} />
              </a>
            </li>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <Image src={linkedin} alt="LinkedIn" className={styles['header__social-nav-logo']} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

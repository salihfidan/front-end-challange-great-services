import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

// icons
import { LogoIcon, YoutubeIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from '../SvgIcon';

// components
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

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
      <div className={`container-xxl ${styles['header__inner']}`}>
        <LogoIcon className={styles['header__logo']} />
        <nav className={`${styles['header__nav']} d-none d-lg-block`}>
          <ul className={styles['header__nav-list']}>
            <li className={styles['header__nav-item']}>
              <a href="#" className={styles['header__nav-link']}>
                How It Works
              </a>
            </li>
            <li className={styles['header__nav-item']}>
              <a href="#" className={styles['header__nav-link']}>
                Advantages
              </a>
            </li>
            <li className={styles['header__nav-item']}>
              <a href="#" className={`${styles['header__nav-link']} ${styles['header__nav-link--active']}`}>
                Services
              </a>
            </li>
            <li className={styles['header__nav-item']}>
              <ButtonPrimary href="#">Apply to be an expert</ButtonPrimary>
            </li>
          </ul>
        </nav>
        <button className={`${styles['header__button']} d-lg-none`} onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)} aria-label="Menu">
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
                <YoutubeIcon />
              </a>
            </li>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <FacebookIcon />
              </a>
            </li>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <InstagramIcon />
              </a>
            </li>
            <li className={styles['header__social-nav-item']}>
              <a href="#" className={styles['header__social-nav-link']}>
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

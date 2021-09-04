import React from 'react';

// component styling
import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ children, ...props }) => {
  return (
    <a className={styles['button-primary']} {...props}>
      {children}
    </a>
  );
};

export default ButtonPrimary;

import React from 'react';
import Image from 'next/image';

// component styling
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, icon, people }) => {
  return (
    <div className={styles['service-card']}>
      <div className={styles['service-card__img']}>
        <Image loader={({ src }) => src} unoptimized src={icon} alt="GREAT Services" layout="fill" />
      </div>
      <div className={styles['service-card__title']}>{title}</div>
      <div className={styles['service-card__expert-area']}>
        <div className={styles['service-card__expert-title']}>Experts</div>
        <div className={styles['service-card__expert-images']}>
          {people.reverse().map((person) => {
            return (
              <div className={styles['service-card__expert-img']}>
                <Image loader={({ src }) => src} unoptimized src={person.avatar} alt={person.name} layout="fill" objectFit="cover" />
              </div>
            );
          })}
        </div>
        <div className={styles['service-card__expert-names']}>
          {people
            .map((person) => person.name)
            .reverse()
            .join(' + ')}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

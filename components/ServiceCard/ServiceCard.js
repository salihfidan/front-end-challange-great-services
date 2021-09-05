import React, { useEffect } from 'react';
import Image from 'next/image';

// component styling
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, icon, people, category }) => {
  useEffect(() => {
    people = people ? [...people].reverse() : [];
  });

  if (!icon) return <span>Sorun</span>;

  return (
    <div className={styles['service-card']}>
      <div className={styles['service-card__img']}>
        <Image loader={({ src }) => src} unoptimized src={icon} alt="GREAT Services" layout="fill" />
      </div>
      <div className={styles['service-card__title']}>{title}</div>
      <div className={styles['service-card__expert-area']}>
        <div className={styles['service-card__expert-title']}>{category}</div>
        <div className={styles['service-card__expert-images']}>
          {people.map((person) => {
            return (
              <div className={styles['service-card__expert-img']} key={person.name}>
                <Image loader={({ src }) => src} unoptimized src={person.avatar} alt={person.name} layout="fill" objectFit="cover" />
              </div>
            );
          })}
        </div>
        <div className={styles['service-card__expert-names']}>
          {people
            ?.map((person) => person.name)
            .reverse()
            .join(' + ')}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

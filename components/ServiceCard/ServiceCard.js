import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ContentLoader from 'react-content-loader';

// component styling
import styles from './ServiceCard.module.scss';

const ServiceCard = ({ title, icon, people, category, isLoading, key }) => {
  const [_people, _setPeople] = useState([]);

  useEffect(() => {
    if (people) _setPeople([...people].reverse());
  }, [people]);

  const replaceHttp = (link) => {
    return link.replace('http://', 'https://');
  };

  if (isLoading || !icon)
    return (
      <div className={styles['service-card']}>
        <div className={styles['service-card__img-container']}>
          <div className={styles['service-card__img']}>
            <ContentLoader uniqueKey={`icon${key}`} width={'100%'} height={'100%'}>
              <rect x="0" y="0" rx="50%" ry="50%" width="100%" height="100%" />
            </ContentLoader>
          </div>
        </div>
        <div className={styles['service-card__title']} style={{ textAlign: 'center' }}>
          <ContentLoader uniqueKey={`title${key}`} width={'100%'} height={16}>
            <rect x="5%" y="0" rx="6" ry="6" width="90%" height="100%" />
          </ContentLoader>
        </div>
        <div className={styles['service-card__expert-area']}>
          <div className={styles['service-card__expert-title']}>
            <ContentLoader uniqueKey={`expert-title${key}`} width={'100%'} height={14}>
              <rect x="25%" y="0" rx="6" ry="6" width="50%" height="100%" />
            </ContentLoader>
          </div>
          <div className={styles['service-card__expert-images']}>
            <div className={styles['service-card__expert-img']}>
              <ContentLoader uniqueKey={`expert-img${key}`} width={'100%'} height={'100%'}>
                <rect x="0" y="0" rx="50%" ry="50%" width="100%" height="100%" />
              </ContentLoader>
            </div>
            <div className={styles['service-card__expert-img']}>
              <ContentLoader uniqueKey={`expert-img-2${key}`} width={'100%'} height={'100%'}>
                <rect x="0" y="0" rx="50%" ry="50%" width="100%" height="100%" />
              </ContentLoader>
            </div>
          </div>
          <div className={styles['service-card__expert-names']}>
            <ContentLoader uniqueKey={`expert-names${key}`} width={'100%'} height={14}>
              <rect x="10%" y="0" rx="6" ry="6" width="80%" height="100%" />
            </ContentLoader>
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles['service-card']}>
      <div className={styles['service-card__img-container']}>
        <div className={styles['service-card__img']}>
          <Image src={replaceHttp(icon)} alt="GREAT Services" layout="fill" />
        </div>
      </div>
      <div className={styles['service-card__title']}>{title}</div>
      <div className={styles['service-card__expert-area']}>
        <div className={styles['service-card__expert-title']}>{category}</div>
        <div className={styles['service-card__expert-images']}>
          {_people.map((person) => {
            return (
              <div className={styles['service-card__expert-img']} key={person.name}>
                <Image src={replaceHttp(person.avatar)} alt={person.name} layout="fill" objectFit="cover" />
              </div>
            );
          })}
        </div>
        <div className={styles['service-card__expert-names']}>
          {_people
            .map((person) => person.name)
            .reverse()
            .join(' + ')}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

import React, { useEffect, useRef, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

// helpers
import fetcher from '../../helpers/fetcher';

// hooks
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useIntersection from '../../hooks/useIntersection';

// components
import ServiceCard from '../ServiceCard';

const InfiniteServices = () => {
  const viewMoreButtonRef = useRef();
  const inViewport = useIntersection(viewMoreButtonRef);
  const PAGE_SIZE = 12;
  const { data, error, size, setSize } = useSWRInfinite((index) => `api/services/${index * PAGE_SIZE}/${PAGE_SIZE}`, fetcher);

  const services = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  useEffect(() => {
    if (inViewport && !isLoadingMore && !isReachingEnd) setSize(size + 1);
  }, [inViewport, isLoadingMore, isReachingEnd]);

  return (
    <div>
      <div className="container-xxl">
        <div className="row mt-lg-6">
          {services.map((item, i) => {
            const { title, icon, people, category } = item;
            return (
              <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-9" key={i + item.title}>
                <ServiceCard title={title} icon={icon} people={people} category={category} />
              </div>
            );
          })}
          {isLoadingMore
            ? [...new Array(PAGE_SIZE)].map((_, i) => {
                return (
                  <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mt-6 mt-md-9" key={i}>
                    <ServiceCard isLoading={true} />
                  </div>
                );
              })
            : ''}
        </div>
        <div ref={viewMoreButtonRef}></div>
        <div className="mb-5 pb-5"></div>
      </div>
    </div>
  );
};

export default InfiniteServices;

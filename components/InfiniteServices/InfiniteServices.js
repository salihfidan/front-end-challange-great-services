import React from 'react';
import useSWRInfinite from 'swr/infinite';

// helpers
import fetcher from '../../helpers/fetcher';

// components
import ServiceCard from '../ServiceCard';

const InfiniteServices = () => {
  const PAGE_SIZE = 100;
  const { data, error, size, setSize } = useSWRInfinite((index) => `api/services/${(index + 1) * PAGE_SIZE}/${PAGE_SIZE}`, fetcher);

  const services = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);

  return (
    <div>
      <button disabled={isLoadingMore || isReachingEnd} onClick={() => setSize(size + 1)}>
        {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more services' : 'load more'}
      </button>
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
        </div>
      </div>
    </div>
  );
};

export default InfiniteServices;

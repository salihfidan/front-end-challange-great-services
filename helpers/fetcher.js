const fetcher = async (url, options) => {
  return fetch(url, {
    method: 'GET',
    ...options,
  })
    .then((res) => res.json())
    .catch((err) => err);
};

export default fetcher;

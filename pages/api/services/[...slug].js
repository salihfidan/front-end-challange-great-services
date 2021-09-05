async function handler(req, res) {
  const { slug } = req.query;
  const url = `https://basework-frontend-case-api.herokuapp.com/services/${slug[0]}/${slug[1]}`;
  const result = await fetch(url, { method: 'GET' });
  const data = await result.json();
  res.status(200).json(data);
}

export default handler;

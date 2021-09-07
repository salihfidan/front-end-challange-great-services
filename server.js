const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3005;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    if (!dev) {
      // Enforce SSL & HSTS in production
      server.use(function (req, res, next) {
        var proto = req.headers['x-forwarded-proto'];
        if (proto === 'https') {
          res.set({
            'Strict-Transport-Security': 'max-age=31557600', // one-year
          });
          return next();
        }
        res.redirect('https://' + req.headers.host + req.url);
      });
    }

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (error) => {
      if (error) throw error;
      console.error(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/CircularStd/CircularStd-Black.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/CircularStd/CircularStd-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/CircularStd/CircularStd-Book.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/CircularStd/CircularStd-Light.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/CircularStd/CircularStd-Medium.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="stylesheet preload" href="/fonts/CircularStd/CircularStd.css" as="style" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

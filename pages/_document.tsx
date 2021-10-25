/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-title" content="Align Office Systems" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased font-body bg-body text-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Document.getInitialProps = async (ctx: DocumentContext) => {
//   const initialProps = await Document.getInitialProps(ctx);
//   return {
//     ...initialProps,
//   };
// };

export default MyDocument;

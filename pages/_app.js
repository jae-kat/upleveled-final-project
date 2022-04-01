import '../styles/global.css';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import Layout from '../components/Layout';
import { client } from './api/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#05396b" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icon-192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icon-512.png"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

// import Document, { Head, Html, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <meta
//             name="description"
//             content="Buddies - the chat app to find your people"
//           />
//           <meta name="mobile-web-app-capable" content="yes" />
//           <link rel="manifest" href="/manifest.json" />
//           <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
//           <link
//             rel="icon"
//             type="image/png"
//             sizes="192x192"
//             href="/icon-192.png"
//           />
//           <link
//             rel="icon"
//             type="image/png"
//             sizes="512x512"
//             href="/icon-512.png"
//           />
//           <meta name="theme-color" content="#05396b" />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

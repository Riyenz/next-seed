import { Providers } from 'store/providers';
import '../assets/scss/app.scss';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const description =
    'Bloometa brings the first curated in-game NFT aggregator to Metaverse players and GameFi projects offering multi-chain capabilities and extensive P2E data analytics.';
  const featuredImage = '/featured-image.png';

  return (
    <>
      <Head>
        <meta name='description' content={description} key='description' />

        <meta property='og:type' content='website' key='ogtype' />
        <meta property='og:image' content={featuredImage} key='ogimage' />
        <meta property='og:description' content={description} key='ogdescription' />

        <meta name='twitter:description' content={description} key='twitterdescription' />
        <meta name='twitter:image' content={featuredImage} key='twitterimage' />
        <meta name='twitter:card' content='summary_large_image' key='twittercard' />
        <meta name='twitter:site' content='@BloometaLabs' key='twittersite' />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/svg' href='/favicon.svg' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5038e0' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#17181c' />
      </Head>

      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default MyApp;

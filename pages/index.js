import DefaultLayout from 'layouts/default-layout';
import Head from 'next/head';

export default function Home() {
  const title = 'Home | NextJS Seed';

  return (
    <DefaultLayout className='container'>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='ogtitle' />
        <meta name='twitter:title' content={title} key='twittertitle' />
      </Head>

      <div className=''>
        <p className=''>Source Sans Pro</p>
        <p className='font-ssp'>Source Sans Pro</p>
        <p className='font-scp'>Source Code Pro</p>
        <p className='font-so'>Squada One</p>
        <p className='font-ds'>DM Sans</p>
        <p className='font-poppins'>Poppins</p>
      </div>
    </DefaultLayout>
  );
}

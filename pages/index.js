import DefaultLayout from '../layouts/default-layout';
import Head from 'next/head';

export default function Home() {
  return (
    <DefaultLayout className='container'>
      <Head>
        <title>Vortex Protocol</title>
        <link rel='icon' href='/favicon.ico' />
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

import DefaultLayout from '../layouts/default-layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/logos/logo.svg';

export default function Home() {
  const title = 'NextJS Seed'
  const description = 'Built-in standards and structures; focus on what matters'

  return (
    <DefaultLayout className='container'>
      <Head>
        <title>Create Seed App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      
      <div
        className="
          flex flex-col
          items-center
          justify-center
          h-full
          w-full
          bg-pattern bg-cover
          p-8
          relative
        "
      >
        <div className="flex justify-center items-center mb-4">
          <Logo
            className="h-10 mr-2"
            alt="Seed Logo"
          />
          <h1 className="font-poppins font-bold text-4xl">{ title }</h1>
        </div>
        <p className="font-opensans font-light text-[20px] mb-4">
          { description }
        </p>
        <div className="grid grid-flow-col gap-6">
          <p className="font-ubuntu font-bold text-sm">Sample Pages:</p>
          <Link
            href="products"
            className="font-opensans font-bold text-sm hover:opacity-80 hover:underline"
          >
            Products
          </Link>
          <Link
            href="cryptos"
            className="font-opensans font-bold text-sm hover:opacity-80 hover:underline"
          >
            Crypto
          </Link>
        </div>

        <div className="absolute bottom-4 right-4 flex items-center whitespace-nowrap">
          <p className="font-opensans font-light mr-2">Developed by</p>
          <a
            className="
              font-opensans font-light
              flex
              items-center
              opacity-80
              transform
              transition-transform
              duration-150
              ease-in-out
              hover:opacity-100 hover:scale-105
            "
            href="https://riyenz.com/"
          >

            <img
              className="h-8"
              src="https://riyenz.com/img/logo/06.svg"
              layout='fill'
              alt="Riyenz Logo"
            />
            Riyenz
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
}

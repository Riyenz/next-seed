import '../assets/scss/app.scss';

export default function App({ Component, pageProps }) {
  return (
    <div className='text-[#4F4F4F]'>
      <Component {...pageProps} />
    </div>
  );
}

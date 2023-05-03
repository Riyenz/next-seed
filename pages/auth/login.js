import PasswordInput from 'components/PasswordInput';
import AuthLayout from 'layouts/auth-layout';
import Head from 'next/head';
import Link from 'next/link';
import Logo from 'assets/logos/AVIT.DEV.svg';
import { useRouter } from 'next/router';
import { userLogin } from 'store/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState(process.env.NEXT_PUBLIC_DEMO_EMAIL);
  const [password, setPassword] = useState(process.env.NEXT_PUBLIC_DEMO_PASSWORD);

  const { user } = useSelector((state) => {
    return state.user;
  });

  const title = 'Login | NextJS Seed';

  const onLogin = async () => {
    const response = await dispatch(
      userLogin({
        email,
        password,
      })
    );

    if (response.payload)
      router.push({
        pathname: '/',
      });
  };

  return (
    <AuthLayout className='container'>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='ogtitle' />
        <meta name='twitter:title' content={title} key='twittertitle' />
      </Head>

      <Logo className='w-16 mb-8 mt-10 sm:mt-0' />

      <div className='rounded-2xl bg-white px-6 py-8 flex flex-col gap-6 w-96 flex-1 sm:flex-none sm:shadow-lg'>
        <div className='bg-[#eff3f9] p-1 rounded-lg grid grid-flow-col gap-1'>
          <Link href='/auth/login' className='bg-white rounded-lg px-2 py-1 uppercase text-center font-bold'>
            Log in
          </Link>
          <Link
            href='/auth/register'
            className='rounded-lg px-2 py-1 uppercase text-center font-bold hover:bg-white hover:bg-opacity-50'
          >
            Register
          </Link>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='font-semibold text-sm text-gray-400'>
              Email
            </label>
            <input
              type='email'
              className='border border-gray-200 px-4 py-2 rounded-xl'
              autoComplete='new-password'
              autoFocus={true}
              tabIndex={0}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password' className='font-semibold text-sm text-gray-400'>
              Password
            </label>
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            <Link href='/auth/forgot-password' className='text-sm text-right hover:text-primary'>
              Forgot password?
            </Link>
          </div>
        </div>

        <button className='bg-primary px-4 py-2 font-bold text-white rounded-lg uppercase mt-auto' onClick={onLogin}>
          Login to account
        </button>
      </div>
    </AuthLayout>
  );
}

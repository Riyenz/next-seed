'use client';

import classNames from 'classnames';
import Link from 'next/link';
import Logo from '@/assets/logos/AVIT.DEV.svg';
import PasswordInput from '@/components/PasswordInput';
import { AppDispatch } from '@/store/store';
import { authLogin } from '@/slices/authSlice';
import { IAuth } from '@/models/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState({} as Partial<IAuth>);
  const [email, setEmail] = useState(process.env.NEXT_PUBLIC_DEMO_EMAIL);
  const [password, setPassword] = useState(process.env.NEXT_PUBLIC_DEMO_PASSWORD);

  const onLogin = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessages({
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
      });

      return;
    }

    setIsLoading(true);
    const response = await dispatch(authLogin({ email, password }));
    setIsLoading(false);

    if (response.payload.errors) {
      setErrorMessages(response.payload.errors);

      return;
    }

    router.push('/');
  };

  return (
    <>
      <Logo className='w-16 mb-8 mt-10 sm:mt-0' />

      <form
        onSubmit={onLogin}
        className='rounded-2xl bg-white px-6 py-8 flex flex-col w-96 flex-1 sm:flex-none sm:shadow-lg'
      >
        <div className='bg-[#eff3f9] p-1 rounded-lg grid grid-flow-col gap-1 mb-6'>
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

        <div className='flex flex-col gap-2 mb-10'>
          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='email' className='font-semibold text-sm text-gray-400'>
              Email
            </label>
            <input
              type='email'
              className={classNames({
                'border border-gray-200 px-4 py-2 rounded-xl': true,
                '!border-error': !!errorMessages.email,
              })}
              autoComplete='new-password'
              autoFocus={true}
              tabIndex={0}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMessages.email && (
              <p className='text-error text-sm  absolute right-0 -bottom-5'>{errorMessages.email}</p>
            )}
          </div>

          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='password' className='font-semibold text-sm text-gray-400'>
              Password
            </label>
            <PasswordInput
              isInvalid={!!errorMessages.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessages.password && (
              <p className='text-error text-sm absolute right-0 -bottom-5'>{errorMessages.password}</p>
            )}
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <button
            type='submit'
            className={classNames({
              'w-full bg-primary px-4 py-2 font-bold text-white rounded-lg uppercase mt-auto': true,
              'opacity-80 pointer-events-none': isLoading,
            })}
            onClick={onLogin}
          >
            Login to account
          </button>
          <Link href='/auth/forgot-password' className='text-sm hover:text-primary'>
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  );
}

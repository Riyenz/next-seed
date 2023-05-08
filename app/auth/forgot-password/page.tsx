'use client';

import Logo from '@/assets/logos/AVIT.DEV.svg';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  const router = useRouter();

  const onResetPassword = () => {
    router.push('/auth/login');
  };

  return (
    <>
      <Logo className='w-16 mb-8 mt-10 sm:mt-0' />

      <div className='rounded-2xl bg-white px-6 py-8 flex flex-col gap-6 w-96 flex-1 sm:flex-none sm:shadow-lg'>
        <h1 className='uppercase text-center font-bold'>Forgot Password</h1>

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
          />
        </div>

        <button
          className='bg-primary px-4 py-2 font-bold text-white rounded-lg uppercase mt-auto'
          onClick={onResetPassword}
        >
          Reset password
        </button>

        <a
          className='cursor-pointer text-sm flex items-center justify-center gap-1 hover:text-primary'
          onClick={() => router.back()}
        >
          <FiArrowLeft className='text-lg' />
          Go back
        </a>
      </div>
    </>
  );
}

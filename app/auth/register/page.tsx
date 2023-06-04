'use client';

import Link from 'next/link';
import Logo from '@/assets/logos/AVIT.DEV.svg';
import PasswordInput from '@/components/PasswordInput';
import { AppDispatch } from '@/store/store';
import { authRegister } from '@/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import classNames from 'classnames';
import PhoneNumberInput from '@/components/PhoneNumberInput';
import { Controller, RegisterOptions, useForm } from 'react-hook-form';

export default function Register() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();

  const formValidation: { [key: string]: RegisterOptions } = {
    firstName: {
      required: {
        value: true,
        message: 'First name is required',
      },
    },
    lastName: {
      required: {
        value: true,
        message: 'Last name is required',
      },
    },
    phone: {
      required: {
        value: true,
        message: 'Phone is required',
      },
    },
    email: {
      required: {
        value: true,
        message: 'Email is required',
      },
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format',
      },
    },
    password: {
      required: {
        value: true,
        message: 'Password is required',
      },
    },
  };

  const onRegister = handleSubmit(async (authParams) => {
    setIsLoading(true);
    const response = await dispatch(authRegister(authParams));
    setIsLoading(false);

    const errors = response.payload.errors;

    if (errors) {
      Object.keys(errors).forEach((errorKey) => {
        setError(errorKey, {
          type: 'server',
          message: errors[errorKey],
        });
      });

      return;
    }

    router.push('/');
  });

  return (
    <>
      <Logo className='w-16 mb-8 mt-10 sm:mt-0' />

      <form
        onSubmit={onRegister}
        className='rounded-2xl bg-white px-6 py-8 flex flex-col w-96 flex-1 sm:flex-none sm:shadow-lg'
      >
        <div className='bg-[#eff3f9] p-1 rounded-lg grid grid-flow-col gap-1 mb-6'>
          <Link
            href='/auth/login'
            className='rounded-lg px-2 py-1 uppercase text-center font-bold hover:bg-white hover:bg-opacity-50'
          >
            Log in
          </Link>
          <Link href='/auth/register' className='bg-white rounded-lg px-2 py-1 uppercase text-center font-bold'>
            Regsiter
          </Link>
        </div>

        <div className='flex flex-col gap-2 mb-10'>
          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='firstName' className='font-semibold text-sm text-gray-400'>
              First Name
            </label>
            <input
              {...register('firstName', formValidation.firstName)}
              type='text'
              className={classNames({
                'border border-gray-200 px-4 py-2 rounded-xl w-full': true,
                '!border-error': !!errors.firstName,
              })}
              autoComplete='new-password'
              autoFocus={true}
              tabIndex={0}
            />
            {errors.firstName && (
              <p className='text-error text-sm  absolute right-0 -bottom-5'>{errors.firstName.message}</p>
            )}
          </div>

          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='lastName' className='font-semibold text-sm text-gray-400'>
              Last Name
            </label>
            <input
              {...register('lastName', formValidation.lastName)}
              type='text'
              className={classNames({
                'border border-gray-200 px-4 py-2 rounded-xl w-full': true,
                '!border-error': !!errors.lastName,
              })}
              autoComplete='new-password'
              autoFocus={true}
              tabIndex={0}
            />
            {errors.lastName && (
              <p className='text-error text-sm  absolute right-0 -bottom-5'>{errors.lastName.message}</p>
            )}
          </div>

          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='phone' className='font-semibold text-sm text-gray-400'>
              Phone number
            </label>
            <Controller
              control={control}
              name='phone'
              rules={formValidation.phone}
              render={({ field: { value, onChange } }) => (
                <PhoneNumberInput value={value} onChange={onChange} isInvalid={!!errors.phone} />
              )}
            />
            {errors.phone && <p className='text-error text-sm  absolute right-0 -bottom-5'>{errors.phone.message}</p>}
          </div>

          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='email' className='font-semibold text-sm text-gray-400'>
              Email
            </label>
            <input
              {...register('email', formValidation.email)}
              type='email'
              className={classNames({
                'border border-gray-200 px-4 py-2 rounded-xl': true,
                '!border-error': !!errors.email,
              })}
              autoComplete='new-password'
              autoFocus={true}
              tabIndex={0}
            />
            {errors.email && <p className='text-error text-sm  absolute right-0 -bottom-5'>{errors.email.message}</p>}
          </div>

          <div className='flex flex-col gap-1 relative'>
            <label htmlFor='password' className='font-semibold text-sm text-gray-400'>
              Password
            </label>

            <Controller
              control={control}
              name='password'
              rules={formValidation.password}
              render={({ field: { value, onChange } }) => (
                <PasswordInput value={value} onChange={onChange} isInvalid={!!errors.password} />
              )}
            />
            {errors.password && (
              <p className='text-error text-sm absolute right-0 -bottom-5'>{errors.password.message}</p>
            )}
          </div>
        </div>

        <button
          type='submit'
          className={classNames({
            'w-full bg-primary px-4 py-2 font-bold text-white rounded-lg uppercase mt-auto': true,
            'opacity-80 pointer-events-none': isLoading,
          })}
          onClick={onRegister}
        >
          Register account
        </button>
      </form>
    </>
  );
}

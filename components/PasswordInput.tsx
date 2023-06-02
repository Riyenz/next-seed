import { ChangeEventHandler, useMemo, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import classNames from 'classnames';

export interface IPasswordInputParams {
  value: string;
  onChange: ChangeEventHandler;
  isInvalid: boolean;
}

export default function PasswordInput({ value, onChange, isInvalid }: Partial<IPasswordInputParams>) {
  const [isPassword, setIsPassword] = useState(true);

  const type = useMemo(() => {
    return isPassword ? 'password' : 'text';
  }, [isPassword]);

  return (
    <div className='relative w-full'>
      <input
        type={type}
        className={classNames({
          'border border-gray-200 pl-4 pr-8 py-2 rounded-xl w-full': true,
          '!border-error': isInvalid,
        })}
        autoComplete='new-password'
        value={value}
        onChange={onChange}
      />

      {type === 'password' ? (
        <FiEyeOff
          className='cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 hover:opacity-80'
          onClick={() => setIsPassword(false)}
        />
      ) : (
        <FiEye
          className='cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2 hover:opacity-80'
          onClick={() => setIsPassword(true)}
        />
      )}
    </div>
  );
}

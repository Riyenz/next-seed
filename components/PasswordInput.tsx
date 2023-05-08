import { useMemo, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function PasswordInput({ value, onChange }) {
  const [isPassword, setIsPassword] = useState(true);

  const type = useMemo(() => {
    return isPassword ? 'password' : 'text';
  }, [isPassword]);

  return (
    <div className='relative w-full'>
      <input
        type={type}
        className='border border-gray-200 pl-4 pr-8 py-2 rounded-xl w-full'
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

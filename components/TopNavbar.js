import Icon from './icon';
import Image from 'next/image';

export default function TopNavbar() {
  return (
    <div className='flex items-center mb-12'>
      <h1 className='text-[30px] font-semibold mr-8'>Home</h1>

      <div className='relative rounded-[8px] h-[32px] w-[150px] mr-6'>
        <input
          className='peer h-full w-full rounded-[8px] outline-none text-[12px] bg-[#FDFDFF] border border-[#EBEBEB] pl-9 pr-1 placeholder:text-[#979797] focus:border-[#9e9e9e]'
          type='text'
          placeholder='Search'
        />
        <label className='absolute top-1/2 left-4 transform -translate-y-1/2 text-[#979797] peer-focus:text-[#4F4F4F]'>
          <Icon name='search' />
        </label>
      </div>

      <Icon
        name='bell'
        className='cursor-pointer text-[#979797] hover:text-[#4F4F4F]'
      />

      <p className='ml-auto text-[20px] mr-4'>Anya</p>

      <div className='flex items-center cursor-pointer hover:opacity-90'>
        <div className='rounded-full block mr-2'>
          <Image src='/images/profile.png' width={50} height={50} alt='' />
        </div>

        <Icon name='chevronDown' />
      </div>
    </div>
  );
}

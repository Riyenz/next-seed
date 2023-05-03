import Link from 'next/link';
import { useRouter } from 'next/router';

import Icon from 'components/Icon';
import Logo from 'assets/logos/AVIT.DEV.svg';

export default function Sidebar() {
  const router = useRouter();

  const menus = [
    {
      href: '/',
      icon: 'home',
    },
    {
      href: '/profile',
      icon: 'profile',
    },
    {
      href: '/users',
      icon: 'users',
    },
    {
      href: '/mail',
      icon: 'mail',
    },
    {
      href: '/play',
      icon: 'play',
    },
    {
      href: '/chart',
      icon: 'chart',
    },
    {
      href: '/settings',
      icon: 'cog',
    },
  ];

  return (
    <div className='w-[98px] h-screen fixed top-0 left-0 bg-[#FDFDFF] flex flex-col items-center py-12'>
      <Logo className='w-[42px] mb-20' />

      <div className='flex flex-col space-y-12 items-center w-full'>
        {menus.map((menu, index) => {
          return (
            <Link
              key={index}
              href={menu.href}
              className={[
                'relative group w-full flex justify-center',
                router.pathname === menu.href ? 'text-primary' : 'text-[#DFE6F1] hover:text-primary hover:opacity-70',
              ].join(' ')}
            >
              {router.pathname === menu.href && (
                <span className='bg-primary w-4 h-12 rounded-xl absolute top-1/2 -left-3 transform -translate-y-1/2' />
              )}
              <span className='hidden bg-primary opacity-70 w-4 h-12 rounded-xl absolute top-1/2 -left-3 transform -translate-y-1/2 group-hover:block' />

              <Icon name={menu.icon} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

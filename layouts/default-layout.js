import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { userGetSelf } from 'store/reducers/userReducer';

import Sidebar from 'components/Sidebar';
import TopNavbar from 'components/TopNavbar';

export default function DefaultLayout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => {
    return state.user;
  });

  const getSelf = async () => {
    const response = await dispatch(userGetSelf());

    if (!response.payload) {
      router.push({
        pathname: '/auth/login',
      });
    }
  };

  useEffect(() => {
    if (!user.name) getSelf();
  }, []);

  return (
    <div className='bg-[#EFF3F9] min-h-screen w-screen'>
      <Sidebar />
      <div className='ml-[98px] px-12 py-12'>
        <TopNavbar />
        {children}
      </div>
    </div>
  );
}

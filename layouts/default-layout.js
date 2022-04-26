import Sidebar from 'components/Sidebar';
import TopNavbar from 'components/TopNavbar';

export default function DefaultLayout({ children }) {
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

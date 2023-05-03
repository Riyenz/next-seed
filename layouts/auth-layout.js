export default function AuthLayout({ children }) {
  return (
    <div className='bg-white min-h-screen w-screen flex flex-col items-center sm:justify-center sm:bg-[#EFF3F9]'>
      {children}
    </div>
  );
}

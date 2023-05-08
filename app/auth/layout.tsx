import '@/assets/scss/app.scss';

export const metadata = {
  title: 'Login',
  description: 'User Authentication: Login page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='bg-white min-h-screen w-screen flex flex-col items-center sm:justify-center sm:bg-[#EFF3F9]'>
          {children}

          <div className='flex items-center gap-1 mt-4'>
            <p className='text-sm'>made by</p>
            <a href='https://avit.dev/' rel='noopener noreferrer' target='_blank' className='text-primary font-bold'>
              AVIT.DEV
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

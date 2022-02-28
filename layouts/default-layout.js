export default function DefaultLayout({ children }) {
  return (
    <div className="font-ubuntu h-screen w-screen">
      <main className="h-full w-full">
      {children}
      </main>
    </div>
  );
}

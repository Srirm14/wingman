import '@/styles/globals.scss';
import Header from '@/components/layouts/Header';
import Sidebar from '@/components/layouts/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
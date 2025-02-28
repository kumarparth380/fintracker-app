import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Toaster } from 'sonner';

const Layout = ({ children }: { children: React.ReactElement }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1 lg:pl-[280px]">
      <Header />
      {children}
      <Toaster />
    </div>
  </div>
);

export default Layout;

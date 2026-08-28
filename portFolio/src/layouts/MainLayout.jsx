import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-bg-base">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
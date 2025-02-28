import { Routes, Route } from 'react-router';
import DashboardPage from '@/pages/dashboard';
import SettingsPage from '@/pages/settings';
import PageNotFound from '@/pages/pageNotFound';
import CardsPage from './pages/cards';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

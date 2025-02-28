import { BrowserRouter, Routes, Route } from 'react-router';
import DashboardPage from '@/pages/dashboard';
import SettingsPage from '@/pages/settings';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

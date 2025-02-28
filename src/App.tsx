import './App.css';
import { Sidebar } from '@/components/Sidebar';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import AppRoutes from './Routes';
import { BrowserRouter } from 'react-router';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from './provider/AuthProvider';
import RouterWrapper from './routes/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterWrapper />
    </AuthProvider>
  </StrictMode>
);

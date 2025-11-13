import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AuthProvider } from './provider/AuthProvider';
import RouterWrapper from './routes/Router';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterWrapper />
        <App />
        {/* <RouterProvider router={router} /> */}
        <Toaster position="top-center" reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);

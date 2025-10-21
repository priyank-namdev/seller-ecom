import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/seller/login" /> },
      { path: 'seller/login', element: <Login /> },
      { path: 'seller/register', element: <Register /> },
      { path: 'dashboard', element: <Dashboard /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

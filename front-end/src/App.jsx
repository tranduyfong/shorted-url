import React from 'react';
import Home from './pages/Home';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
import LayoutWebsite from './index';
import StorageUrl from './pages/StorageUrl';
import Cooperate from './pages/Cooperate';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import requireAuthLoader from './utils/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWebsite />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/history", element: <StorageUrl />, loader: requireAuthLoader },
      { path: "/cooperate", element: <Cooperate /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
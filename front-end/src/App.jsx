import React from 'react';
import Home from './pages/Home';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
import LayoutWebsite from './index';
import StorageUrl from './pages/StorageUrl';
import Cooperate from './pages/Cooperate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWebsite />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "/history", element: <StorageUrl /> },
      { path: "/cooperate", element: <Cooperate /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
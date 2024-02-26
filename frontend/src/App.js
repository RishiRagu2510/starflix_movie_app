import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import 'swiper/css';
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn1';
import SignUp from './pages/SignUp1';
import Details from './pages/details';
function App() {
  const Layout = () => {
    return (
      <div>
        <Outlet />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", // Set SignIn as the default route
          element: <SignIn />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/SignIn",
          element: <SignIn />
        },
        {
          path: "/SignUp",
          element: <SignUp />
        },
        {
          path: "/details/:id",
          element: <Details/>
        }
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

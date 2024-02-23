//Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Swiper styles
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import 'swiper/css';
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn1';
import SignUp from './pages/SignUp1';

function App() {
  const Layout=()=>{
    return(
      <div>
        <Outlet/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/SignIn",
          element:<SignIn/>
        },
        {
          path:"/SignUp",
          element:<SignUp/>
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
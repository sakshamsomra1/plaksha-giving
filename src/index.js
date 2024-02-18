import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Areastogive from './Pages/Areastogive';
import Home from './Pages/Home';
import Howtogive from './Pages/Howtogive';
//main
const router = createBrowserRouter([
{
  path:"/",
  element:<App />,
  children:[
   
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/areas-to-give",
          element:<Areastogive />,
        },
        {
          path:"/how-to-give",
          element:<Howtogive />,
        }
      ]
    }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



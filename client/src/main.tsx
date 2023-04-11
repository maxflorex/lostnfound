import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './routes/Home';
import Error from './routes/Error';
import 'remixicon/fonts/remixicon.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  // {
  //   path: '/reset-password',
  //   element: <ResetPassword />,
  //   errorElement: <Error />
  // }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

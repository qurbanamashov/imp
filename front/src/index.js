import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Add from './Pages/Add/Add';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import "./Resset/resset.scss"
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  },
  {
    path: "/add",
    element: <Add/>,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


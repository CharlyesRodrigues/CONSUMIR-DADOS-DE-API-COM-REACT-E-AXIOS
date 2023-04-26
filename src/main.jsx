import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import "../src/index.css";

// Páginas o rotas do meu projeto

import { Home } from './routes/home/home.jsx';
import { NewPost } from './routes/newPost/newPost.jsx';
const router = createBrowserRouter([

{
  element: <App />,
  children: [
{
path:'/',
element: <Home />,
},

{
path:'/new',
element: <NewPost />,
},
  ],
  
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

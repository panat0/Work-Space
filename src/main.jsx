import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './index.css'
import Profile from './Profile.jsx'
import ChatApp from './ChatPage.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element:<App/>

  },

  {
    path: 'Profile',
    element:<Profile/>

  },
  {
    path: 'ChatApp',
    element:<ChatApp/>

  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
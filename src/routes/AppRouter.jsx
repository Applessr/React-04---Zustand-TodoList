import React, { Children } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
import Header from '../pages/Header'
import TodoList from '../pages/TodoList'
import About from '../pages/About'
import Login from '../pages/Login'


const guestRouter = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <Header/>
                <Outlet />
            </div>
        ),
        children: [
            {path: '', element : <TodoList/>},
            {path: 'about', element: <About/>},
            {path: 'Login', element: <Login/>}
        ]
    }
])
function AppRouter() {
  return (
    <div>
      <RouterProvider router={guestRouter} />
    </div>
  )
}

export default AppRouter

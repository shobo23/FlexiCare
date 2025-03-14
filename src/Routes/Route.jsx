import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import SignUp from '../Pages/Auth/SignUp'
import Services from '../Pages/Services'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    // {
    //     path: '/services',
    //     element: <Services />
    // },
    // {
    //     path: '/userDetails',
    //     element: <UserDetail />
    // },
    // {
    //     path: '/updateUser',
    //     element: <UpdateUser />
    // },
])


export default router
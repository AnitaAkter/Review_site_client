import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from './Blog';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Main from '../Layout/Main';
import Login from './Login';
import Register from './Register';
import SingleProduct from './SingleProduct';
import Products from './Products';
import AddProduct from './AddProduct';
import MyAllReview from './MyAllReview';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
            {
                path: '/add',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/myallreviews',
                element: <PrivateRoute><MyAllReview></MyAllReview></PrivateRoute>,
            },
            {
                path: '/singleProduct/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`https://newserver-anitaakter.vercel.app/singleProduct/${params.id}`)
            },

        ]
    }
])


export default router;
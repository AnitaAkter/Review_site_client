import React, { useContext } from 'react';
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from '../Context/AuthProvider';
import AddReview from './AddReview';
import MyReviews from './MyReviews';

const SingleProduct = () => {
    const productDetails = useLoaderData();
    const { user } = useContext(AuthContext)
    const { imgLink, productName, description } = productDetails

    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <div className="flex space-x-2 sm:space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                            </svg>
                            <div className="space-y-2">
                                <p className="text-lg font-medium leading-snug">{productName}</p>
                                <p className="leading-snug">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src={imgLink} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center'>
                    {
                        user?.displayName ? <>
                            <div>
                                <h1 className='text-4xl font-bold'>Add Your Review</h1>
                                <AddReview productDetails={productDetails} ></AddReview>


                            </div>
                        </> : <>
                            <h1 className='text-4xl font-bold'>Please Log In to add Your Review</h1>
                            <Link to={'/login'}>
                                <button className='btn btn-primary'> Log In</button>
                            </Link>
                        </>
                    }
                    <div>
                        <h1 className='text-4xl font-bold'>Review Section</h1>
                        <MyReviews></MyReviews>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProduct;
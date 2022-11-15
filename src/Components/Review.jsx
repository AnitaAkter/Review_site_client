import React from 'react';

const Review = ({ review }) => {
    const { title, serviceID, reviewUser, details, reviewerImage } = review
    return (
        <div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400 border">
                <div className='flex justify-center'>
                    <p className='text-xl mt-2'>Reviwer: {reviewUser}</p>
                    <img className='w-12 h-12 rounded-full' src={reviewerImage} alt="" />

                </div>
                <p>Product: {title}</p>
                <p>Review: {details}</p>
                <p>ID: {serviceID}</p>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from "react-router-dom"

const GadgetDetails = ({ gadget }) => {

    return (
        <PhotoProvider>
            <div className='mx-10 my-10'>
                <div className="card h-96 card-side bg-base-100 shadow-xl">
                    <PhotoView src={gadget.imgLink}>
                        <figure>

                            <img className='p-2' src={gadget.imgLink} alt="" />

                        </figure>
                    </PhotoView>
                    <div className="card-body">
                        <h2 className="card-title">{gadget.productName}</h2>
                        <p>{gadget.description?.length > 100 ? gadget.description.slice(0, 100) + '...' : gadget.description}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/singleProduct/${gadget._id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider >
    );
};

export default GadgetDetails;
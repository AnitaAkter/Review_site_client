import React, { useState } from 'react';
import swal from 'sweetalert';

const SRev = ({ sRev }) => {
    const { _id, title,  reviewUser, details, reviewerImage } = sRev;
    const [rev, setRev] = useState([])

    const handleDelete = (_id) => {
        const confirm = window.confirm("Do You Want to Delete this Review?")
        if (confirm) {
            fetch(`https://newserver-anitaakter.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Deleted Successfully")
                        const rest = rev.filter(rRev => rRev._id !== _id)
                        setRev(rest)
                    }
                })
        }
    }
    const handleUpdate = (_id) => {
        const confirm = window.confirm("Do You Want to Update this Review?")
        if (confirm) {
            fetch(`https://newserver-anitaakter.vercel.app/reviews/${_id}`, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.updatedCount > 0) {
                        swal("Updated Successfully")
                        const rest = rev.filter(rRev => rRev._id !== _id)
                        setRev(rest)
                    }
                })
        }
    }
    return (
        <div className='mt-2'>
            <div className="card-body  items-center text-center ">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className='flex justify-center'>
                    <p className='text-xl mt-2'>Reviwer: {reviewUser}</p>
                    <img className='w-12 h-12 rounded-full' src={reviewerImage} alt="" />

                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    <button onClick={() => handleUpdate(_id)} className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default SRev;
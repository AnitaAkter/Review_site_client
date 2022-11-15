import React, { useEffect, useState } from 'react';
import SRev from './SRev';

const MyAllReview = () => {
    const [rev, setRev] = useState([])
    useEffect(() => {
        fetch('https://newserver-anitaakter.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setRev(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            <div className="card w-96 bg-gray-400 text-neutral-content border">
                {
                    rev.map(sRev => <SRev key={sRev._id} sRev={sRev}> </SRev>)
                }
            </div>
        </div>
    );
};

export default MyAllReview;
import React, { useEffect, useState } from 'react';
import GadgetDetails from './GadgetDetails';
import { Link } from "react-router-dom"

const MblHome = () => {
    const [mbl, setMbl] = useState([])

    useEffect(() => {
        fetch('https://newserver-mu.vercel.app/productslimit')
            .then(res => res.json())
            .then(data => setMbl(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl">Need Mobiles and Gadget?</h1>
                <p>You can Find All in One Place</p>
            </div>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                {
                    mbl.map(gadget => <GadgetDetails key={gadget._id} gadget={gadget}></GadgetDetails>)
                }

            </div>
            <div className='grid justify-center text-center items-center'>
                <Link to={'/products'}>
                    <button className='btn btn-primary' >See All</button>
                </Link>
            </div>
        </div>
    );
};

export default MblHome;
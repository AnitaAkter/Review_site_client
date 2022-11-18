import React, { useEffect, useState } from 'react';
import GadgetDetails from './GadgetDetails';

const Products = () => {
    const [mbl, setMbl] = useState([])
    useEffect(() => {
        fetch(`https://newserver-mu.vercel.app/products`)
            .then(res => res.json())
            .then(data => setMbl(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {
                mbl.map(gadget => <GadgetDetails key={gadget._id} gadget={gadget}></GadgetDetails>)
            }
        </div>
    );
};

export default Products;
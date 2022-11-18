import React from 'react';
import Banner from './Banner';
import Clients from './Clients';
import Feature from './Feature';
import MblHome from './MblHome';

const Home = () => {
    return (
        <div className='mx-20'>
            <Banner></Banner>
            <MblHome></MblHome>
            <Feature></Feature>
            <Clients></Clients>
        </div>
    );
};

export default Home;
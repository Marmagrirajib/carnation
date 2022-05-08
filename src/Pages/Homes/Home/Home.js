import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Inventories from '../Inventories/Inventories';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Inventories></Inventories>
            <Feature></Feature>
            <Popular></Popular>

        </div>
    );
};

export default Home;
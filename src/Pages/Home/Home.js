import React from 'react';
import Banner from './Banner';
import './Home.css';
import Package from './Package/Package';

const Home = () => {
    return (
        <div>
            <Banner />
            <Package />
        </div>
    );
};

export default Home;
import React from 'react';
import Banner from './Banner';
import Blog from './Blog/Blog';
import './Home.css';
import Package from './Package/Package';
import Review from './Review/Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Package />
            <Blog />
            <Review />
        </div>
    );
};

export default Home;
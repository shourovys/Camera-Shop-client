import React from 'react';
import Features from '../components/home/Features';
import Hero from '../components/home/Hero';
import Products from '../components/home/Products';
import Review from '../components/home/Review';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Products limited/>
            <Features/>
            <Review />
        </div>
    );
};

export default Home;
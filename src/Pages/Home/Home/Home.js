import React from 'react';
import Expert from '../Expert/Expert';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;
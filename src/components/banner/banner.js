import React from 'react';
import './banner.scss'
import CountdownCounter from '../countdownCounter/countdownCounter';
import NextLaunchDetails from '../nextLaunchDetails/nextLaunchDetails';
// import Button from '../button/button';

const Banner = () => {

    return <section className="page-banner">
        <div className="page-banner-container">
            <CountdownCounter></CountdownCounter>
        </div>
    </section>
}

export default Banner;
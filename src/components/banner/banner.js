import React from 'react';
import './banner.scss'
import CountdownCounter from '../countdownCounter/countdownCounter';
import NextLaunchDetails from '../nextLaunchDetails/nextLaunchDetails';
// import Button from '../button/button';

const Banner = () => {

    return <section className="page-banner">
        <div className="page-banner-container">
            <CountdownCounter></CountdownCounter>
            {/* <NextLaunchDetails></NextLaunchDetails> */}
            {/*
            - contains image background photo for the banner (done)
            - contains countdown counter which displays how much time left to the next rocket launch - based on data from API -> it should be a separate component
            - contains button 'More details' - after clicking displays more info about the rocket launch mission -> it should be a separate component            
            */}
        </div>
    </section>
}

export default Banner;
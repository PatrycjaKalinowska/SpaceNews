import React, { useState, useEffect } from 'react';
import './countdownCounter.scss';
import Button from '../button/button';
import NextLaunchDetails from '../nextLaunchDetails/nextLaunchDetails';

const CountdownCounter = () => {
    const [nextLaunchTime, setNextLaunchTime] = useState(null);
    const [timeNow, setTimeNow] = useState(new Date);
    const [countdownTime, setCountdownTime] = useState(null);
    const [missionDetailsClicked, setMissionDetailsClicked] = useState(false);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v4/launches/next')
            .then(response => {
                return response.json();           
            }).then(nextLaunch => setNextLaunchTime(nextLaunch.date_unix*1000))
    }, []);

    useEffect(() => {
        setCountdownTime(((nextLaunchTime - timeNow)/1000).toFixed(0));
    }, [nextLaunchTime]);

    useEffect(() => {
        const countdownIntervalID = setInterval(() => {
            setCountdownTime(prevCountdownTime => prevCountdownTime - 1)
            }, 1000);
        
            return () => {
                clearInterval(countdownIntervalID);
            }
    }, [countdownTime]);

    const formatCountdownTime = (sec) => {
        let formatedTime = "";
        let days = Math.floor(sec / 86400);
        let hours = Math.floor((sec % 86400) / 3600);
        let minutes = Math.floor(((sec % 86400) % 3600) / 60);
        let seconds = (((sec % 86400) % 3600) % 60);

        formatedTime = `${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`;
        return formatedTime;
    }



    // const handleMoreDetailsClick = (clicked, e) => {
    //     // e.preventDefault();
    //     console.log('More details Clicked');
    //     if (clicked === false) {
    //         setMissionDetails(false);
    //     } else {
    //         setMissionDetails(true);
    //     }
    // }

    // let displayMissionDetails;

    //     if (missionDetails === false) {
    //         displayMissionDetails = null;
    //     } else displayMissionDetails = <NextLaunchDetails/>

    const displayMissionDetails = () => {
        console.log('Click :)')
        setMissionDetailsClicked(!missionDetailsClicked);
    }


    return <div className='countdown-counter'>
        <span className='countdown-counter-text'>Next launch in</span>
        <span className='countdown-counter-time'>{formatCountdownTime(countdownTime)}</span>
        {/* ostylowac buttona! */}
        <button className='moredetails-banner-button' onClick={displayMissionDetails}>Mission details</button>
        {missionDetailsClicked && <NextLaunchDetails/>}
    </div>
}

export default CountdownCounter;

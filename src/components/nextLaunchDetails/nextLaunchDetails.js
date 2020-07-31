import React, { useState, useEffect }from 'react';
import "./nextLaunchDetails.scss";
import NextLaunchPad from '../nextLaunchDetails/nextLaunchPad';

const NextLaunchDetails = () => {
    const [nextLaunchInfo, setNextLaunchInfo] = useState(null);
    const [nextLaunchName, setNextLaunchName] = useState(null);
    const [nextLaunchDescription, setNextLaunchDescription] = useState(null);
    // const [nextLaunchPad, setNextLaunchPad] = useState(null);
    // const [nextLaunchPadDetails, setNextLaunchPadDetails] = useState(null);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/next')
        .then(response => {
            return response.json();           
        }).then(nextLaunchName => setNextLaunchName(nextLaunchName.name))
    }, []);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/next')
        .then(response => {
            return response.json();           
        }).then(nextLaunchDetails => setNextLaunchDescription(nextLaunchDetails.details))
    }, []);

    // useEffect(() => {
    //     fetch('https://api.spacexdata.com/v4/launches/next')
    //     .then(response => {
    //         return response.json();           
    //     }).then(nextLaunchPad => setNextLaunchPad(nextLaunchPad.launchpad))
    // }, []);


    return <div className='next-launch-info'>
        <h1 className='next-launch-name'>{nextLaunchName}</h1>
        <p className='next-launch-description'>{nextLaunchDescription}</p>
    </div>
}

export default NextLaunchDetails;
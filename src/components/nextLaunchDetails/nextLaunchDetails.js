import React, { useState, useEffect }from 'react';
import "./nextLaunchDetails.scss";
import NextLaunchPad from '../nextLaunchDetails/nextLaunchPad';

const NextLaunchDetails = () => {
    const [nextLaunchInfo, setNextLaunchInfo] = useState(null);
    const [nextLaunchName, setNextLaunchName] = useState(null);
    const [nextLaunchDetails, setNextLaunchDetails] = useState(null);
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
        }).then(nextLaunchDetails => setNextLaunchDetails(nextLaunchDetails.details))
    }, []);

    // useEffect(() => {
    //     fetch('https://api.spacexdata.com/v4/launches/next')
    //     .then(response => {
    //         return response.json();           
    //     }).then(nextLaunchPad => setNextLaunchPad(nextLaunchPad.launchpad))
    // }, []);


    return <div className='next-launch-info'>
        {nextLaunchName, nextLaunchDetails}
        {/* <h1>{nextLaunchPad}</h1> */}
        {/* <NextLaunchPad launchPadId={nextLaunchPad}></NextLaunchPad> */}
    </div>
}

export default NextLaunchDetails;
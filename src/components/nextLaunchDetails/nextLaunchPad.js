import React, { useState, useEffect } from 'react';

const NextLaunchPad = ( { launchPadId }) => {

    const [nextLaunchPadDetails, setNextLaunchPadDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api.spacexdata.com/v4/launchpads/:5e9e4501f509094ba4566f84`)
        .then(response => {
            return response.json();           
        }).then(nextLaunchPadDetails => setNextLaunchPadDetails(nextLaunchPadDetails.full_name))
    }, []);

    return <h1>
        {nextLaunchPadDetails}
    </h1>
}

export default NextLaunchPad;
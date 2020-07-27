import React, { useState } from 'react';
import './button.scss';


const Button = ( {handleMoreDetailsClick} ) => {
    const [clicked, setClicked] = useState(false);

    // const handleClick = () => {
    //     if (typeof handleMoreDetailsClick === 'function') {
    //         if (clicked === false) {
    //             setClicked(true);
    //             console.log("More details TRUE");
    //         } else {
    //             setClicked(true);
    //             console.log("More details FALSE");
    //         }
    //     }
    // }

    //poniższe działa
    const handleClick = (e) => {
            console.log('More details Clicked');
            if (clicked === false) setClicked(true);
            else setClicked(false);
    }
    //poniższe działa
    return <button className='banner-button' onClick={e => handleClick(e)}>Mission details</button>

    // return <button className='banner-button' onClick={e => handleClick(e)}>Mission details</button>



}

export default Button;
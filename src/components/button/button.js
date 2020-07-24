import React from 'react';
import './button.scss';


const Button = () => {

    const handleClick = () => {
        console.log('click');
    }

    return <button className='banner-button' onClick={handleClick}>Mission details</button>
}

export default Button;
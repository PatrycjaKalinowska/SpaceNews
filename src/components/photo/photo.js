import React, { useState } from 'react';
import './photo.scss';

const Photo = ( {clickedPicIndex, photos } ) => {

    return <div className='full-size-photo-div'>
        <img className='full-size-photo-img' src={photos[clickedPicIndex]}/>
    </div>
}

export default Photo;
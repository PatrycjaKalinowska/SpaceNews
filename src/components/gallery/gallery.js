import React, { useState } from 'react';
import './gallery.scss';
import Wrapper from '../wrapper/wrapper';
import Photo from '../photo/photo';

const Gallery = () => {
    const [currentPicIndex, setCurrentPicIndex] = useState(null);
    const picList = [
        "https://spaceholder.cc/800x600",
        "https://spaceholder.cc/400x600",
        "https://spaceholder.cc/800x400",
        "https://spaceholder.cc/500x600",
        "https://spaceholder.cc/500x500",
        "https://spaceholder.cc/600x600"
    ]
    
    
    const displayPic = (elSrc, index) => {
        return (
            <div onClick={ e => displayFullSizePic(e, index)}>
                <img src={elSrc} key={elSrc} alt='space-pic'></img>
            </div>
        )
    }

    const displayFullSizePic = (e, index) => {
        console.log('pic', index);
        setCurrentPicIndex(index);
    }


    return <section id='gallery-id' className='gallery-section'>
        <Wrapper>
            <h1 className='gallery-header'>Space Photos Gallery</h1>
            <div className='gallery-grid'>
                {picList.map(displayPic)}
            </div>
            {currentPicIndex !== null && <Photo clickedPicIndex={currentPicIndex} photos={picList} />}
        </Wrapper>
    </section>
}

export default Gallery;
import React, { useState } from 'react';
import './gallery.scss';
import Wrapper from '../wrapper/wrapper';

const Gallery = () => {
    const [currentPicIndex, setCurrentPicIndex] = useState(null);
    const picList = [
        "https://spaceholder.cc/800x600",
        "https://spaceholder.cc/600x600",
        "https://spaceholder.cc/800x600",
        "https://spaceholder.cc/600x600",
        "https://spaceholder.cc/800x600",
        "https://spaceholder.cc/600x600"
    ]
    
    
    const displayPic = (elSrc, index) => {
        return (
            <div onClick={ (e) => this.setOpenPicIndex(e, index)}>
                <img src={elSrc} key={elSrc} alt='space-pic'></img>
            </div>
        )
    }

    const setOpenPicIndex = (index) => {
        setCurrentPicIndex(index);
    }

    // const setClosePicIndex = () => {
    //     setCurrentPicIndex(null);
    // }

    // const setPrevPicIndex = () => {
    //     setCurrentPicIndex(currentPicIndex - 1);
    // }

    // const setNextPicIndex = () => {
    //     setCurrentPicIndex(currentPicIndex + 1);
    // }


    return <section id='gallery-id' className='gallery-section'>
        <Wrapper>
            <h1 className='gallery-header'>Awsome Space Photos Gallery</h1>
            <div className='gallery-grid'>
                {picList.map(displayPic)}
            </div>
        </Wrapper>
    </section>
}

export default Gallery;
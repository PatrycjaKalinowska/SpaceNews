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

    const setClosePicIndex = () => {
        setCurrentPicIndex(null);
    }

    const setPrevPicIndex = () => {
        setCurrentPicIndex(currentPicIndex - 1);
    }

    const setNextPicIndex = () => {
        setCurrentPicIndex(currentPicIndex + 1);
    }


    return <section className='gallery-section'>
        <Wrapper>
            <h1>Awsome Space Photos Gallery</h1>
            <div className='gallery-grid'>
                {picList.map(displayPic)}
            </div>
            <div> 
                {/* <div className='close-gallery-overlay' onClick={setClosePicIndex}></div> */}
                <div  className='gallery-navigation'>
                    <div className='gallery-navigation-buttons'>
                        <a href='#' className='close-button' onClick={setClosePicIndex}>close</a>
                        { 
                            currentPicIndex > 0 && <a href='#' className='prev-button' onClick={setPrevPicIndex}>prev</a>
                        }
                        {
                            currentPicIndex+1 < picList.length && <a href='#' className='next-button' onClick={setNextPicIndex}>next</a>
                        }
                        <img src={picList[currentPicIndex]} alt="current_pic"></img>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
}

export default Gallery;
import React, { useState, useEffect } from 'react';
import './photo.scss';

const Photo = ( {clickedPicIndex, photos } ) => {
    const [currentPIcIndex, setCurrentPicIndex] = useState(clickedPicIndex);
    const [closeButtonClicked, setCloseButtonClicked] = useState(false);

    const handleCloseButtonClick = (e) => {
        e.preventDefault();
        console.log('close :)', currentPIcIndex);
        setCurrentPicIndex(-1);
    }

    useEffect(() => {
        return setCurrentPicIndex(clickedPicIndex);
    }, [clickedPicIndex]);

    const handlePrevButtonClick = (e) => {
        e.preventDefault();
        console.log('prev :)', currentPIcIndex);

        if (currentPIcIndex > 0) {
            setCurrentPicIndex(currentPIcIndex - 1);
        }
    }

    const handleNextButtonClick = (e) => {
        e.preventDefault();
        console.log('next :)', currentPIcIndex);

        if (currentPIcIndex < photos.length-1) {
            setCurrentPicIndex(currentPIcIndex + 1);
        }
    }


    if (currentPIcIndex < 0) {
        return null;
    } else {
        return <div className='full-size-photo-div'>
                <div className='full-size-photo-container'>
                    <button className='photo-button close-full-size-photo-button' onClick={e => handleCloseButtonClick(e)}>Close</button>
                    {currentPIcIndex !== 0 && <button className='photo-button prev-full-size-photo-button' onClick={e => handlePrevButtonClick(e)}>Prev</button>}
                    {currentPIcIndex < photos.length-1 && <button className='photo-button next-full-size-photo-button' onClick={e => handleNextButtonClick(e)}>Next</button>}
                    <img className='full-size-photo-img' src={photos[currentPIcIndex]}/>
                </div>
            </div>

    }

    // if (closeButtonClicked === true) {
    //     return null;
    // } else if (!closeButtonClicked) {
    //     return <div className='full-size-photo-div'>
    //             <div className='full-size-photo-container'>
    //                 <button className='photo-button close-full-size-photo-button' onClick={e => handleCloseButtonClick(e)}>Close</button>
    //                 {currentPIcIndex !== 0 && <button className='photo-button prev-full-size-photo-button' onClick={e => handlePrevButtonClick(e)}>Prev</button>}
    //                 {currentPIcIndex < photos.length-1 && <button className='photo-button next-full-size-photo-button' onClick={e => handleNextButtonClick(e)}>Next</button>}
    //                 <img className='full-size-photo-img' src={photos[currentPIcIndex]}/>
    //             </div>
    //         </div>

    // }


}

export default Photo;
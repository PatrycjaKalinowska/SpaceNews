import React, { useState, useEffect } from 'react';
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
        "https://spaceholder.cc/500x700",
        "https://spaceholder.cc/400x800",
        "https://spaceholder.cc/600x600"
    ]

    const [picListNASA, setPicListNASA] = useState(null);

    // useEffect(() => {
    //     fetch('https://images-api.nasa.gov/asset/as11-40-5874')
    //     .then(response => {
    //         return response.json();           
    //     }).then(images => setPicListNASA(images.collection.items))
    // }, []);

    useEffect(() => {

        //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=dy4Aanh5wBzCivETsMPjAiJd3MfouSjFNACJGQm1
        //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-6-3&page=1&api_key=dy4Aanh5wBzCivETsMPjAiJd3MfouSjFNACJGQm1')
        .then(response => {
            return response.json();           
        }).then(images => setPicListNASA(images.photos))
    }, []);
    
    
    console.log(picListNASA);
    
    const displayPic = (elSrc, index) => {
        return (
            <div onClick={ e => displayFullSizePic(e, index)}>
                {/* <img src={elSrc} key={index} alt='space-pic'></img> */}
                <img src={elSrc.img_src} key={index} alt='space-pic'></img>
            </div>
        )
    }

    const displayFullSizePic = (e, index) => {
        console.log('pic', index);
        setCurrentPicIndex(index);
    }


    return <section id='gallery-id' className='gallery-section'>
        <Wrapper>
            <h1 className='gallery-header'>Daily photos from Mars Rover</h1>
            <h2 className='gallery-header-secondary'>Choose Earth date and enjoy the daily Mars photos!</h2>
            <label className='gallery-input-label'>Enter Earth date:
                <input className='gallery-input'></input>
            </label>
            {picListNASA && <div className='gallery-grid'>
                {picListNASA.map(displayPic)}
            </div>}
            {currentPicIndex !== null && <Photo clickedPicIndex={currentPicIndex} photos={picListNASA} />}

            
            {/* <div className='gallery-grid'>
                {picList.map(displayPic)}
            </div> */}
            {/* {currentPicIndex !== null && <Photo clickedPicIndex={currentPicIndex} photos={picList} />} */}
        </Wrapper>
    </section>
}

export default Gallery;
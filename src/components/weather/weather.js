import React, { useState, useEffect } from 'react';
import './weather.scss';
import Wrapper from '../wrapper/wrapper';

const Weather = () => {
    const [weatherInfo, setWeatherInfo] = useState("");
    let weatherInfoTable;

    useEffect(() => {
        fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
            .then(response => {
                return response.json();           
            }).then(weather => setWeatherInfo(weather));
            
    }, []);

    //converting the object with weather data to more useful form - array with separate object for each Sol
    //chyba trzeba to wsadzić do state jednak :/
    useEffect(() => {
        weatherInfoTable = Object.entries(weatherInfo).filter((el) => {
            if (el[0] !== 'sol_keys' && el[0] !== "validity_checks") return el;           
        });

        for (let el of weatherInfoTable) {
            console.log(el);
        }

    }, [weatherInfo]);

    return <section className='weather'>  
        <Wrapper>
            <div className="current-weather-example">
                {/* no i czemu tutaj weatherInfoTable jest undefined? :/ */}
                {/* {weatherInfoTable.map((el, index) => (<span key={index}>{el[1].AT.av}</span>))} */}
            </div>
        </Wrapper>
            
    </section>
}

export default Weather;
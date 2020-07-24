import React, { useState, useEffect } from 'react';
import './weather.scss';

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
    useEffect(() => {
        weatherInfoTable = Object.entries(weatherInfo).filter((el) => {
            if (el[0] !== 'sol_keys' && el[0] !== "validity_checks") return el;           
        });

        for (let el of weatherInfoTable) {
            console.log(el);
        }

    }, [weatherInfo]);

    return <section className='weather'>  
        {/* {weatherInfoTable.map((el) => <span>{el[1].Season}</span>)} */}
            
    </section>
}

export default Weather;
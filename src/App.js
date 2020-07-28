import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Wrapper from './components/wrapper/wrapper';
import Weather from './components/weather/weather';
import Gallery from './components/gallery/gallery';


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Gallery></Gallery>
      {/* <Weather></Weather> */}
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Wrapper from './components/wrapper/wrapper';
import Weather from './components/weather/weather';


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Weather></Weather>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Wrapper from './components/wrapper/wrapper';
import Weather from './components/weather/weather';
import Gallery from './components/gallery/gallery';
import Articles from './components/articles/articles';
import Article from './components/article/article';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Articles>
        <Article></Article>
        <Article></Article>
        <Article></Article> 
      </Articles>
      <Gallery></Gallery>
      <Footer></Footer>
      {/* <Weather></Weather> */}
    </div>
  );
}

export default App;

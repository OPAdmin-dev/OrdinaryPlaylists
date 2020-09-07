import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Hamburger from "./Components/Hamburger"
import Banner from "./Components/Banner"
import Story from "./Components/Story"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Hamburger/>
      <Banner/>
      <Story/>
      <Footer/>
    </div>
  );
}

export default App;

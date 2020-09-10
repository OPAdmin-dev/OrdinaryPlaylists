import React from 'react';
import './App.scss';
import Hamburger from "./Components/Hamburger"
import Banner from "./Components/Banner"
import StoryViewer from "./Components/StoryViewer"
import StoryShared from "./Components/StoryShared"
import Story from "./Components/Story"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Hamburger/>
      <Banner/>
      <StoryViewer/>
      <StoryShared/>
      <Story/>
      <Footer/>
    </div>
  );
}

export default App;

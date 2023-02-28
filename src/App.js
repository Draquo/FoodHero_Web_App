import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import WhoAreYou from './components/WhoAreYou';
import Foodlist from './components/Foodlist';
import Contact from './components/Contact';
import WhoWeAre from './components/WhoWeAre';
import Map from './components/Map';


function App() {
  const [isDisplayWhoWeAreTab, setDisplayWhoWeAreTab] = useState(false)

  return (
    <div className="App">
      <Header isDisplayWhoWeAreTab={isDisplayWhoWeAreTab} setDisplayWhoWeAreTab={setDisplayWhoWeAreTab} />
      {!isDisplayWhoWeAreTab && <About />}
      {isDisplayWhoWeAreTab && <WhoWeAre />}
      {isDisplayWhoWeAreTab && <Map />}
      {!isDisplayWhoWeAreTab && <WhoAreYou />}
      {!isDisplayWhoWeAreTab && <Foodlist />}
      {!isDisplayWhoWeAreTab && <Contact  />}
    </div>
  );
}

export default App;

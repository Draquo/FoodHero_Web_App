import './App.css';
import Header from './components/Header';
import About from './components/About';
import WhoAreYou from './components/WhoAreYou';
import Foodlist from './components/Foodlist';
import Contact from './components/Contact';
import Donate from './components/Donate';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WhoAreYou />
      <Foodlist />
      <Contact />
      <Donate />
    </div>
  );
}

export default App;

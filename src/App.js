import './App.css';
import Header from './components/Header';
import About from './components/About';
import WhoAreYou from './components/WhoAreYou';
import Foodlist from './components/Foodlist';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WhoAreYou />
      <Foodlist />
      <Contact />
    </div>
  );
}

export default App;

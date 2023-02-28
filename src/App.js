import './App.css';
import Header from './components/Header';
import About from './components/About';
import WhoAreYou from './components/WhoAreYou';
import Foodlist from './components/Foodlist';
import Contact from './components/Contact';

function App() {
  let mock = { category: 'Dry legume seeds', quantity: 3 }
  let mock2 = { category: 'other category', quantity: 5 }
  let arr = [mock, mock2]

  return (
    <div className="App">
      <Header />
      <About />
      <WhoAreYou />
      <Foodlist />
      <Contact summary = {arr}/>
    </div>
  );
}

export default App;

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
  const [foodDonation, setFoodDonation] = useState({});
  const [listOfAllAlreadyAddedFoodDonations, setListOfAllAlreadyAddedFoodDonations] = useState([]);

  function handleInput(event, category, unit) {
    setFoodDonation({
      category: category,
      quantity: parseInt(event.target.value),
	  unit: unit
    });
  }

  function findIndexOfAlreadyAddedFood(category) {
    return listOfAllAlreadyAddedFoodDonations.findIndex(
      (food) => food.category === category
    );
  }

  function handleClick(category) {
    if (findIndexOfAlreadyAddedFood(category) !== -1) {
      listOfAllAlreadyAddedFoodDonations[
        findIndexOfAlreadyAddedFood(category)
      ].quantity = parseInt(foodDonation.quantity);
      setListOfAllAlreadyAddedFoodDonations(listOfAllAlreadyAddedFoodDonations);
      return;
    }
    setListOfAllAlreadyAddedFoodDonations((prevList) => [
      ...prevList,
      foodDonation,
    ]);
  }

  return (
    <div className="App">
      <Header isDisplayWhoWeAreTab={isDisplayWhoWeAreTab} setDisplayWhoWeAreTab={setDisplayWhoWeAreTab} />
      {!isDisplayWhoWeAreTab && <About />}
      {isDisplayWhoWeAreTab && <WhoWeAre />}
      {isDisplayWhoWeAreTab && <Map />}
      {!isDisplayWhoWeAreTab && <WhoAreYou />}
      {!isDisplayWhoWeAreTab && <Foodlist
        handleClick={handleClick}
        handleInput={handleInput}
        />}
      {!isDisplayWhoWeAreTab && <Contact summary = {listOfAllAlreadyAddedFoodDonations} />}
      </div>
  );
}

export default App;
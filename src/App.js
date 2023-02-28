import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import WhoAreYou from "./components/WhoAreYou";
import Foodlist from "./components/Foodlist";
import Contact from "./components/Contact";

function App() {
  const [foodDonation, setFoodDonation] = useState({});
  const [listOfAllAlreadyAddedFoodDonations, setListOfAllAlreadyAddedFoodDonations] = useState([]);
  const [customerPrivate, setCustomerPrivate] = useState(false);

  function handleInput(event, category, unit) {
    setFoodDonation({
      category: category,
      quantity: parseInt(event.target.value),
	  unit: unit
    });
  }

console.log(listOfAllAlreadyAddedFoodDonations)

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

  function togglePrivateCustomer() {
    setCustomerPrivate(prevCustomerPrivate => !prevCustomerPrivate);
  }

  return (
    <div className="App">
      <Header />
      <About />
      <WhoAreYou togglePrivateCustomer={togglePrivateCustomer}/>
      {customerPrivate && <Foodlist        
        handleClick={handleClick}
        handleInput={handleInput}
      />}
      <Contact />
    </div>
  );
}

export default App;
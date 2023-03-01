import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import WhoAreYou from "./components/WhoAreYou";
import Foodlist from "./components/Foodlist";
import Contact from "./components/Contact";

function App() {
  const [listOfAllAlreadyAddedFoodDonations, setListOfAllAlreadyAddedFoodDonations] = useState([]);


  function handleInput(event, category, unit) {
    // setFoodDonation({
    //   category: category,
    //   quantity: parseInt(event.target.value),
    //   unit: unit
    // });
  }


  async function handleClick(event, category, unit) {
    console.log(category, unit, event.target.parentElement.children[0].value)
    let foodDonation;
    if (event.target.parentElement.children[0].value === "") {
      console.log(2)
      //informacja o errorze
    } else {
      foodDonation = {
        category: category,
        quantity: event.target.parentElement.children[0].value,
        unit: unit
      }
    }
    const newDonationsList = []
    let updateValueOf = listOfAllAlreadyAddedFoodDonations.filter(el => el.category === foodDonation.category)
    if (updateValueOf.length > 0) {
      listOfAllAlreadyAddedFoodDonations.forEach(el => {
        if (el.category === updateValueOf[0].category) {
          newDonationsList.push(foodDonation)
        } else {
          newDonationsList.push(el)
        }
      })
      setListOfAllAlreadyAddedFoodDonations(newDonationsList)
    }
    else {
      setListOfAllAlreadyAddedFoodDonations([
        ...listOfAllAlreadyAddedFoodDonations,
        foodDonation
      ])
    }
  }

  return (
    <div className="App">
      <Header />
      <About />
      <WhoAreYou />
      <Foodlist
        handleClick={handleClick}
        handleInput={handleInput}
      />
      <Contact summary={listOfAllAlreadyAddedFoodDonations} />
    </div>
  );
}

export default App;
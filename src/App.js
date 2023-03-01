import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/AboutUs/About';
import WhoAreYou from './components/WhoAreYou';
import Foodlist from './components/Foodlist/Foodlist';
import Contact from './components/Contact';
import Donate from './components/Donate';
import WhoWeAre from './components/AboutUs/WhoWeAre';
import SimpleContact from './components/SimpleContact'


function App() {
  const [isDisplayWhoWeAreTab, setDisplayWhoWeAreTab] = useState(false)
  const [foodDonation, setFoodDonation] = useState({});
  const [listOfAllAlreadyAddedFoodDonations, setListOfAllAlreadyAddedFoodDonations] = useState([]);
  const [isCustomerPrivate, setIsCustomerPrivate] = useState(false);
  const [isCustomerRestaurant, setIsCustomerRestaurant] = useState(false);

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

  function handleClick(category) {
    if (findIndexOfAlreadyAddedFood(category) !== -1) {
      listOfAllAlreadyAddedFoodDonations[
        findIndexOfAlreadyAddedFood(category)
      ].quantity = parseInt(foodDonation.quantity);
      setListOfAllAlreadyAddedFoodDonations(listOfAllAlreadyAddedFoodDonations);
      return;
    }
  }

  function togglePrivateCustomer() {
	setIsCustomerPrivate(prevIsCustomerPrivate => !prevIsCustomerPrivate);
	setIsCustomerRestaurant(false);
  }

  function toggleRestaurant() {
	setIsCustomerRestaurant(prevIsCustomerRestaurant => !prevIsCustomerRestaurant)
	setIsCustomerPrivate(false);
  }

  return (
    <div className="App">

      <Header isDisplayWhoWeAreTab={isDisplayWhoWeAreTab} setDisplayWhoWeAreTab={setDisplayWhoWeAreTab} />
      {!isDisplayWhoWeAreTab && <About />}
      {isDisplayWhoWeAreTab && <WhoWeAre />}
      {!isDisplayWhoWeAreTab && <WhoAreYou togglePrivateCustomer={togglePrivateCustomer} toggleRestaurant={toggleRestaurant}/>}
      {(!isDisplayWhoWeAreTab && isCustomerPrivate) && <Foodlist
        handleClick={handleClick}
        handleInput={handleInput}
        />}
      {(!isDisplayWhoWeAreTab && isCustomerPrivate) && <Contact summary = {listOfAllAlreadyAddedFoodDonations} />}
      {(!isDisplayWhoWeAreTab && isCustomerRestaurant) && <SimpleContact />}
      <Donate />
      </div>
  );
}

export default App;
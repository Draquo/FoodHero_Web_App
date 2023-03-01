import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import About from './components/AboutUs/About';
import WhoAreYou from './components/WhoAreYou/WhoAreYou';
import Foodlist from './components/Foodlist/Foodlist';
import Contact from './components/Contact';
import Donate from './components/Donate';
import WhoWeAre from './components/AboutUs/WhoWeAre';
import SimpleContact from './components/SimpleContact'


function App() {
  const [isDisplayWhoWeAreTab, setDisplayWhoWeAreTab] = useState(false)
  const [listOfAllAlreadyAddedFoodDonations, setListOfAllAlreadyAddedFoodDonations] = useState([]);
  const [isCustomerPrivate, setIsCustomerPrivate] = useState(false);
  const [isCustomerRestaurant, setIsCustomerRestaurant] = useState(false);

  async function handleClick(event, category, unit) {
    let foodDonation;
    if (event.target.parentElement.children[0].value === "") {
      console.log(2)
      //komunikat o errorze
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

  function togglePrivateCustomer() {
	setIsCustomerPrivate(prevIsCustomerPrivate => !prevIsCustomerPrivate);
	setIsCustomerRestaurant(false);
  }

  function toggleRestaurant() {
	setIsCustomerRestaurant(prevIsCustomerRestaurant => !prevIsCustomerRestaurant)
	setIsCustomerPrivate(false);
  }

  function scrollToBottom() {
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
    })
  }

  function scrollToUp() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
  }

  return (
    <div className="App">

      <Header isDisplayWhoWeAreTab={isDisplayWhoWeAreTab} setDisplayWhoWeAreTab={setDisplayWhoWeAreTab} scrollToBottom={scrollToBottom} scrollToUp={scrollToUp} />
      {!isDisplayWhoWeAreTab && <About />}
      {isDisplayWhoWeAreTab && <WhoWeAre />}
      {!isDisplayWhoWeAreTab && <WhoAreYou togglePrivateCustomer={togglePrivateCustomer} toggleRestaurant={toggleRestaurant}/>}
      {(!isDisplayWhoWeAreTab && isCustomerPrivate) && <Foodlist
        handleClick={handleClick}
        />}
      {(!isDisplayWhoWeAreTab && isCustomerPrivate) && <Contact summary = {listOfAllAlreadyAddedFoodDonations} />}
      {(!isDisplayWhoWeAreTab && isCustomerRestaurant) && <SimpleContact />}
      <Donate />
      </div>
  );
}

export default App;
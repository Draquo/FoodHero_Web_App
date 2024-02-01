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
  const [listOfAllAddedFoodDonations, setListOfAllAddedFoodDonations] = useState([]);
  const [isCustomerPrivate, setIsCustomerPrivate] = useState(false);
  const [isCustomerRestaurant, setIsCustomerRestaurant] = useState(false);

  function handleClick(event, category, unit) {
    const eventValue = event.target.parentElement.children[0].value
    if (eventValue === "") {
      return;
    }
    let foodDonation = setFoodDonation(category, eventValue, unit)
    const index = listOfAllAddedFoodDonations.findIndex(el => el.category === category);
    index === -1 ? setListOfAllAddedFoodDonations(prevList => [...prevList, foodDonation]) :
    updateQuantityOfDonatedFood(index, foodDonation)
  }

  function updateQuantityOfDonatedFood(index, foodDonation) {
      const newDonationsList = [...listOfAllAddedFoodDonations];
      newDonationsList[index] = foodDonation;
      setListOfAllAddedFoodDonations(newDonationsList);
  }

  function setFoodDonation(category, eventValue, unit) {
    return {
      category: category,
      quantity: eventValue,
      unit: unit,
    }
  }

  function togglePrivateCustomer() {
	  setIsCustomerPrivate(prevIsCustomerPrivate => !prevIsCustomerPrivate);
	  setIsCustomerRestaurant(false);
  }

  function toggleRestaurant() {
	  setIsCustomerRestaurant(prevIsCustomerRestaurant => !prevIsCustomerRestaurant);
	  setIsCustomerPrivate(false);
  }

  function scrollToBottom() {
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
    })
  }

  function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <Header isDisplayWhoWeAreTab={isDisplayWhoWeAreTab} setDisplayWhoWeAreTab={setDisplayWhoWeAreTab} scrollToBottom={scrollToBottom} scrollToTop={scrollToTop} />
      {!isDisplayWhoWeAreTab && <About />}
      {isDisplayWhoWeAreTab && <WhoWeAre />}
      {!isDisplayWhoWeAreTab && <WhoAreYou togglePrivateCustomer={togglePrivateCustomer} toggleRestaurant={toggleRestaurant}/>}
      {(!isDisplayWhoWeAreTab && isCustomerPrivate) && <Foodlist
        handleClick={handleClick}
        />}
      {(!isDisplayWhoWeAreTab && isCustomerPrivate) && <Contact summary = {listOfAllAddedFoodDonations} />}
      {(!isDisplayWhoWeAreTab && isCustomerRestaurant) && <SimpleContact />}
      <Donate />
    </div>
  );
}

export default App;
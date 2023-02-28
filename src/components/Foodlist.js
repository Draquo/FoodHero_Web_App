import { useEffect, useState } from "react";
import food from './food.js'


function Foodlist() {

    const [foodList, setFoodList] = useState(food);
    const [foodDonation, setFoodDonation] = useState({})
    const [listOfAllAlreadyAddedFoodDonations, setListOfAllAlreadyAddedFoodDonations] = useState([])

    function handleInput(event, category) {
        setFoodDonation({
            category: category,
            quantity: parseInt(event.target.value)
        })
    }

    function findIndexOfAlreadyAddedFood(category) {
        return listOfAllAlreadyAddedFoodDonations.findIndex(food => food.category === category)
    }

    function handleClick(category) {
        if (findIndexOfAlreadyAddedFood(category) !== -1) {
            listOfAllAlreadyAddedFoodDonations[findIndexOfAlreadyAddedFood(category)].quantity += parseInt(foodDonation.quantity)
            setListOfAllAlreadyAddedFoodDonations(listOfAllAlreadyAddedFoodDonations)
            return;
        }
        setListOfAllAlreadyAddedFoodDonations(prevList => [...prevList, foodDonation])
    }

    

    return (
        <div className="foodlist">
            {foodList.map(food => (
                <div className="foodCard">
                    <img className="food" src={food.img} alt="" />
                        <h1 className="category">{food.category}</h1>
                        <div className="addToDonating">
                            <input
                                type="number"
                                className="quantity"
                                step="1"
                                min="1"
                                max="100"
                                placeholder={food.quantity}
                                onChange={(event) => handleInput(event, food.category)} />
                            <button className={food.category} onClick={() => handleClick(food.category)}>ADD</button>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Foodlist;
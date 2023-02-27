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
        return listOfAllAlreadyAddedFoodDonations.findIndex(elem => elem.category === category)
}

    function handleClick(category) {
        if (findIndexOfAlreadyAddedFood(category) === -1) {
            setListOfAllAlreadyAddedFoodDonations(prevList => [...prevList, foodDonation])
        } else {
            listOfAllAlreadyAddedFoodDonations[findIndexOfAlreadyAddedFood(category)].quantity += parseInt(foodDonation.quantity)
            setListOfAllAlreadyAddedFoodDonations(listOfAllAlreadyAddedFoodDonations)
        }
    }

    useEffect(() => {
        console.log(listOfAllAlreadyAddedFoodDonations);
    }, [foodDonation, listOfAllAlreadyAddedFoodDonations]);
   
    return (
        <div className="foodlist">
            {foodList.map(food => (
                <div className="foodCard">
                    <img className="food" src={food.img} alt="" />
                    <div className="foodCard-body">
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
                </div>
            ))}


        </div>
    )
}

export default Foodlist;
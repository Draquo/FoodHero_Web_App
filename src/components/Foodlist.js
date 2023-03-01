import food from './food.js'

function Foodlist(props) {

    return (
        <div className="foodlist">
            {food.map((food, index) => (
                <div className="foodCard" key={index}>
                    <img className="food" src={food.img} alt="" />
                        <h1 className="category">{food.category}</h1>
                        <div className="addToDonating">
                            <input
                                type="number"
                                className="quantity"
                                step="1"
                                min="1"
                                max="100"
                                placeholder={food.unit}
                                // onChange={(event) => props.handleInput(event, food.category, food.unit)} 
                                />
                            <button className={food.category} onClick={(event) => props.handleClick(event, food.category, food.unit)}>ADD</button>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Foodlist;
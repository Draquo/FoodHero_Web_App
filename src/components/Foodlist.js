import food from './food.js'

function Foodlist(props) {

    return (
        <div className="foodlist">
            {food.map(food => (
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
                                onChange={(event) => props.handleInput(event, food.category)} />
                            <button className={food.category} onClick={() => props.handleClick(food.category)}>ADD</button>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Foodlist;
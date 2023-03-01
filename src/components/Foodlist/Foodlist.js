import { React, useRef } from 'react'
import food from './food.js';
import Slider from 'react-slick';
import Arrows from './Arrows.js';

function Foodlist(props) {
    const slider = useRef(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className='foodlist'>
            <Slider ref={slider} {...settings}>
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
                            />
                            <button className={food.category} onClick={(event) => props.handleClick(event, food.category, food.unit)}>ADD</button>
                        </div>
                    </div>
                ))}
            </Slider>
            <Arrows slider={slider} />
        </div>
    );
}

export default Foodlist;
import { useEffect, useState } from "react";

const Header = ({ isDisplayWhoWeAreTab, setDisplayWhoWeAreTab }) => {
   
    function handleClick() {
        setDisplayWhoWeAreTab(!isDisplayWhoWeAreTab)
    }

    return (
        <div className="header">
            <img src="./logo.png" alt="logo"/>
            <h1>FoodHero</h1>
            <div className="buttons">
                <button className="donate">Donate</button>
                <button className="whoweare" onClick={handleClick}>{isDisplayWhoWeAreTab ? "Main page" : "Who we are"}</button>
            </div>
        </div>
    )
}

export default Header;
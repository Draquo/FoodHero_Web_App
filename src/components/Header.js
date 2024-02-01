const Header = ({ isDisplayWhoWeAreTab, setDisplayWhoWeAreTab, scrollToBottom, scrollToTop }) => {
   
    function handleClick() {
        setDisplayWhoWeAreTab(!isDisplayWhoWeAreTab);
        scrollToTop();
    }

    return (
        <div className="header">
            <img src="./logo.png" alt="logo"/>
            <h1>FoodHero</h1>
            <div className="buttons">
                <button onClick={scrollToBottom}>Donate</button>
                <button onClick={handleClick}>{isDisplayWhoWeAreTab ? "Main page" : "Who we are"}</button>
            </div>
        </div>
    )
}

export default Header;
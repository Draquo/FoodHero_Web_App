function Header() {
    return (
        <div className="header">
            <img src="./logo.png" alt="logo"/>
            <h1>FoodHero</h1>
            <div className="buttons">
                <button className="donate">Donate</button>
                <button className="whoweare">Who we are</button>
            </div>
        </div>
    )
}

export default Header;
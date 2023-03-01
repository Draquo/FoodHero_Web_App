function WhoAreYou(props) {
    return (
        <div className="who-are-you">
            <button onClick={props.toggleRestaurant}>I am a restaurant</button>
            <button onClick={props.togglePrivateCustomer}>I am a<br/>private person</button>
        </div>
    )
}

export default WhoAreYou;
import JoinUs from "./JoinUs";

function WhoAreYou(props) {
    return (
        <div className="who-are-you shadow">
            <JoinUs />
            <div className="whoAreYouButtons">
                <button onClick={props.toggleRestaurant}>I am a restaurant</button>
                <button onClick={props.togglePrivateCustomer}>I am a<br />private person</button>
            </div>
        </div>
    )
}

export default WhoAreYou;
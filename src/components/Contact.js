import { useRef } from "react";

function Contact(props) {
    const name = useRef(null)
    const surname = useRef(null)
    const phoneNumber = useRef(null)
    const city = useRef(null)
    const postalCode = useRef(null)
    const street = useRef(null)
    const number = useRef(null)
    const summary = useRef(null)
    const greatings = `
    Dear,

    Thank you so much for donating items to our organization. We truly appreciate your generosity and your commitment to our cause.
    
    We would like to inform you that our volunteer will be contacting you soon to arrange for the pickup of the donated items. Your kindness will help us make a real difference in the lives of those we serve, and we are grateful for your support.
    
    Once again, thank you for your donation and for believing in our mission.
    
    Best regards,
    FoodHero`

    function checkValidation(name, surname, phoneNumber, city, postalCode, street, number) {
        /[a-z]{2,}/.test(name.current.value) ?
            alert(greatings) :
            name.current.setCustomValidity('Please enter your name');

        /[a-z]{2,}/.test(surname.current.value) ?
            surname.current.setCustomValidity("") :
            surname.current.setCustomValidity('Please enter your surname');

        /^[0-9]{9}$/.test(phoneNumber.current.value) ?
            phoneNumber.current.setCustomValidity("") :
            phoneNumber.current.setCustomValidity('Please enter 9-digit phone number');

        /[a-z]{2,}/.test(city.current.value) ?
            city.current.setCustomValidity("") :
            city.current.setCustomValidity('Please enter correct city name');

        /^\d{2}-\d{3}$/.test(postalCode.current.value) ?
            postalCode.current.setCustomValidity("") :
            postalCode.current.setCustomValidity('Please enter the postal code in the format "XX-XXX".');

        /[a-z]{2,}/.test(street.current.value) ?
            street.current.setCustomValidity("") :
            street.current.setCustomValidity('Please enter correct street name');

        /[0-9]{1,}/.test(number.current.value) ?
            number.current.setCustomValidity("") :
            number.current.setCustomValidity('Please enter correct street number');
    }

    return (
        <div id="contact" className="shadow">
            <h1>Contact form</h1>
            <div id="form-and-summary-container">
                <div id="contact-form-container">
                    <form id="contact-form"  className="shadow">
                        <h2>Contact info</h2>
                        <div id="contact-container">
                            <div>
                               <div><input placeholder="Name" ref={name}>
                                </input></div>
                                <div><input placeholder="Surname" ref={surname}>
                                </input></div>
                            </div>
                            <div>
                                <div><input placeholder="Phone number" ref={phoneNumber}>
                                </input></div>
                            </div>
                        </div>
                        <h2>Adress Info</h2>
                        <div id="adress-container">
                            <div>
                                <div><input placeholder="City" ref={city}>
                                </input></div>
                                <div><input placeholder="Postal code" ref={postalCode}>
                                </input></div>
                            </div>
                            <div>
                                <div><input placeholder="Street" ref={street}>
                                </input></div>
                                <div><input placeholder="Number" ref={number}>
                                </input></div>
                            </div>
                        </div>
                        <div><button type="submit" value="Submit" onClick={() => checkValidation(name, surname, phoneNumber, city, postalCode, street, number)}>SUBMIT</button></div>
                    </form>
                </div>
                <div id="summary-container">
                    <div id="summary-list" ref={summary} className="shadow">
                        <h2 id="summary">Summary</h2>
                        {props.summary.map((el,index) =>
                            el.quantity === "0" ?
                                "" : el.quantity === "1" ?
                                    <li key={index} id={el.category}>{el.quantity} {el.unit} of {el.category}</li> :
                                    <li key={index} id={el.category}>{el.quantity} {el.unit}s of {el.category}</li>)}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;


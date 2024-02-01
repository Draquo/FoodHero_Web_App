import { useRef } from "react";

function Contact(props) {
    const name = useRef(null)
    const surname = useRef(null)
    const phoneNumber = useRef(null)
    const restaurantName = useRef(null)
    const greatings = `
        Dear,

        We would like to inform you that our volunteer will be in touch with you shortly to discuss further details and arrange for any necessary actions. We are grateful for your willingness to help and your dedication to our cause.

        Thank you for your contact and for being part of our community. We look forward to working with you to make a positive impact.

        Best regards,
        FoodHero`


    function checkValidation(name, surname, phoneNumber, restaurantName) {
        /[a-z]{2,}/.test(name.current.value) ?
            alert(greatings) :
            name.current.setCustomValidity('Please enter your name');

        /[a-z]{2,}/.test(surname.current.value) ?
            surname.current.setCustomValidity("") :
            surname.current.setCustomValidity('Please enter your surname');

        /[0-9]{9}/.test(phoneNumber.current.value) ?
            phoneNumber.current.setCustomValidity("") :
            phoneNumber.current.setCustomValidity('Please enter 9-digit phone number');

        /[a-z]{2,}/.test(restaurantName.current.value) ?
            surname.current.setCustomValidity("") :
            surname.current.setCustomValidity('Please enter restaurant name');
    }

    return (
        <div id="contact" className="shadow">
            <h1>Contact form</h1>
            <div id="form-and-summary-container">
                <div id="contact-form-container">
                    <form id="contact-form">
                        <h2>Contact info</h2>
                        <div id="contact-container">
                            <div>
                                <div><input placeholder="Name" ref={name}>
                                </input></div>
                                <div><input placeholder="Surname" ref={surname}>
                                </input></div>
                            </div>
                            <div>
                                <div><input placeholder="Restaurant name" ref={restaurantName}>
                                </input></div>
                                <div><input placeholder="Phone number" ref={phoneNumber}>
                                </input></div>
                            </div>
                        </div>
                        <div><button type="submit" value="Submit" onClick={() => checkValidation(name, surname, phoneNumber, restaurantName)}>SUBMIT</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;


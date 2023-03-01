import { useRef } from "react";

function Contact(props) {
    const name = useRef(null)
    const surname = useRef(null)
    const phoneNumber = useRef(null)
    const restaurantName = useRef(null)


    function checkValidation(name, surname, phoneNumber, restaurantName) {
        /[a-z]{2,}/.test(name.current.value) ?
            name.current.setCustomValidity("") :
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
        <div id="contact">
            <h1>Contact form</h1>
            <div id="form-and-summary-container">
                <div id="contact-form-container">
                    <form id="contact-form">
                        <h2>Contact info</h2>
                        <div id="contact-container">
                            <div>
                                Name: <div><input placeholder="Name" ref={name}>
                                </input></div>
                                Surname: <div><input placeholder="Surname" ref={surname}>
                                </input></div>
                            </div>
                            <div>
                                Restaurant name: <div><input placeholder="Restaurant name" ref={restaurantName}>
                                </input></div>
                                Phone number: <div><input placeholder="Phone number" ref={phoneNumber}>
                                </input></div>
                            </div>
                        </div>
                        <div><input type="submit" value="Submit" onClick={() => checkValidation(name, surname, phoneNumber, restaurantName)}></input></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;


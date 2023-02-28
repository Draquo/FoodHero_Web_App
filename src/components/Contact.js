import { useRef } from "react";

function Contact() {
    const name = useRef(null)
    const surname = useRef(null)
    const phoneNumber = useRef(null)
    const city = useRef(null)
    const postalCode = useRef(null)
    const street = useRef(null)
    const number = useRef(null)

    function checkValidation(name, surname, phoneNumber, city, postalCode, street, number) {
        /[a-z]{2,}/.test(name.current.value) ?
            name.current.setCustomValidity("") :
            name.current.setCustomValidity('Please enter your name');


        /[a-z]{2,}/.test(name.current.value) ?
            name.current.setCustomValidity("") :
            name.current.setCustomValidity('Please enter your name');

        /[a-z]{2,}/.test(surname.current.value) ?
            surname.current.setCustomValidity("") :
            surname.current.setCustomValidity('Please enter your surname');

        /[0-9]{9}/.test(phoneNumber.current.value) ?
            phoneNumber.current.setCustomValidity("") :
            phoneNumber.current.setCustomValidity('Please enter 9-digit phone number');

        /[a-z]{2,}/.test(city.current.value) ?
            city.current.setCustomValidity("") :
            city.current.setCustomValidity('Please enter correct city name');

        /\d{2}-\d{3}/.test(postalCode.current.value) ?
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
                                Phone number: <div><input placeholder="Phone number" ref={phoneNumber}>
                                </input></div>
                            </div>
                        </div>
                        <h2>Adress Info</h2>
                        <div id="adress-container">
                            <div>
                                City: <div><input placeholder="City" ref={city}>
                                </input></div>
                                Postal code: <div><input placeholder="Postal code" ref={postalCode}>
                                </input></div>
                            </div>
                            <div>
                                Street: <div><input placeholder="Street" ref={street}>
                                </input></div>
                                Number: <div><input placeholder="Number" ref={number}>
                                </input></div>
                            </div>
                        </div>
                        <div><input type="submit" value="Submit" onClick={() => checkValidation(name, surname, phoneNumber, city, postalCode, street, number)}></input></div>
                    </form>
                </div>
                <div id="summary-container">
                    <h2>Summary</h2>
                    <li>element1</li>
                    <li>element2</li>
                    <li>element3</li>
                </div>
            </div>
        </div>
    )
}

export default Contact;
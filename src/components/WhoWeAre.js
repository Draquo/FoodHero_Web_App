import React, {Component} from 'react'
import Slider from 'react-slick';



export default class About extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="About">
                <div className="peopleSay">
                    <img src="https://as2.ftcdn.net/v2/jpg/00/42/22/01/1000_F_42220133_toAU6USGY9jVr2XJFLssfG00cSYIJ173.jpg"  className="hungry" alt="hungry" />
                    <p>
                        "My dream is a better tomorrow where I'm not hungry and I don't have
                        to ask my neighbors for leftovers.
                        <br />
                        <br /> Though I'd rather die.
                        <br />
                        <br /> <strong>But unfortunately I have to live..."</strong>
                    </p>
                </div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <h3 className="management">
                                <div className="description">
                                    <h2>Dominik is passionate about social justice</h2>
                                    <h3> has extensive experience in managing nonprofit organizations.</h3>
                                    <p>As a board member of the zero-waste foundation, he oversees the planning and execution of activities,
                                        recruits volunteers, and raises funds to ensure that the foundation achieves its mission of eradicating poverty.
                                    </p>
                                </div>
                                <div className="picture">picture</div>
                            </h3>
                        </div>
                        <div>
                            <h3 className="management">
                                <div className="picture">picture</div>
                                <div className="description">
                                    <h2>Marcin is a charismatic individual who is passionate about raising awareness about poverty.</h2>
                                    <h3> As an ambassador for the zero-waste foundation,  </h3>
                                    <p>he uses his communication skills and extensive network to increase public awareness of the foundation's mission and the ways in which people can get involved to help.
                                        His motivation to help stems from a desire to create a more equitable world where everyone has access to basic necessities. </p>
                                </div>
                            </h3>
                        </div>
                        <div>
                            <h3 className="management">
                                <div className="description">
                                    <h2>Michał is a firm believer in the power of collaboration to address social issues. </h2>
                                    <h3> As a board member of the zero-waste foundation, </h3>
                                    <p>he works closely with other organizations to maximize the effectiveness of their efforts in combating hunger and poverty.    
                                        His motivation to help others stems from a desire to create a better world for future generations.
                                    </p>
                                </div>
                                <div className="picture">picture</div>
                            </h3>
                        </div>
                        <div>
                            <h3 className="management">
                                <div className="description">
                                    <h2>Jowita is a kind-hearted person</h2>
                                    <h3> who is always looking for ways to help others. </h3>
                                    <p>She is responsible for organizing charity events to raise funds and collect necessary items for people in need.
                                        Her passion for making a positive impact in the community has driven her to volunteer for the zero-waste foundation.
                                    </p>
                                </div>
                                <div className="picture">picture</div>
                            </h3>
                        </div>
                    </Slider>
                </div>
                
                <div className="foodheroe">
                    <h2>FoodHeroe</h2>
                    <p>
                        distributes thousands of kilos of food to hundreds of thousands of
                        needy neighbors, making us the leading famine relief organization in
                        our region
                    </p>
                </div>
            </div>
        );
    }
}

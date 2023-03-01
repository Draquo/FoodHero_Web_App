import React, { Component } from 'react';
import Slider from 'react-slick';
import hungry from '../images/hungry.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class About extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="About shadow">
        <div className="peopleSay">
          <img src={hungry} className="hungry" alt="hungry" />
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
              <h3 className="poland">
                <div className="description">
                  <h1>In Poland,</h1>
                  <p>we waste as much as 5 million tons of food annually.</p>
                  <h2>In our homes,</h2>
                  <p>
                    nearly 92 kg of food is thrown into the bin every second
                    throughout the year.
                  </p>
                  <p>
                    It is as if every day, throughout the year, every second
                    Poles throw away as
                  </p>
                  <h1>184 loaves of bread.</h1>
                </div>
                <div className="picture">picture</div>
              </h3>
            </div>
            <div>
              <h3 className="poland">
                <div className="picture">picture</div>
                <div className="description">
                  <h1>In 2021,</h1>
                  <p>1.6 million people lived in extreme poverty in Poland,</p>
                  <p>including</p> <h2>246,000 seniors</h2>
                  <p>and</p>
                  <h2> 333,000 children.</h2>
                </div>
              </h3>
            </div>
          </Slider>
        </div>
        <div className="foodhero">
          <h2>FoodHero</h2>
          <p>
            distributes thousands of kilos of food to hundreds of thousands of
            needy neighbors, making us the leading famine relief organization in
            our region
          </p>
        </div>
          <div className='freespace'></div>
      </div>
    );
  }
}

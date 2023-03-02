import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Motto from './Motto';
import FoodHero from './FoodHero';

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class About extends Component {
  render() {
    return (
      <div className="About shadow">
        <Motto
          image='./hungry.jpg'
          p="My dream is a better tomorrow where I'm not hungry and I don't have
              to ask my neighbors for leftovers."
          br="Though I'd rather die."
          brStrong="But unfortunately I have to live..."
        />
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
                <img className="picture" src='./trash.png'></img>
              </h3>
            </div>
            <div>
              <h3 className="poland">
                <img className="picture" src='./child.png'></img>
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
        <FoodHero />
      </div>
    );
  }
}

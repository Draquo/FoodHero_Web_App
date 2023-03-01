import React from 'react'
import infoAboutManagement from './infoAboutManagement';
import Slider from 'react-slick';
import { settings } from './About';


function AboutManagement() {

    return (
      <div>
          <Slider {...settings}>
              {infoAboutManagement.map(person => (
                  <div>
                      <h3 className="management">
                          <div className="description">
                              <h3>{person.introduction}</h3>
                              <p>{person.description}</p>
                          </div>
                          <div className="picture">picture</div>
                      </h3>
                  </div>))}
          </Slider>
      </div>
  )
}

export default AboutManagement
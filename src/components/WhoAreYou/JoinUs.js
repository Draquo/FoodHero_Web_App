import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import TypingTitle from './TypingTitle';

function JoinUs() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className='joinUsDescription'>
      <VisibilitySensor onChange={(visible) => setVisible(visible)}>
        {({ sensorRef }) => (
          <div className='invisible' ref={sensorRef}>{isVisible ? <TypingTitle /> : '|'}</div>
        )}
      </VisibilitySensor>
      <p>Our zero-waste initiative aims to collect surplus food from individuals and restaurants, and distribute it to those in need. Even the smallest contribution can make a significant impact on someone's life, so don't hesitate to lend a hand and help make a difference.</p>
      <br />

      <p> If you are <strong>an individual </strong>looking to donate food, please let us know what you have available and we will arrange to pick it up and distribute it to those in need.</p>

      <p>If you are <strong> a restaurant owner</strong>, we would love to establish a regular partnership with you.  </p>
      <br />
      <br />
      <p><strong>By working together, we can ensure that any excess food is put to good use and distributed to those who need it most.</strong></p>
      <br />
      <br />
    </div>
  )
}

export default JoinUs;
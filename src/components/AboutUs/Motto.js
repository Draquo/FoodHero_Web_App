import React from 'react'

const Motto = ({ image }) => {
  return (
      <div className="motto">
          <img src={image} className="hungry" alt="hungry" />
          <p>
              "My dream is a better tomorrow where I'm not hungry and I don't have
              to ask my neighbors for leftovers.
              <br />
              <br /> Though I'd rather die.
              <br />
              <br /> <strong>But unfortunately I have to live..."</strong>
          </p>
      </div>
  )
}

export default Motto
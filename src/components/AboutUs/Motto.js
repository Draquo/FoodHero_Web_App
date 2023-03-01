import React from 'react'

const Motto = ({ image, p, br, brStrong }) => {
  return (
      <div className="motto">
          <img src={image} className="hungry" alt="hungry" />
          <p>
              {p}
              <br />
              <br /> {br}
              <br />
              <br /> <strong>{brStrong}</strong>
          </p>
      </div>
  )
}

export default Motto
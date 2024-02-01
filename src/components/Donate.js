import React, { useRef } from 'react';

const Donate = () => {
  const donate = useRef(null);

  const checkValidation = (donate) => {
    /[0-9]{1,}/.test(donate.current.value)
      ? donate.current.setCustomValidity('')
      : donate.current.setCustomValidity(`Please enter value`);
  };

  return (
    <div className="donate">
      <form>
        <div className="information">
          <h1>Donate to FoodHero!</h1>
          <p>
            At FoodHero we’re committed to creating a more sustainable and
            equitable food system. We partner with local restaurants and
            community-based organizations to provide meals to our neighbors
            experiencing food insecurity.
          </p>
          <p>
            Because our board of directors covers our operating costs, 100% of
            your gift goes towards providing meals to communities.
          </p>
        </div>
        <div className="payment">
          <input className="value" placeholder="Please enter donation $" ref={donate}></input>
          <input className='apple'
            type="submit"
            value="DONATE WITH Pay"
            onClick={() => checkValidation(donate)}
          ></input>
           <input className='other'
            type="submit"
            value="CREDIT CARD"
            onClick={() => checkValidation(donate)}
          ></input>
           <input className='other'
            type="submit"
            value="BANK TRANSFER"
            onClick={() => checkValidation(donate)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Donate;

import React from 'react'
import Motto from './Motto';
import FoodHero from './FoodHero';
import Map from './Map';
import AboutManagement from './AboutManagement'

function WhoWeAre() {
    return (
        <div className="About shadow">
            <Motto
                image={"./ourPhoto.png"}
                p="Industrious, passionate and committed: our team is a mighty force of changemakers living around the world."
                br="We make change happen"
                brStrong="Let's meet us!"/>
            <AboutManagement />
            <FoodHero />
            <Map />
        </div>
    );
}

export default WhoWeAre;

import React from 'react'
import Motto from './Motto';
import FoodHero from './FoodHero';
import Map from './Map';
import AboutManagement from './AboutManagement'

function WhoWeAre() {

    return (
        <div className="About">
            <Motto
                image={"https://as2.ftcdn.net/v2/jpg/00/42/22/01/1000_F_42220133_toAU6USGY9jVr2XJFLssfG00cSYIJ173.jpg"}
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

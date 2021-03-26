import React from 'react';

import Comman from './Comman';
import gym from "../src/Images/contat1.jpg";

const About=()=>{
    return(<>
    <div className="about">
        <Comman name="welcome to about page"
            imgsrc={gym} 
            visit="/contact" 
            btname = "Contact Now   "
            bri="We are the team of expert Trainers."
        />
        
        </div>
    </>);
};
 

export default About;
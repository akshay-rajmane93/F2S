import React from 'react';

import gym from "../src/Images/Untitled6.png";
import Comman from './Comman';

const Home=()=>{
    return(<>
    <div className="home">
         <Comman name="Celebrate health with"
            imgsrc={gym} 
            visit="/service" 
            btname = "Get Started"
                bri="House of Fiteness."
            />


            
            </div>
            
    </>);
};
 

export default Home;
import React from 'react';
import Trainerinfo from './Trainerinfo';
import Sdata2 from './Sdata2';

const Features=(props)=>{
    return(<>
        <div className="row container-fluid main_featur">
        
            <div className=" col-lg-4 col-md-5 feature">
                <h1>Our Features</h1>
                <ul>
                    <li>Free consulting</li>
                    <li>Unlimited equipments</li>
                    <li>Free Access to cross-fit section</li>
                    <li>Gruop Training</li>
                    <li>Advice on training program</li>
                    <li>free consulting on crossfit trainig program</li>
                </ul>
            </div>
            <div className="col-lg-7 col-md-7 trainer">
               <h1>Our Trainer</h1>
             <div className="imgdiv">
                {
                    Sdata2.map((val, ind)=>{
                        return  <Trainerinfo key={ind} name ={val.name} image={val.img} title={val.bracket} desc={val.des} />
                    })
               
                }
            </div>
        </div>
        </div>
       
        
    </>);
};
 

export default Features;
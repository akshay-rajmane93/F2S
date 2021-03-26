import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
const Service=()=>{
    return(<>
        <div className="my-4 " >
            <h1 className="text-center">Our Services</h1>

        </div>
        <div className="container-fluid mb-5 service">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4 card_main">
                        
                        {
                            Sdata.map((val,ind)=>{
                                return <Card key={ind} imgsrc={val.img} title={val.title} des={val.des} visit={val.vis}/>
                            })
                        }
            
                        
                    </div>
                </div>
            </div>
        </div>
    </>);
};
 

export default Service;
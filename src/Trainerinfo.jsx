import React from 'react';


const Trainerinfo =(props)=>{

    return(<>
    <div className="col-lg-4 trai">
        <img  src={props.image} alt="...."/>
       <h4>{props.name}</h4>
       <p>{props.title}</p>
       <p>{props.desc}</p>
       </div>
    </>)
    
}

export default Trainerinfo;
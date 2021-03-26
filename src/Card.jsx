import React from 'react';
import {NavLink} from 'react-router-dom';

const Card=(props)=>{
    return(<>

       <div className="col-md-4  mx-auto cardss">
                        <div className="card h-100" >
                        <img src={props.imgsrc} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h6 class="card-title">{props.title}</h6>
                            <p class="card-text ">{props.des}</p>
                           
                        </div>
                        </div>
                        <NavLink to={props.visit}class="btn btn-primary card_btn">More Info</NavLink>
                        </div>
                        
    </>);
};
 

export default Card;
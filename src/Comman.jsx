import React from 'react';
import {NavLink} from 'react-router-dom';

const Comman=(props)=>{
    return(<>
        <section id="header" className="d-flex align-items-centre my-lg-2 comman">
        <div className="container-fluid ">
        <div className="row about_contents">
            <div className="col-10 mx-auto">
            <div className="row ">
                <div className="col-md-6 pt-lg-5 pt-lg-0 order-lg-1 d-flex justify-content-center flex-column" >
                    <h1 className="my-3"> {props.name} <strong className="brand_name">F2S</strong></h1>
                    <h2 className="my-3"><span className="commanspan">Fitness To Sports </span>{props.bri}</h2>
                    <div className="mt-3 mb-3 ">
                        <NavLink to={props.visit} className="combtn">{props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2 header_img">
                    <img src={props.imgsrc} className="img-fluid animated" alt="img"/> 
                </div>
                </div>
            </div>
        </div>
    </div>
        </section>
    </>);
};
 

export default Comman;
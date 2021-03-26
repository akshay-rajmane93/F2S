import React from 'react';
import {NavLink} from 'react-router-dom';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const Navbar=()=>{
    return(<>
    <div className="container-fluid navv">
        <div className="row">
            <div className="col-10 mx-auto">

        
        <nav className="navbar navbar-expand-lg navbar-dark bg-tranperent">
  <div className="container-fluid">
    <NavLink activeClassName="menu_nav_active" exact className="navbar-brand" to="/">F2S</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_nav_active"  className="nav-link "  aria-current="page" exact to="/">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink activeClassName="menu_nav_active"  className="nav-link " exact to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_nav_active"  className="nav-link " exact to="/features">Features</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_nav_active"  className="nav-link " exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_nav_active"  className="nav-link " exact to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
        </div>
    </div>
    </>);
};
 

export default Navbar;


import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Footer from './Footer';
import Features from './Features';


const App=()=>{
    return(<>
    <div className="app">
    <Navbar/>
    
    
    <Switch>
    
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/features" component={Features}/>
    <Redirect to="/" />
        
        </Switch>
        
        
        <Footer/>
        </div>
    </>);
};
 

export default App;
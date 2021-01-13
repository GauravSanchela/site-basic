import React from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact'; 
import {BrowserRouter,Route,Switch } from 'react-router-dom';

function App(){
    return (
       <BrowserRouter> 
        <div>
            <Menu />
            <switch>
            <Route path="/" exact component= {Home}/>
            
            <Route path="/About" component= {About}/>
            
            <Route path="/Contact" component= {Contact}/>
            </switch>
             
            
        </div>
        </BrowserRouter>
    );
}
 
const Home = () =>{
    return(

            <div className="Contactstyle">
            <h2>WelCome to Home page</h2>
            </div>
    )

}
export default App;
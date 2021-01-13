import React from "react";
import './MenuStyle.css';
//import {link} from 'react-router-dom';

const Menu = () => {
    return(
        <div className="MenuStyle">
            <ul>
            <li> <a href="/"> Home</a> </li>
                <li> <a href="Blog"> Blog </a> </li>
                <li> <a href="Shop"> Shop </a> </li>
                <li> <a href="Contact"> Contact </a> </li>
                <li> <a href="About"> About </a> </li>
                
            </ul>
        </div>
    )
 };


export default Menu;
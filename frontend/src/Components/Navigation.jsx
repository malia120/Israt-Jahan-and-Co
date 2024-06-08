import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import '../App.css';
import Logo from'../Images/LOGO.png'

function Navigation () {
    
   return (
    <div class="Navbar"> 
        <img src={Logo} className="Logo" alt="Logo" />
        <div class="navigation">
            <li><Link to= '/'> <button>Home</button></Link></li>
            <li><Link to='/about#about-us'><button>About</button></Link></li>
            <li><Link to= '/contact'> <button>Contact</button></Link></li>
            <li><Link to= '/services'><button> Services</button></Link></li>
        </div>
    </div>
    );
}

export default Navigation;
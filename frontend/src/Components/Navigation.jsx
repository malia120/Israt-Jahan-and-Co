import react from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';

function Navigation () {
    
   return (
    <div class="navigation">
        <li> <Link to= '/'> Home</Link></li>
        <li> <Link to= '/about'> About</Link></li>
        <li> <Link to= '/contact'> Contact</Link></li>
        <li> <Link to= '/services'> Services</Link></li>
    </div>
    );
}

export default Navigation;
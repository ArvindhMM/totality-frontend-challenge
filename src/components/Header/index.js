import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import './index.css';
import { CartContext } from '../../CartContext';



const Header = () => {
    const {cart} = useContext(CartContext);
    return(
        <header>
            <h1>Rental Properties</h1> 
            <div className='headerButtonsContainer'>
                <Link to = '/'><button className='headerButton'><GoHome /></button></Link>
                <Link to = '/cart'><button className='headerButton'><GiShoppingCart /> <span>({cart.length})</span></button></Link>
            </div>
        </header>
    )
}

export default Header
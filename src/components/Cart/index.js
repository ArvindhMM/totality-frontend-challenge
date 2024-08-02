import React,{useContext} from 'react';
import { CartContext } from '../../CartContext';
import { MdDeleteOutline } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import Popup from 'reactjs-popup';

import './index.css'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const getBalance = () => cart.reduce((acc, property) => acc + property.price, 0); 


  return ( 
    <div className='CartContainer'>
      <div className='CartTitleAndBalance'>
      <h1 className='cartTitle'>Cart</h1>
      <div className='balance'>
        <h4>Total: ₹{getBalance()}/-</h4>
      </div>
      </div>
      {cart.length === 0 ? (
        <p className='emptyCart'>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(property => (
            <li key={property.id}>
              <div className='cartItem'>
                <img src={property.image} alt={property.title} />
                <div>
                  <h3>{property.title} - ₹{property.price}/-</h3>
                  <p>{property.description}</p>
                </div>
                <button onClick={() => removeFromCart(property.id)} className='deleteButton'><MdDeleteOutline /></button>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <Popup trigger={<button className='checkoutButton'>Checkout <MdShoppingCartCheckout />
      </button>}  >
      {close => (
        <div className='modal-overlay'>
          <div className='popupContent'>
            <button className='close' onClick={close}>&times;</button>
            
              <h1  className='formHeader'>Checkout</h1>  
            
            <div className='content'>
              <form>
                <div className='form-group'>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' id='name' name='name' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='card'>Card Details:</label>
                  <input type='number' id='card' name='card' placeholder='Card Number' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='expiry'>Expiry Date:</label>
                  <input type='text' id='expiry' name='expiry' placeholder='MM/YY' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='cvc'>CVC:</label>
                  <input type='number' id='cvc' name='cvc' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='amount'>Payable Amount:</label>
                  <input type='text' id='amount' name='amount' value={`₹${getBalance()}/-`} readOnly />
                </div>
                <button className='payButton'>Pay</button>
              </form>
            </div>
          </div>
          </div>
        )}
  </Popup>
  
    </div>
  );
};

export default Cart;

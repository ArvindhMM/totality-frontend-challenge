import React ,{useContext} from 'react';
import { CartContext } from '../../CartContext';
import { FaLocationDot } from "react-icons/fa6";
import './index.css'

const PropertyCard = ({property}) => {
    const {addToCart} = useContext(CartContext)
    const addProperty = () => {
        console.log(property.id , 'property added')
        addToCart(property)
    }

    return (
        <div className='propertyCard'>
            <img src = {property.image} alt = {property.title} />
            <h3>{property.title}</h3>
            <p className='description'>{property.description}</p>
            <div className='LocationAndAmenitiesContainer'>
                <p className='location'><FaLocationDot /> {property.location}</p>
                <p>Aminities : <br/>{property.amenities.join(', ')}</p>
            </div>
            <div className='priceAndBookNow'>
                <p>Price : Rs {property.price}/-</p>
                <button className='bookNow' onClick={addProperty}>Book Now</button>
            </div>
        </div>
    )
}

export default PropertyCard
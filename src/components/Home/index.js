import React , {useState,useEffect} from 'react';
import PropertyCard from '../propertyCard';
import './index.css'


const residentialProperties = [
    {
      id: 1,
      title: 'Cozy Apartment in City Center',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575521/property3_gbpsr4.jpg',
      description: 'A nice and cozy apartment in the city center with all modern amenities.',
      bedrooms: 2,
      location: 'City Center',
      price: 10000,
      amenities: ['WiFi', 'Parking', 'Pool'],
    },
    {
      id: 2,
      title: 'Luxury Villa with Ocean View',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575520/propert1_s1cn7w.jpg',
      description: 'A luxurious villa with a stunning ocean view and private pool.',
      bedrooms: 4,
      location: 'Beachside',
      price: 7500,
      amenities: ['WiFi', 'Parking', 'Pool', 'Gym'],
    },
    {
      id: 3,
      title: 'Modern Studio Apartment',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575703/property7_wxfama.jpg',
      description: 'A modern studio apartment with easy access to public transport.',
      bedrooms: 1,
      location: 'Downtown',
      price: 7500,
      amenities: ['WiFi', 'Parking'],
    },
    {
      id: 4,
      title: 'Spacious Family Home',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575521/property3_gbpsr4.jpg',
      description: 'A spacious family home with a large garden and playground.',
      bedrooms: 3,
      location: 'Suburb',
      price: 12000,
      amenities: ['WiFi', 'Parking', 'Garden'],
    },
    {
      id: 5,
      title: 'Charming Cottage',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575703/property7_wxfama.jpg',
      description: 'A charming cottage in a quiet countryside location.',
      bedrooms: 2,
      location: 'Countryside',
      price: 7500,
      amenities: ['WiFi', 'Parking', 'Fireplace'],
    },
    {
      id: 6,
      title: 'Penthouse Apartment',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575520/propert1_s1cn7w.jpg',
      description: 'A luxury penthouse apartment with panoramic city views.',
      bedrooms: 3,
      location: 'City Center',
      price: 11000,
      amenities: ['WiFi', 'Parking', 'Gym', 'Pool'],
    },
    {
      id: 7,
      title: 'Rustic Cabin',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575637/property6_pjl8iq.jpg',
      description: 'A rustic cabin in the mountains, perfect for a weekend getaway.',
      bedrooms: 2,
      location: 'Mountain',
      price: 10000,
      amenities: ['Parking', 'Fireplace'],
    },
    {
      id: 8,
      title: 'Beachfront Bungalow',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575520/property4_gw01cy.jpg',
      description: 'A cozy beachfront bungalow with direct access to the beach.',
      bedrooms: 1,
      location: 'Beachside',
      price: 4500,
      amenities: ['WiFi', 'Parking', 'Pool'],
    },
    {
      id: 9,
      title: 'Elegant Townhouse',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575703/property7_wxfama.jpg',
      description: 'An elegant townhouse located in a quiet residential area.',
      bedrooms: 3,
      location: 'Suburb',
      price: 18000,
      amenities: ['WiFi', 'Parking', 'Garden'],
    },
    {
      id: 10,
      title: 'Contemporary Loft',
      image: 'https://res.cloudinary.com/dhs1xv9et/image/upload/v1722575637/property6_pjl8iq.jpg',
      description: 'A contemporary loft in the heart of the arts district.',
      bedrooms: 1,
      location: 'Downtown',
      price: 8500,
      amenities: ['WiFi', 'Parking', 'Gym'],
    },
  ];


const Home = ({addToCart}) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState('All');


  const getPriceRange = (priceRange) => {
    switch (priceRange) {
      case '0,5000':
        return [0, 4999];
      case '5000,10000':
        return [5000, 10000];
      case '10000,15000':
        return [10001, 15000];
      default:
        return [0, Infinity]; 
    }
  };
  
  useEffect(() => {
    setProperties(residentialProperties);
    setFilteredProperties(residentialProperties);
    const uniqueLocations = [...new Set(residentialProperties.map(property => property.location))];
    setLocations(uniqueLocations);
  }, []);

  useEffect(() => {

    const [minPrice, maxPrice] = getPriceRange(priceRange)

    const filtered = properties.filter(property => {
      const withinLocation = selectedLocation ? property.location === selectedLocation : true;
      const withinPriceRange = property.price >= minPrice && property.price <= maxPrice;
      return withinLocation && withinPriceRange;
    });
    setFilteredProperties(filtered);
  }, [properties, selectedLocation, priceRange]);

    return(
      <div className='HomeContainer'>
        <div className='filters'>
        <label className='filterItem'>
        Location:
        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}>
          <option value=''>All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </label>
      <label className='filterItem'>
        Price Range:
        <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
        <option value="All">All</option>
          <option value="0,5000">₹0 - ₹5000</option>
          <option value="5000,10000">₹5000 - ₹10000</option>
          <option value="10000,15000">₹10000 - ₹15000</option>
        </select>
      </label>
      </div>
        <div className="propertyListings">
            {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} addToCart={addToCart}/>
            ))}
        </div>
      </div>
    )
}

export default Home
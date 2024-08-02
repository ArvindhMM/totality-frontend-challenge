import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

import './App.css';

function App() {
  
  return (
    <div className="App">  
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './app.css'
import NavBar from "../src/product/components/NavBar";
const products = require('../src/product/products.json');
const App = () => {
  return ( <div className="">
      <NavBar products={products} />
    </div>);
}
export default App;

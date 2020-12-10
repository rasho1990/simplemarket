import React from 'react';
import './app.css'
import ProductItem from '../src/product/components/ProductItem';
import NavBar from "../src/product/components/NavBar";
import PageNavigation from '../src/product/components/PageNavigation';
const products = require('./product/products.json');

const App = () => {


  return (

    <div className="">

      <NavBar />
      <div class="ui divided items">
        <ProductItem products={products} />
      </div>
      <PageNavigation />
    </div>

  );
}

export default App;

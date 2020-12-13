import React, { useEffect, useState } from "react";
import { GiMeat } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { GiMuscleFat } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
import ProductItem from './ProductItem';
import {  Label } from "semantic-ui-react";
import Cart from '../pages/Cart'
let nextIndex = 3;
let prevIndex = 0;
const NavBar = ({ products }) => {
    const [product, setProduct] = useState(products);
    const [cartItems, setCartItems] = useState([]);
    const [productNum, setProductNum] = useState(0);
    const cartItem = (item) => {
        setCartItems([...cartItems, item])
        console.log(cartItems)
    }
    const addToCart = (num) => {
        setProductNum(num);

    }
    useEffect(() => {
        setProduct(products);
    }, [products])
    const next = () => {

        setProduct(products.filter((pro, index) => index < nextIndex && index >= prevIndex && index < products.length));
        if (nextIndex < products.length) {
            nextIndex = nextIndex + 3;
            prevIndex = prevIndex + 3;
        }
        else {
            nextIndex = 3;
            prevIndex = 0;
        }
    }
    const start = () => {

        setProduct(products.filter((pro, index) => index < 3));

    }
    const fruits = () => {
        setProduct(products.filter(pro => pro.type === 'fruit'));
    }
    const all = () => {
        setProduct(products);
    }
    const meat = () => {
        setProduct(products.filter(pro => pro.type === 'meat'));
    }
    const vegetable = () => {
        setProduct(products.filter(pro => pro.type === 'vegetable' || pro.type === 'vegan'));
    }
    const bakery = () => {
        setProduct(products.filter(pro => pro.type === 'bakery'));
    }
    const dairy = () => {
        setProduct(products.filter(pro => pro.type === 'dairy'));
    }
    
    return <React.Fragment>
        <div class="ui compact menu">
            <ReactTooltip />
            <a href="#Products" className="item">

                <GiMuscleFat data-tip="All Products" size={25} color='blue' onClick={all} />
            </a>
            <a href="#Products" className="item">
                <GiFruitBowl data-tip="Fruit" size={25} color='orange' onClick={fruits} />
            </a>
            <a href="#Products" className="item">
                <GiMeat data-tip="Meat" size={25} color='red' onClick={meat} />
            </a>
            <a href="#Products" className="item">
                <FaLeaf data-tip="Vegetable" size={25} color='green' onClick={vegetable} />
            </a>
            <a href="#Products" className="item">
                <GiCook data-tip="Bakery" size={25} color='brown' onClick={bakery} />
            </a>
            <a href="#Products" className="item">
                <GiMilkCarton data-tip="Dairy" size={25} color='' onClick={dairy} />
            </a>
            <a href="#Products" className="item">
           
                <Cart products={cartItems} button={<FaShoppingCart data-tip="Cart" size={25} color='purple' />} />
                <Label color='red' floating>
                    {productNum}
                </Label>
            </a>
        </div>
        <div class="ui divided items">
            <ProductItem products={product} addToCart={addToCart} cartItem={cartItem} />
        </div>
        <div className="ui pagination menu">
            <ReactTooltip />
            <a href="#Products" data-tip="Previous" class="item" onClick={start}>
                Start
            </a>
            <a href="#Products" data-tip="Next" class="item" onClick={next}>
                <i className="icon large arrow alternate circle right" ></i>
            </a>
        </div>
    </React.Fragment>
}
export default NavBar;

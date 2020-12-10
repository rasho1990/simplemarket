import React from "react";
import { GiMeat } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { GiCook } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { GiMuscleFat } from "react-icons/gi";
import ReactTooltip from 'react-tooltip';
const NavBar = () => {

    return <div class="ui compact menu">
        <ReactTooltip />
        <a class="item">

            <GiMuscleFat data-tip="All Products" size={25} color='blue' />
        </a>
        <a class="item">
            <GiFruitBowl data-tip="Fruit" size={25} color='orange' />
        </a>
        <a class="item">
            <GiMeat data-tip="Meat" size={25} color='red' />
        </a>
        <a class="item">
            <FaLeaf data-tip="Vegetable" size={25} color='green' />
        </a>
        <a class="item">
            <GiCook data-tip="Bakery" size={25} color='brown' />
        </a>
        <a class="item">
            <GiMilkCarton data-tip="Dairy" size={25} color='' />

        </a>
    </div>
}
export default NavBar;

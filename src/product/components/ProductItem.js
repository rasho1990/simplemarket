import React from 'react';
import AddComment from './AddComment';
import Rates from './Rates';
const reviews = require('../reviews.json');

const ProductItem = ({ products }) => {
    
    return products.map(item =>
        <div class="item">
            <div className="ui small centered image">
                <img width='300' height='400' src={`https://res.cloudinary.com/dfdocrzsc/image/upload/v1607554931/supermarket/${item.filename}`} />
            </div>
            <div class="content">
                <a class="header">{item.title}</a>
                <div class="meta">
                    <span class="cinema">${item.price}</span>
                </div>
                <div class="description">
                    <p>{item.description}</p>
                </div>
                <div class="extra">

                    <Rates rate={item.rating}/>
                </div>
            </div>
            <AddComment reviews={reviews} />
        </div>
    )



}
export default ProductItem;
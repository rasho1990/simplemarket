import React,{useState} from 'react';
import AddComment from './AddComment';
import Rates from './Rates';
import { Button, Icon } from 'semantic-ui-react'
let cartitemsNum = 0;
const ProductItem = ({ products, addToCart,cartItem }) => {
    const [cartItmes, setCartItems] = useState([])
const addItemToCart=(item)=>{
    addToCart(++cartitemsNum);
    cartItem(item)
    setCartItems([...cartItmes,item])
}
    return products.map(item =>
        <div className="item" key={`${item.title}`}>
            <div className="ui small centered image">
                <img width='300' height='400' src={`https://res.cloudinary.com/dfdocrzsc/image/upload/v1607554931/supermarket/${item.filename}`} alt={`${item.title}`} />
            </div>
            <div className="content">
                <a href="#Products" className="header">{item.title}</a>
                <div className="description">
                    <p>{item.description}</p>
                </div>
                <div className="extra">
                    <Rates rate={item.rating} />
                </div>
                <Button color='teal' onClick={()=>addItemToCart(item)}>
                        <Icon name='shop' />
                </Button>
                <Button animated='fade' positive >
                    <Button.Content visible>Buy Now For</Button.Content >
                    <Button.Content hidden>${item.price}</Button.Content>
                </Button>
            </div> 
            <AddComment />
        </div>
    )
}
export default ProductItem;
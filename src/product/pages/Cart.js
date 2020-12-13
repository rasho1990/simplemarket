import React,{useState,} from 'react';
import { Card, Button, Modal  } from 'semantic-ui-react'
const Cart = ({ products,button }) => {

    const [open, setOpen] =useState(false)
    
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
             trigger={button}
        >
            <Modal.Header>YOUR SHOPPING CART</Modal.Header>
            
            <Modal.Content>
          {products.length !==0 ?  products.map(item =>
                    <Card centered
                        image={`https://res.cloudinary.com/dfdocrzsc/image/upload/v1607554931/supermarket/${item.filename}`}
                        header={`${item.title}`}
                        meta={ `$ ${item.price}`}
                        description={`${item.description}`}
                    
                    />): <h3>YOUR CART IS EMPTY</h3>}
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)} positive>
                    Ok
          </Button>
            </Modal.Actions>
        </Modal>
    )

}
export default Cart;
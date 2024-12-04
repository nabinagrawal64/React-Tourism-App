import React, {useState} from 'react';

import ProductDate from './ProductDate';
import Card from './Card';

function ProductItem(props){
    const [title,setTitle] = useState(props.title); 
    //usestate(kis value se initialise karna chahte ho)
    //ye on the spot change nai karte schedule karte hai
    //ye 2 chhezzein return karta hai 
    //1. calue of the variable
    //2. a function for updating the value
    function clickHandler(){
        setTitle('popCorn');
        console.log("Button Clicked");
    }
    return(
        <Card className='product-item'>
            <ProductDate date={props.date} />
            <div className='product-item-description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>ADD TO CART</button>
        </Card>
    );
}

export default ProductItem;

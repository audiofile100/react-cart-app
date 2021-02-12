import React from "react";
import {useSelector, useDispatch} from "react-redux";
import DisplayDetailsUsingHook from './DisplayDetailsUsingHooks';
import {fetchProducts} from '../../State/Action';

let DisplayProductsComponent = (props) => {

    let products = useSelector((state)=> state.product.products);
    let dispatchGetProducts = useDispatch();
    
    products.length < 1 ? dispatchGetProducts(fetchProducts()) : "";

    return(
        <div>
            {
                products.length >= 1 ?
                products.map((product)=>{
                    return <DisplayDetailsUsingHook product={product} key={product._id}/>;
                })
                :
                <p>No Products to display</p>    
            }
        </div>
    )
}

export default DisplayProductsComponent;
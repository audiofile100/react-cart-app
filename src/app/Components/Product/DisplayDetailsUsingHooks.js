import React, {useState} from "react";
import ProductReviewsPopup from '../Popups/ProductReviewsPopup';

let DisplayDetailsUsingHook = (props)=>{
    let product = props.product;

    //useState returns a stateful value and a function to update
    const [showDetails, showHideDetails] = useState(false); //initialization of state through react hook useState passing in parameter

    const [showPopup, showHidePopup] = useState(false);

    const showHideDetailsClick = () =>{
        //alert("Show Hide Details Clicked!");
        showHideDetails(!showDetails)
    }

    const showHideProductReviews = (e) => {
        e.stopPropagation();
        //alert("clicked reviews button");
        showHidePopup(!showPopup)
    }

    const addProductToCart = (e) => {
        e.stopPropagation();
        alert("todo");
    }

    return(
        <React.Fragment>
            <ul className={"product"}>
                <li onClick={showHideDetailsClick}>
                    {product.name}                        
                    {showDetails ?
                    <ul className={"productDetails"}>
                        <li>{product.price}</li>
                        <li>{product.camera}</li>
                        <li>{product.ram}</li>
                        <li>{product.display}</li>
                        <li>{product.color}</li>
                        <li><button onClick={(e) => showHideProductReviews(e)}>Reviews</button></li>
                        <li><button onClick={(e) => addProductToCart(e)}>Add To Cart</button></li>
                    </ul>
                    :
                    ""}
                </li>
            </ul>
            {showPopup ?
            <ProductReviewsPopup toggle={(e) => showHideProductReviews(e)} productid={product._id} />
            :
            ""}
        </React.Fragment>
    )
}

export default DisplayDetailsUsingHook;
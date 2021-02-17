import React, {useState} from "react";
import ProductReviewsPopup from '../Popups/ProductReviewsPopup';
import {useSelector, useDispatch} from "react-redux";
import {fetchReviews} from '../../State/Action';

let DisplayDetailsUsingHook = (props)=>{
    let product = props.product;

    //useState returns a stateful value and a function to update
    const [showDetails, showHideDetails] = useState(false); //initialization of state through react hook useState passing in parameter

    const [showPopup, showHidePopup] = useState(false);

    const showHideDetailsClick = () =>{
        //alert("Show Hide Details Clicked!");
        showHideDetails(!showDetails)
    }

    let reviews = useSelector((state) => state.review.reviews);
    let dispatchGetReviews = useDispatch();

    const showHideProductReviews = (e) => {
        e.stopPropagation();
        showHidePopup(!showPopup);
        dispatchGetReviews(fetchReviews(product._id));
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
            <ProductReviewsPopup toggle={(e) => showHideProductReviews(e)} productid={product._id} reviews={reviews} />
            :
            ""}
        </React.Fragment>
    )
}

export default DisplayDetailsUsingHook;
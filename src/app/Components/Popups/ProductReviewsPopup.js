import React, {Component} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchReviews} from '../../State/Action';
import DisplayReviewHooks from '../Popups/DisplayReviewHooks';

let ProductReviewsPopup = (props) => {
    let id = props.productid;
    let reviews = props.reviews;
   
    // let reviews = useSelector((state) => state.review.reviews);
    let dispatchGetReviews = useDispatch();
    
    if (reviews == null) {
        dispatchGetReviews(fetchReviews(id));
    }
    // reviews.length < 1 ? dispatchGetReviews(fetchReviews(id)) : "";

    console.log("FETCH REVIEWS ", reviews);

    return(
        <div className="popup">
            <div className="popup_inner">
                { reviews.length >= 1 ?
                reviews.map((review) => {
                    if (review.productid == id) {
                        return <DisplayReviewHooks review={review} key={review._id} />;
                    }
                })
                : <p>no reviews yet</p>
                }
            </div>
        </div>
    )
}

export default ProductReviewsPopup;

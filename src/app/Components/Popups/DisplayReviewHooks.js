import React, {useState} from "react";

let DisplayReviewHooks = (props)=>{
    let review = props.review;

    return(
        <div>
            <div className={"review"}>
                <h4>{review.title}&emsp;{review.rating}</h4>
                <p>{review.review}</p>
            </div>
        </div>
    )
}

export default DisplayReviewHooks;
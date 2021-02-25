"use strict";
import React, {useState} from 'react';

import NotificationCard from '../Notification/NotificationCard';

let NotificationComponentHooks = (props) => {

    return(
        <div className="notification">
            <div className="notification_inner">
                <NotificationCard clickedCard={props.clickedCard} title="Add Product" description="To add products go to product page"/>
                <NotificationCard clickedCard={props.clickedCard} title="Add Item" description="To add items to cart go to product page" />
                <NotificationCard clickedCard={props.clickedCard} title="Review Cart" description="To review your cart go to cart page" />
                <NotificationCard clickedCard={props.clickedCard} title="Payments" description="To make payment go to checkout in cart"/>
                <NotificationCard clickedCard={props.clickedCard} title="Cancelling Orders" description="To cancel order go to orders page"/>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}

export default NotificationComponentHooks;
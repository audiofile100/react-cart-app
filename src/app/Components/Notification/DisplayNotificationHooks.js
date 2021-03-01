"use strict";
import React from 'react';
import { useSelector } from "react-redux";

import NotificationCard from '../Notification/NotificationCard';

let NotificationComponentHooks = (props) => {

    let cart = useSelector((state) => state.cart);
    let cancels = useSelector((state) => state.cancel.orders);

    return(
        <div className="notification" onClick={props.toggle}>
            <div className="notification_inner">
                <NotificationCard clickedCard={props.clickedCard} title="Add Product" description="To add products go to product page"/>
                <NotificationCard clickedCard={props.clickedCard} title="Add Item" description="To add items to cart go to product page" />
                <NotificationCard clickedCard={props.clickedCard} title="Review Cart" description="To review your cart go to cart page" />
                <NotificationCard clickedCard={props.clickedCard} title="Payments" description="To make payment go to checkout in cart"/>
                <NotificationCard clickedCard={props.clickedCard} title="Cancelling Orders" description="To cancel orders go to the orders page"/>
                { cart.length > 0 ?
                    <NotificationCard clickedCard={props.clickedCard} title="Cart" description="Your cart has been updated" />
                :
                ""}
                { cancels.length > 0 ?
                    <NotificationCard clickedCard={props.clickedCard} title="Canceled" description="Your canceled orders have been updated" />
                :
                ""}
            </div>
        </div>
    )
}

export default NotificationComponentHooks;
import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import {NavLink, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { BsFillBellFill } from 'react-icons/bs';

import DisplayNotificationHooks from '../Components/Notification/DisplayNotificationHooks';

let Header = (props) => {
    let userName = props.user && props.user.userName ? props.user.userName : "";
    const [showNotifications, showHideNotifications] = useState(false);
    let [count, updateCount] = useState(5);

    const history = useHistory();

    let logoutUser = () => {
        userName = "";
        window.location.href = "http://localhost:9092/home"
    }

    const notifications = (e) => {
        e.stopPropagation();
        showHideNotifications(!showNotifications);
    }

    const handleNotificationClick = (e) => {
        e.stopPropagation();
        updateCount(--count);
    }

    const cardClick = (title) => {
        if (count > 0)
            updateCount(--count);
        switch (title) {
            case "Add Product":
                history.push('/product');
                break;
            case "Add Item":
                history.push('/cart');
                break;
            case "Review Cart":
                history.push('/cart');
                break;
            case "Payments":
                history.push('/cart');
                break;
            case "Cancelling Orders":
                history.push('/order');
                break;
        }
    }

    return(
        <div className="col-md-12">
            <div>
                Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
                {userName == "" ?<b> Please Login to see other features</b>:""}
                <hr/>
                {userName == "" ?
                    <React.Fragment>
                        <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                        <NavLink to="/user" className="button" activeClassName="success" >Login </NavLink> 
                        <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
                    </React.Fragment>
                :
                <React.Fragment>
                    <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
                    <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
                    <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
                    <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink>
                    <NavLink to="/order" className="button" activeClassName="success">Orders</NavLink> 
                    <NavLink to="/cancel" className="button" activeClassName="success">Canceled Orders</NavLink>
                    {/* <NavLink to="/coupon" className="button" activeClassName="success" >Coupon </NavLink> 
                    <NavLink to="/about" className="button" activeClassName="success">About  </NavLink> */}
                    <NavLink to="/hobby" className="button" activeClassName="success">Hobby</NavLink>
                    { showNotifications ? 
                    <DisplayNotificationHooks toggle={notifications} clickedCard={cardClick}/>
                    : ""
                    }
                    <div className="logout">
                        <BsFillBellFill className="notification_icon" onClick={notifications} />
                        <span className={"badge"} onClick={handleNotificationClick}>{count}</span>
                        <input type="button" className={"button"} value={"Logout"} onClick={logoutUser} />
                    </div>
                </React.Fragment>}
            </div>
         </div>
    )
}

Header.propTypes = {
    user : PropTypes.object.isRequired
}

let mapStateToProps = (state)=>{
    return {
        user : state.user.user
    }
}

export default connect(mapStateToProps, null)(Header);
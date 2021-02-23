import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { BsFillBellFill } from 'react-icons/bs';

import DisplayNotificationHooks from '../Components/Notification/DisplayNotificationHooks';

let Header = (props) => {
    let userName = props.user && props.user.userName ? props.user.userName : "";
    const [showNotifications, showHideNotifications] = useState(false);

    let logoutUser = () => {
        userName = "";
        window.location.href = "http://localhost:9092/home"
    }

    const notifications = (e) => {
        e.stopPropagation();
        showHideNotifications(!showNotifications);
    }

    const handleOutsideClick = () => {
        if (showNotifications === true) {
            showHideNotifications(!showNotifications);
        }
    }

    document.addEventListener("click", handleOutsideClick);

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
                    <DisplayNotificationHooks />
                    : ""
                    }
                    <div className="logout"><BsFillBellFill className="notification_icon" onClick={(e) => notifications(e)} />
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
"use strict";
import React from 'react';

let NotificationComponentHooks = (props) => {

    return(
        <div className="notification">
            <div className="notification_inner">
                <h5>Notification</h5>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}

export default NotificationComponentHooks;
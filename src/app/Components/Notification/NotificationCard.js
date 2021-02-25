import React from 'react';

let NotificationCard = (props) => {

    let title = props.title;
    let description = props.description;

    const sendData = () => {
        props.clickedCard(title);
    }

    return (
        <div className="notification_card" onClick={sendData}>
            <p className="notification_title">{title}</p>
            <p className="notification_description">{description}</p>
        </div>
    )
}

export default NotificationCard;
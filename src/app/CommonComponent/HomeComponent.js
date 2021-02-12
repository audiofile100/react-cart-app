import React, { Component } from 'react';

export default class Home extends Component {

    constructor(props) {
        super();
        this.state = {
            Title : "Cart App"
        }
    }
    render() {
        return (
            <div className={"loadimage"} style={{backgroundImage: "url(./images/hm_pic4.jpg)" }}>
                {this.state.Title}
                <br/>
                <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>
                    <li>Add products/items to user's cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                </ul>
            </div>
        )
    }
}
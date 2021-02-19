import React from 'react';
import AddReviewPopup from '../Popups/AddReviewPopup';

export default class OrderItemComponent extends React.Component {

    constructor(props) {
        super();
        this.state = {
            showPopup: false,
            deliver: false
        }
    }

    DisplayPopup(item) {
        console.log("ITEM", item);
        this.setState({ 
            showPopup: !this.state.showPopup,
            item: item
         });
    }

    Dismiss() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    CancelOrder(orderObj) {
        /*
        var date = new Date(orderObj.date);
        var today = new Date();
        if (today.setDate(today.getDate() - 2) > date) {

        }
        */
        this.props.removeOrder(orderObj);
        this.props.saveCancel(orderObj);
    }

    render() {
        let {order} = this.props;
        return (
            <tr>
                <td>{order.userid}</td>
                <td colSpan={1}>
                    <table>
                        <thead>
                            <tr>
                                <th>items</th>
                                <th>qty</th>
                                <th>price</th>
                                <th>review</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.cart.map (item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => this.DisplayPopup(item) }>
                                                Review
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </td>
                <td>{order.date}</td>
                <td>
                    <button onClick={() => this.CancelOrder(order)}>
                        Cancel
                    </button>
                </td>
                {this.state.showPopup ?
                <AddReviewPopup closePopup={this.Dismiss.bind(this)} 
                                item={this.state.item} 
                                uid={order.userid} 
                                saveReview={this.props.saveReview}  />
                :
                <td></td>}
            </tr>
        )
    }
}

/*

*/
import React, {Component} from 'react';
import AddReviewPopup from '../Popups/AddReviewPopup';

export default class Order extends Component {

    constructor(props) {
        super();
        this.state = {
            orders: props.orders.orders,
            showPopup: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            orders: nextProps.orders.orders
        })
    }

    componentDidMount() {
        this.props.fetchOrders();
    }

    CancelOrder(orderObj) {
        this.props.removeOrder(orderObj);
        this.props.saveCancel(orderObj);
    }

    TogglePopup() {
        this.setState({ showPopup: !this.state.showPopup });
    }

    render() {
        console.log("this.state.orders: ", this.state.orders);
        return(
            <section className={"componentClass"}>
                <div>
                    <h2>Orders</h2>
                    { this.state.orders.length <= 0 ? 
                        <b>No recent orders</b>
                        :
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>cart</th>
                                    <th>date</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map (order => (
                                        <tr key={order._id}>
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
                                                                        <button onClick={this.TogglePopup.bind(this)}>
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
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
                {this.state.showPopup ?
                <AddReviewPopup closePopup={this.TogglePopup.bind(this)} />
                :
                ""}
            </section>
        )
    }
}
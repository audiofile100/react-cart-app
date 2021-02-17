import React, {Component} from 'react';
import OrderItemComponent from '../Order/OrderItemComponent';
import AddReviewPopup from '../Popups/AddReviewPopup';

export default class Order extends Component {

    constructor(props) {
        super();
        this.state = {
            orders: props.orders.orders
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

    SubmitReviewClick() {
        alert("clicked");
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
                                        <OrderItemComponent order={order} key={order._id} saveReview={this.props.saveReview} />
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </section>
        )
    }
}
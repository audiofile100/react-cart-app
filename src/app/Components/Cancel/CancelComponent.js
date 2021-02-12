import React, {Component} from 'react';

export default class Cancel extends Component {
 
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
        this.props.fetchCancels();
    }

    AddToOrders(orderObj) {
        this.props.removeCancel(orderObj);
        this.props.addCancel(orderObj);
    }

    render() {
        console.log("this.state.orders: ", this.state.orders);
        return(
            <section className={"componentClass"}>
                <div>
                    <h2>Orders</h2>
                    { this.state.orders.length <= 0 ? 
                        <b>No recent cancellations</b>
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
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            order.cart.map (item => (
                                                                <tr key={item.id}>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.qty}</td>
                                                                    <td>{item.price}</td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>{order.date}</td>
                                            <td>
                                                <button onClick={() => this.AddToOrders(order)}>
                                                    Add
                                                </button>
                                            </td>
                                        </tr>
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
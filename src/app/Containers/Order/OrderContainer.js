import {connect} from 'react-redux';
import OrderComponent from '../../Components/Order/OrderComponent';
import {saveOrder, fetchOrders, removeOrder, saveCancel} from '../../State/Action';

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        orders: state.order
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        saveOrder: (orderObj) => {
            dispatch(saveOrder(orderObj));
        },
        fetchOrders: () => {
            dispatch(fetchOrders());
        },
        removeOrder: (orderObj) => {
            dispatch(removeOrder(orderObj));
        },
        saveCancel: (orderObj) => {
            dispatch(saveCancel(orderObj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
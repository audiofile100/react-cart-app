import {connect} from 'react-redux';
import CancelComponent from '../../Components/Cancel/CancelComponent';
import {addCancel, addItemToCart, fetchCancels, removeCancel, saveItemsForCheckout} from '../../State/Action';

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        orders: state.cancel
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchCancels: () => {
            dispatch(fetchCancels());
        },
        removeCancel: (orderObj) => {
            dispatch(removeCancel(orderObj));
        },
        addCancel: (orderObj) => {
            dispatch(addCancel(orderObj));
        },
        updateCart: (cartObj) => {
            dispatch(addItemToCart(cartObj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelComponent);
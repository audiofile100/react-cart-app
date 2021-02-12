import {connect} from 'react-redux';
import CancelComponent from '../../Components/Cancel/CancelComponent';
import {addCancel, fetchCancels, removeCancel} from '../../State/Action';

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CancelComponent);
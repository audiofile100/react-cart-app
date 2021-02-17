import {connect} from "react-redux";
import DisplayProductComponent from '../../Components/Product/DisplayProductComponent';
import {addItemToCart, fetchProducts, fetchReviews} from '../../State/Action';

//to subscribe we need to have - mapstatetoprops
let mapStateToProps = (state)=>{ //we get the whole store object
    return {
        products : state.product.products     
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        fetchProducts:() =>{
            dispatch(fetchProducts())
        },
        addTheProductToCart: (prodObj) => {
            //cart item object
            let item = {
                id: prodObj._id,
                name: prodObj.name,
                price: prodObj.price,
                qty: 1
            }

            const action = addItemToCart(item);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayProductComponent);
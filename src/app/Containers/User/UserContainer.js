import {connect} from "react-redux";
import UserComponent from '../../Components/User/UserComponent';
import {fetchHobbies, signInUpUser} from '../../State/Action';

//to subscribe we need to have - mapstatetoprops
let mapStateToProps = (state)=>{ //we get the whole store object
    return {
        user : state.user.user,
        hobbies: state.hobby   
    }
}


//to publish we need to have - mapdispatchtoprops
let mapDispatchToProps = (dispatch)=>{
    return {
        loginUser: (userObject)=>{
            dispatch(signInUpUser(userObject));
        },
        fetchHobbies: () => {
            dispatch(fetchHobbies());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
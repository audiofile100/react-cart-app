import * as ActionTypes from './ActionTypes';

export const addUserToStore = (user) => ({
    type: ActionTypes.AddUserToStore,
    payload: {user}
})

export const signInUpUser = (userObject) => {
    console.log('entering signin signup user', userObject);

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch is from the server
        // thunk shall call
        console.log("called by thunk");
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/signInUpUser",//uri
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })//req.body.userName,req.body.password...
        .then (response => response.json()) //response from the server/ api
        .then (userresp => {
            console.log("response ", userresp);
            let action = addUserToStore(userresp);
            dispatch(action); // it will keep the current context to update the user object and takes it to the reducer
            
            //dispatch(loading(false));
            dispatch(getUserCart(userresp._id));
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
};

export const saveHobby = (hobby) => {
    console.log("saving hobby: ", hobby);
    return function (dispatch) {

        window.fetch("http://localhost:9090/api/addHobby", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hobby)
        })
        .then(hobbyresp => hobbyresp.json())
        .then((hobbyresp) => {
            console.log("response ", hobbyresp);
            //dispatch(fetchHobbies());
        })
        .catch((err)=> {
            console.log("error saving hobby: ", err);
        })
    }
};

export const fetchHobbies = () => ({
    type : ActionTypes.FETCH_HOBBY,
    payload: {
        promise: new Promise((resolve, reject) => {
            fetch("http://localhost:9090/api/getHobbies", {
                method: 'GET'
            }).then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            ).then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error);
            })
        })
    }
});

//Product Action and Server Call
export const saveProduct = (product)=>{
    console.log("Product ", product);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/api/saveProduct",{
            method: 'POST', //rest method type 
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(productresp => productresp.json())
        .then((productresp)=>{
            console.log("response ", productresp);
            //dispatch(loading(false));
            dispatch(fetchProducts());
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })
    }
};

//dispatching to product reducer using promise (plain promise)
export const fetchProducts = () => ({    
    type : ActionTypes.FETCH_PRODUCTS,
    payload: {
            promise: new Promise((resolve, reject) => { 
                fetch("http://localhost:9090/api/getProducts", {
                    method: 'GET'
                }).then(                
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                ).then(responseProducts => {
                    // want to updatePath for the route here:
                    //dispatch(updatePath('/'));
                    resolve(responseProducts)
                })
                .catch(error => {
                    reject(error);
                    //dispatch(error); -- promise Issue                        
                })
            })
        }       
});

//cart : add, update, delete

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item} //{item:item}
})

export const emptyTheCart = () => ({
    type: ActionTypes.EMPTY_CART
});

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty: parseInt(qty)
    }
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
});

export const saveItemsForCheckout = (cart, userid) => {
    console.log("Items To Be Saved", cart); 
    return function(dispatch) {
        window.fetch("http://localhost:9090/api/saveUserCart",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response ", usercartresponse);
            //dispatch(loading(false));
            dispatch(saveOrder(userid, usercartresponse.cart));
        })
        .catch((err)=>{
            console.log("Error While Saving Cart", err);
        }) 
    }
}


export const getUserCart = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Of items");
        window.fetch("http://localhost:9090/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (usercartresponse => {
            console.log("response - get user cart ", usercartresponse);
            
            dispatch(emptyTheCart());
            
            for (const item of usercartresponse.cart) {
                console.log("item in for of", item);
                let action = addItemToCart(item);
                dispatch(action);    
            }                
                       
        })
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}

// order 
export const saveOrder = (userid, cart) => {
    console.log("Save Order ", userid, cart);
    return function(dispatch) {
        let date = new Date();
        window.fetch("http://localhost:9090/api/saveOrder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid, cart:cart, date:date})
        })
        .then (response => response.json())
        .then (responseOrders => {
            console.log("saveOrder-responseOrders ", responseOrders);
            dispatch(fetchOrders());
        })
        .catch((err) => {
            console.log("ERROR saving order");
        })
    }
};

export const fetchOrders = () => ({
    type: ActionTypes.FETCH_ORDERS,
    payload: {
        promise: new Promise((resolve, reject) => {
            fetch("http://localhost:9090/api/getOrders", {
                method: 'GET'
            })
            .then (response => response.json(), err => console.log("ERROR getOrders"))
            .then (responseOrders => {
                console.log("fetchOrders-responseOrders " + responseOrders);
                resolve(responseOrders);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
})

export const removeOrder = (orderObj) => {
    console.log("Remove Order ", orderObj._id);
    return function(dispatch) {
        window.fetch("http://localhost:9090/api/removeOrder/" + orderObj._id, {
            method: 'DELETE',
        })
        .then (res => res.text())
        .then (text => {
            console.log(text);
            dispatch(fetchOrders());
        })
        .catch((err) => {
            console.log("Error removeOrder: ", err);
        })
    }
};

// cancellations

export const saveCancel = (orderObj) => {
    return function(dispatch) {
        let date = new Date();
        window.fetch("http://localhost:9090/api/saveCancel", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderObj)
        })
        .then (response => response.json())
        .then (responseOrders => {
            console.log("saveCancel-responseOrders ", responseOrders);
            dispatch(fetchCancels());
        })
        .catch((err) => {
            console.log("ERROR saving cancel");
        })
    }
}

export const fetchCancels = () => ({
    type: ActionTypes.FETCH_CANCELS,
    payload: {
        promise: new Promise((resolve, reject) => {
            fetch("http://localhost:9090/api/getCancels", {
                method: 'GET'
            })
            .then (response => response.json(), err => console.log("ERROR getCancels"))
            .then (responseOrders => {
                console.log("fetchCancels-responseOrders " + responseOrders);
                resolve(responseOrders);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
})

export const removeCancel = (orderObj) => {
    console.log("Remove Cancel ", orderObj._id);
    return function(dispatch) {
        window.fetch("http://localhost:9090/api/removeCancel/" + orderObj._id, {
            method: 'DELETE',
        })
        .then (res => res.text())
        .then (text => {
            console.log(text);
            dispatch(fetchCancels());
        })
        .catch((err) => {
            console.log("Error removeOrder: ", err);
        })
    }
};

export const addCancel = (orderObj) => {
    return function(dispatch) {
        let date = new Date();
        window.fetch("http://localhost:9090/api/addCancel", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderObj)
        })
        .then (response => response.json())
        .then (responseOrders => {
            console.log("saveCancel-responseOrders ", responseOrders);
            dispatch(fetchCancels());
        })
        .catch((err) => {
            console.log("ERROR adding cancel");
        })
    }
}

// reviews

export const fetchReviews = (id) => ({
    type: ActionTypes.FETCH_REVIEW,
    payload: {
        promise: new Promise((resolve, reject) => {
            fetch("http://localhost:9090/api/getReviews/" + id, {
                method: 'GET'
            })
            .then (response => response.json(), err => console.log("ERROR fetchReviews"))
            .then (responseReviews => {
                console.log("fetchReviews-responseReviews " + responseReviews);
                resolve(responseReviews);
            })
            .catch(err => {
                reject(err);
            })
        })
    }
});

export const saveReview = (reviewObj) => {
    return function(dispatch) {
        window.fetch("http://localhost:9090/api/saveReview", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewObj)
        })
        .then (res => res.json())
        .then (resReview => {
            console.log("saveReview-response", resReview);
        })
        .catch((err) => {
            console.log("ERROR saving review");
        })
    }
} 
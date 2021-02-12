import React from "react";
import '../../src/App.css';

import Header from './CommonComponent/HeaderComponent';
import Footer from './CommonComponent/FooterComponent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}

const Home = Loadable({
    loader: () => import("./CommonComponent/HomeComponent"),
    loading: Loading
});

const User = Loadable({
    loader: () => import("./Containers/User/UserContainer"),
    loading: Loading
});

const ProductHooks = Loadable({
    loader: () => import("./Components/Product/ProductComponentHooks"),
    loading: Loading
});

const DisplayProduct = Loadable({
    loader: () => import("./Containers/Product/DisplayProductContainer"),
    loading: Loading
});

const Hobby = Loadable({
    loader: () => import("./Components/Hobby/HobbyHooks"),
    loading: Loading
});

const Cart = Loadable({
    loader: () => import("./Containers/Cart/CartContainer"),
    loading: Loading
});

const Checkout = Loadable({
    loader: () => import("./Containers/Checkout/CheckoutContainer"),
    loading: Loading
});

const Order = Loadable({
    loader: () => import("./Containers/Order/OrderContainer"),
    loading: Loading
});

const Cancel = Loadable({
    loader: () => import("./Containers/Cancel/CancelContainer"),
    loading: Loading
});

export default class App extends React.Component {

    render() {
        return(
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/user" exact component={User} />
                    <Route path="/product" exact component={ProductHooks} />
                    <Route path="/display" exact component={DisplayProduct} />
                    <Route path="/cart" exact component={Cart} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/order" exact component={Order} />
                    <Route path="/cancel" exact component={Cancel} />
                    <Route path="/hobby" exact component={Hobby} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

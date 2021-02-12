"use strict";
import React, {Component} from 'react';

export default class User extends Component {

    constructor(props) {
        super();
        this.state = {
            userName: props.user.userName,
            password: props.user.password,
            street: props.user.street,
            mobile: props.user.mobile,
            hobbies: props.hobbies.hobbies
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            userName: nextProps.user.userName,
            password: nextProps.user.password,
            street: nextProps.user.street,
            mobile: nextProps.user.mobile,
            hobbies: nextProps.hobbies.hobbies,
            _id:nextProps.user._id
        })
    }

    componentDidMount() {
        this.props.fetchHobbies();
    }

    onChangeText = (evt)=>{
        // target is input element, real dom element, over which event is raised
        let target = evt.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value;//reading the value with the help of target (html control)
                                            //which raised this event

        if (classlist.indexOf("username")>=0) {
            this.setState({
                userName:typedValue
            })
        } else if(classlist.indexOf("pass")>=0) {
            this.setState({
                password:typedValue
            }) 
        } else if(classlist.indexOf("street")>=0){
            this.setState({
                street: target.value
            })
        } else if ((target.value && target.value.length <= 11)) {
            this.setState({
                mobile: target.value
            })    
        }
    }

    LoginUser = ()=>{
        this.props.loginUser(this.state);
    }

    render(){
        //console.log("hobbies: ", this.state.hobbies);
        let hobbiesOptions = this.state.hobbies.length > 0 && this.state.hobbies.map((item, i) => {
            return (
                <option key={i} value={item.id}>{item.name}</option>
            )
        }, this);
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" value={this.state.userName} 
                            placeholder="User Name" onChange={this.onChangeText} />
                    </div>
                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                            placeholder="Password"
                            onChange={this.onChangeText} />
                    </div>

                    <div className="col-md-12">
                        <b>Street </b>
                    <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                          placeholder="Street Name"
                          onChange={this.onChangeText} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            placeholder="Mobile" maxLength="11"
                            onChange={this.onChangeText} />
                    </div>
                    <div className="col-md-6">
                        <b>Hobbies</b>
                        <select>
                            <option value="{}"></option>
                            {hobbiesOptions}
                        </select>
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"SignIn-Up"} onClick={this.LoginUser}/>
                </div>
            </section>
        )
    }
}
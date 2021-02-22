"use-strict";

import React,{useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DisplayProductHooks from './DisplayProductComponentHooks';
import {saveProduct} from '../../State/Action';

//functional component
let ProductHooks = (props) => {
    const [name, setName] = useState("Initial Name");
    const [price, setPrice] = useState(0);
    const [camera, setCamera] = useState("Initial Camera");
    const [color, setColor] = useState("Initial Color");
    const [display, setDisplay] = useState("Initial Display");
    const [ram, setRam] = useState("Initial RAM");

    let user = useSelector((state) => state.user.user);

    let dispatchProduct = useDispatch(); // using this hook to dispatch the addCouponToStore action : publisher
    
    let saveProductClick = ()=>{           
        alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Camera = ${camera}, Color = ${color},  Display = ${display}, RAM = ${ram}`)

        const productObj = {
            name, 
            price,
            camera,
            color, 
            display,
            ram
        }

        dispatchProduct(saveProduct(productObj));
    }
    
    let captureValueFromTextBoxes = (evt)=>{
        // debugger;
        let target = evt.target;
        let classlist = target.classList.toString();

        if(classlist.indexOf("pname")>=0){
            setName(target.value)
        }else if(classlist.indexOf("price")>=0){
            setPrice(target.value)
        }else if(classlist.indexOf("camera")>=0){
            setCamera(target.value)
        }else if(classlist.indexOf("color")>=0){
            setColor(target.value)
        }
        else if(classlist.indexOf("display")>=0){
            setDisplay(target.value)
        }
        else{
            setRam(target.value)
        }
    }

    return(
        <section className={"componentClass"}>
            { user.userName != "" && user.userName === "admin" ? 
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Product Name</b>
                    {/* product.name attribute initialized in the reducer */}                                       
                    <input type="text" className="form-control col-md-6 pname" value={name} 
                        placeholder="Product Name"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>Price </b>
                    <input type="number" className="form-control col-md-6 price" value={price} 
                        placeholder="Product Price"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>Camera </b>
                <input type="text" className="form-control col-md-6 camera" value={camera} 
                        placeholder="Camera"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                <div className="col-md-12">
                    <b>RAM </b>
                <input type="text" className="form-control col-md-6 ram" value={ram} 
                        placeholder="ram"
                        onChange={captureValueFromTextBoxes} />
                </div>

                <div className="col-md-12">
                    <b>Display </b>
                <input type="text" className="form-control col-md-6 display" value={display} 
                        placeholder="Display"
                        onChange={captureValueFromTextBoxes} />
                </div>

                <div className="col-md-12">
                    <b>Color </b>
                <input type="text" className="form-control col-md-6 color" value={color} 
                        placeholder="Color"
                        onChange={captureValueFromTextBoxes} />
                </div>
                
                
                <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={saveProductClick}/>
            </div>
            :
            <br/> }
            <br/>
            <DisplayProductHooks/>
        </section>
    )
}

export default ProductHooks;
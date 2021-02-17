import React, {Component} from 'react';

class AddReviewPopup extends Component {

    constructor(props) {
        super();
        this.state = {
            displayname: "",
            title: "",
            review: "",
            rating: "",
            item: props.item,
            uid: props.uid
        }
    }

    onChangeText = (evt)=>{
        let target = evt.target;
        let classlist = target.classList.toString();
        
        let typedValue = target.value;

        if (classlist.indexOf("displayname")>=0) {
            this.setState({
                displayname:typedValue
            })
        } else if (classlist.indexOf("title")>=0) {
            this.setState({
                title: typedValue
            })
        } else if(classlist.indexOf("review")>=0) {
            this.setState({
                review:typedValue
            }) 
        } else if(classlist.indexOf("rating")>=0){
            this.setState({
                rating: target.value
            })
        }
    }

    submitReview = () => {
        let reviewObj = {
            "productid" : this.state.item.id,
            "userid" : this.state.uid,
            "title" : this.state.title,
            "review" : this.state.review,
            "rating" : this.state.rating
        }
        this.props.saveReview(reviewObj);
        this.props.closePopup();
    }

    render () {
        return (
            <td>
            <div className="popup">
                <div className="popup_inner">
                    <h5>Enter your reviews</h5>
                    <input type="text" className="form-control col-md-6 displayname" placeholder="Name/Alias (optional)" value={this.state.displayname} onChange={this.onChangeText}/>
                    <input type="text" className="form-control col-md-6 title" placeholder="title" value={this.state.title} onChange={this.onChangeText}/>
                    <textarea className="form-control col-md-10 review" rows="8" value={this.state.review} onChange={this.onChangeText} ></textarea>
                    <p>Rating</p>
                    <input type="number" min="1" max="5" className="form-control col-md-2 rating" value={this.state.rating} onChange={this.onChangeText} />
                    <br/>
                    <button onClick={this.props.closePopup}>Dismiss</button>
                    <button onClick={this.submitReview}>Submit</button>
                </div>
            </div>
            </td>
        )
    }
}

export default AddReviewPopup;
import React, {Component} from 'react';

class AddReviewPopup extends Component {

    render () {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <h5>Enter your reviews</h5>
                    <input type="text" className="form-control col-md-6 username" placeholder="Name/Alias (optional)" />
                    <textarea rows="10" ></textarea>
                    <p>Rating</p>
                    <input type="number" min="1" max="5" defaultValue="1" className="form-control col-md-2 username" />
                    <br/>
                    <button onClick={this.props.closePopup}>Done</button>
                </div>
            </div>
        )
    }
}

export default AddReviewPopup;
import React, {Component} from 'react';

class AddReviewPopup extends Component {

    render () {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Done</button>
                </div>
            </div>
        )
    }
}

export default AddReviewPopup;
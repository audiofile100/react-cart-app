import React, {Component} from 'react';

class ProductReviewsPopup extends Component {

    render() {
        return(
            <div className="popup">
                <div className="popup_inner">
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        )
    }
}

export default ProductReviewsPopup;

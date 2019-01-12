import React, { Component } from 'react';
import Size from '../../CheckBoxes/index';

class SizePart extends Component {
    availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

    createCheckboxes = () => {
        this.availableSizes.map((size) => {
            return < Size size={size}/>
        });
    }


    render(){
        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                {this.createCheckboxes()}
            </div>
        )
    }
}

export default SizePart;
import React from 'react';

import "../../../css/w3.css";
import "../../../css/mycss.css"

export default class InputForm extends React.Component{
    render(){
        return(
            <div>
                <label htmlFor={this.props.valueName}>{this.props.labelText}</label>
                <input className="w3-input input-form" 
                name={this.props.valueName}
                type={this.props.typeInput}
                placeholder={this.props.placeHolder}/>
            </div>
        );
    }
};
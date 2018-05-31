import React from 'react';
import "../../css/mycss.css";

export default class BaseButton extends React.Component{
    constructor(){
        super();
        this.handleHover = this.handleHover.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = {
            hover: false,
            focus: false
        };
    }

    handleHover(){
        this.setState({
           hover: !this.state.hover 
        });
    }

    handleFocus(){
        this.setState({
            focus:!this.state.focus
        });
    }

    render(){
        return(
            <button className={this.props.classes + " base-button"} 
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover} 
            onClick={this.props.action}>{this.props.text}</button>
        );
    }
};
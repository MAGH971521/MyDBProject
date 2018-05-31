import React from 'react';

//Styles
import '../../css/w3.css';
import '../../css/mycss.css';


class NavItem extends React.Component {
  constructor(){
    super();
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      hover: false
    }
  }

  handleHover(){
    this.setState({hover: !this.state.hover});
  }

  render(){
    return(
      <a className={ "w3-bar-item " + (this.state.hover ? (this.props.ligthcolor): (this.props.maincolor))}
      onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={this.props.events}>
      {this.props.text}</a>
    );
  }
}

export default NavItem;

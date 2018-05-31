import React from 'react';

import '../../css/w3.css';
import '../../css/w3-theme-blue.css';

import NavItem from '../components/nav-item';

class NavBar extends React.Component {
  render(){
    return(
      <nav className="w3-sidebar w3-theme-d2 w3-bar-block" style={{width: "15%"}}>
        <h3 style={{textAlign: 'center'}}>Menu</h3>
        <NavItem ligthcolor="w3-theme-l5" maincolor="w3-theme-d2" text="Home"/>
        <NavItem ligthcolor="w3-theme-l5" maincolor="w3-theme-d2" text="Log In"/>
        <NavItem ligthcolor="w3-theme-l5" maincolor="w3-theme-d2" text="Sign Up"/>
      </nav>
    );
  }
};

export default NavBar;

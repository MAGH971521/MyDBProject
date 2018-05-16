import React from 'react';

import '../../css/w3.css';
import '../../css/w3-theme-blue.css';
import '../../css/mycss.css';

import NavItem from '../components/nav-item';

class NavBar extends React.Component {
  render(){
    return(
      <nav className="w3-sidebar w3-theme w3-bar-block" style={{width: "12%"}}>
        <h3 style={{textAlign: 'center'}}>Menu</h3>
        <NavItem text="Item1"/>
        <NavItem text="Item2"/>
        <NavItem text="Item3"/>
      </nav>
    );
  }
};

export default NavBar;

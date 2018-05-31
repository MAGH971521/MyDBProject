import React from 'react';

//Styles
import '../css/w3.css';
import '../css/w3-theme-blue.css';
import '../css/mycss.css';

//Components
import Header from './containers/header';
import NavBar from './containers/navbar';
import SignUpForm from './forms/sign-up';
import LogInForm from './forms/log-in';

class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <div className="main-container">
          <Header title="My Page" subtitle="Well... it's fine!.. i think"/>
          <div className="w3-cell-row">
            <SignUpForm/>
            <div className="w3-cell divisor w3-teal"></div>
            <LogInForm/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;

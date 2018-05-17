import React from 'react';

//Styles
import '../css/w3.css';
import '../css/w3-theme-blue.css';

//Components
import Header from './containers/header';
import NavBar from './containers/navbar';

class App extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        <div style={{paddingLeft: '12%'}}>
          <Header title="My Page" subtitle="Well... it's fine!.. i think"/>
        </div>
      </div>
    );
  }
};

export default App;

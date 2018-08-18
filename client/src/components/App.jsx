import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Greeter from './Greeter.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {    
    return (
      <div>
        <Header />
        <Greeter />
        <div id='topAssets'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

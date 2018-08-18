import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Greeter from './Greeter.jsx';
import SimpleCard from './WatchListCard.jsx';
import AssetCard from './AssetCard.jsx';
import DataCard from './DataCard.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      current: 'crypto'
    }
  }

  changeCurr(event) {
    event.preventDefault();
    let change;

    if (event.target.id === 'c') {
      change = 'crypto';
    } else if (event.target.id === 'r') {
      change = 'real';
    } else if (event.target.id === 's') {
      change = 'stock';
    }

    this.setState(
      {
        current: change
      }
    )
  }
  
  render() {       
    return (
      <div id='home'>
        <div id='topAssets'>
        <div id='watchlearn'>
          < AssetCard />
          < SimpleCard />
        </div>
        < DataCard />
          <div id='main_selector'>
        </div>  
        </div>
      </div>
    );
  }
}

export default Home;

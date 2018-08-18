import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
    }

   render() {
        return (
            <div id='topBar'> 
                <div id='logo'>
                    <img src='https://s3.amazonaws.com/projectimage/dive_white.png'/>
                    <a href='#'>Investments</a>
                    <a href='#'>Watchlist</a>
                    <a href='#'>News</a>
                    <a href='#'>Forum</a>
                    <a href='#'>About Us/Contact</a>
                </div>
                <div id='check'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Log-In</Link>
                </div>
            </div>
        )
    }
}

export default Header;
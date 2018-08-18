import React, { Component } from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';


reactDOM.render(< BrowserRouter><App /></BrowserRouter>, document.querySelector('#app'));

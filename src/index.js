import React from 'react';
import ReactDOM from 'react-dom';
// import CounterApp from './CounterApp'
import FirstApp from './FirstApp'

import './index.css';

const divRoot = document.querySelector('#root')

ReactDOM.render( < FirstApp greeting = { 'Hi i\'m Arch Switcher' }
    subtitle = 'Mejorando' / > , divRoot);

{ /* // ReactDOM.render( < CounterApp value = { 0 }/>, divRoot); */ } { /* // ReactDOM.render( < CounterApp value = { 0 }/>, divRoot); */ }
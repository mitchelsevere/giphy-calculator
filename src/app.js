import React from 'react';
import ReactDOM from 'react-dom';
import GiphyCalculator from './components/GiphyCalculator';
import 'normalize.css/normalize.css';
import './scss/style.scss';

console.log('app.js is running');
const appRoot = document.querySelector('#app');

ReactDOM.render(<GiphyCalculator />, appRoot);

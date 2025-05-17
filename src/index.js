import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
// Import the CSS styles
import './css/style.css';


// Render the StorePicker component into the DOM
render(
  <App />,
  document.querySelector('#main')
);
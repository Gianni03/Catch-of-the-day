import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
// Import the CSS styles
import './css/style.css';


// Render the StorePicker component into the DOM
render(
  <Router />,
  document.querySelector('#main')
);
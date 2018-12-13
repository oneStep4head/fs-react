import React from 'react';
import ReactDom from 'react-dom';
import Root from './root';
// POLYFILLS
import '@babel/polyfill';
import 'whatwg-fetch';
// POLYFILLS

const rootElement = document.querySelector('#root');

ReactDom.render(<Root />, rootElement);

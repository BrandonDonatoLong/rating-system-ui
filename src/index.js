import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//This is mostly boiler plate code from create-react-app boiler plate.
ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

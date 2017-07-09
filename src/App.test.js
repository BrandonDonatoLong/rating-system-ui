import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import API from './components/hotel-api';

it('renders without crashing', () => {
      const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
});

// it('test to see if the API path is running', () =>{
//     API.get('/reviewAverage').then( (result)=>{
//       if (result){
//         return true;
//       }
//
//     });
// });

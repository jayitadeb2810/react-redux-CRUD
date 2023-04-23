import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './reducers/reducer'
import App from './App';


const store = configureStore({
  reducer:{
    user: UserReducer ,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


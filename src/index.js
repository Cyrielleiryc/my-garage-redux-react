import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

import './assets/stylesheets/application.css';

// components and containers
import CarsIndex from './containers/cars_index.js';

// reducers
import carsReducer from './reducers/cars_reducer';

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={history}>
    <Provider store={store}>
      <Routes>
        <Route path="/" exact element={<CarsIndex />} />
      </Routes>
    </Provider>
  </Router>
);

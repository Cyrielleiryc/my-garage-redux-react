import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createMemoryHistory  as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import './assets/stylesheets/application.css';

// components and containers
import CarsIndex from './containers/cars_index.js';
import CarsNew from './containers/cars_new.js';
import CarsShow from './containers/cars_show.js';

// reducers
import carsReducer from './reducers/cars_reducer';

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router history={history}>
    <Provider store={store}>
      <div className="view-container">
        <Routes>
          <Route path="/" exact element={<CarsIndex />} />
          <Route path="/cars/new" exact element={<CarsNew />} />
          <Route path="/cars/:id" element={<CarsShow />} />
        </Routes>
      </div>
    </Provider>
  </Router>
);

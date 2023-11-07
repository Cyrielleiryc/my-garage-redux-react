import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createHashHistory as history } from 'history';

import './assets/stylesheets/application.css';

// components and containers
import CarsIndex from './containers/cars_index.js';

// reducers
import carsReducer from './reducers/cars_reducer';
import garageReducer from './reducers/garage_reducer';

// const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: "myGarage",
  cars: []
};

const reducers = combineReducers({
  garage: garageReducer, // (state = null, action) => state,
  cars: carsReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Routes>
//         <Route path="/" exact component={CarsIndex} />
//       </Routes>
//     </Router>
//   </Provider>,
//   document.querySelector('.container')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact element={<CarsIndex />} />
        </Routes>
      </Provider>
    </Router>
  // </React.StrictMode>
);

// //////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

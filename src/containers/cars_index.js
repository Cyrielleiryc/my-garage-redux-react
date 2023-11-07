import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// images locales
import logo_square from '../assets/images/logo_square.svg'

// action creators
import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars()
  }

  render() {
    return (
      <div className="view-container">
        <div className="aside">
          <h1>Hello</h1>
        </div>
        <div className="list-container" key="cars">
          {this.props.cars.map((car) => (
            <div key={car.id} className="car-smallad">
              <img className="car-logo" src={logo_square} alt="" />
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {fetchCars}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

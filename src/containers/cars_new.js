import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CarsNew(props) {
  const navigate = useNavigate(); // Get the navigate function from React Router

  const renderField = (field) => {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }

  const onSubmit = (values) => {
    props.createCar(props.garage, values, (car) => {
      navigate('/'); // Use navigate to navigate to the desired route
      return car;
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <Field label="Brand" name="brand" type="text" component={renderField} />
        <Field label="Model" name="model" type="text" component={renderField} />
        <Field label="Owner" name="owner" type="text" component={renderField} />
        <Field label="Plate" name="plate" type="text" component={renderField} />
        <button type="submit" disabled={props.pristine || props.submitting}>
          Create car
        </button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default reduxForm({ form: 'newCarForm' })(connect(mapStateToProps, { createCar })(CarsNew));

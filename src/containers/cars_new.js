import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// actions, components and images
import { createCar } from '../actions';
import Aside from '../components/aside';
import formImg from '../assets/images/form.jpg'

// const required = value => value ? undefined : 'Required'
// const plate = value => value && !/\A[A-Z0-9]+/.test(value) ? 'Invalid plate number' : undefined


const validate = values => {
  const errors = {}
  if (!values.brand) {
    errors.brand = 'Required'
  }
  if (!values.model) {
    errors.model = 'Required'
  }
  if (!values.owner) {
    errors.age = 'Required'
  }
  if (!values.plate) {
    errors.plate = 'Required'
  } else if (!/^[A-Z0-9]+\b/.test(values.plate)) {
      errors.plate = 'Invalid plate number'
    }
  return errors
}

// const warn = values => {
//   const warnings = {}
//   if (values.brand < 2) {
//     warnings.brand = 'Wrong brand'
//   }
//   return warnings
// }

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <input className="form-control" {...input} placeholder={placeholder} type={type}/>
    {touched && ((error && <span>{error}</span>) )}
  </div>
)

function CarsNew(props) {
  const navigate = useNavigate(); // Get the navigate function from React Router
  const onSubmit = (values) => {
    props.createCar(props.garage, values, () => {
      navigate('/'); // Use navigate to navigate to the desired route
    });
  }

  return [
    <Aside key="aside" garage={props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
    <div key="add" className="form-container" style={{ backgroundImage: `url(${formImg})`}}>
      <div className="overlay"></div>
      <form onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="brand" label="Brand" type="text" placeholder="Aston Martin" component={renderField} />
        <Field name="model" label="Model" type="text" placeholder="DB Mark III" component={renderField} />
        <Field name="owner" label="Owner" type="text" placeholder="James Bond" component={renderField} />
        <Field name="plate" label="Plate" type="text" placeholder="AA123BB" component={renderField} />
        {/* <div className="form-group">
          <label htmlFor="InputBrand">Brand</label>
          <Field name="brand" type="text" placeholder="Aston Martin" component={renderField} className="form-control"
           />
        </div>
        <div className="form-group">
          <label htmlFor="InputModel">Model</label>
          <Field name="model" type="text" placeholder="DB Mark III" component={renderField} className="form-control"
           />
        </div>
        <div className="form-group">
          <label htmlFor="InputOwner">Owner</label>
          <Field name="owner" type="text" placeholder="James Bond" component={renderField} className="form-control"
           />
        </div>
        <div className="form-group">
          <label htmlFor="InputPlate">Plate</label>
          <Field name="plate" type="text" placeholder="DB Mark III" component={renderField} className="form-control"
           />
        </div> */}
        <button type="submit" disabled={props.submitting}>Add car</button>
      </form>
    </div>
  ];
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  }
}

export default reduxForm({ form: 'newCarForm', validate })(connect(mapStateToProps, { createCar })(CarsNew));

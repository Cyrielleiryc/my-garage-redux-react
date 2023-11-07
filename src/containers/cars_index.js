import React, { Component } from 'react';

class CarsIndex extends Component {
  componentDidMount() {
    console.log("hello from the cars index component")
  }
  
  render() {
    return (
      <div><h1>Hello from cars index</h1></div>
    )
  }
};

export default CarsIndex;

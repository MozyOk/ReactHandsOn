import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameForm extends Component {
  state = {
    name: 'test'
  } 

  handleInputName = (e) => {
    this.setState({name: e.target.value})

  }

  handleOnclick = () => {
    this.setState({name: ''})
  }

  render() {
    return (
      <div>
      {this.state.name}
      <form>
      <input value={this.state.name} onChange={this.handleInputName} ></input>
      </form>
      </div>
    );
  }
}

export default NameForm;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class todoshechka extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {todoname: '', todotext: ''};
  }

  handleNameChange(e) {
   this.props.onNameChange(e.target.value);
  }

  handleTextChange(e) {
   this.props.onTextChange(e.target.value);
  }

}

class App extends Component {
  render() {
    const todoname = this.props.todoname;
    const todotext = this.props.todotext;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>KoKo TODO App</h2>
        </div>
      <fieldset>
        <legend>Enter task name</legend>
        <input value={todoname}
               onChange={this.handleNameChange} />
      </fieldset>
      <fieldset>
        <legend>Enter task text</legend>
        <input value={todotext}
               onChange={this.handleTextChange} />
      </fieldset>
      </div>
    );
  }
}

export default App;

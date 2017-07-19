import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const tasks = ["sd", "ads", "asd", "asd"];

class Header extends React.Component {
  render() {
    return (
    <div>
      <h1>Ваши незавершенные дела:</h1>
        <TasksList/>
    </div>
    );
  }
}

function ListTask(props) {
  return (
  <table>
    <tr>
      <td>{props.value}</td>
      <td>
        <button>Done</button>
      </td>
    </tr>
  </table>
  );
}

function TasksList(props) {
    // const tasks = props.tasks;
    const listItems = tasks.map((task) =>
    <div>
      <ListTask key={task.toString()} value={task} />
    </div>
    );
    return (
      <div>
        {listItems}
      </div>
    )};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>KoKo TODO App</h2>
        </div>
        <Header/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const tasks = ["sd", "ads", "asd", "asd"];

class Header extends React.Component {
  
  // handleDelete() {
  //   this.setState = {   }
  // }
  // handleCreate() {
  //   this.setState(tasks = ["sd", "ads", "asd", "asd"]);
  // }
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
    <div>
      <form>
        {props.value}
        <button onClick={(e) => this.handleDelete(e)}>
          Done
        </button>
      </form>
    </div>
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
          <h2>KoKo ToDo App</h2>
        </div>
          <h1>Чего бы я хотел сделать: </h1>
          <imput className="task"/>
        <Header/>
      </div>
    );
  }
}

export default App;

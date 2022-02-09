import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './App.css';
import withNavigation from './components/todo/withNavigation';
import withParams from './components/todo/withParams';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp/>
        <withNavigation/>
        <withParams/>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}




export default App;

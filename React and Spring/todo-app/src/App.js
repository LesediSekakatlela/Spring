import React, { Component } from 'react';
import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

function ThirdComponent() {
  return (
    <div className="thirdComponenet">
      Third Component
    </div>
  );
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
  }
  incrementCounter = (val) => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + val,
      }
    })
  }
  render() {
    return (
      <div>
        <Button
          //props
          incrementValue = {1} 
          onClickFunction = {this.incrementCounter}
        />
        <Button
          //props
          incrementValue = {5} 
          onClickFunction = {this.incrementCounter}
        />
        <Button
          //props
          incrementValue = {10} 
          onClickFunction = {this.incrementCounter}
        />
        <Button
          incrementValue = {100}
          onClickFunction = {this.incrementCounter}
        />
        <br />
        <Result counter = {this.state.counter}/>
      </div>
    );
  }
}

class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  }
  render() {
    return (
      <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

export default App;

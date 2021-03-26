import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';
import logo from './logo.svg';


class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapSateToProps = state => {
  console.log({ state });
  return { valor: state };
};

const mapDispatchToProp = dispatch => ({});

export default connect(mapSateToProps, mapDispatchToProp)(App);

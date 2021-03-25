import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';
import UserForm from "./components/UserForm";
// import { decrease, increase, set } from "./reducers";


class App extends Component {
  handleSubmit = payload => {
    console.log(payload);
  };
  
  render() {
    return (
      <div className="App">
        <UserForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapSateToProps = state => ({ value: state.counter });


const mapDispatchToProp = dispatch => ({
  // increase: () => dispatch(increase()),
  // decrease: () => dispatch(decrease()),
  // set: payload => dispatch(set(payload)),
});

export default connect(mapSateToProps, mapDispatchToProp)(App);

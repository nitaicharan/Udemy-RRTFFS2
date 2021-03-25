import React, { Component } from "react";
import { connect } from "react-redux";
import './App.css';
import { decrease, increase, set } from "./reducers";


class App extends Component {
  handleSet = e => {
    const { set } = this.props;
    const {value }= this.state;
    set(Number(value));
  };

  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value});
  };

  render() {
    const { decrease, increase, value } = this.props;
    
    return (
      <div className="App">
        <p>{value}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <input name='value' onChange={this.handleChange} />
        <button onClick={this.handleSet}>Set</button>
      </div>
    );
  }
}

const mapSateToProps = state => ({ value: state.counter });


const mapDispatchToProp = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
  set: payload => dispatch(set(payload)),
});

export default connect(mapSateToProps, mapDispatchToProp)(App);

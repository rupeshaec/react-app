import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.state.count}</span>
        <button className="btn btn-warning">Increment</button>
      </div>
    );
  }
}

export default Counter;

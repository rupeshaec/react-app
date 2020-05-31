import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">1</span>
        <button className="btn btn-warning">Increment</button>
      </div>
    );
  }
}

export default Counter;

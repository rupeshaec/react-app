import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1, // toggle this to 0 or 1 to see changes
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-warning">Increment</button>
      </div>
    );
  }

  formatCount() {
    const counter = this.state.count;
    return counter === 0 ? "Missing elements" : counter;
  }
}

export default Counter;

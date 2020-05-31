import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.count,
  };

  styles = {
    fontSize: "15px",
  };

  render() {
    console.error(this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.setBadgeColor()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-warning"
          onClick={() => this.handleIncrement()}
        >
          +
        </button>
        <button
          onClick={() => this.handleDecrement()}
          className="btn btn-danger m-2"
        >
          -
        </button>
      </div>
    );
  }

  setBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "primary" : "secondary";
    return classes;
  }

  formatCount() {
    const counter = this.state.count;
    return counter === 0 ? "0" : counter;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
}

export default Counter;

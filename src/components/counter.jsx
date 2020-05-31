import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0, // toggle this to 0 or 1 to see changes
  };

  styles = {
    fontSize: "15px",
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.setBadgeColor()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-warning"
          onClick={() => this.handleIncrement({ id: 1, name: "Product A" })}
        >
          Increment
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

  handleIncrement = (product) => {
    console.error("Product passed is ", product.id, product.name);
    this.setState({ count: this.state.count + 1 });
    // () => this.handleIncrement({ id: 1, name: "Product A" })
    // means function call [() =>]followed by passing product as argument [JSON obj]
  };
}

export default Counter;

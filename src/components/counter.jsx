import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1, // toggle this to 0 or 1 to see changes
    tags: ["tag1", "tag2", "tag3"],
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
        <button className="btn btn-warning">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
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
    return counter === 0 ? "Missing elements" : counter;
  }
}

export default Counter;

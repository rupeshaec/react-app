import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1, // toggle this to 0 or 1 to see changes
    tags: ["tag1", "tag2", "tag3"], // toggle this to [] or ["tag1", "tag2", "tag3"] to see changes
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
        {this.renderList()}
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

  renderList() {
    const arr = this.state.tags;
    if (arr.length === 0) {
      return <p>No elements available !!!.</p>;
    } else {
      return (
        <ul>
          {arr.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
}

export default Counter;

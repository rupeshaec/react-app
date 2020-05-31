import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0, // toggle this to 0 or 1 to see changes
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
        <button
          className="btn btn-warning"
          onClick={() => this.handleIncrement({ id: 1, name: "Product A" })}
        >
          Increment
        </button>
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

  // handleIncrement = () => {
  //   // notice the call to this method in onClick is not a method call. E.g. handleIncrement as oppose to handleIncrement()
  //   console.error("Add more clicked");
  //   console.error(this); // this will throw error if we remove bind from constructor.
  //   // why 'this' is not available in this method. Since we called a reference to this method not actually called it.
  //   this.setState({ count: this.state.count + 1 });

  //   let arr = this.state.tags;
  //   arr.push("tag" + (arr.length + 1));
  //   this.setState({ tags: arr });
  // };

  handleIncrement = (product) => {
    console.error("Product passed is ", product.id, product.name);
    this.setState({ count: this.state.count + 1 });
    // () => this.handleIncrement({ id: 1, name: "Product A" })
    // means function call [() =>]followed by passing product as argument [JSON obj]
  };
}

export default Counter;

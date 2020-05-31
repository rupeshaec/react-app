import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      // add 4 products with random values. Render counters.length number of counter components
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 3 },
      { id: 4, value: 1 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} count={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;

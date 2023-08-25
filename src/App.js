import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.increment}>
          +
        </button>
        <button className="button" onClick={this.decrement}>
          -
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default App;

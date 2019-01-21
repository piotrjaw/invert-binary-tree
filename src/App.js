import React, { Component } from 'react';
import './App.css';
import Node from './Node';

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ tree: this.createNode({ parentDepth: 0, maxDepth: 5 }) });
  }

  createNode = ({ parentDepth, maxDepth }) => {
    if (!maxDepth || typeof parentDepth !== 'number') throw new Error('Config is insufficient');
    const thisDepth = parentDepth + 1;
    return {
      value: Math.round(Math.random() * 10),
      left: this.getChildNode({ thisDepth, maxDepth }),
      right: this.getChildNode({ thisDepth, maxDepth }),
    };
  };

  getChildNode = ({ thisDepth, maxDepth }) => thisDepth === maxDepth ||
    Math.random() > 0.8
      ? null
      : this.createNode({ parentDepth: thisDepth, maxDepth });

  invert = (node) => {
    if (!node) return node;
    const result = { ...node };
    const temp = node.left ? this.invert(node.left) : null;
    node.left = node.right ? this.invert(node.right) : null;
    node.right = temp;
    return result;
  }

  render() {
    return (
      <div className="App">
        <Node node={ this.state.tree } />
        <Node node={ this.invert(this.state.tree) } />
      </div>
    );
  }
}

export default App;

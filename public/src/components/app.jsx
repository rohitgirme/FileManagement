import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="easy-up-container">
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from 'react';

class App extends Component {
  state = { received: null }

  receive(received) {
    this.setState({received});
  }

  render() {
    const { index, selection } = this.state;
    return (
      <div style={{ height: "500px" }}>
      <h1>Mounted</h1>
       <p>Received data: {this.state.received}</p>
      </div>
    );
  }
}
export default App;
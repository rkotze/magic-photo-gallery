import React, { Component } from 'react';
import Gallery from './gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Magic photo Gallery
        </p>

        <Gallery />
      </div>
    );
  }
}

export default App;

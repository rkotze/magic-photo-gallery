import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Photo({ src }) {
  return <img src={src} />;
}

function PhotoViewer({ title, children }){
  return (<div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Magic photo Gallery
        </p>

        <PhotoViewer title="My first photo">
          <Photo src="http://lorempixel.com/600/400/sports/1/" />
        </PhotoViewer>
      </div>
    );
  }
}

export default App;

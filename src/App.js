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

        <Gallery 
          photoList={
          [
            {
              photo: 'http://lorempixel.com/600/400/sports/1/',
              title: 'My first photo',
              thumbnail: 'http://lorempixel.com/160/80/sports/1/'
            },
            {
              photo: 'http://lorempixel.com/600/400/sports/2/',
              title: 'My second photo',
              thumbnail: 'http://lorempixel.com/160/80/sports/2/'
            }
          ]
        }
        selected={0} />
      </div>
    );
  }
}

export default App;

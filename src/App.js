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
              photo: 'http://lorempixel.com/600/400/abstract/2/',
              title: 'Abstract art ',
              thumbnail: 'http://lorempixel.com/160/80/abstract/2/'
            },
            {
              photo: 'http://lorempixel.com/600/400/sports/2/',
              title: 'Riding the wave',
              thumbnail: 'http://lorempixel.com/160/80/sports/2/'
            },
            {
              photo: 'http://lorempixel.com/600/400/food/4/',
              title: 'Sushi dinner',
              thumbnail: 'http://lorempixel.com/160/80/food/4/'
            },
            {
              photo: 'http://lorempixel.com/600/400/cats/1/',
              title: 'Cat photo',
              thumbnail: 'http://lorempixel.com/160/80/cats/1/'
            }
          ]
        } />
      </div>
    );
  }
}

export default App;

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
              photo: '/assets/main01.jpg',
              title: 'Abstract art ',
              thumbnail: '/assets/thumb01.jpg'
            },
            {
              photo: '/assets/main02.jpg',
              title: 'Riding the wave',
              thumbnail: '/assets/thumb02.jpg'
            },
            {
              photo: '/assets/main03.jpg',
              title: 'Sushi dinner',
              thumbnail: '/assets/thumb03.jpg'
            },
            {
              photo: '/assets/main04.jpg',
              title: 'Cat photo',
              thumbnail: '/assets/thumb04.jpg'
            }
          ]
        } />
      </div>
    );
  }
}

export default App;

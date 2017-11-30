import React, { Component } from 'react';
import Gallery from './gallery';
import { getPhotoList, getPhotosAction } from './get-photos-reducers';
import connect from './connect';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getPhotosAction());
  }

  render() {
    const { loading, photoList } = this.props;
    return (
      <div className="App">
        <p className="App-intro">
          Magic photo Gallery
        </p>

        <p>{loading}</p>

        <Gallery photoList={photoList} />
      </div>
    );
  }
}

export default connect({ 
  loading: 'starting', 
  photoList: [{
    photo: '/assets/main01.jpg',
    title: 'Abstract art ',
    thumbnail: '/assets/thumb01.jpg'
  }] 
}, getPhotoList)(App);

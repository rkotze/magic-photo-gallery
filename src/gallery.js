import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
  } from './gallery-components';
import { changePhoto } from './change-photo-handlers';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = changePhoto({
      selected: props.startPosition
    }, {});
    this.photoCount = props.photoList.length;
  }

  dispatch(action) {
    this.setState(prevState => changePhoto(prevState, action));
  }

  previous = () => {
    this.dispatch({ type: 'PREVIOUS', payload: {
      photoCount: this.photoCount
    }});
  }

  next = () => {
    this.dispatch({ type: 'NEXT', payload: {
      photoCount: this.photoCount
    }});
  }

  componentDidMount(){
    document.addEventListener('keydown', this.arrowKeyPress);
  }

  randomPhotoIndex = () => {
    this.dispatch({
      type: 'RANDOM',
      payload: {
        photoCount: this.photoCount
      }
    });
  }

  changePhoto = (photoIndex) => {
    return () => {
      this.dispatch({ 
        type: 'PHOTO_INDEX', 
        payload: {
          photoIndex: photoIndex
        }
      });
    };
  }

  arrowKeyPress = (e) => {
    const keyEvent = e || window.event,
    keyCode = keyEvent.keyCode,
    LEFT_KEY = 37,
    RIGHT_KEY = 39;
    if(keyCode === LEFT_KEY) this.previous();
    if(keyCode === RIGHT_KEY) this.next();
  }

  render() {
    const { selected } = this.state;
    const { photoList } = this.props;
    const { title, photo } = photoList[selected];
    return (
      <div className="gallery">
        <PhotoViewer title={title}>
          <Photo src={photo} alt={title} />
          <div>
            <Button onClick={this.previous}>
              &lt; Previous
            </Button>
            <Button onClick={this.randomPhotoIndex}>
              Random
            </Button>
            <Button onClick={this.next}>
              Next &gt;
            </Button>
          </div>
        </PhotoViewer>

        <ThumbNailViewer clickAction={this.changePhoto}>          
          {photoList}
        </ThumbNailViewer>
      </div>
    );
  }
}

Gallery.propTypes = {
  startPosition: PropTypes.number.isRequired,
  photoList: PropTypes.arrayOf(PropTypes.object).isRequired
};

Gallery.defaultProps = {
  startPosition: 0
};

export default Gallery;

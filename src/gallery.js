import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
} from './gallery-components';

import { changePhoto } from './change-photo-handlers';
import { nextPhoto, previousPhoto, randomPhoto, selectPhoto } from './change-photo-actions';
import connect from "./connect";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.photoCount = props.photoList.length;
  }

  previous = () => {
    this.props.dispatch(previousPhoto(this.photoCount));
  }

  next = () => {
    this.props.dispatch(nextPhoto(this.photoCount));
  }
  
  randomPhotoIndex = () => {
    this.props.dispatch(randomPhoto(this.photoCount));
  }

  componentDidMount(){
    document.addEventListener('keydown', this.arrowKeyPress);
  }

  changePhoto = (photoIndex) => {
    return () => {
      this.props.dispatch(selectPhoto(photoIndex));
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
    const { photoList, selected } = this.props;
    const { title, photo } = photoList[selected];
    return (
      <div className="gallery">
        <PhotoViewer title={title}>
          <Photo className="main-photo" src={photo} alt={title} />
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

        <ThumbNailViewer selected={selected} clickAction={this.changePhoto}>          
          {photoList}
        </ThumbNailViewer>
      </div>
    );
  }
}

Gallery.propTypes = {
  photoList: PropTypes.arrayOf(PropTypes.object).isRequired
};

Gallery.defaultProps = {
  selected: 0
};

const EnhancedGallery = connect({ selected: 0 }, changePhoto)(Gallery);

export {
  EnhancedGallery as default,
  Gallery
}

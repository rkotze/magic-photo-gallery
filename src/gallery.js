import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
  ThumbNail
  } from './gallery-components';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.startPosition
    };
  }

  changePhoto(photoIndex){
    return () => {
      this.setState({
        selected: this.handleEdges(photoIndex)
      });
    };
  }

  handleEdges(photoIndex){
    const photoListEnd = this.props.photoList.length - 1,
    photoListStart = 0;
    if(photoIndex > photoListEnd)
      return photoListStart;
    if(photoIndex < photoListStart)
      return photoListEnd;

    return photoIndex;
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
            <Button onClick={this.changePhoto(selected - 1)}>
              &lt; Previous
            </Button>
            <Button onClick={this.changePhoto(selected + 1)}>
              Next &gt;
            </Button>
          </div>
        </PhotoViewer>

        <ThumbNailViewer>          
          {photoList.map(
            ({ title, thumbnail }, i) => 
            <ThumbNail key={uuid()} title={title} src={thumbnail} onClick={this.changePhoto(i)} />
          )}
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

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
    this.photoListEnd = props.photoList.length - 1;
    this.photoListStart = 0;
  }

  photoChanger(photoIndex){
    this.setState({
      selected: photoIndex
    });
  }

  nextPhoto(){
    const nextSelect = this.state.selected + 1;

    if(nextSelect > this.photoListEnd)
      this.photoChanger(0);

    this.photoChanger(nextSelect);
  }


  previousPhoto(){
    const previousSelect = this.state.selected - 1;

    if(previousSelect < this.photoListStart)
      this.photoChanger(this.photoListEnd);

    this.photoChanger(previousSelect);
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
            <Button onClick={this.nextPhoto}>
              &lt; Previous
            </Button>
            <Button onClick={this.previousPhoto}>
              Next &gt;
            </Button>
          </div>
        </PhotoViewer>

        <ThumbNailViewer clickAction={this.photoChanger}>          
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

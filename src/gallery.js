import React, { Component } from 'react';
import uuid from 'uuid/v1';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
  ThumbNail
  } from "./gallery-components";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoList: props.photoList,
      selected: props.selected
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
    const { photoList, selected } = this.state;
    const { title, photo } = photoList[selected];
    return (
      <div className="gallery">
        <PhotoViewer title={title}>
          <Photo src={photo} alt={title} />
          <div>
            <Button direction="previous" onClick={this.changePhoto(selected - 1)}>
              &lt; Previous
            </Button>
            <Button direction="next" onClick={this.changePhoto(selected + 1)}>
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

export default Gallery;

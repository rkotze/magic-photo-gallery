import React, { Component } from 'react';
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

  render() {
    const { photoList, selected } = this.state;
    const { title, photo } = photoList[selected];
    return (
      <div className="gallery">
        <PhotoViewer title={title}>
          <Photo src={photo} alt={title} />
          <div>
            <Button direction="previous">
              &lt; Previous
            </Button>
            <Button direction="next">
              Next &gt;
            </Button>
          </div>
        </PhotoViewer>

        <ThumbNailViewer>          
          {photoList.map(
            ({ title, thumbnail }) => 
            <ThumbNail title={title} src={thumbnail} />
          )}
        </ThumbNailViewer>
      </div>
    );
  }
}

export default Gallery;

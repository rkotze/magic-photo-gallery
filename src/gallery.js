import React, { Component } from 'react';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
  ThumbNail
  } from "./gallery-components";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <PhotoViewer title="My first photo">
          <Photo src="http://lorempixel.com/600/400/sports/1/" alt="My First photo" />
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
          <ThumbNail title="My First photo" src="http://lorempixel.com/160/80/sports/1/ "/>
          <ThumbNail title="My Second photo" src="http://lorempixel.com/160/80/sports/2/ "/>
        </ThumbNailViewer>
      </div>
    );
  }
}

export default Gallery;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
  } from './gallery-components';

const changePhoto = (state, action) => {
  switch (action.type) {
    case 'INDEX':
      return { selected: action.selected };
    case 'NEXT':
      return { selected: state.selected + 1 };
    case 'PREVIOUS':
      return { selected: state.selected - 1 };
    default:
      return state;
  }
}
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = changePhoto({
      selected: props.startPosition
    }, {});
  }

  dispatch(action) {
    this.setState(prevState => changePhoto(prevState, action));
  }

  previous = () => {
    this.dispatch({ type: 'PREVIOUS' });
  }

  next = () => {
    this.dispatch({ type: 'NEXT' });
  }

  componentDidMount(){
    document.addEventListener('keydown', this.arrowKeyPress);
  }

  randomPhotoIndex(){
    const photoListLength = this.props.photoList.length;
    const newPhotoIndex = Math.floor(Math.random() * photoListLength)

    if(newPhotoIndex === this.state.selected)
      return this.randomPhotoIndex();

    return newPhotoIndex;
  }

  changePhoto = (photoIndex) => {
    return () => {
      this.setState({
        selected: this.handleEdges(photoIndex)
      });
    };
  }

  arrowKeyPress = (e) => {
    const { selected } = this.state;
    const keyEvent = e || window.event,
    keyCode = keyEvent.keyCode,
    LEFT_KEY = 37,
    RIGHT_KEY = 39;
    if(keyCode === LEFT_KEY) this.changePhoto(selected - 1)();
    if(keyCode === RIGHT_KEY) this.changePhoto(selected + 1)();
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
            <Button onClick={this.previous}>
              &lt; Previous
            </Button>
            <Button onClick={this.changePhoto(this.randomPhotoIndex())}>
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

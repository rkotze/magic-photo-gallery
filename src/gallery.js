import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  PhotoViewer,
  Photo,
  Button,
  ThumbNailViewer,
  } from './gallery-components';
import { changePhoto } from './change-photo-handlers';

function connect(defaultState, dispatchAction) {
  return function(MyComponent){

    function mapPropsToState(props = {}, state = {}) {
      const stateKeys = Object.keys(state);
      const reducer = (newState, keyName) => {
        if(keyName in props){
          newState[keyName] = props[keyName];
        }
        return newState;
      };

      return stateKeys.reduce(reducer, state);
    }

    return class Connect extends Component {
      constructor(props) {
        super(props);
        this.state = dispatchAction(
          mapPropsToState(props, defaultState),
        {});
      }
    
      dispatch = (action) => {
        this.setState(prevState => dispatchAction(prevState, action));
      }

      render(){
        return (<MyComponent {...this.props} {...this.state} dispatch={this.dispatch} />);
      }
    }
  }
}

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.photoCount = props.photoList.length;
  }

  previous = () => {
    this.props.dispatch({ type: 'PREVIOUS', payload: {
      photoCount: this.photoCount
    }});
  }

  next = () => {
    this.props.dispatch({ type: 'NEXT', payload: {
      photoCount: this.photoCount
    }});
  }

  componentDidMount(){
    document.addEventListener('keydown', this.arrowKeyPress);
  }

  randomPhotoIndex = () => {
    this.props.dispatch({
      type: 'RANDOM',
      payload: {
        photoCount: this.photoCount
      }
    });
  }

  changePhoto = (photoIndex) => {
    return () => {
      this.props.dispatch({ 
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

export default connect({ selected: 0 }, changePhoto)(Gallery);

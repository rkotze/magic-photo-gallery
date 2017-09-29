import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

function Photo({ src, alt }) {
  return <img src={src} alt={alt} />;
}

function PhotoViewer({ title, children }){
  return (<div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>);
}

function ThumbNailViewer({ children }){
  return (<div>
    <ul>{Children.map(children, function(thumbNail){
      return (<li>{thumbNail}</li>);
    })}
    </ul>
  </div>);
}

class ThumbNail extends Component {

  render() {
    const { title, src } = this.props;
    return (
      <Photo src={src} alt={title} />
    );
  }
}

class Button extends Component {

  render() {
    const { children } = this.props;
    return (
      <button>{
        children
      }</button>
    );
  }
}

Button.propTypes = {
  direction: PropTypes.oneOf(['next', 'previous']).isRequired,
  children: PropTypes.string.isRequired
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Magic photo Gallery
        </p>

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

export default App;

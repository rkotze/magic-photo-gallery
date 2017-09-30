import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export function Photo({ src, alt }) {
  return <img src={src} alt={alt} />;
}

export function PhotoViewer({ title, children }){
  return (<div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>);
}

export function ThumbNailViewer({ children }){
  return (<div>
    <ul>{Children.map(children, function(thumbNail){
      return (<li>{thumbNail}</li>);
    })}
    </ul>
  </div>);
}

export class ThumbNail extends Component {

  render() {
    const { title, src } = this.props;
    return (
      <Photo src={src} alt={title} />
    );
  }
}

export class Button extends Component {

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
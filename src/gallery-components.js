import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export function Photo({ src, alt, ...otherProps }) {
  return <img src={src} alt={alt} {...otherProps} />;
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
    const { title, src, ...otherProps } = this.props;
    return (
      <Photo src={src} alt={title} {...otherProps} />
    );
  }
}

export class Button extends Component {

  render() {
    const { children, ...otherProps} = this.props;
    return (
      <button {...otherProps}>{
        children
      }</button>
    );
  }
}

Button.propTypes = {
  direction: PropTypes.oneOf(['next', 'previous']).isRequired,
  children: PropTypes.string.isRequired
};
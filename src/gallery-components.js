import React, { Children } from 'react';
import PropTypes from 'prop-types';

export function Photo({ src, alt, ...otherProps }) {
  return <img src={src} alt={alt} {...otherProps} />;
}

Photo.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export function PhotoViewer({ title, children }){
  return (<div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>);
}

PhotoViewer.propTypes = {
	title: PropTypes.string.isRequired
};

export function ThumbNailViewer({ children }){
  return (<div>
    <ul>{Children.map(children, function(thumbNail){
      return (<li>{thumbNail}</li>);
    })}
    </ul>
  </div>);
}

export function ThumbNail({ title, src, ...otherProps }) {
  return (
    <Photo src={src} alt={title} {...otherProps} />
  );
}

ThumbNail.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export function Button({ children, ...otherProps}) {
  return (
    <button {...otherProps}>{
      children
    }</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};
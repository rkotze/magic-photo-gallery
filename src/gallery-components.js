import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import './gallery-photo-list.css';

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

export class ThumbNailViewer extends Component {
	shouldComponentUpdate(nextProps) {
		return isEqual(this.props, nextProps);
	}

	render() {
    // Try: children as a list
		const { children, clickAction } = this.props;

	  return (<div className="thumbnail-list">
	    <ul>{Children.map(children, function({ title, src }, i){
	      return (<li>
          <Photo 
          src={src} 
          alt={title} 
          onClick={(photoIndex) => {
            clickAction(photoIndex); // this won't work :( will need to find another way to pass the click handler.
          }(i)
          } /></li>);
	    })}
	    </ul>
	  </div>);
	}
}

ThumbNailViewer.propTypes = {
  children: PropTypes.isArray.isRequired
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
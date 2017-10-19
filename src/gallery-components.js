import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
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

export function ThumbNailViewer({ children, selected, clickAction }) {
	  return (
		<div className="thumbnail-list">
			<ul>
				{children.map(({ title, thumbnail }, i) => {
					return (
					<li key={uuid()}>
						<Photo className={selected === i ? 'selected' : null} src={thumbnail} alt={title} onClick={clickAction(i)} />
					</li>);
				})}
	    </ul>
	  </div>);
}

ThumbNailViewer.propTypes = {
	children: PropTypes.array.isRequired,
	selected: PropTypes.number.isRequired
};

function ThumbNail({ title, src, ...otherProps }) {
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
    <button className="base-button" {...otherProps}>{
      children
    }</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired
};
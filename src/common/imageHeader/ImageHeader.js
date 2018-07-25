import React from 'react';
import PropTypes from 'prop-types';
import './imageHeader.style.scss';

const ImageHeader = ({
  text,
  smallImage,
  largeImage,
}) => (
  <header className="c-image-header">
    <picture>
      <source
        media="(min-width:400px)"
        srcSet={largeImage}
      />
      <img
        className="c-image-header__image"
        src={smallImage}
      />
    </picture>
    { text && <h2 className="h-main-padding c-image-header__text">{text}</h2> }
  </header>
);

ImageHeader.propTypes = {
  text: PropTypes.string,
  smallImage: PropTypes.string,
  largeImage: PropTypes.string,
};

export default ImageHeader;

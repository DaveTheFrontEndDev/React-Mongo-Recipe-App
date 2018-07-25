import React from 'react';
import PropTypes from 'prop-types';
import './cards.style.scss';

const defaultImage = {
  smallImage: '/resources/recipes/no-image-small.png',
  largeImage: '/resources/recipes/no-image-large.png',
};

const Card = ({
  className,
  title,
  summary,
  largeImage,
  smallImage,
  onClick,
}) => (
  <figure
    className={`l-column__item ${className} c-cards__card`}
    onClick={onClick}
  >
    <picture>
      <source
        media="(max-width:800px)"
        srcSet={largeImage || defaultImage.largeImage}
      />
      <img
        className="c-cards__img"
        src={smallImage || defaultImage.smallImage}
      />
    </picture>
    <figcaption className="c-cards__caption">
      <h3 className="c-cards__title">{title}</h3>
      <p className="c-cards__summary" dangerouslySetInnerHTML={{ __html: summary}} />
    </figcaption>
  </figure>
);

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  largeImage: PropTypes.string,
  smallImage: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: 'No Title',
  summary: '...',
  smallImage: defaultImage.smallImage,
  largeImage: defaultImage.largeImage,
};

export default Card;

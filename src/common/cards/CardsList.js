import React from 'react';
import PropTypes from 'prop-types';
import './cards.style.scss';

const CardsList = ({
  children,
  className,
}) => (
  <section className={`l-column ${className} c-cards`}>
    {children}
  </section>
);

CardsList.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

CardsList.defaultProps = {
  className: '-small-count-1 -medium-count-2 -large-count-3 -huge-count-4',
};

export default CardsList;

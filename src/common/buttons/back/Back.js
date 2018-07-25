import React from 'react';
import PropTypes from 'prop-types';
import '../button.style.scss';
import './back.style.scss';

const Back = ({
  onClick,
  className,
}) => (
  <button
    className={`${className} c-button`}
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path fill={'white'} d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  </button>
);

Back.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Back;
